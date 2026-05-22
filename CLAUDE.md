# MINAutomate-Node-Javascript — Public API Docs

Public docs repo cho **JavaScript node** của MinAutomate workflow builder. Host trên GitHub: https://github.com/tungminsoft/MINAutomate-Node-Javascript

> Workspace context: [../CLAUDE.md](../CLAUDE.md). Source of code chính: [../MinAutomate/CLAUDE.md](../MinAutomate/CLAUDE.md).

## Purpose

User của MinAutomate viết JavaScript trong workflow node có thể tra danh sách function khả dụng + cách dùng tại URL public này. Repo **không chứa logic runtime** — chỉ là docs + script gen.

## Stack

| Layer | Tool | Vai trò |
|---|---|---|
| Generator | Node.js + `typescript` package | Parse `.d.ts` AST → render markdown |
| Translation | Plain JSON dict | i18n cho vi/th |
| Output | Plain markdown | Render bởi GitHub trực tiếp |

**Yêu cầu**: Node ≥18, npm. KHÔNG cần Go, KHÔNG cần Wails CLI.

## Build & Run

```bash
cd scripts
npm install                   # first time only — cài typescript
node generate-docs.js         # regenerate 9 markdown files (en/vi/th × common/android/browser)
```

Script log số function parse được per file per ngôn ngữ.

## Architecture

```
[sources/*.d.ts]  ←──── snapshot manually from minsoftware/backend/{common,device,webdriver}/api_types.d.ts
       │
       │ ts.createSourceFile → AST → JSDoc extract
       ▼
[scripts/generate-docs.js]  +  [translations/{vi,th}.json]
       │
       │ render template
       ▼
[docs/{en,vi,th}/{common,android,browser}.md]  →  GitHub public render
```

**Key insight**: 3 file `.d.ts` trong `sources/` là **snapshot** từ upstream MinAutomate. Khi upstream `.d.ts` đổi (thêm/xóa/sửa function), phải re-sync thủ công + re-translate phần thay đổi.

## Module Index

| Path | Vai trò |
|---|---|
| [README.md](./README.md) | Landing page — quick start + 3 link ngôn ngữ + maintenance guide |
| [scripts/generate-docs.js](./scripts/generate-docs.js) | Main generator — parse .d.ts → markdown (~245 LOC) |
| [scripts/package.json](./scripts/package.json) | Dependency: `typescript@^5.4.0` |
| [sources/common.d.ts](./sources/common.d.ts) | Snapshot — common globals (Log, Delay, HttpRequest, Random*, JsonGet*, File I/O, Captcha, RunWithLock...) |
| [sources/device.d.ts](./sources/device.d.ts) | Snapshot — Android `d.*` (tap, swipe, screenshot, app control, WiFi, proxy) |
| [sources/webdriver.d.ts](./sources/webdriver.d.ts) | Snapshot — Browser `c.*` (navigation, click, scroll, cookies, anti-bot human-like) |
| [translations/vi.json](./translations/vi.json) | Bản dịch tiếng Việt — flat dict `{categories, common, android, browser}` |
| [translations/th.json](./translations/th.json) | Bản dịch tiếng Thái — cùng structure |
| [docs/en/](./docs/en/) | Auto-generated EN markdown (3 namespace + README) |
| [docs/vi/](./docs/vi/) | Auto-generated VN markdown |
| [docs/th/](./docs/th/) | Auto-generated TH markdown |

## Source of Truth Workflow

**KHÔNG sửa trực tiếp file `.md` trong `docs/` — chúng auto-gen, sẽ bị overwrite.**

Khi cần update docs:

### 1. Sync upstream `.d.ts` (nếu MinAutomate đổi)

```bash
# Copy 3 file mới nhất từ minsoftware
cp d:/SourceCode/Golang/minsoftware/backend/common/api_types.d.ts sources/common.d.ts
cp d:/SourceCode/Golang/minsoftware/backend/device/api_types.d.ts sources/device.d.ts
cp d:/SourceCode/Golang/minsoftware/backend/webdriver/api_types.d.ts sources/webdriver.d.ts
```

### 2. Regen EN docs

```bash
cd scripts && node generate-docs.js
```

EN docs auto-update từ JSDoc trong `.d.ts`. VN/TH cũng được regen — nhưng chỉ key có trong `translations/{vi,th}.json` được dịch; **key thiếu fallback về EN**.

### 3. Update translations cho function mới/đổi

Mở `translations/vi.json` và `translations/th.json`. Mỗi function 1 entry:

```json
"FunctionName": {
  "desc": "Mô tả ngắn function",
  "params": { "paramName": "Mô tả param" },
  "returns": "Mô tả giá trị trả về"
}
```

Re-run `node generate-docs.js` sau khi update JSON.

### 4. Verify + commit + push

```bash
git status                    # KHÔNG được thấy node_modules/
git add docs/ sources/ translations/ scripts/
git commit -m "docs: sync API reference with upstream"
git push origin main
```

## Conventions

- **File naming**:
  - Script `.js`: kebab-case (vd `generate-docs.js`)
  - Markdown output: lowercase single word (vd `common.md`, `android.md`)
  - Translation JSON: lowercase 2-char lang code (`vi.json`, `th.json`)
- **Comment**: heading EN, body có thể VN (theo convention workspace)
- **Markdown output không sửa tay** — sửa template trong `generate-docs.js` hoặc bản dịch trong `translations/*.json`
- **DO NOT** commit `node_modules/`, `plans/` (cả hai đã ignored)
- **DO NOT** xóa file `sources/*.d.ts` — đây là input của generator

## Critical Sync Notes (đừng quên)

- **Plans / dev artifacts đã ignored**: folder `plans/` ở repo này KHÔNG push lên GitHub (xem `.gitignore`). Plans dùng cho dev local thôi.
- **Upstream sync 1-chiều**: chỉ copy `.d.ts` từ minsoftware → đây, không bao giờ ngược lại.
- **i18n fallback**: thiếu key trong `translations/*.json` thì user thấy text EN ở chỗ đó. Không crash, không warning trong output (chỉ log warning ở console khi gen).
- **Category title-case**: banner `// ==== JS/Cookies ====` trong .d.ts được title-cased → `Js/Cookies`. Hiện chấp nhận; nếu cần preserve acronym thì sửa `titleCase()` trong generator.
- **Script size**: `generate-docs.js` hiện ~245 LOC, hơi vượt ngưỡng 200 LOC modularization của workspace nhưng single-purpose cohesive — KHÔNG cần tách trừ khi thêm logic mới.

## Plans

Local plans tại [./plans/](./plans/) (gitignored). Plan implementation cho repo này:
- [260523-0045-minautomate-js-node-docs/](./plans/260523-0045-minautomate-js-node-docs/) — Initial setup, đã complete 6/6 phases.

## Related External Paths

| Path | Vai trò |
|---|---|
| `d:/SourceCode/Golang/minsoftware/backend/common/api_types.d.ts` | Upstream source — common globals |
| `d:/SourceCode/Golang/minsoftware/backend/device/api_types.d.ts` | Upstream source — Android API |
| `d:/SourceCode/Golang/minsoftware/backend/webdriver/api_types.d.ts` | Upstream source — Browser API |
| `../MinAutomate/services/workflow_service.go` | Code thực thi JS qua goja runtime (xem hàm `executeJsScript`) |
| `../MinAutomate/frontend/src/features/app-editor/workflow/nodes/options/JavascriptOption.jsx` | UI Monaco editor cho JS node |
