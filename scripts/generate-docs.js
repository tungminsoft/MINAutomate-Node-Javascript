#!/usr/bin/env node
// Parse api_types.d.ts files in ../sources/ and emit markdown to ../docs/{en,vi,th}/.
// Usage: node generate-docs.js
//
// Supports two .d.ts shapes:
//   1. Top-level `declare function Name(params): ret` (common.d.ts)
//   2. Object literal `declare const d: { Method(params): ret; ... }` (device.d.ts, webdriver.d.ts)
//
// Functions are grouped under category banners shaped like `// ==== Category Name ====`.
//
// Localization: ../translations/{lang}.json carries translated description strings.
// English is rendered directly from JSDoc; other languages fall back to English if a key is missing.

const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const ROOT = path.resolve(__dirname, "..");
const SOURCES_DIR = path.join(ROOT, "sources");
const DOCS_DIR = path.join(ROOT, "docs");
const TRANSLATIONS_DIR = path.join(ROOT, "translations");

const NAMESPACES = [
  { key: "common",  src: "common.d.ts",    out: "common.md",  prefix: "" },
  { key: "android", src: "device.d.ts",    out: "android.md", prefix: "d." },
  { key: "browser", src: "webdriver.d.ts", out: "browser.md", prefix: "c." },
];

const LANGS = ["en", "vi", "th"];

// Static UI labels and namespace meta per language. English values stay as the rendering default.
const I18N_STATIC = {
  en: {
    totalFunctions: "Total functions",
    toc: "Table of Contents",
    signature: "Signature",
    parameters: "Parameters",
    returns: "Returns",
    optional: "optional",
    nameCol: "Name", typeCol: "Type", descCol: "Description",
    namespaces: {
      common:  { title: "Common Functions",     intro: "Helpers available in every JavaScript node, regardless of platform." },
      android: { title: "Android — `d.*`",      intro: "Device automation API. Available when the workflow runs against an Android device via ADB." },
      browser: { title: "Browser — `c.*`",      intro: "Browser automation API. Available when the workflow runs against a Chrome browser via WebDriver." },
    },
  },
  vi: {
    totalFunctions: "Tổng số hàm",
    toc: "Mục lục",
    signature: "Cú pháp",
    parameters: "Tham số",
    returns: "Trả về",
    optional: "tùy chọn",
    nameCol: "Tên", typeCol: "Kiểu", descCol: "Mô tả",
    namespaces: {
      common:  { title: "Hàm chung",                intro: "Các hàm dùng được trong mọi JavaScript node, không phụ thuộc platform." },
      android: { title: "Android — `d.*`",          intro: "API điều khiển thiết bị. Khả dụng khi workflow chạy trên thiết bị Android qua ADB." },
      browser: { title: "Trình duyệt — `c.*`",      intro: "API điều khiển trình duyệt. Khả dụng khi workflow chạy trên Chrome qua WebDriver." },
    },
  },
  th: {
    totalFunctions: "จำนวนฟังก์ชันทั้งหมด",
    toc: "สารบัญ",
    signature: "ไวยากรณ์",
    parameters: "พารามิเตอร์",
    returns: "คืนค่า",
    optional: "ไม่บังคับ",
    nameCol: "ชื่อ", typeCol: "ประเภท", descCol: "คำอธิบาย",
    namespaces: {
      common:  { title: "ฟังก์ชันทั่วไป",                  intro: "ฟังก์ชันช่วยที่ใช้ได้ในทุก JavaScript node โดยไม่ขึ้นกับแพลตฟอร์ม" },
      android: { title: "Android — `d.*`",               intro: "API ควบคุมอุปกรณ์ ใช้ได้เมื่อ workflow ทำงานบนอุปกรณ์ Android ผ่าน ADB" },
      browser: { title: "เบราว์เซอร์ — `c.*`",            intro: "API ควบคุมเบราว์เซอร์ ใช้ได้เมื่อ workflow ทำงานบน Chrome ผ่าน WebDriver" },
    },
  },
};

