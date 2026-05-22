# Android — `d.*`

> API ควบคุมอุปกรณ์ ใช้ได้เมื่อ workflow ทำงานบนอุปกรณ์ Android ผ่าน ADB

**จำนวนฟังก์ชันทั้งหมด:** 82

## สารบัญ

- **ฟังก์ชันโต้ตอบ**
  - [d.PerformAction](#dperformaction)
  - [d.Back](#dback)
  - [d.DumpXml](#ddumpxml)
  - [d.DetectScreen](#ddetectscreen)
  - [d.ExistElement](#dexistelement)
  - [d.ExistElements](#dexistelements)
  - [d.ExistAllElements](#dexistallelements)
  - [d.CountElement](#dcountelement)
  - [d.WaitElementHide](#dwaitelementhide)
  - [d.GetElementAttr](#dgetelementattr)
  - [d.TapXY](#dtapxy)
  - [d.Tap](#dtap)
  - [d.TapCenter](#dtapcenter)
  - [d.DoubleTapXY](#ddoubletapxy)
  - [d.TapLongXY](#dtaplongxy)
  - [d.TapLong](#dtaplong)
  - [d.TapLongCenter](#dtaplongcenter)
  - [d.Swipe](#dswipe)
  - [d.SwipeUp](#dswipeup)
  - [d.SwipeDown](#dswipedown)
  - [d.SwipeLeft](#dswipeleft)
  - [d.SwipeRight](#dswiperight)
  - [d.SwipeXpath](#dswipexpath)
  - [d.SwipeAndTap](#dswipeandtap)
  - [d.InputText](#dinputtext)
  - [d.TypeText](#dtypetext)
  - [d.InputKeyCode](#dinputkeycode)
  - [d.InputEnter](#dinputenter)
  - [d.InputEnd](#dinputend)
  - [d.ClearText](#dcleartext)
  - [d.SetAdbKeyboard](#dsetadbkeyboard)
  - [d.HideAdbKeyboard](#dhideadbkeyboard)
  - [d.ScreenShot](#dscreenshot)
- **ฟังก์ชันอุปกรณ์**
  - [d.Shell](#dshell)
  - [d.IsClosed](#disclosed)
  - [d.DeviceInfo](#ddeviceinfo)
  - [d.DeviceSize](#ddevicesize)
  - [d.DeviceHeight](#ddeviceheight)
  - [d.DeviceWidth](#ddevicewidth)
  - [d.GetDeviceIP](#dgetdeviceip)
  - [d.ChangeLanguage](#dchangelanguage)
  - [d.SetWallpaper](#dsetwallpaper)
  - [d.IsScreenOn](#disscreenon)
  - [d.SleepScreen](#dsleepscreen)
  - [d.UnlockScreen](#dunlockscreen)
  - [d.EnableWifi](#denablewifi)
  - [d.DisableWifi](#ddisablewifi)
  - [d.ConnectWifi](#dconnectwifi)
  - [d.CreateFolder](#dcreatefolder)
  - [d.DeleteFolder](#ddeletefolder)
  - [d.DeleteFile](#ddeletefile)
  - [d.PullFile](#dpullfile)
  - [d.PushFile](#dpushfile)
  - [d.PushImage](#dpushimage)
  - [d.PushMedia](#dpushmedia)
  - [d.CheckProxy](#dcheckproxy)
  - [d.ConnectProxy](#dconnectproxy)
  - [d.DisconnectProxy](#ddisconnectproxy)
  - [d.GetClipboard](#dgetclipboard)
  - [d.SetClipboard](#dsetclipboard)
- **ฟังก์ชันแอป**
  - [d.OpenApp](#dopenapp)
  - [d.CloseApp](#dcloseapp)
  - [d.IsAppOpened](#disappopened)
  - [d.GetCurrentApp](#dgetcurrentapp)
  - [d.IsAppInstalled](#disappinstalled)
  - [d.ClearDataApp](#dcleardataapp)
  - [d.GetAppVersion](#dgetappversion)
  - [d.InstallApp](#dinstallapp)
  - [d.UninstallApp](#duninstallapp)
  - [d.GetInfoApp](#dgetinfoapp)
  - [d.GetListApps](#dgetlistapps)
  - [d.GetListAppsInstalled](#dgetlistappsinstalled)
  - [d.GetCurrentActivity](#dgetcurrentactivity)
  - [d.StartActivity](#dstartactivity)
- **Facebook**
  - [d.OpenAppFB](#dopenappfb)
  - [d.OpenUrlSchemeFB](#dopenurlschemefb)
  - [d.BackupAppFB](#dbackupappfb)
  - [d.RestoreAppFB](#drestoreappfb)
- **ฟังก์ชัน Instagram**
  - [d.OpenUrlSchemeIG](#dopenurlschemeig)
- **Facebook Lite**
  - [d.OpenUrlSchemeFBLite](#dopenurlschemefblite)
- **ฟังก์ชันอื่น ๆ**
  - [d.Delay](#ddelay)
  - [d.DelayRandom](#ddelayrandom)

---

## ฟังก์ชันโต้ตอบ

### d.PerformAction

ทำ system action

**ไวยากรณ์**

```typescript
d.PerformAction(typeAction: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `typeAction` | `number` | 1: Home, 2: Back, 3: Recent apps |

---

### d.Back

กดปุ่ม Back หลายครั้ง

**ไวยากรณ์**

```typescript
d.Back(count?: number, delay?: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `count` | `number *(ไม่บังคับ)*` | จำนวนครั้งที่กด Back (ค่าเริ่มต้น: 1) |
| `delay` | `number *(ไม่บังคับ)*` | เวลาห่างระหว่างกดเป็นวินาที (ค่าเริ่มต้น: 1) |

---

### d.DumpXml

Dump XML hierarchy ของหน้าจอ

**ไวยากรณ์**

```typescript
d.DumpXml(): string
```

**คืนค่า** `string` — String XML

---

### d.DetectScreen

ตรวจจับหน้าจอปัจจุบัน

**ไวยากรณ์**

```typescript
d.DetectScreen(xml?: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |

**คืนค่า** `string` — ตัวระบุประเภทหน้าจอ

---

### d.ExistElement

ตรวจสอบว่า element มีอยู่หรือไม่

**ไวยากรณ์**

```typescript
d.ExistElement(xpath: string, xml?: string, timeout?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `timeout` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาที (ค่าเริ่มต้น: 0) |

**คืนค่า** `boolean` — True ถ้า element มีอยู่

---

### d.ExistElements

ตรวจสอบว่ามี element ใดในรายการอยู่หรือไม่

**ไวยากรณ์**

```typescript
d.ExistElements(timeout: number, xml: string, lstXpath: string[]): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `timeout` | `number` | Timeout เป็นวินาที (ค่าเริ่มต้น: 0) |
| `xml` | `string` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `lstXpath` | `string[]` | อาร์เรย์ Xpath selector |

**คืนค่า** `string` — Xpath ของ element แรกที่พบ หรือ string ว่าง

---

### d.ExistAllElements

ตรวจสอบว่า element ทั้งหมดมีอยู่หรือไม่

**ไวยากรณ์**

```typescript
d.ExistAllElements(lstXpath: string[], xml?: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `lstXpath` | `string[]` | อาร์เรย์ Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |

**คืนค่า** `boolean` — True ถ้ามีอยู่ทั้งหมด

---

### d.CountElement

นับจำนวน element ที่ match xpath

**ไวยากรณ์**

```typescript
d.CountElement(xpath: string, xml?: string): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |

**คืนค่า** `number` — จำนวน element ที่ match

---

### d.WaitElementHide

รอจนกว่า element จะหายไป

**ไวยากรณ์**

```typescript
d.WaitElementHide(xpath: string, timeout: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `timeout` | `number` | Timeout เป็นวินาที |

**คืนค่า** `boolean` — True ถ้า element หายไปแล้ว

---

### d.GetElementAttr

ดึงค่า attribute ของ element ที่ match xpath

**ไวยากรณ์**

```typescript
d.GetElementAttr(xml: string, xpath: string, attribute: string): string[]
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xml` | `string` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `xpath` | `string` | Xpath selector |
| `attribute` | `string` | ชื่อ attribute (เช่น "text", "bounds", "content-desc") |

**คืนค่า** `string[]` — อาร์เรย์ค่า attribute

---

### d.TapXY

แตะที่พิกัดที่ระบุ

**ไวยากรณ์**

```typescript
d.TapXY(x: number, y: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `x` | `number` | พิกัด X |
| `y` | `number` | พิกัด Y |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.Tap

แตะ element ตาม xpath

**ไวยากรณ์**

```typescript
d.Tap(xpath: string, xml?: string, timeFind?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `timeFind` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาทีในการค้นหา element (ค่าเริ่มต้น: 0) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.TapCenter

แตะตรงกลาง element ตาม xpath

**ไวยากรณ์**

```typescript
d.TapCenter(xpath: string, xml?: string, timeFind?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `timeFind` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาทีในการค้นหา element (ค่าเริ่มต้น: 0) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.DoubleTapXY

แตะสองครั้งที่พิกัดที่ระบุ

**ไวยากรณ์**

```typescript
d.DoubleTapXY(x: number, y: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `x` | `number` | พิกัด X |
| `y` | `number` | พิกัด Y |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.TapLongXY

แตะค้างที่พิกัดที่ระบุ

**ไวยากรณ์**

```typescript
d.TapLongXY(x: number, y: number, delay?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `x` | `number` | พิกัด X |
| `y` | `number` | พิกัด Y |
| `delay` | `number *(ไม่บังคับ)*` | ระยะเวลาค้างเป็นวินาที (ค่าเริ่มต้น: 1) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.TapLong

แตะค้างที่ element

**ไวยากรณ์**

```typescript
d.TapLong(xpath: string, xml?: string, delay?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `delay` | `number *(ไม่บังคับ)*` | ระยะเวลาค้างเป็นวินาที (ค่าเริ่มต้น: 1) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.TapLongCenter

แตะค้างที่ตรงกลาง element

**ไวยากรณ์**

```typescript
d.TapLongCenter(xpath: string, xml?: string, delay?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `delay` | `number *(ไม่บังคับ)*` | ระยะเวลาค้างเป็นวินาที (ค่าเริ่มต้น: 1) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.Swipe

ปัดจากจุดหนึ่งไปอีกจุดหนึ่ง

**ไวยากรณ์**

```typescript
d.Swipe(x1: number, y1: number, x2: number, y2: number, steps?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `x1` | `number` | X เริ่มต้น |
| `y1` | `number` | Y เริ่มต้น |
| `x2` | `number` | X สิ้นสุด |
| `y2` | `number` | Y สิ้นสุด |
| `steps` | `number *(ไม่บังคับ)*` | จำนวน step (มาก = ช้าลง, 0 = สุ่ม 30-40) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.SwipeUp

ปัดขึ้น

**ไวยากรณ์**

```typescript
d.SwipeUp(count?: number, checkScreenChange?: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `count` | `number *(ไม่บังคับ)*` | จำนวนครั้ง |
| `checkScreenChange` | `boolean *(ไม่บังคับ)*` | ถ้า true จะปัดจนหน้าจอไม่เปลี่ยน (ค่าเริ่มต้น: false) |

**คืนค่า** `boolean` — True ถ้าหน้าจอหยุดเปลี่ยน (เฉพาะเมื่อ checkScreenChange = true)

---

### d.SwipeDown

ปัดลง

**ไวยากรณ์**

```typescript
d.SwipeDown(count?: number, checkScreenChange?: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `count` | `number *(ไม่บังคับ)*` | จำนวนครั้ง |
| `checkScreenChange` | `boolean *(ไม่บังคับ)*` | ถ้า true จะปัดจนหน้าจอไม่เปลี่ยน (ค่าเริ่มต้น: false) |

**คืนค่า** `boolean` — True ถ้าหน้าจอหยุดเปลี่ยน (เฉพาะเมื่อ checkScreenChange = true)

---

### d.SwipeLeft

ปัดซ้าย

**ไวยากรณ์**

```typescript
d.SwipeLeft(count?: number, checkScreenChange?: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `count` | `number *(ไม่บังคับ)*` | จำนวนครั้ง |
| `checkScreenChange` | `boolean *(ไม่บังคับ)*` | ถ้า true จะปัดจนหน้าจอไม่เปลี่ยน (ค่าเริ่มต้น: false) |

**คืนค่า** `boolean` — True ถ้าหน้าจอหยุดเปลี่ยน (เฉพาะเมื่อ checkScreenChange = true)

---

### d.SwipeRight

ปัดขวา

**ไวยากรณ์**

```typescript
d.SwipeRight(count?: number, checkScreenChange?: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `count` | `number *(ไม่บังคับ)*` | จำนวนครั้ง |
| `checkScreenChange` | `boolean *(ไม่บังคับ)*` | ถ้า true จะปัดจนหน้าจอไม่เปลี่ยน (ค่าเริ่มต้น: false) |

**คืนค่า** `boolean` — True ถ้าหน้าจอหยุดเปลี่ยน (เฉพาะเมื่อ checkScreenChange = true)

---

### d.SwipeXpath

ปัดจาก element หนึ่งไปอีก element หนึ่ง

**ไวยากรณ์**

```typescript
d.SwipeXpath(xpathFrom: string, xpathTo: string, xml?: string, steps?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpathFrom` | `string` | Xpath ของ element เริ่ม |
| `xpathTo` | `string` | Xpath ของ element สิ้นสุด |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `steps` | `number *(ไม่บังคับ)*` | จำนวน step (มาก = ช้าลง, 0 = สุ่ม 30-40) |

**คืนค่า** `boolean` — Success status

---

### d.SwipeAndTap

ปัดและแตะ element เมื่อพบ

**ไวยากรณ์**

```typescript
d.SwipeAndTap(xpath: string, xml?: string, timeout?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `timeout` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาที (ค่าเริ่มต้น: 0) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.InputText

ป้อนข้อความลง element

**ไวยากรณ์**

```typescript
d.InputText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector (ว่างเพื่อป้อนที่ focus ปัจจุบัน) |
| `content` | `string` | ข้อความที่จะป้อน |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `isDontClearText` | `boolean *(ไม่บังคับ)*` | ถ้า true จะ append โดยไม่ลบของเดิม (ค่าเริ่มต้น: false) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.TypeText

ป้อนข้อความลง element ทีละอักษร

**ไวยากรณ์**

```typescript
d.TypeText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string` | Xpath selector (ว่างเพื่อป้อนที่ focus ปัจจุบัน) |
| `content` | `string` | ข้อความที่จะป้อน |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |
| `isDontClearText` | `boolean *(ไม่บังคับ)*` | ถ้า true จะ append โดยไม่ลบของเดิม (ค่าเริ่มต้น: false) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.InputKeyCode

กด key code ที่ระบุ

**ไวยากรณ์**

```typescript
d.InputKeyCode(keyCode: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `keyCode` | `number` | Android key code |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.InputEnter

กดปุ่ม Enter

**ไวยากรณ์**

```typescript
d.InputEnter(): boolean
```

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.InputEnd

กดปุ่ม End (เลื่อน cursor ไปท้าย)

**ไวยากรณ์**

```typescript
d.InputEnd(): boolean
```

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.ClearText

ล้างข้อความใน element

**ไวยากรณ์**

```typescript
d.ClearText(xpath?: string, xml?: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string *(ไม่บังคับ)*` | Xpath selector |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.SetAdbKeyboard

ตั้ง ADB keyboard เป็น input method หลัก

**ไวยากรณ์**

```typescript
d.SetAdbKeyboard(): boolean
```

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.HideAdbKeyboard

ซ่อน ADB keyboard

**ไวยากรณ์**

```typescript
d.HideAdbKeyboard(): void
```

---

### d.ScreenShot

ถ่ายภาพหน้าจอ สามารถ crop ตาม element ได้

**ไวยากรณ์**

```typescript
d.ScreenShot(xpath?: string, xml?: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `xpath` | `string *(ไม่บังคับ)*` | Xpath selector เพื่อ crop ตาม bounds ของ element (ไม่บังคับ) |
| `xml` | `string *(ไม่บังคับ)*` | XML dump (ว่างเพื่อ dump อัตโนมัติ, ไม่บังคับ) |

**คืนค่า** `string` — ภาพ base64

---

## ฟังก์ชันอุปกรณ์

### d.Shell

รันคำสั่ง shell บนอุปกรณ์

**ไวยากรณ์**

```typescript
d.Shell(command: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `command` | `string` | คำสั่ง shell |

**คืนค่า** `string` — Output ของคำสั่ง

---

### d.IsClosed

ตรวจสอบว่าโทรศัพท์หลุดการเชื่อมต่อหรือไม่

**ไวยากรณ์**

```typescript
d.IsClosed(): boolean
```

**คืนค่า** `boolean` — True ถ้าหลุดการเชื่อมต่อ

---

### d.DeviceInfo

ดึงข้อมูลอุปกรณ์

**ไวยากรณ์**

```typescript
d.DeviceInfo(): string
```

**คืนค่า** `string` — String ข้อมูลอุปกรณ์

---

### d.DeviceSize

ดึงขนาดหน้าจออุปกรณ์เป็น string

**ไวยากรณ์**

```typescript
d.DeviceSize(): string
```

**คืนค่า** `string` — ขนาด (เช่น "1080x1920")

---

### d.DeviceHeight

ดึงความสูงหน้าจออุปกรณ์

**ไวยากรณ์**

```typescript
d.DeviceHeight(): number
```

**คืนค่า** `number` — ความสูงเป็นพิกเซล

---

### d.DeviceWidth

ดึงความกว้างหน้าจออุปกรณ์

**ไวยากรณ์**

```typescript
d.DeviceWidth(): number
```

**คืนค่า** `number` — ความกว้างเป็นพิกเซล

---

### d.GetDeviceIP

ดึง IP ของอุปกรณ์บนเครือข่ายปัจจุบัน (LAN IP)

**ไวยากรณ์**

```typescript
d.GetDeviceIP(): string
```

**คืนค่า** `string` — IP address

---

### d.ChangeLanguage

เปลี่ยนภาษาอุปกรณ์

**ไวยากรณ์**

```typescript
d.ChangeLanguage(lang: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `lang` | `string` | Language code (เช่น "en", "vi") |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.SetWallpaper

ตั้งวอลเปเปอร์ของอุปกรณ์

**ไวยากรณ์**

```typescript
d.SetWallpaper(imagePath: string, wallpaperType: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `imagePath` | `string` | Path local ของไฟล์ภาพ (caller เลือกไว้แล้ว) |
| `wallpaperType` | `string` | "home", "lock", หรือ "both" |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.IsScreenOn

ตรวจสอบว่าหน้าจอเปิดอยู่หรือไม่

**ไวยากรณ์**

```typescript
d.IsScreenOn(): boolean
```

**คืนค่า** `boolean` — True ถ้าหน้าจอเปิดอยู่

---

### d.SleepScreen

ปิดหน้าจอ

**ไวยากรณ์**

```typescript
d.SleepScreen(): void
```

---

### d.UnlockScreen

ปลดล็อกหน้าจอด้วยการปัด

**ไวยากรณ์**

```typescript
d.UnlockScreen(): void
```

---

### d.EnableWifi

เปิด WiFi

**ไวยากรณ์**

```typescript
d.EnableWifi(): void
```

---

### d.DisableWifi

ปิด WiFi

**ไวยากรณ์**

```typescript
d.DisableWifi(): void
```

---

### d.ConnectWifi

เชื่อมต่อ WiFi

**ไวยากรณ์**

```typescript
d.ConnectWifi(wifiName: string, wifiPass: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `wifiName` | `string` | WiFi SSID |
| `wifiPass` | `string` | รหัสผ่าน WiFi |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.CreateFolder

Create folder on device

**ไวยากรณ์**

```typescript
d.CreateFolder(folderPath: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | Folder path |

---

### d.DeleteFolder

Delete folder on device

**ไวยากรณ์**

```typescript
d.DeleteFolder(folderPath: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | Folder path |

---

### d.DeleteFile

Delete file on device

**ไวยากรณ์**

```typescript
d.DeleteFile(path: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `path` | `string` | File path (supports wildcards) |

---

### d.PullFile

Pull ไฟล์จากอุปกรณ์ไปยัง PC

**ไวยากรณ์**

```typescript
d.PullFile(filePath: string, folderPath: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ไฟล์บนอุปกรณ์ |
| `folderPath` | `string` | Path โฟลเดอร์บน PC เพื่อบันทึก |

---

### d.PushFile

Push ไฟล์จาก PC ไปยังอุปกรณ์

**ไวยากรณ์**

```typescript
d.PushFile(filePath: string, folderPath: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ไฟล์บน PC |
| `folderPath` | `string` | Path โฟลเดอร์บนอุปกรณ์ (เช่น "/sdcard/") |

---

### d.PushImage

Push ภาพไปยัง gallery ของอุปกรณ์

**ไวยากรณ์**

```typescript
d.PushImage(filePath: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePath` | `string` | Path ภาพ local; หลายภาพคั่นด้วย "|" |

---

### d.PushMedia

Push ไฟล์ media ไปยัง gallery (รองรับภาพและวิดีโอ)

**ไวยากรณ์**

```typescript
d.PushMedia(filePaths: string[]): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `filePaths` | `string[]` | อาร์เรย์ path media local |

---

### d.CheckProxy

Get current IP address of proxy

**ไวยากรณ์**

```typescript
d.CheckProxy(proxy?: string, web?: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `proxy` | `string *(ไม่บังคับ)*` | Proxy string (optional, format: "host:port" or "host:port:user:pass") |
| `web` | `string *(ไม่บังคับ)*` | URL to check IP (default: "ifconfig.co") |

**คืนค่า** `string` — IP address or error message

---

### d.ConnectProxy

เชื่อมต่อ proxy

**ไวยากรณ์**

```typescript
d.ConnectProxy(proxy: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `proxy` | `string` | String proxy (รูปแบบ: "host:port") |

---

### d.DisconnectProxy

ตัดการเชื่อมต่อ proxy

**ไวยากรณ์**

```typescript
d.DisconnectProxy(): void
```

---

### d.GetClipboard

ดึงข้อมูล clipboard

**ไวยากรณ์**

```typescript
d.GetClipboard(): string
```

**คืนค่า** `string` — ข้อความ clipboard

---

### d.SetClipboard

ตั้งข้อมูล clipboard

**ไวยากรณ์**

```typescript
d.SetClipboard(content: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `content` | `string` | ข้อความที่จะตั้ง |

---

## ฟังก์ชันแอป

### d.OpenApp

เปิดแอปตาม package name

**ไวยากรณ์**

```typescript
d.OpenApp(package: string, isKill?: boolean, timeout?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |
| `isKill` | `boolean *(ไม่บังคับ)*` | ถ้า true จะ force close แอปก่อนเปิด (ค่าเริ่มต้น: false) |
| `timeout` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาทีรอแอปเปิด (ค่าเริ่มต้น: 0 = ไม่รอ) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.CloseApp

ปิดแอปตาม package

**ไวยากรณ์**

```typescript
d.CloseApp(package: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package ของแอป |

---

### d.IsAppOpened

ตรวจสอบว่าแอปอยู่ใน foreground หรือไม่

**ไวยากรณ์**

```typescript
d.IsAppOpened(package: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |

**คืนค่า** `boolean` — True ถ้าแอปอยู่ใน foreground

---

### d.GetCurrentApp

ดึงแอปที่อยู่ใน foreground

**ไวยากรณ์**

```typescript
d.GetCurrentApp(): string
```

**คืนค่า** `string` — Package ของแอป

---

### d.IsAppInstalled

ตรวจสอบว่าแอปติดตั้งแล้วหรือไม่

**ไวยากรณ์**

```typescript
d.IsAppInstalled(package: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |

**คืนค่า** `boolean` — True ถ้าติดตั้งแล้ว

---

### d.ClearDataApp

ล้างข้อมูลแอป

**ไวยากรณ์**

```typescript
d.ClearDataApp(package: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |

---

### d.GetAppVersion

ดึงเวอร์ชันของแอป

**ไวยากรณ์**

```typescript
d.GetAppVersion(package: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |

**คืนค่า** `string` — String เวอร์ชัน

---

### d.InstallApp

ติดตั้งแอปจากไฟล์ APK

**ไวยากรณ์**

```typescript
d.InstallApp(apkPath: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `apkPath` | `string` | Path ไฟล์ APK |

---

### d.UninstallApp

ถอนการติดตั้งแอป

**ไวยากรณ์**

```typescript
d.UninstallApp(package: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |

---

### d.GetInfoApp

ดึงข้อมูลแอป

**ไวยากรณ์**

```typescript
d.GetInfoApp(package: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name ของแอป |

**คืนค่า** `string` — String ข้อมูลแอป

---

### d.GetListApps

ดึงรายการ package ทั้งหมดบนอุปกรณ์

**ไวยากรณ์**

```typescript
d.GetListApps(): string[]
```

**คืนค่า** `string[]` — อาร์เรย์ package name

---

### d.GetListAppsInstalled

ดึงรายการ package ที่ติดตั้ง (ไม่รวม system app)

**ไวยากรณ์**

```typescript
d.GetListAppsInstalled(): string[]
```

**คืนค่า** `string[]` — อาร์เรย์ package name

---

### d.GetCurrentActivity

ดึง activity ที่อยู่ใน foreground

**ไวยากรณ์**

```typescript
d.GetCurrentActivity(): string
```

**คืนค่า** `string` — ชื่อ activity

---

### d.StartActivity

เริ่ม Android activity

**ไวยากรณ์**

```typescript
d.StartActivity(activity: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `activity` | `string` | ชื่อ activity (เช่น "com.facebook.katana/.LoginActivity") |

---

## Facebook

### d.OpenAppFB

เปิดแอป Facebook ด้วย LoginActivity

**ไวยากรณ์**

```typescript
d.OpenAppFB(package: string, isKill?: boolean, timeout?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `package` | `string` | Package name |
| `isKill` | `boolean *(ไม่บังคับ)*` | ถ้า true จะ force close แอปก่อนเปิด (ค่าเริ่มต้น: false) |
| `timeout` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาทีรอแอปเปิด (ค่าเริ่มต้น: 0 = ไม่รอ) |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.OpenUrlSchemeFB

เปิด URL scheme ในแอป Facebook (เช่น "fb://profile/123")

**ไวยากรณ์**

```typescript
d.OpenUrlSchemeFB(link: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `link` | `string` | URL scheme ที่จะเปิด |

---

### d.BackupAppFB

Backup ข้อมูลแอป (ต้องการ root)

**ไวยากรณ์**

```typescript
d.BackupAppFB(folderPath: string, fileNameWithoutExtension: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | โฟลเดอร์ที่บันทึก backup |
| `fileNameWithoutExtension` | `string` | ชื่อไฟล์ backup โดยไม่มี extension |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

### d.RestoreAppFB

Restore ข้อมูลแอปจาก backup (ต้องการ root)

**ไวยากรณ์**

```typescript
d.RestoreAppFB(folderPath: string, fileNameWithoutExtension: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `folderPath` | `string` | โฟลเดอร์ที่มี backup |
| `fileNameWithoutExtension` | `string` | ชื่อไฟล์ backup โดยไม่มี extension |

**คืนค่า** `boolean` — สถานะสำเร็จ

---

## ฟังก์ชัน Instagram

### d.OpenUrlSchemeIG

เปิด URL scheme ในแอป Instagram (เช่น "instagram://user?username=xxx")

**ไวยากรณ์**

```typescript
d.OpenUrlSchemeIG(link: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `link` | `string` | URL scheme ที่จะเปิด |

---

## Facebook Lite

### d.OpenUrlSchemeFBLite

เปิด URL scheme ในแอป Facebook Lite

**ไวยากรณ์**

```typescript
d.OpenUrlSchemeFBLite(link: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `link` | `string` | URL scheme ที่จะเปิด |

---

## ฟังก์ชันอื่น ๆ

### d.Delay

Delay execution

**ไวยากรณ์**

```typescript
d.Delay(delay: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### d.DelayRandom

Delay random time

**ไวยากรณ์**

```typescript
d.DelayRandom(min: number, max: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
