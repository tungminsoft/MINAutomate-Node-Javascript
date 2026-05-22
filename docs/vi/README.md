# MinAutomate JavaScript Node — Tài liệu API (Tiếng Việt)

> Danh sách các hàm khả dụng bên trong **JavaScript node** của MinAutomate workflow builder.
> Auto-generated từ các file TypeScript definition trong [`../../sources/`](../../sources/).

## Namespace khả dụng

| Namespace | Mô tả | File | Số hàm |
|-----------|-------|------|--------|
| Common | Hàm chung dùng được trên mọi platform | [common.md](./common.md) | 42 |
| Android `d.*` | Điều khiển thiết bị qua ADB | [android.md](./android.md) | 82 |
| Browser `c.*` | Điều khiển trình duyệt qua WebDriver | [browser.md](./browser.md) | 81 |

## Biến context workflow

| Biến | Kiểu | Mô tả |
|------|------|-------|
| `_variables` | `object` | Biến workflow (đọc/ghi). Tồn tại xuyên suốt các node trong cùng 1 lần chạy. |
| `_account` | `object` | Field của account hiện tại (vd: `_account.email`, `_account.uid`). |
| `_params` | `object` | Tham số của node (chỉ dành cho custom node). |
| `_result` | `object` | Giá trị trả về `{ success: boolean, message: string }`. Set để báo fail. |

## Nhận biết platform

`_variables.PLATFORM` là một trong `"android"`, `"browser"`, hoặc `"common"`.

- **Workflow Android** có thêm `_variables.DEVICE_ID`.
- **Workflow Browser** có thêm `_variables.PORT` và `_variables.SESSION_ID`.

## Ví dụ nhanh

```javascript
Log("Workflow bắt đầu trên platform " + _variables.PLATFORM);

if (_variables.PLATFORM === "android") {
  d.Tap("//Button[@text='OK']");
  Delay(1);
} else if (_variables.PLATFORM === "browser") {
  c.GotoUrl("https://example.com");
  c.Click("button.submit");
}

_result.success = true;
_result.message = "Xong";
```

## Ngôn ngữ khác

- [English](../en/README.md)
- [ภาษาไทย](../th/README.md)

## Lưu ý

Bản dịch được sync thủ công với .d.ts gốc. Nếu phát hiện lệch, kiểm tra bản [English](../en/README.md) làm chuẩn.
