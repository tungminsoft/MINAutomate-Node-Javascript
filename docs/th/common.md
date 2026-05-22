# ฟังก์ชันทั่วไป

> ฟังก์ชันช่วยที่ใช้ได้ในทุก JavaScript node โดยไม่ขึ้นกับแพลตฟอร์ม

**จำนวนฟังก์ชันทั้งหมด:** 42

## สารบัญ

- **ฟังก์ชันทั่วไป**
  - [Log](#log)
  - [SetMessage](#setmessage)
  - [Delay](#delay)
  - [DelayTime](#delaytime)
  - [DelayRandom](#delayrandom)
  - [HttpRequest](#httprequest)
  - [GetOtp2FA](#getotp2fa)
  - [GetTotp](#gettotp)
- **สุ่ม**
  - [RandomNumber](#randomnumber)
  - [RandomInt](#randomint)
  - [Random](#random)
  - [RandomString](#randomstring)
  - [RandomBool](#randombool)
  - [RandomItem](#randomitem)
- **ข้อความ**
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
- **ไฟล์ / โฟลเดอร์**
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
- **พร็อกซี**
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
- **การล็อกพร้อมกัน**
  - [RunWithLock](#runwithlock)

---

## ฟังก์ชันทั่วไป

### Log

บันทึกข้อความลง execution log แบบเรียลไทม์

**ไวยากรณ์**

```typescript
Log(msg: any): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `msg` | `any` | ข้อความที่ต้องการ log |

---

### SetMessage

กำหนดข้อความความคืบหน้าแบบเรียลไทม์ของ workflow ปัจจุบัน (เช่น แสดงบน status bar ของ host UI) โดยส่งผ่าน MessageCallback hook ฝั่ง Go

**ไวยากรณ์**

```typescript
SetMessage(msg: any): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `msg` | `any` | ข้อความความคืบหน้าที่จะแสดง |

---

### Delay

หน่วงเวลาการทำงาน

**ไวยากรณ์**

```typescript
Delay(delay: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `delay` | `number` | ระยะเวลาเป็นวินาที |

---

### DelayTime

Alias ของ Delay

**ไวยากรณ์**

```typescript
DelayTime(delay: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `delay` | `number` | ระยะเวลาเป็นวินาที |

---

### DelayRandom

หน่วงเวลาแบบสุ่ม

**ไวยากรณ์**

```typescript
DelayRandom(min: number, max: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `min` | `number` | วินาทีต่ำสุด |
| `max` | `number` | วินาทีสูงสุด |

---

### HttpRequest

ส่ง HTTP request

**ไวยากรณ์**

```typescript
HttpRequest(method: string, url: string, contentType: string, headers: string, body: string, timeout: number): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `method` | `string` | HTTP method (GET, POST, PUT, DELETE ฯลฯ) |
| `url` | `string` | URL ของ request |
| `contentType` | `string` | Content-Type header (เช่น "application/json") |
| `headers` | `string` | Header เพิ่มเติมในรูปแบบ JSON string |
| `body` | `string` | Body ของ request |
| `timeout` | `number` | Timeout เป็นวินาที |

**คืนค่า** `string` — Body ของ response เป็น string

---

### GetOtp2FA

สร้างรหัส TOTP จาก secret key (2FA)

**ไวยากรณ์**

```typescript
GetOtp2FA(secret: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `secret` | `string` | Secret key TOTP |

**คืนค่า** `string` — รหัส TOTP 6 หลัก

---

### GetTotp

Alias ของ GetOtp2FA

**ไวยากรณ์**

```typescript
GetTotp(secret: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `secret` | `string` | Secret key TOTP |

**คืนค่า** `string` — รหัส TOTP 6 หลัก

---

## สุ่ม

### RandomNumber

สุ่มจำนวนเต็มระหว่าง min และ max

**ไวยากรณ์**

```typescript
RandomNumber(min: number, max: number): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `min` | `number` | ค่าต่ำสุด |
| `max` | `number` | ค่าสูงสุด |

**คืนค่า** `number` — จำนวนเต็มสุ่ม

---

### RandomInt

Alias ของ RandomNumber

**ไวยากรณ์**

```typescript
RandomInt(min: number, max: number): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `min` | `number` | ค่าต่ำสุด |
| `max` | `number` | ค่าสูงสุด |

**คืนค่า** `number` — จำนวนเต็มสุ่ม

---

### Random

สร้างจำนวนเต็มสุ่มที่มี N หลัก (เช่น length=4 → 1000-9999)

**ไวยากรณ์**

```typescript
Random(length: number): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `length` | `number` | จำนวนหลัก |

**คืนค่า** `number` — จำนวนเต็มสุ่ม

---

### RandomString

สร้าง string สุ่ม

**ไวยากรณ์**

```typescript
RandomString(length: number, typeRandom?: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `length` | `number` | ความยาวของ string |
| `typeRandom` | `string *(ไม่บังคับ)*` | ประเภทอักขระ (a: ตัวเล็ก, A: ตัวใหญ่, 0: ตัวเลข, $: อักขระพิเศษ) |

**คืนค่า** `string` — String สุ่ม

---

### RandomBool

สุ่ม boolean ตามเปอร์เซ็นต์ของค่า true ที่กำหนด

**ไวยากรณ์**

```typescript
RandomBool(percent: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `percent` | `number` | เปอร์เซ็นต์ของ true (0-100) |

**คืนค่า** `boolean` — Boolean สุ่ม

---

### RandomItem

เลือกสมาชิกแบบสุ่มจากอาร์เรย์

**ไวยากรณ์**

```typescript
RandomItem(arr: string[]): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `arr` | `string[]` | อาร์เรย์ของ string |

**คืนค่า** `string` — สมาชิกสุ่ม

---

## ข้อความ

### SpinText

Spin text — เลือกตัวเลือกแบบสุ่มจากรูปแบบ spin

**ไวยากรณ์**

```typescript
SpinText(text: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `text` | `string` | ข้อความรูปแบบ spin (เช่น "{Hello|Hi|Hey}") |

**คืนค่า** `string` — ตัวเลือกที่ถูกเลือก

---

### Replace

แทนที่ string ทุกตำแหน่งที่พบ

**ไวยากรณ์**

```typescript
Replace(s: string, old: string, newStr: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `s` | `string` | String ต้นฉบับ |
| `old` | `string` | String ที่จะถูกแทนที่ |
| `newStr` | `string` | String ใหม่ที่ใช้แทน |

**คืนค่า** `string` — String ผลลัพธ์

---

### RemoveIcon

ลบ emoji / icon ออกจาก string

**ไวยากรณ์**

```typescript
RemoveIcon(text: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `text` | `string` | Text นำเข้า |

**คืนค่า** `string` — Text ที่ลบ emoji แล้ว

---

### ConvertToUnSign

แปลงข้อความเวียดนามที่มีวรรณยุกต์เป็นแบบไม่มีวรรณยุกต์

**ไวยากรณ์**

```typescript
ConvertToUnSign(text: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `text` | `string` | ข้อความเวียดนาม |

**คืนค่า** `string` — ข้อความไม่มีวรรณยุกต์

---

### IsVNName

ตรวจสอบว่าข้อความเป็นชื่อภาษาเวียดนามที่ถูกต้องหรือไม่ (ตรงตาม pattern + วรรณยุกต์)

**ไวยากรณ์**

```typescript
IsVNName(text: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `text` | `string` | Text นำเข้า |

**คืนค่า** `boolean` — True ถ้าเป็นชื่อเวียดนามที่ถูกต้อง

---

## Base64

### DecodeBase64

Decode string base64

**ไวยากรณ์**

```typescript
DecodeBase64(encoded: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `encoded` | `string` | String ที่เข้ารหัส base64 |

**คืนค่า** `string` — String ที่ decode แล้ว

---

### EncodeBase64

Encode string เป็น base64

**ไวยากรณ์**

```typescript
EncodeBase64(text: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `text` | `string` | Plain text |

**คืนค่า** `string` — String base64

---

## Regex

### RegexGroups1

Match regex และดึง group ที่ระบุ

**ไวยากรณ์**

```typescript
RegexGroups1(input: string, pattern: string, index: number): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `input` | `string` | Text ที่ต้องการ match |
| `pattern` | `string` | Regex pattern |
| `index` | `number` | ดัชนีของ group ที่ต้องการ |

**คืนค่า** `string` — Group ที่ capture ได้

---

### RegexGroups

Match regex และคืนค่า group ทั้งหมดที่ capture ได้

**ไวยากรณ์**

```typescript
RegexGroups(input: string, pattern: string): string[]
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `input` | `string` | Text ที่ต้องการ match |
| `pattern` | `string` | Regex pattern |

**คืนค่า** `string[]` — อาร์เรย์ของ group ที่ capture ได้

---

## ไฟล์ / โฟลเดอร์

### ExistsPath

ตรวจสอบว่าไฟล์หรือโฟลเดอร์มีอยู่หรือไม่

**ไวยากรณ์**

```typescript
ExistsPath(path: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `path` | `string` | Path ที่ต้องการตรวจสอบ |

**คืนค่า** `boolean` — True ถ้ามีอยู่

---

### CreateFolder

สร้างโฟลเดอร์

**ไวยากรณ์**

```typescript
CreateFolder(folderPath: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | Path ของโฟลเดอร์ |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### DeleteFolder

ลบโฟลเดอร์รวมทั้งเนื้อหาทั้งหมด

**ไวยากรณ์**

```typescript
DeleteFolder(folderPath: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | Path ของโฟลเดอร์ |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### ListFolders

แสดงรายการโฟลเดอร์ย่อยในโฟลเดอร์

**ไวยากรณ์**

```typescript
ListFolders(folderPath: string, folderPrefix?: string): string[]
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | Path ของโฟลเดอร์ |
| `folderPrefix` | `string *(ไม่บังคับ)*` | กรองตาม prefix; ส่ง string ว่างเพื่อเอาทั้งหมด |

**คืนค่า** `string[]` — อาร์เรย์ path ของโฟลเดอร์

---

### ReadFile

อ่านเนื้อหาไฟล์

**ไวยากรณ์**

```typescript
ReadFile(filePath: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ของไฟล์ |

**คืนค่า** `string` — เนื้อหาไฟล์เป็น string

---

### AppendFile

ต่อท้าย (append) เนื้อหาในไฟล์

**ไวยากรณ์**

```typescript
AppendFile(filePath: string, content: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ของไฟล์ |
| `content` | `string` | เนื้อหาที่จะ append |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### WriteFile

เขียนเนื้อหาลงไฟล์ (เขียนทับ)

**ไวยากรณ์**

```typescript
WriteFile(filePath: string, content: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ของไฟล์ |
| `content` | `string` | เนื้อหาที่จะเขียน |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### DeleteFile

ลบไฟล์

**ไวยากรณ์**

```typescript
DeleteFile(filePath: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ของไฟล์ |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### ListFiles

แสดงรายการไฟล์ในโฟลเดอร์

**ไวยากรณ์**

```typescript
ListFiles(folderPath: string, extensions?: string): string[]
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | Path ของโฟลเดอร์ |
| `extensions` | `string *(ไม่บังคับ)*` | กรองตาม extension (เช่น ".txt"); ว่างเพื่อเอาทั้งหมด |

**คืนค่า** `string[]` — อาร์เรย์ path ของไฟล์

---

### SaveAssets

บันทึกข้อมูล (URL หรือ base64) ลงไฟล์

**ไวยากรณ์**

```typescript
SaveAssets(data: string, filePath: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `data` | `string` | URL (http/https) หรือข้อมูล base64 (รองรับ data URI prefix) |
| `filePath` | `string` | Path ปลายทาง |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

## พร็อกซี

### CheckProxy

ตรวจสอบ proxy และดึง IP ปัจจุบัน

**ไวยากรณ์**

```typescript
CheckProxy(proxy: string, typeProxy: number, timeout: number): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `proxy` | `string` | String proxy (รูปแบบ: "host:port" หรือ "host:port:user:pass") |
| `typeProxy` | `number` | ประเภท proxy (0: HTTP, 1: SOCKS5) |
| `timeout` | `number` | Timeout เป็นวินาที |

**คืนค่า** `string` — IP address หรือข้อความ error

---

## JSON

### JsonGetString

ดึงค่า string จาก JSON ตาม path

**ไวยากรณ์**

```typescript
JsonGetString(json: string, path: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `json` | `string` | String JSON |
| `path` | `string` | JSON path (เช่น "data.user.name") |

**คืนค่า** `string` — ค่า string

---

### JsonGetInt

ดึงค่า integer จาก JSON ตาม path

**ไวยากรณ์**

```typescript
JsonGetInt(json: string, path: string): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `json` | `string` | String JSON |
| `path` | `string` | JSON path (เช่น "data.user.age") |

**คืนค่า** `number` — ค่า integer

---

### JsonGetBool

ดึงค่า boolean จาก JSON ตาม path

**ไวยากรณ์**

```typescript
JsonGetBool(json: string, path: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `json` | `string` | String JSON |
| `path` | `string` | JSON path (เช่น "data.user.active") |

**คืนค่า** `boolean` — ค่า boolean

---

## Facebook

### IsUidFB

ตรวจสอบว่าเป็น Facebook UID ที่ถูกต้องหรือไม่

**ไวยากรณ์**

```typescript
IsUidFB(input: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `input` | `string` | String ที่ต้องการตรวจสอบ |

**คืนค่า** `boolean` — True ถ้าเป็น UID ที่ถูกต้อง

---

### IsUid

Alias ของ IsUidFB

**ไวยากรณ์**

```typescript
IsUid(input: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `input` | `string` | String ที่ต้องการตรวจสอบ |

**คืนค่า** `boolean` — True ถ้าเป็น UID ที่ถูกต้อง

---

### CheckLiveUidFB

ตรวจสอบสถานะ live ของ Facebook UID ผ่าน wall request

**ไวยากรณ์**

```typescript
CheckLiveUidFB(uid: string, proxy: string): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `uid` | `string` | Facebook UID |
| `proxy` | `string` | String proxy (ว่างเพื่อต่อตรง) |

**คืนค่า** `number` — Status code (0: ตาย, 1: live, 2: locked/checkpoint — ขึ้นกับ implementation)

---

## Captcha

### OmoCaptcha_ImageToText

แก้ captcha รูปภาพเป็นข้อความผ่าน OmoCaptcha

**ไวยากรณ์**

```typescript
OmoCaptcha_ImageToText(apiKey: string, base64Image: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `apiKey` | `string` | API Key ของ OmoCaptcha |
| `base64Image` | `string` | ภาพ base64 |

**คืนค่า** `string` — ผลลัพธ์ข้อความ captcha

---

## การล็อกพร้อมกัน

### RunWithLock

ยึด lock ตามชื่อ (block จนกว่าจะได้), รัน callback, ปล่อย lock อัตโนมัติ ใช้ปกป้อง critical section เมื่อมีหลาย script ทำงานพร้อมกันและแตะทรัพยากรเดียวกัน (ไฟล์, อุปกรณ์ ฯลฯ) คำเตือน: NOT REENTRANT — การเรียกซ้อนชื่อเดียวกันจะเกิด deadlock ถาวร

**ไวยากรณ์**

```typescript
RunWithLock(name: string, fn: () => void): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `name` | `string` | ชื่อ lock; script/Go code ที่ใช้ชื่อเดียวกันจะ block ซึ่งกันและกัน |
| `fn` | `() => void` | Callback ที่รันใน critical section |

---
