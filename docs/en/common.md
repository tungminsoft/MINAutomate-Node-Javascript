# Common Functions

> Helpers available in every JavaScript node, regardless of platform.

**Total functions:** 42

## Table of Contents

- **Common Functions**
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
- **String**
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
- **File/Folder**
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
- **Json**
  - [JsonGetString](#jsongetstring)
  - [JsonGetInt](#jsongetint)
  - [JsonGetBool](#jsongetbool)
- **Facebook**
  - [IsUidFB](#isuidfb)
  - [IsUid](#isuid)
  - [CheckLiveUidFB](#checkliveuidfb)
- **Captcha**
  - [OmoCaptcha_ImageToText](#omocaptcha-imagetotext)
- **Concurrency**
  - [RunWithLock](#runwithlock)

---

## Common Functions

### Log

Log a message to the execution log (real-time)

**Signature**

```typescript
Log(msg: any): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `msg` | `any` | Message to log |

---

### SetMessage

Set a real-time progress message for the current workflow (e.g., shown in the host UI status bar).
Routed through the per-instance MessageCallback hook configured on the Go side.

**Signature**

```typescript
SetMessage(msg: any): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `msg` | `any` | Progress message to display |

---

### Delay

Delay execution

**Signature**

```typescript
Delay(delay: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### DelayTime

Alias of Delay.

**Signature**

```typescript
DelayTime(delay: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `delay` | `number` |  |

---

### DelayRandom

Delay random time

**Signature**

```typescript
DelayRandom(min: number, max: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---

### HttpRequest

Send an HTTP request

**Signature**

```typescript
HttpRequest(method: string, url: string, contentType: string, headers: string, body: string, timeout: number): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `method` | `string` | HTTP method (GET, POST, PUT, DELETE, etc.) |
| `url` | `string` | Request URL |
| `contentType` | `string` | Content-Type header (e.g. "application/json") |
| `headers` | `string` | Additional headers as JSON string |
| `body` | `string` | Request body |
| `timeout` | `number` | Timeout in seconds |

**Returns** `string` — Response body as string

---

### GetOtp2FA

Generate a TOTP code from a secret key (2fa)

**Signature**

```typescript
GetOtp2FA(secret: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `secret` | `string` | TOTP secret key |

**Returns** `string` — 6-digit TOTP code

---

### GetTotp

Alias of GetOtp2FA.

**Signature**

```typescript
GetTotp(secret: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `secret` | `string` | TOTP secret key |

**Returns** `string` — 6-digit TOTP code

---

## Random

### RandomNumber

Generate random integer between min and max

**Signature**

```typescript
RandomNumber(min: number, max: number): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `min` | `number` | Minimum value |
| `max` | `number` | Maximum value |

**Returns** `number` — Random integer

---

### RandomInt

Alias of RandomNumber.

**Signature**

```typescript
RandomInt(min: number, max: number): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `min` | `number` |  |
| `max` | `number` |  |

**Returns** `number`

---

### Random

Generate a random integer with N digits (e.g., length=4 → 1000-9999).

**Signature**

```typescript
Random(length: number): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `length` | `number` | Number of digits |

**Returns** `number` — Random integer

---

### RandomString

Generate random string

**Signature**

```typescript
RandomString(length: number, typeRandom?: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `length` | `number` | String length |
| `typeRandom` | `string *(optional)*` | Type of string (a: lowercase, A: uppercase, 0: number, $: special character) |

**Returns** `string` — Random string

---

### RandomBool

Generate random boolean with given percentage of true

**Signature**

```typescript
RandomBool(percent: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `percent` | `number` | Percentage of true (0-100) |

**Returns** `boolean` — Random boolean

---

### RandomItem

Pick a random item from an array

**Signature**

```typescript
RandomItem(arr: string[]): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `arr` | `string[]` | Array of strings |

**Returns** `string` — Random item

---

## String

### SpinText

Spin text - randomly select from variants

**Signature**

```typescript
SpinText(text: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `text` | `string` | Spin syntax text (e.g., "{Hello|Hi|Hey}") |

**Returns** `string` — Randomly selected variant

---

### Replace

Replace all occurrences of a string

**Signature**

```typescript
Replace(s: string, old: string, newStr: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `s` | `string` | Source string |
| `old` | `string` | String to replace |
| `newStr` | `string` | Replacement string |

**Returns** `string` — Result string

---

### RemoveIcon

Remove emoji/icon characters from string

**Signature**

```typescript
RemoveIcon(text: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `text` | `string` | Input text |

**Returns** `string` — Text without emojis

---

### ConvertToUnSign

Convert Vietnamese text to unsigned (no diacritics)

**Signature**

```typescript
ConvertToUnSign(text: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `text` | `string` | Vietnamese text |

**Returns** `string` — Text without diacritics

---

### IsVNName

Check if text is a valid Vietnamese name (matches pattern + diacritics).

**Signature**

```typescript
IsVNName(text: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `text` | `string` | Input text |

**Returns** `boolean` — True if valid Vietnamese name

---

## Base64

### DecodeBase64

Decode base64 string

**Signature**

```typescript
DecodeBase64(encoded: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `encoded` | `string` | Base64 encoded string |

**Returns** `string` — Decoded string

---

### EncodeBase64

Encode string to base64

**Signature**

```typescript
EncodeBase64(text: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `text` | `string` | Plain text |

**Returns** `string` — Base64 encoded string

---

## Regex

### RegexGroups1

Match regex and get specific group

**Signature**

```typescript
RegexGroups1(input: string, pattern: string, index: number): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `input` | `string` | Text to match |
| `pattern` | `string` | Regex pattern |
| `index` | `number` | Group index to return |

**Returns** `string` — Captured group

---

### RegexGroups

Match regex and return all captured groups.

**Signature**

```typescript
RegexGroups(input: string, pattern: string): string[]
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `input` | `string` | Text to match |
| `pattern` | `string` | Regex pattern |

**Returns** `string[]` — Array of captured groups

---

## File/Folder

### ExistsPath

Check if file or folder exists

**Signature**

```typescript
ExistsPath(path: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `path` | `string` | Path to check |

**Returns** `boolean` — True if exists

---

### CreateFolder

Create folder

**Signature**

```typescript
CreateFolder(folderPath: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Path to folder |

**Returns** `boolean` — Success status

---

### DeleteFolder

Delete a folder and all its contents

**Signature**

```typescript
DeleteFolder(folderPath: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Path to folder |

**Returns** `boolean` — Success status

---

### ListFolders

List subfolders in folder

**Signature**

```typescript
ListFolders(folderPath: string, folderPrefix?: string): string[]
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Path to folder |
| `folderPrefix` | `string *(optional)*` | Filter by prefix, empty for all folders |

**Returns** `string[]` — Array of folder paths

---

### ReadFile

Read file content

**Signature**

```typescript
ReadFile(filePath: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | Path to file |

**Returns** `string` — File content as string

---

### AppendFile

Append content to file

**Signature**

```typescript
AppendFile(filePath: string, content: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | Path to file |
| `content` | `string` | Content to append |

**Returns** `boolean` — Success status

---

### WriteFile

Write content to file (overwrite)

**Signature**

```typescript
WriteFile(filePath: string, content: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | Path to file |
| `content` | `string` | Content to write |

**Returns** `boolean` — Success status

---

### DeleteFile

Delete a file

**Signature**

```typescript
DeleteFile(filePath: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | Path to file |

**Returns** `boolean` — Success status

---

### ListFiles

List files in folder

**Signature**

```typescript
ListFiles(folderPath: string, extensions?: string): string[]
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Path to folder |
| `extensions` | `string *(optional)*` | Filter by extension (e.g., ".txt"), empty for all files |

**Returns** `string[]` — Array of file paths

---

### SaveAssets

Save data (URL or base64) to a file

**Signature**

```typescript
SaveAssets(data: string, filePath: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `data` | `string` | URL (http/https) or base64 encoded data (supports data URI prefix) |
| `filePath` | `string` | Destination file path |

**Returns** `boolean` — Success status

---

## Proxy

### CheckProxy

Check proxy and get current IP address

**Signature**

```typescript
CheckProxy(proxy: string, typeProxy: number, timeout: number): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `proxy` | `string` | Proxy string (format: "host:port" or "host:port:user:pass") |
| `typeProxy` | `number` | Proxy type (0: HTTP, 1: SOCKS5) |
| `timeout` | `number` | Timeout in seconds |

**Returns** `string` — IP address or error message

---

## Json

### JsonGetString

Get string value from JSON by path

**Signature**

```typescript
JsonGetString(json: string, path: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `json` | `string` | JSON string |
| `path` | `string` | JSON path (e.g., "data.user.name") |

**Returns** `string` — String value

---

### JsonGetInt

Get integer value from JSON by path

**Signature**

```typescript
JsonGetInt(json: string, path: string): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `json` | `string` | JSON string |
| `path` | `string` | JSON path (e.g., "data.user.age") |

**Returns** `number` — Integer value

---

### JsonGetBool

Get boolean value from JSON by path

**Signature**

```typescript
JsonGetBool(json: string, path: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `json` | `string` | JSON string |
| `path` | `string` | JSON path (e.g., "data.user.active") |

**Returns** `boolean` — Boolean value

---

## Facebook

### IsUidFB

Check if string is Facebook UID

**Signature**

```typescript
IsUidFB(input: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `input` | `string` | String to check |

**Returns** `boolean` — True if valid UID

---

### IsUid

Alias of IsUidFB.

**Signature**

```typescript
IsUid(input: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `input` | `string` |  |

**Returns** `boolean`

---

### CheckLiveUidFB

Check Facebook UID live status via a wall request.

**Signature**

```typescript
CheckLiveUidFB(uid: string, proxy: string): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `uid` | `string` | Facebook UID |
| `proxy` | `string` | Proxy string (empty for direct) |

**Returns** `number` — Status code (0: dead, 1: live, 2: locked/checkpoint — implementation-dependent)

---

## Captcha

### OmoCaptcha_ImageToText

Solve Image To Text captcha using OmoCaptcha

**Signature**

```typescript
OmoCaptcha_ImageToText(apiKey: string, base64Image: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `apiKey` | `string` | API Key for OmoCaptcha |
| `base64Image` | `string` | Base64 encoded image |

**Returns** `string` — Captcha result text

---

## Concurrency

### RunWithLock

Acquire a named lock (block until acquired), run callback, auto-release.

Use to protect critical sections when multiple scripts run in parallel and
touch the same shared resource (file, device, ...).

**Signature**

```typescript
RunWithLock(name: string, fn: () => void): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `name` | `string` | Lock name. Script/Go code using the same name → block each other. |
| `fn` | `() => void` | Callback executed inside the critical section. |

---