const CATEGORY_BANNER = /^\s*\/\/\s*=+\s*(.+?)\s*=+\s*$/;

function readSource(srcFile) {
  return fs.readFileSync(path.join(SOURCES_DIR, srcFile), "utf8");
}

function loadTranslations(lang) {
  if (lang === "en") return {};
  const p = path.join(TRANSLATIONS_DIR, `${lang}.json`);
  if (!fs.existsSync(p)) {
    console.warn(`[warn] missing translations/${lang}.json — falling back to English`);
    return {};
  }
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function buildCategoryMap(text) {
  const lines = text.split(/\r?\n/);
  const banners = [];
  lines.forEach((line, idx) => {
    const m = line.match(CATEGORY_BANNER);
    if (m) banners.push({ line: idx, name: titleCase(m[1]) });
  });
  return (lineNum) => {
    let current = "General";
    for (const b of banners) {
      if (b.line <= lineNum) current = b.name;
      else break;
    }
    return current;
  };
}

function titleCase(raw) {
  return raw.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractJsDoc(node) {
  const jsDocs = node.jsDoc || [];
  let description = "";
  const paramDescs = {};
  let returnsDesc = "";
  for (const doc of jsDocs) {
    if (typeof doc.comment === "string" && doc.comment.trim()) {
      description = doc.comment.trim();
    } else if (Array.isArray(doc.comment)) {
      description = doc.comment.map((c) => c.text || "").join("").trim();
    }
    for (const tag of doc.tags || []) {
      const tagName = tag.tagName && tag.tagName.text;
      const tagComment = typeof tag.comment === "string"
        ? tag.comment
        : Array.isArray(tag.comment) ? tag.comment.map((c) => c.text || "").join("") : "";
      if (tagName === "param" && tag.name) {
        paramDescs[tag.name.text] = tagComment.replace(/^[-\s]+/, "").trim();
      } else if (tagName === "returns" || tagName === "return") {
        returnsDesc = tagComment.replace(/^[-\s]+/, "").trim();
      }
    }
  }
  return { description, paramDescs, returnsDesc };
}

function buildFunction(node, sourceFile, getCategory) {
  if (!node.name) return null;
  const name = node.name.getText(sourceFile);
  const params = (node.parameters || []).map((p) => ({
    name: p.name.getText(sourceFile),
    type: p.type ? p.type.getText(sourceFile) : "any",
    optional: !!p.questionToken,
  }));
  const returnType = node.type ? node.type.getText(sourceFile) : "void";
  const { description, paramDescs, returnsDesc } = extractJsDoc(node);
  const { line } = sourceFile.getLineAndCharacterOfPosition(node.getStart(sourceFile));
  return { name, params, returnType, description, paramDescs, returnsDesc, category: getCategory(line) };
}

function parseFile(srcFile) {
  const text = readSource(srcFile);
  const sourceFile = ts.createSourceFile(srcFile, text, ts.ScriptTarget.Latest, true);
  const getCategory = buildCategoryMap(text);
  const functions = [];
  function visit(node) {
    if (ts.isFunctionDeclaration(node) && node.name) {
      const fn = buildFunction(node, sourceFile, getCategory);
      if (fn) functions.push(fn);
    } else if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (decl.type && ts.isTypeLiteralNode(decl.type)) {
          for (const member of decl.type.members) {
            if (ts.isMethodSignature(member)) {
              const fn = buildFunction(member, sourceFile, getCategory);
              if (fn) functions.push(fn);
            }
          }
        }
      }
    }
  }
  ts.forEachChild(sourceFile, visit);
  return functions;
}

function localize(fn, translations, ns, labels) {
  // translations shape: { categories: { "Interact Functions": "Hàm Tương Tác", ... },
  //                       <namespace>: { <funcName>: { desc, params: { paramName: text }, returns } } }
  const fnEntry = (translations[ns] || {})[fn.name] || {};
  const description = fnEntry.desc || fn.description;
  const paramDescs = {};
  for (const p of fn.params) {
    paramDescs[p.name] = (fnEntry.params || {})[p.name] || fn.paramDescs[p.name] || "";
  }
  const returnsDesc = fnEntry.returns || fn.returnsDesc;
  const category = (translations.categories || {})[fn.category] || fn.category;
  return { ...fn, description, paramDescs, returnsDesc, category };
}

