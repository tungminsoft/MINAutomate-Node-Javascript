# เบราว์เซอร์ — `c.*`

> API ควบคุมเบราว์เซอร์ ใช้ได้เมื่อ workflow ทำงานบน Chrome ผ่าน WebDriver

**จำนวนฟังก์ชันทั้งหมด:** 81

## สารบัญ

- **หน้าต่าง**
  - [c.Open](#c-open)
  - [c.Close](#c-close)
  - [c.IsClosed](#c-isclosed)
  - [c.GetSize](#c-getsize)
  - [c.SetSize](#c-setsize)
  - [c.RestoreSize](#c-restoresize)
  - [c.GetPosition](#c-getposition)
  - [c.SetPosition](#c-setposition)
  - [c.RestorePosition](#c-restoreposition)
- **เบราว์เซอร์**
  - [c.GotoUrl](#c-gotourl)
  - [c.GetUrl](#c-geturl)
  - [c.WaitUrlChanged](#c-waiturlchanged)
  - [c.Back](#c-back)
  - [c.Refresh](#c-refresh)
  - [c.NewTab](#c-newtab)
  - [c.ActiveTab](#c-activetab)
  - [c.CloseTab](#c-closetab)
  - [c.CloseOtherTabs](#c-closeothertabs)
  - [c.SwitchFrame](#c-switchframe)
  - [c.SwitchPopup](#c-switchpopup)
  - [c.SwitchDefaultFrame](#c-switchdefaultframe)
  - [c.SwitchParentFrame](#c-switchparentframe)
  - [c.AcceptAlert](#c-acceptalert)
  - [c.CancelAlert](#c-cancelalert)
  - [c.GetPageSource](#c-getpagesource)
- **องค์ประกอบ**
  - [c.ExistElement](#c-existelement)
  - [c.ExistElements](#c-existelements)
  - [c.WaitElementHide](#c-waitelementhide)
  - [c.CountElement](#c-countelement)
  - [c.RemoveElement](#c-removeelement)
  - [c.IsElementVisible](#c-iselementvisible)
  - [c.IsElementOnScreen](#c-iselementonscreen)
  - [c.GetElementAttr](#c-getelementattr)
  - [c.GetElementInnerText](#c-getelementinnertext)
  - [c.SetElementInnerText](#c-setelementinnertext)
  - [c.GetElementInnerHTML](#c-getelementinnerhtml)
  - [c.GetElementOuterHTML](#c-getelementouterhtml)
  - [c.GetElementValue](#c-getelementvalue)
  - [c.SetElementValue](#c-setelementvalue)
- **เมาส์ (Click / Hover / Move / Scroll)**
  - [c.Click](#c-click)
  - [c.ClickJS](#c-clickjs)
  - [c.HoverElement](#c-hoverelement)
  - [c.MoveElement](#c-moveelement)
  - [c.ScrollDistance](#c-scrolldistance)
  - [c.ScrollElement](#c-scrollelement)
  - [c.ScrollIfNotOnScreen](#c-scrollifnotonscreen)
  - [c.ScrollAndWait](#c-scrollandwait)
  - [c.ScrollAndClick](#c-scrollandclick)
- **คีย์บอร์ด**
  - [c.SendKeys](#c-sendkeys)
  - [c.SendKeys2](#c-sendkeys2)
  - [c.SendKeys3](#c-sendkeys3)
  - [c.SendFile](#c-sendfile)
  - [c.SelectText](#c-selecttext)
  - [c.ClearText](#c-cleartext)
  - [c.ClearText2](#c-cleartext2)
  - [c.SelectOption](#c-selectoption)
  - [c.KeyPress](#c-keypress)
  - [c.SendEnter](#c-sendenter)
  - [c.SendBackspace](#c-sendbackspace)
  - [c.SendClear](#c-sendclear)
  - [c.SendDownArrow](#c-senddownarrow)
  - [c.SendUpArrow](#c-senduparrow)
  - [c.SendHome](#c-sendhome)
  - [c.SendEnd](#c-sendend)
- **อื่น ๆ (JS / Cookies / Useragent / Screenshot)**
  - [c.ExecuteJS](#c-executejs)
  - [c.LogJS](#c-logjs)
  - [c.GetExtensionId](#c-getextensionid)
  - [c.GetCookies](#c-getcookies)
  - [c.AddCookies](#c-addcookies)
  - [c.DeleteCookies](#c-deletecookies)
  - [c.GetUseragent](#c-getuseragent)
  - [c.SetUseragent](#c-setuseragent)
  - [c.Screenshot](#c-screenshot)
  - [c.PlayVideo](#c-playvideo)
- **เลียนแบบมนุษย์ (Anti-Bot)**
  - [c.HumanClick](#c-humanclick)
  - [c.HumanSendKeys](#c-humansendkeys)
  - [c.HumanMoveElement](#c-humanmoveelement)
  - [c.HumanDrag](#c-humandrag)
  - [c.HumanScrollDistance](#c-humanscrolldistance)
- **หน่วงเวลา**
  - [c.DelayTime](#c-delaytime)
  - [c.DelayRandom](#c-delayrandom)

---

## หน้าต่าง

### c.Open

เปิดเบราว์เซอร์ด้วย profile ที่ตั้งไว้

**ไวยากรณ์**

```typescript
c.Open(): boolean
```

**คืนค่า** `boolean` — True ถ้าเปิดสำเร็จ

---

### c.Close

ปิดเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.Close(): boolean
```

**คืนค่า** `boolean` — True ถ้าปิดสำเร็จ

---

### c.IsClosed

ตรวจสอบว่าเบราว์เซอร์ปิดอยู่หรือไม่

**ไวยากรณ์**

```typescript
c.IsClosed(): boolean
```

**คืนค่า** `boolean` — True ถ้าปิดอยู่

---

### c.GetSize

ดึงขนาดหน้าต่างเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.GetSize(): string
```

**คืนค่า** `string` — String ขนาด (เช่น "1024x768")

---

### c.SetSize

ตั้งขนาดหน้าต่างเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.SetSize(width: number, height: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `width` | `number` | ความกว้างเป็นพิกเซล |
| `height` | `number` | ความสูงเป็นพิกเซล |

**คืนค่า** `boolean` — True ถ้าตั้งสำเร็จ

---

### c.RestoreSize

คืนค่าขนาดเดิมของหน้าต่างเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.RestoreSize(): boolean
```

**คืนค่า** `boolean` — True ถ้าคืนค่าสำเร็จ

---

### c.GetPosition

ดึงตำแหน่งของหน้าต่างเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.GetPosition(): string
```

**คืนค่า** `string` — String ตำแหน่ง (เช่น "100,200")

---

### c.SetPosition

ตั้งตำแหน่งของหน้าต่างเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.SetPosition(x: number, y: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `x` | `number` | ตำแหน่ง X |
| `y` | `number` | ตำแหน่ง Y |

**คืนค่า** `boolean` — True ถ้าตั้งสำเร็จ

---

### c.RestorePosition

คืนค่าตำแหน่งเดิมของหน้าต่างเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.RestorePosition(): boolean
```

**คืนค่า** `boolean` — True ถ้าคืนค่าสำเร็จ

---

## เบราว์เซอร์

### c.GotoUrl

นำทางไปยัง URL

**ไวยากรณ์**

```typescript
c.GotoUrl(url: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `url` | `string` | URL ปลายทาง |

**คืนค่า** `boolean` — True ถ้านำทางสำเร็จ

---

### c.GetUrl

ดึง URL ของหน้าปัจจุบัน

**ไวยากรณ์**

```typescript
c.GetUrl(): string
```

**คืนค่า** `string` — URL ปัจจุบัน

---

### c.WaitUrlChanged

รอจนกว่า URL จะต่างจาก `currentUrl` หรือ timeout

**ไวยากรณ์**

```typescript
c.WaitUrlChanged(currentUrl: string, timeout: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `currentUrl` | `string` | URL อ้างอิงสำหรับเทียบ |
| `timeout` | `number` | Timeout เป็นวินาที |

**คืนค่า** `boolean` — True ถ้า URL เปลี่ยนก่อน timeout

---

### c.Back

ย้อนกลับใน history เบราว์เซอร์

**ไวยากรณ์**

```typescript
c.Back(count: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `count` | `number` | จำนวนครั้งที่ย้อนกลับ |

---

### c.Refresh

รีเฟรชหน้าปัจจุบัน

**ไวยากรณ์**

```typescript
c.Refresh(): void
```

---

### c.NewTab

เปิด tab ใหม่ สลับ focus ไปที่นั้น และจะนำทางไป `url` หากระบุ (W3C /window/new ไม่สลับอัตโนมัติ — implementation แยก handle ใหม่และสลับเอง)

**ไวยากรณ์**

```typescript
c.NewTab(url?: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `url` | `string *(ไม่บังคับ)*` | URL ที่จะโหลดใน tab ใหม่ (ส่ง "" เพื่อเปิด tab ว่าง) |

**คืนค่า** `boolean` — True ถ้าสร้าง tab ได้

---

### c.ActiveTab

สลับ focus ไปยัง tab ตาม index (0-based) ในรายการ window handle ปัจจุบัน

**ไวยากรณ์**

```typescript
c.ActiveTab(index: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `index` | `number` | ตำแหน่ง tab (0 = tab แรก) |

**คืนค่า** `boolean` — True ถ้าสลับสำเร็จ

---

### c.CloseTab

ปิด tab ที่ focus อยู่ หลังจากปิดจะสลับกลับไป tab[0] ถ้ายังเหลือ

**ไวยากรณ์**

```typescript
c.CloseTab(): boolean
```

**คืนค่า** `boolean` — True ถ้าปิดสำเร็จ

---

### c.CloseOtherTabs

ปิด tab อื่นทั้งหมด เก็บ tab ที่ focus อยู่

**ไวยากรณ์**

```typescript
c.CloseOtherTabs(): boolean
```

**คืนค่า** `boolean` — True ถ้ารันสำเร็จ

---

### c.SwitchFrame

สลับเข้า iframe ตาม index (string ตัวเลข) หรือ selector (xpath/css)

**ไวยากรณ์**

```typescript
c.SwitchFrame(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | Index แบบ string ("0","1",...) หรือ CSS/XPath selector |

**คืนค่า** `boolean` — True ถ้าสลับสำเร็จ

---

### c.SwitchPopup

ค้นหา popup ตาม title แล้วสลับ focus ไปที่นั้น วน window handle ทั้งหมด สลับและเทียบ title === input

**ไวยากรณ์**

```typescript
c.SwitchPopup(title: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `title` | `string` | Title ที่ต้องการ match (เทียบแบบตรง) |

**คืนค่า** `boolean` — True ถ้าพบและสลับสำเร็จ

---

### c.SwitchDefaultFrame

ออกจาก nested frame ทั้งหมดกลับไป document ระดับบน

**ไวยากรณ์**

```typescript
c.SwitchDefaultFrame(): boolean
```

**คืนค่า** `boolean` — True ถ้าสลับสำเร็จ

---

### c.SwitchParentFrame

สลับกลับไป frame แม่

**ไวยากรณ์**

```typescript
c.SwitchParentFrame(): boolean
```

**คืนค่า** `boolean` — True ถ้าสลับสำเร็จ

---

### c.AcceptAlert

ยอมรับ alert dialog (กด OK)

**ไวยากรณ์**

```typescript
c.AcceptAlert(): boolean
```

**คืนค่า** `boolean` — True ถ้ายอมรับสำเร็จ

---

### c.CancelAlert

ยกเลิก alert dialog (กด Cancel)

**ไวยากรณ์**

```typescript
c.CancelAlert(): boolean
```

**คืนค่า** `boolean` — True ถ้ายกเลิกสำเร็จ

---

### c.GetPageSource

ดึง source HTML ของหน้า

**ไวยากรณ์**

```typescript
c.GetPageSource(): string
```

**คืนค่า** `string` — Source ของหน้า

---

## องค์ประกอบ

### c.ExistElement

ตรวจสอบว่า element มีอยู่หรือไม่

**ไวยากรณ์**

```typescript
c.ExistElement(selector: string, timeout?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `timeout` | `number *(ไม่บังคับ)*` | Timeout เป็นวินาที (0 = ตรวจทันที) |

**คืนค่า** `boolean` — True ถ้า element มีอยู่

---

### c.ExistElements

ตรวจสอบว่ามี element ใดในรายการอยู่หรือไม่

**ไวยากรณ์**

```typescript
c.ExistElements(timeout: number, arrSelector: string[]): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `timeout` | `number` | Timeout เป็นวินาที |
| `arrSelector` | `string[]` | อาร์เรย์ CSS selector หรือ XPath |

**คืนค่า** `string` — Selector ของ element แรกที่พบ หรือ string ว่าง

---

### c.WaitElementHide

รอจนกว่า element จะหายไป

**ไวยากรณ์**

```typescript
c.WaitElementHide(selector: string, timeout: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `timeout` | `number` | Timeout เป็นวินาที |

**คืนค่า** `boolean` — True ถ้า element หายไปแล้ว

---

### c.CountElement

นับ element ที่ match selector

**ไวยากรณ์**

```typescript
c.CountElement(selector: string): number
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `number` — จำนวน element ที่ match

---

### c.RemoveElement

ลบ element ออกจาก DOM

**ไวยากรณ์**

```typescript
c.RemoveElement(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าลบสำเร็จ

---

### c.IsElementVisible

ตรวจสอบว่า element visible บนหน้าหรือไม่

**ไวยากรณ์**

```typescript
c.IsElementVisible(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้า visible

---

### c.IsElementOnScreen

ตรวจสอบว่า element อยู่ใน viewport หรือไม่

**ไวยากรณ์**

```typescript
c.IsElementOnScreen(selector: string, timeout: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `timeout` | `number` | Timeout เป็นวินาที |

**คืนค่า** `boolean` — True ถ้า element อยู่ใน viewport

---

### c.GetElementAttr

ดึงค่า attribute ของ element

**ไวยากรณ์**

```typescript
c.GetElementAttr(selector: string, attributeName: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `attributeName` | `string` | ชื่อ attribute |

**คืนค่า** `string` — ค่า attribute

---

### c.GetElementInnerText

ดึง inner text ของ element

**ไวยากรณ์**

```typescript
c.GetElementInnerText(selector: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `string` — Inner text

---

### c.SetElementInnerText

ตั้ง inner text ของ element

**ไวยากรณ์**

```typescript
c.SetElementInnerText(selector: string, value: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `value` | `string` | Text ที่จะตั้ง |

**คืนค่า** `string` — ผลลัพธ์

---

### c.GetElementInnerHTML

ดึง innerHTML ของ element

**ไวยากรณ์**

```typescript
c.GetElementInnerHTML(selector: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `string` — innerHTML

---

### c.GetElementOuterHTML

ดึง outerHTML ของ element

**ไวยากรณ์**

```typescript
c.GetElementOuterHTML(selector: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `string` — outerHTML

---

### c.GetElementValue

ดึง value ของ element (สำหรับ input)

**ไวยากรณ์**

```typescript
c.GetElementValue(selector: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `string` — Value ของ element

---

### c.SetElementValue

ตั้ง value ของ element (สำหรับ input)

**ไวยากรณ์**

```typescript
c.SetElementValue(selector: string, value: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `value` | `string` | Value ที่จะตั้ง |

**คืนค่า** `boolean` — ผลลัพธ์

---

## เมาส์ (Click / Hover / Move / Scroll)

### c.Click

คลิก element ตาม CSS selector หรือ XPath

**ไวยากรณ์**

```typescript
c.Click(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าคลิกสำเร็จ

---

### c.ClickJS

คลิก element ด้วย JavaScript (bypass click interception)

**ไวยากรณ์**

```typescript
c.ClickJS(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าคลิกสำเร็จ

---

### c.HoverElement

Hover เมาส์ไปที่ element (W3C Actions API — pointerMove ไปกึ่งกลาง element) ใช้ duration=100ms เพื่อให้ event mouseover/mouseenter ทำงานครบ

**ไวยากรณ์**

```typescript
c.HoverElement(selector: string, delayMs?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `delayMs` | `number *(ไม่บังคับ)*` | ระยะเวลา hover เป็น ms (ค่าเริ่มต้น=100) |

**คืนค่า** `boolean` — True ถ้า hover สำเร็จ

---

### c.MoveElement

เลื่อนเมาส์ไปที่กึ่งกลาง element (ทันที ไม่มี hover delay) ต่างจาก HoverElement ตรง duration=0 — ไม่ trigger mouseover animation

**ไวยากรณ์**

```typescript
c.MoveElement(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าเลื่อนสำเร็จ

---

### c.ScrollDistance

Scroll ตามระยะพิกเซล

**ไวยากรณ์**

```typescript
c.ScrollDistance(distance: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `distance` | `number` | ระยะพิกเซล (บวก = ลง, ลบ = ขึ้น) |

**คืนค่า** `boolean` — True ถ้า scroll สำเร็จ

---

### c.ScrollElement

Scroll ไปที่ element

**ไวยากรณ์**

```typescript
c.ScrollElement(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้า scroll สำเร็จ

---

### c.ScrollIfNotOnScreen

Scroll ไปที่ element เฉพาะเมื่อยัง visible ไม่อยู่บนหน้าจอ

**ไวยากรณ์**

```typescript
c.ScrollIfNotOnScreen(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้า element อยู่บนหน้าจอแล้ว

---

### c.ScrollAndWait

Scroll ไปที่ element แล้วรอ

**ไวยากรณ์**

```typescript
c.ScrollAndWait(selector: string, timeWait: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `timeWait` | `number` | เวลารอเป็นวินาทีหลัง scroll |

**คืนค่า** `boolean` — True ถ้า scroll สำเร็จ

---

### c.ScrollAndClick

Scroll ไปที่ element แล้วคลิก

**ไวยากรณ์**

```typescript
c.ScrollAndClick(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าพบและคลิกสำเร็จ

---

## คีย์บอร์ด

### c.SendKeys

ส่ง keystroke ไปที่ element (ล้างก่อน แล้วพิมพ์ทีละอักษร)

**ไวยากรณ์**

```typescript
c.SendKeys(selector: string, content: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `content` | `string` | ข้อความที่จะพิมพ์ |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendKeys2

ส่ง keystroke ไปที่ element โดยมีตัวเลือกไม่ล้างก่อน

**ไวยากรณ์**

```typescript
c.SendKeys2(selector: string, content: string, isDontClearText: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `content` | `string` | ข้อความที่จะพิมพ์ |
| `isDontClearText` | `boolean` | ถ้า true จะ append โดยไม่ล้าง |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendKeys3

ส่ง keystroke ด้วย JavaScript setValue + input event

**ไวยากรณ์**

```typescript
c.SendKeys3(selector: string, content: string, isDontClearText: boolean): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `content` | `string` | ข้อความที่จะตั้ง |
| `isDontClearText` | `boolean` | ถ้า true จะ append โดยไม่ล้าง |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendFile

ส่งไฟล์ไปที่ element file input

**ไวยากรณ์**

```typescript
c.SendFile(selector: string, value: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath ของ file input |
| `value` | `string` | Path ไฟล์ |

**คืนค่า** `boolean` — True ถ้าตั้งไฟล์สำเร็จ

---

### c.SelectText

เลือกข้อความทั้งหมดใน element

**ไวยากรณ์**

```typescript
c.SelectText(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าเลือกข้อความสำเร็จ

---

### c.ClearText

ล้างข้อความใน input element

**ไวยากรณ์**

```typescript
c.ClearText(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าล้างสำเร็จ

---

### c.ClearText2

ล้างข้อความผ่าน Ctrl+A + Backspace — fallback สำหรับ input ที่ไม่รองรับ endpoint W3C /clear

**ไวยากรณ์**

```typescript
c.ClearText2(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าล้างสำเร็จ

---

### c.SelectOption

คลิก <option> ลูกของ <select> ที่ attribute `value` ตรงกัน Compose `selector + ">[value='X']"` แล้ว delegate ไป Click — trusted W3C click

**ไวยากรณ์**

```typescript
c.SelectOption(selector: string, value: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath ของ <select> |
| `value` | `string` | ค่า `value` attribute ของ option เป้าหมาย |

**คืนค่า** `boolean` — True ถ้าพบ option และคลิกสำเร็จ

---

### c.KeyPress

กดปุ่มหรือ combo บน element `key` รับ: ชื่อเดี่ยว (Enter, Tab, Space, Backspace, Delete, Escape, Home, End, PageUp/Down, Arrow*, Shift, Control, Alt, Meta, F1..F12), literal เดี่ยว ("a", "@"...), หรือ combo ("Ctrl+A", "Shift+Tab") NullKey ถูก append หลัง combo เพื่อปล่อย modifier

**ไวยากรณ์**

```typescript
c.KeyPress(selector: string, key: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `key` | `string` | ชื่อ key, literal, หรือ combo คั่นด้วย "+" |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendEnter

กด Enter บน element

**ไวยากรณ์**

```typescript
c.SendEnter(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าส่ง Enter สำเร็จ

---

### c.SendBackspace

กด Backspace บน element

**ไวยากรณ์**

```typescript
c.SendBackspace(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าส่ง Backspace สำเร็จ

---

### c.SendClear

ล้าง field ด้วย Ctrl+A + Delete

**ไวยากรณ์**

```typescript
c.SendClear(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าล้างสำเร็จ

---

### c.SendDownArrow

กดปุ่มลูกศรลง

**ไวยากรณ์**

```typescript
c.SendDownArrow(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendUpArrow

กดปุ่มลูกศรขึ้น

**ไวยากรณ์**

```typescript
c.SendUpArrow(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendHome

กดปุ่ม Home

**ไวยากรณ์**

```typescript
c.SendHome(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

### c.SendEnd

กดปุ่ม End

**ไวยากรณ์**

```typescript
c.SendEnd(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าส่งสำเร็จ

---

## อื่น ๆ (JS / Cookies / Useragent / Screenshot)

### c.ExecuteJS

รัน JavaScript ใน context ของเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.ExecuteJS(script: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `script` | `string` | JavaScript code ที่จะรัน |

**คืนค่า** `string` — ผลลัพธ์การรัน script

---

### c.LogJS

Log เนื้อหาไปยัง console ของเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.LogJS(content: string): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `content` | `string` | เนื้อหาที่จะ log |

---

### c.GetExtensionId

ค้น extension ID ตามชื่อแสดง (นำทางไป chrome://extensions/ แล้ว query shadow DOM) เมื่อเสร็จ นำทางกลับไป URL ก่อนหน้าโดยอัตโนมัติ

**ไวยากรณ์**

```typescript
c.GetExtensionId(name: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `name` | `string` | ชื่อ extension (ไม่สนใจตัวเล็ก/ใหญ่, trim) |

**คืนค่า** `string` — Extension ID หรือ "" ถ้าไม่พบ

---

### c.GetCookies

ดึง cookies ของโดเมน

**ไวยากรณ์**

```typescript
c.GetCookies(domain: string): string
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `domain` | `string` | Domain ของ cookie |

**คืนค่า** `string` — JSON string ของ cookies

---

### c.AddCookies

เพิ่ม cookies หลายตัว (รูปแบบ JSON array)

**ไวยากรณ์**

```typescript
c.AddCookies(cookies: string, domain: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `cookies` | `string` | JSON string ของอาร์เรย์ cookies |
| `domain` | `string` | Domain ของ cookie |

**คืนค่า** `boolean` — True ถ้าเพิ่มสำเร็จ

---

### c.DeleteCookies

ลบ cookies ทั้งหมด (alias ของ DeleteAllCookies ระดับ root)

**ไวยากรณ์**

```typescript
c.DeleteCookies(): boolean
```

**คืนค่า** `boolean` — True ถ้าลบสำเร็จ

---

### c.GetUseragent

ดึง user agent ของเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.GetUseragent(): string
```

**คืนค่า** `string` — String user agent

---

### c.SetUseragent

ตั้ง user agent ของเบราว์เซอร์

**ไวยากรณ์**

```typescript
c.SetUseragent(useragent: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `useragent` | `string` | User agent ที่จะตั้ง |

**คืนค่า** `boolean` — ผลลัพธ์

---

### c.Screenshot

ถ่ายภาพหน้าปัจจุบันและคืนค่าเป็น PNG แบบ base64

**ไวยากรณ์**

```typescript
c.Screenshot(): string
```

**คืนค่า** `string` — ภาพ base64 (ว่างถ้าล้มเหลว)

---

### c.PlayVideo

เล่น element วิดีโอ

**ไวยากรณ์**

```typescript
c.PlayVideo(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath ของ element วิดีโอ |

**คืนค่า** `boolean` — True ถ้าวิดีโอเริ่มเล่น

---

## เลียนแบบมนุษย์ (Anti-Bot)

### c.HumanClick

คลิก element เหมือนผู้ใช้จริง: scroll เข้า view, รอ 500-1500ms, ลองสูงสุด 3 ครั้งโดยสุ่มจุดในขอบเขต element (padding 20%), ตรวจสอบ elementFromPoint เพื่อหลีกเลี่ยง overlay บัง, เลื่อนเมาส์ตามเส้นโค้ง Bezier (Fitts's law), pause แล้ว mouse down/up ผ่าน W3C Actions API หลีกเลี่ยงการตรวจจับ "คลิกทันทีโดยไม่มี mousemove" และ "คลิกตรงกลางพอดี"

**ไวยากรณ์**

```typescript
c.HumanClick(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าคลิกสำเร็จ; false ถ้า rect ว่าง (fallback ไป Click) หรือ 3 ครั้งถูกบังทั้งหมด

---

### c.HumanSendKeys

พิมพ์ข้อความทีละอักษรพร้อม delay สุ่มต่ออักษร แทรก "thinking pause" 300-700ms ที่ความน่าจะเป็น 50% ทุก ~10 อักษรเพื่อเลียนแบบมนุษย์หยุดคิด คลิก element อัตโนมัติก่อนเพื่อ focus หลีกเลี่ยงการตรวจจับ "100 อักษรวางใน 0ms"

**ไวยากรณ์**

```typescript
c.HumanSendKeys(selector: string, text: string, minDelay?: number, maxDelay?: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |
| `text` | `string` | ข้อความที่จะพิมพ์ |
| `minDelay` | `number *(ไม่บังคับ)*` | Delay ต่ำสุดต่ออักษรเป็น ms (ส่ง 0 เพื่อใช้ค่าเริ่มต้น 120) |
| `maxDelay` | `number *(ไม่บังคับ)*` | Delay สูงสุดต่ออักษรเป็น ms (ส่ง 0 เพื่อใช้ค่าเริ่มต้น 250) |

**คืนค่า** `boolean` — True ถ้าส่งครบทุกอักษร

---

### c.HumanMoveElement

เลื่อนเคอร์เซอร์ไปยังกึ่งกลาง element ตามเส้นโค้ง Bezier พร้อม jitter ±20% จากกึ่งกลาง หลีกเลี่ยง fingerprinting วิถีตรง

**ไวยากรณ์**

```typescript
c.HumanMoveElement(selector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `selector` | `string` | CSS selector หรือ XPath |

**คืนค่า** `boolean` — True ถ้าเลื่อนสำเร็จ

---

### c.HumanDrag

ลากจาก element ต้นทางไปยัง element ปลายทางด้วยการเคลื่อนไหวช้าและมี pause (1 Actions request atomic) ใช้สำหรับ captcha slider (Cloudflare puzzle), เรียงรายการ, drag-drop UI

**ไวยากรณ์**

```typescript
c.HumanDrag(srcSelector: string, dstSelector: string): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `srcSelector` | `string` | CSS selector หรือ XPath ของ element ต้นทาง |
| `dstSelector` | `string` | CSS selector หรือ XPath ของ element ปลายทาง |

**คืนค่า** `boolean` — True ถ้าลากสำเร็จ

---

### c.HumanScrollDistance

เลียนแบบ user scroll จริงผ่าน W3C Wheel Actions API — ส่ง trusted `wheel` event ก่อน `scroll` event ตามพฤติกรรมเมาส์ wheel จริง ต่างจาก `ScrollDistance` (ใช้ window.scrollBy ส่งแค่ `scroll`): bypass anti-bot ที่ตรวจ "scroll โดยไม่มี wheel" (DataDome, hCaptcha, Cloudflare) แบ่ง `distance` เป็น 3-5 chunk พร้อม jitter ±10% และ delay 80-200ms ระหว่าง chunk

**ไวยากรณ์**

```typescript
c.HumanScrollDistance(distance: number): boolean
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `distance` | `number` | ระยะพิกเซล (บวก = scroll ลง, ลบ = scroll ขึ้น) |

**คืนค่า** `boolean` — True ถ้า scroll เสร็จ

---

## หน่วงเวลา

### c.DelayTime

Delay execution.

**ไวยากรณ์**

```typescript
c.DelayTime(delay: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### c.DelayRandom

Delay for a random duration within a range.

**ไวยากรณ์**

```typescript
c.DelayRandom(min: number, max: number): void
```

**พารามิเตอร์**

| ชื่อ | ประเภท | คำอธิบาย |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
