# MinAutomate JavaScript Node — เอกสาร API (ภาษาไทย)

> รายการฟังก์ชันที่ใช้ได้ภายใน **JavaScript node** ของ MinAutomate workflow builder
> สร้างอัตโนมัติจากไฟล์ TypeScript definition ใน [`../../sources/`](../../sources/)

## Namespace ที่มี

| Namespace | คำอธิบาย | ไฟล์ | จำนวนฟังก์ชัน |
|-----------|----------|------|---------------|
| Common | ฟังก์ชันที่ใช้ได้ทุกแพลตฟอร์ม | [common.md](./common.md) | 42 |
| Android `d.*` | ควบคุมอุปกรณ์ผ่าน ADB | [android.md](./android.md) | 82 |
| Browser `c.*` | ควบคุมเบราว์เซอร์ผ่าน WebDriver | [browser.md](./browser.md) | 81 |

## ตัวแปร Context ของ Workflow

| ตัวแปร | ประเภท | คำอธิบาย |
|--------|--------|----------|
| `_variables` | `object` | ตัวแปร workflow (อ่าน/เขียน) คงอยู่ตลอด node ในรอบเดียวกัน |
| `_account` | `object` | ฟิลด์ของ account ปัจจุบัน (เช่น `_account.email`, `_account.uid`) |
| `_params` | `object` | พารามิเตอร์ของ node (เฉพาะ custom node) |
| `_result` | `object` | ค่าที่คืน `{ success: boolean, message: string }` กำหนดเพื่อรายงานความล้มเหลว |

## การตรวจจับแพลตฟอร์ม

`_variables.PLATFORM` มีค่าเป็นหนึ่งใน `"android"`, `"browser"`, หรือ `"common"`

- **Android workflow** มีตัวแปรเพิ่ม `_variables.DEVICE_ID`
- **Browser workflow** มีตัวแปรเพิ่ม `_variables.PORT` และ `_variables.SESSION_ID`

## ตัวอย่างเริ่มต้น

```javascript
Log("เริ่ม workflow บนแพลตฟอร์ม " + _variables.PLATFORM);

if (_variables.PLATFORM === "android") {
  d.Tap("//Button[@text='OK']");
  Delay(1);
} else if (_variables.PLATFORM === "browser") {
  c.GotoUrl("https://example.com");
  c.Click("button.submit");
}

_result.success = true;
_result.message = "เสร็จสิ้น";
```

## ภาษาอื่น

- [English](../en/README.md)
- [Tiếng Việt](../vi/README.md)

## หมายเหตุ

การแปลถูก sync ด้วยมือกับ .d.ts ต้นฉบับ หากพบความไม่ตรงกัน ให้ยึด [ภาษาอังกฤษ](../en/README.md) เป็นหลัก
