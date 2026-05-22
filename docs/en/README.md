# MinAutomate JavaScript Node — API Reference (English)

> Functions available inside the **JavaScript node** of MinAutomate workflow builder.
> Auto-generated from TypeScript definition files in [`../../sources/`](../../sources/).

## Available Namespaces

| Namespace | Description | File | Count |
|-----------|-------------|------|-------|
| Common | Shared helpers across all platforms | [common.md](./common.md) | 42 |
| Android `d.*` | Device automation via ADB | [android.md](./android.md) | 82 |
| Browser `c.*` | Browser automation via WebDriver | [browser.md](./browser.md) | 81 |

## Workflow Context Variables

| Variable | Type | Description |
|----------|------|-------------|
| `_variables` | `object` | Workflow variables (read/write). Persists across nodes in the same run. |
| `_account` | `object` | Current account fields (e.g. `_account.email`, `_account.uid`). |
| `_params` | `object` | Node parameters (custom nodes only). |
| `_result` | `object` | Return value `{ success: boolean, message: string }`. Set to signal failure. |

## Platform Detection

`_variables.PLATFORM` is one of `"android"`, `"browser"`, or `"common"`.

- **Android workflows** also expose `_variables.DEVICE_ID`.
- **Browser workflows** also expose `_variables.PORT` and `_variables.SESSION_ID`.

## Quick Example

```javascript
Log("Workflow started on " + _variables.PLATFORM);

if (_variables.PLATFORM === "android") {
  d.Tap("//Button[@text='OK']");
  Delay(1);
} else if (_variables.PLATFORM === "browser") {
  c.GotoUrl("https://example.com");
  c.Click("button.submit");
}

_result.success = true;
_result.message = "Done";
```

## Other Languages

- [Tiếng Việt](../vi/README.md)
- [ภาษาไทย](../th/README.md)