function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderSignature(fn, prefix) {
  const paramStr = fn.params.map((p) => `${p.name}${p.optional ? "?" : ""}: ${p.type}`).join(", ");
  return `${prefix}${fn.name}(${paramStr}): ${fn.returnType}`;
}

function renderFunction(fn, prefix, labels) {
  const lines = [];
  lines.push(`### ${prefix}${fn.name}`);
  lines.push("");
  if (fn.description) {
    lines.push(fn.description);
    lines.push("");
  }
  lines.push(`**${labels.signature}**`);
  lines.push("");
  lines.push("```typescript");
  lines.push(renderSignature(fn, prefix));
  lines.push("```");
  lines.push("");
  if (fn.params.length > 0) {
    lines.push(`**${labels.parameters}**`);
    lines.push("");
    lines.push(`| ${labels.nameCol} | ${labels.typeCol} | ${labels.descCol} |`);
    lines.push("|------|------|-------------|");
    for (const p of fn.params) {
      const desc = fn.paramDescs[p.name] || "";
      const typeStr = p.optional ? `${p.type} *(${labels.optional})*` : p.type;
      lines.push(`| \`${p.name}\` | \`${typeStr}\` | ${desc} |`);
    }
    lines.push("");
  }
  if (fn.returnType && fn.returnType !== "void") {
    lines.push(`**${labels.returns}** \`${fn.returnType}\`${fn.returnsDesc ? ` — ${fn.returnsDesc}` : ""}`);
    lines.push("");
  }
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

function renderFile(ns, functions, langLabels, translations) {
  const localized = functions.map((f) => localize(f, translations, ns.key, langLabels));

  // Group by localized category, preserving first-seen order.
  const order = [];
  const groups = new Map();
  for (const fn of localized) {
    if (!groups.has(fn.category)) {
      groups.set(fn.category, []);
      order.push(fn.category);
    }
    groups.get(fn.category).push(fn);
  }

  const nsMeta = langLabels.namespaces[ns.key];
  const lines = [];
  lines.push(`# ${nsMeta.title}`);
  lines.push("");
  lines.push(`> ${nsMeta.intro}`);
  lines.push("");
  lines.push(`**${langLabels.totalFunctions}:** ${functions.length}`);
  lines.push("");
  lines.push(`## ${langLabels.toc}`);
  lines.push("");
  for (const cat of order) {
    lines.push(`- **${cat}**`);
    for (const fn of groups.get(cat)) {
      lines.push(`  - [${ns.prefix}${fn.name}](#${slug(ns.prefix + fn.name)})`);
    }
  }
  lines.push("");
  lines.push("---");
  lines.push("");
  for (const cat of order) {
    lines.push(`## ${cat}`);
    lines.push("");
    for (const fn of groups.get(cat)) {
      lines.push(renderFunction(fn, ns.prefix, langLabels));
    }
  }
  return lines.join("\n");
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function main() {
  // Parse each .d.ts once; render per language.
  const parsed = {};
  for (const ns of NAMESPACES) parsed[ns.key] = parseFile(ns.src);

  for (const lang of LANGS) {
    const labels = I18N_STATIC[lang];
    const translations = loadTranslations(lang);
    const outDir = path.join(DOCS_DIR, lang);
    ensureDir(outDir);
    for (const ns of NAMESPACES) {
      const md = renderFile(ns, parsed[ns.key], labels, translations);
      const outPath = path.join(outDir, ns.out);
      fs.writeFileSync(outPath, md, { encoding: "utf8" });
      console.log(`[${lang}] ${ns.src} → ${path.relative(ROOT, outPath)} (${parsed[ns.key].length} fns)`);
    }
  }
}

main();
