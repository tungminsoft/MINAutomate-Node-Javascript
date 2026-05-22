# MinAutomate JavaScript Node — API Reference

Public docs for functions injected into the **JavaScript node** of [MinAutomate](https://github.com/tungminsoft/MinAutomate) workflow builder.

## Languages

- 🇬🇧 [English](./docs/en/README.md)
- 🇻🇳 [Tiếng Việt](./docs/vi/README.md)
- 🇹🇭 [ภาษาไทย](./docs/th/README.md)

## Quick Start

Inside any JavaScript node, the following globals are available:

```javascript
// Always available
Log("Hello, World!");
Delay(1);
const otp = GetTotp("MYSECRET");

// Android workflow
d.Tap("//Button[@text='OK']");
d.Swipe(500, 1000, 500, 500);

// Browser workflow
c.GotoUrl("https://example.com");
c.Click("button.submit");
c.HumanClick("a#login");        // Human-like, anti-bot
```

## Available APIs

| Namespace | Description | Function count |
|-----------|-------------|----------------|
| Common (root)  | Shared helpers — logging, delay, HTTP, random, regex, file I/O, JSON, captcha | 42 |
| `d.*` Android  | Device automation: tap, swipe, screenshot, app control, WiFi, proxy           | 82 |
| `c.*` Browser  | Browser automation: navigation, click, scroll, cookies, anti-bot human-like  | 81 |

**Total: ~205 functions** across 3 namespaces.

## Source of Truth

Docs are auto-generated from TypeScript definition files in [`sources/`](./sources/):

- `sources/common.d.ts` — Common globals
- `sources/device.d.ts` — Android `d.*` namespace
- `sources/webdriver.d.ts` — Browser `c.*` namespace

You can also download these `.d.ts` files to drop into your own TypeScript project for IDE autocomplete.

## Regenerating Docs (Maintainers)

```bash
cd scripts
npm install            # first time only
node generate-docs.js  # regenerates docs/{en,vi,th}/*.md from sources/
```

Translation strings live in [`translations/vi.json`](./translations/vi.json) and [`translations/th.json`](./translations/th.json).

When a function in the upstream `.d.ts` changes:

1. Sync `.d.ts` from `minsoftware/backend/{common,device,webdriver}/api_types.d.ts` → this repo's `sources/`.
2. Re-run `node generate-docs.js` (regenerates English).
3. Update the matching entry in `translations/vi.json` and `translations/th.json`.
4. Re-run `node generate-docs.js`.
5. Commit + push.

## License

Docs content is auto-generated from upstream MinAutomate source. See the upstream project for licensing.
