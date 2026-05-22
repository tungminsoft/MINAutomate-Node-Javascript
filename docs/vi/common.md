# Hàm chung

> Các hàm dùng được trong mọi JavaScript node, không phụ thuộc platform.

**Tổng số hàm:** 42

## Mục lục

- **Hàm chung**
  - [Log](#log)
  - [SetMessage](#setmessage)
  - [Delay](#delay)
  - [DelayTime](#delaytime)
  - [DelayRandom](#delayrandom)
  - [HttpRequest](#httprequest)
  - [GetOtp2FA](#getotp2fa)
  - [GetTotp](#gettotp)
- **Random**
  - [RandomNumber](#randomnumber)
  - [RandomInt](#randomint)
  - [Random](#random)
  - [RandomString](#randomstring)
  - [RandomBool](#randombool)
  - [RandomItem](#randomitem)
- **Chuỗi**
  - [SpinText](#spintext)
  - [Replace](#replace)
  - [RemoveIcon](#removeicon)
  - [ConvertToUnSign](#converttounsign)
  - [IsVNName](#isvnname)
- **Base64**
  - [DecodeBase64](#decodebase64)
  - [EncodeBase64](#encodebase64)
- **Regex**
  - [RegexGroups1](#regexgroups1)
  - [RegexGroups](#regexgroups)
- **File / Thư mục**
  - [ExistsPath](#existspath)
  - [CreateFolder](#createfolder)
  - [DeleteFolder](#deletefolder)
  - [ListFolders](#listfolders)
  - [ReadFile](#readfile)
  - [AppendFile](#appendfile)
  - [WriteFile](#writefile)
  - [DeleteFile](#deletefile)
  - [ListFiles](#listfiles)
  - [SaveAssets](#saveassets)
- **Proxy**
  - [CheckProxy](#checkproxy)
- **JSON**
  - [JsonGetString](#jsongetstring)
  - [JsonGetInt](#jsongetint)
  - [JsonGetBool](#jsongetbool)
- **Facebook**
  - [IsUidFB](#isuidfb)
  - [IsUid](#isuid)
  - [CheckLiveUidFB](#checkliveuidfb)
- **Captcha**
  - [OmoCaptcha_ImageToText](#omocaptcha-imagetotext)
- **Đồng bộ (locking)**
  - [RunWithLock](#runwithlock)

---

## Hàm chung

### Log

Ghi message vào log thực thi (real-time).

**Cú pháp**

```typescript
Log(msg: any): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `msg` | `any` | Nội dung cần log |

---

### SetMessage

Đặt message tiến độ real-time cho workflow hiện tại (ví dụ: hiển thị trên status bar của host UI). Đi qua hook MessageCallback cấu hình bên Go.

**Cú pháp**

```typescript
SetMessage(msg: any): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `msg` | `any` | Nội dung tiến độ cần hiển thị |

---

### Delay

Hoãn thực thi.

**Cú pháp**

```typescript
Delay(delay: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `delay` | `number` | Số giây cần delay |

---

### DelayTime

Alias của Delay.

**Cú pháp**

```typescript
DelayTime(delay: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `delay` | `number` | Số giây cần delay |

---

### DelayRandom

Delay một khoảng thời gian ngẫu nhiên.

**Cú pháp**

```typescript
DelayRandom(min: number, max: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `min` | `number` | Số giây tối thiểu |
| `max` | `number` | Số giây tối đa |

---

### HttpRequest

Gửi một HTTP request.

**Cú pháp**

```typescript
HttpRequest(method: string, url: string, contentType: string, headers: string, body: string, timeout: number): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `method` | `string` | HTTP method (GET, POST, PUT, DELETE...) |
| `url` | `string` | URL request |
| `contentType` | `string` | Header Content-Type (vd: "application/json") |
| `headers` | `string` | Header bổ sung dạng chuỗi JSON |
| `body` | `string` | Body request |
| `timeout` | `number` | Timeout tính bằng giây |

**Trả về** `string` — Body response dạng chuỗi

---

### GetOtp2FA

Sinh mã TOTP từ secret key (2FA).

**Cú pháp**

```typescript
GetOtp2FA(secret: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `secret` | `string` | Secret key TOTP |

**Trả về** `string` — Mã TOTP 6 chữ số

---

### GetTotp

Alias của GetOtp2FA.

**Cú pháp**

```typescript
GetTotp(secret: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `secret` | `string` | Secret key TOTP |

**Trả về** `string` — Mã TOTP 6 chữ số

---

## Random

### RandomNumber

Sinh số nguyên ngẫu nhiên giữa min và max.

**Cú pháp**

```typescript
RandomNumber(min: number, max: number): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `min` | `number` | Giá trị tối thiểu |
| `max` | `number` | Giá trị tối đa |

**Trả về** `number` — Số nguyên ngẫu nhiên

---

### RandomInt

Alias của RandomNumber.

**Cú pháp**

```typescript
RandomInt(min: number, max: number): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `min` | `number` | Giá trị tối thiểu |
| `max` | `number` | Giá trị tối đa |

**Trả về** `number` — Số nguyên ngẫu nhiên

---

### Random

Sinh số nguyên ngẫu nhiên có N chữ số (vd length=4 → 1000-9999).

**Cú pháp**

```typescript
Random(length: number): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `length` | `number` | Số chữ số |

**Trả về** `number` — Số nguyên ngẫu nhiên

---

### RandomString

Sinh chuỗi ngẫu nhiên.

**Cú pháp**

```typescript
RandomString(length: number, typeRandom?: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `length` | `number` | Độ dài chuỗi |
| `typeRandom` | `string *(tùy chọn)*` | Kiểu chuỗi (a: thường, A: hoa, 0: số, $: ký tự đặc biệt) |

**Trả về** `string` — Chuỗi ngẫu nhiên

---

### RandomBool

Sinh boolean ngẫu nhiên với tỷ lệ true cho trước.

**Cú pháp**

```typescript
RandomBool(percent: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `percent` | `number` | Phần trăm true (0-100) |

**Trả về** `boolean` — Boolean ngẫu nhiên

---

### RandomItem

Lấy ngẫu nhiên một phần tử trong mảng.

**Cú pháp**

```typescript
RandomItem(arr: string[]): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `arr` | `string[]` | Mảng chuỗi |

**Trả về** `string` — Phần tử ngẫu nhiên

---

## Chuỗi

### SpinText

Spin text — chọn ngẫu nhiên một biến thể trong cú pháp spin.

**Cú pháp**

```typescript
SpinText(text: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `text` | `string` | Chuỗi cú pháp spin (vd: "{Hello|Hi|Hey}") |

**Trả về** `string` — Biến thể được chọn

---

### Replace

Thay thế tất cả các lần xuất hiện của một chuỗi.

**Cú pháp**

```typescript
Replace(s: string, old: string, newStr: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `s` | `string` | Chuỗi gốc |
| `old` | `string` | Chuỗi cần thay |
| `newStr` | `string` | Chuỗi thay thế |

**Trả về** `string` — Chuỗi kết quả

---

### RemoveIcon

Loại bỏ ký tự emoji / icon khỏi chuỗi.

**Cú pháp**

```typescript
RemoveIcon(text: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `text` | `string` | Chuỗi đầu vào |

**Trả về** `string` — Chuỗi không còn emoji

---

### ConvertToUnSign

Chuyển tiếng Việt có dấu thành không dấu.

**Cú pháp**

```typescript
ConvertToUnSign(text: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `text` | `string` | Chuỗi tiếng Việt |

**Trả về** `string` — Chuỗi không dấu

---

### IsVNName

Kiểm tra chuỗi có phải tên tiếng Việt hợp lệ (đúng pattern + dấu).

**Cú pháp**

```typescript
IsVNName(text: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `text` | `string` | Chuỗi đầu vào |

**Trả về** `boolean` — True nếu là tên VN hợp lệ

---

## Base64

### DecodeBase64

Giải mã chuỗi base64.

**Cú pháp**

```typescript
DecodeBase64(encoded: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `encoded` | `string` | Chuỗi đã mã hóa base64 |

**Trả về** `string` — Chuỗi đã giải mã

---

### EncodeBase64

Mã hóa chuỗi sang base64.

**Cú pháp**

```typescript
EncodeBase64(text: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `text` | `string` | Plain text |

**Trả về** `string` — Chuỗi base64

---

## Regex

### RegexGroups1

Match regex và lấy một group cụ thể.

**Cú pháp**

```typescript
RegexGroups1(input: string, pattern: string, index: number): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `input` | `string` | Chuỗi cần match |
| `pattern` | `string` | Regex pattern |
| `index` | `number` | Vị trí group cần lấy |

**Trả về** `string` — Group đã capture

---

### RegexGroups

Match regex và trả về tất cả các group đã capture.

**Cú pháp**

```typescript
RegexGroups(input: string, pattern: string): string[]
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `input` | `string` | Chuỗi cần match |
| `pattern` | `string` | Regex pattern |

**Trả về** `string[]` — Mảng các group đã capture

---

## File / Thư mục

### ExistsPath

Kiểm tra file hoặc thư mục có tồn tại không.

**Cú pháp**

```typescript
ExistsPath(path: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `path` | `string` | Đường dẫn cần kiểm tra |

**Trả về** `boolean` — True nếu tồn tại

---

### CreateFolder

Tạo thư mục.

**Cú pháp**

```typescript
CreateFolder(folderPath: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Đường dẫn thư mục |

**Trả về** `boolean` — Trạng thái thành công

---

### DeleteFolder

Xóa thư mục và toàn bộ nội dung bên trong.

**Cú pháp**

```typescript
DeleteFolder(folderPath: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Đường dẫn thư mục |

**Trả về** `boolean` — Trạng thái thành công

---

### ListFolders

Liệt kê các thư mục con bên trong thư mục.

**Cú pháp**

```typescript
ListFolders(folderPath: string, folderPrefix?: string): string[]
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Đường dẫn thư mục cha |
| `folderPrefix` | `string *(tùy chọn)*` | Lọc theo prefix; truyền chuỗi rỗng để lấy tất cả |

**Trả về** `string[]` — Mảng đường dẫn thư mục

---

### ReadFile

Đọc nội dung file.

**Cú pháp**

```typescript
ReadFile(filePath: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn file |

**Trả về** `string` — Nội dung file dạng chuỗi

---

### AppendFile

Ghi thêm (append) nội dung vào file.

**Cú pháp**

```typescript
AppendFile(filePath: string, content: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn file |
| `content` | `string` | Nội dung cần append |

**Trả về** `boolean` — Trạng thái thành công

---

### WriteFile

Ghi nội dung vào file (ghi đè).

**Cú pháp**

```typescript
WriteFile(filePath: string, content: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn file |
| `content` | `string` | Nội dung cần ghi |

**Trả về** `boolean` — Trạng thái thành công

---

### DeleteFile

Xóa file.

**Cú pháp**

```typescript
DeleteFile(filePath: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn file |

**Trả về** `boolean` — Trạng thái thành công

---

### ListFiles

Liệt kê file trong thư mục.

**Cú pháp**

```typescript
ListFiles(folderPath: string, extensions?: string): string[]
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Đường dẫn thư mục |
| `extensions` | `string *(tùy chọn)*` | Lọc theo extension (vd: ".txt"); rỗng để lấy tất cả |

**Trả về** `string[]` — Mảng đường dẫn file

---

### SaveAssets

Lưu dữ liệu (URL hoặc base64) ra file.

**Cú pháp**

```typescript
SaveAssets(data: string, filePath: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `data` | `string` | URL (http/https) hoặc base64 (hỗ trợ data URI prefix) |
| `filePath` | `string` | Đường dẫn file đích |

**Trả về** `boolean` — Trạng thái thành công

---

## Proxy

### CheckProxy

Kiểm tra proxy và lấy IP hiện tại.

**Cú pháp**

```typescript
CheckProxy(proxy: string, typeProxy: number, timeout: number): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `proxy` | `string` | Chuỗi proxy (format: "host:port" hoặc "host:port:user:pass") |
| `typeProxy` | `number` | Loại proxy (0: HTTP, 1: SOCKS5) |
| `timeout` | `number` | Timeout tính bằng giây |

**Trả về** `string` — Địa chỉ IP hoặc thông báo lỗi

---

## JSON

### JsonGetString

Lấy giá trị string trong JSON theo path.

**Cú pháp**

```typescript
JsonGetString(json: string, path: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `json` | `string` | Chuỗi JSON |
| `path` | `string` | JSON path (vd: "data.user.name") |

**Trả về** `string` — Giá trị string

---

### JsonGetInt

Lấy giá trị integer trong JSON theo path.

**Cú pháp**

```typescript
JsonGetInt(json: string, path: string): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `json` | `string` | Chuỗi JSON |
| `path` | `string` | JSON path (vd: "data.user.age") |

**Trả về** `number` — Giá trị số nguyên

---

### JsonGetBool

Lấy giá trị boolean trong JSON theo path.

**Cú pháp**

```typescript
JsonGetBool(json: string, path: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `json` | `string` | Chuỗi JSON |
| `path` | `string` | JSON path (vd: "data.user.active") |

**Trả về** `boolean` — Giá trị boolean

---

## Facebook

### IsUidFB

Kiểm tra chuỗi có phải Facebook UID hợp lệ không.

**Cú pháp**

```typescript
IsUidFB(input: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `input` | `string` | Chuỗi cần kiểm tra |

**Trả về** `boolean` — True nếu là UID hợp lệ

---

### IsUid

Alias của IsUidFB.

**Cú pháp**

```typescript
IsUid(input: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `input` | `string` | Chuỗi cần kiểm tra |

**Trả về** `boolean` — True nếu là UID hợp lệ

---

### CheckLiveUidFB

Kiểm tra trạng thái sống của Facebook UID qua request wall.

**Cú pháp**

```typescript
CheckLiveUidFB(uid: string, proxy: string): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `uid` | `string` | Facebook UID |
| `proxy` | `string` | Chuỗi proxy (rỗng nếu kết nối trực tiếp) |

**Trả về** `number` — Status code (0: chết, 1: live, 2: bị khóa/checkpoint — phụ thuộc implementation)

---

## Captcha

### OmoCaptcha_ImageToText

Giải captcha dạng ảnh sang text qua OmoCaptcha.

**Cú pháp**

```typescript
OmoCaptcha_ImageToText(apiKey: string, base64Image: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `apiKey` | `string` | API Key của OmoCaptcha |
| `base64Image` | `string` | Ảnh dạng base64 |

**Trả về** `string` — Text kết quả captcha

---

## Đồng bộ (locking)

### RunWithLock

Giành lock theo tên (block đến khi giành được), chạy callback, tự động release. Dùng để bảo vệ critical section khi nhiều script chạy song song và động đến cùng tài nguyên (file, thiết bị...). CẢNH BÁO: KHÔNG REENTRANT — gọi lồng cùng tên gây deadlock vĩnh viễn.

**Cú pháp**

```typescript
RunWithLock(name: string, fn: () => void): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `name` | `string` | Tên lock. Script/Go code dùng cùng tên sẽ block lẫn nhau. |
| `fn` | `() => void` | Callback được chạy trong critical section. |

---
