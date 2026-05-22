# Trình duyệt — `c.*`

> API điều khiển trình duyệt. Khả dụng khi workflow chạy trên Chrome qua WebDriver.

**Tổng số hàm:** 81

## Mục lục

- **Cửa sổ**
  - [c.Open](#c-open)
  - [c.Close](#c-close)
  - [c.IsClosed](#c-isclosed)
  - [c.GetSize](#c-getsize)
  - [c.SetSize](#c-setsize)
  - [c.RestoreSize](#c-restoresize)
  - [c.GetPosition](#c-getposition)
  - [c.SetPosition](#c-setposition)
  - [c.RestorePosition](#c-restoreposition)
- **Trình duyệt**
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
- **Phần tử**
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
- **Chuột (Click / Hover / Move / Scroll)**
  - [c.Click](#c-click)
  - [c.ClickJS](#c-clickjs)
  - [c.HoverElement](#c-hoverelement)
  - [c.MoveElement](#c-moveelement)
  - [c.ScrollDistance](#c-scrolldistance)
  - [c.ScrollElement](#c-scrollelement)
  - [c.ScrollIfNotOnScreen](#c-scrollifnotonscreen)
  - [c.ScrollAndWait](#c-scrollandwait)
  - [c.ScrollAndClick](#c-scrollandclick)
- **Bàn phím**
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
- **Khác (JS / Cookies / Useragent / Screenshot)**
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
- **Mô phỏng người dùng (Anti-Bot)**
  - [c.HumanClick](#c-humanclick)
  - [c.HumanSendKeys](#c-humansendkeys)
  - [c.HumanMoveElement](#c-humanmoveelement)
  - [c.HumanDrag](#c-humandrag)
  - [c.HumanScrollDistance](#c-humanscrolldistance)
- **Delay**
  - [c.DelayTime](#c-delaytime)
  - [c.DelayRandom](#c-delayrandom)

---

## Cửa sổ

### c.Open

Mở trình duyệt với profile đã cấu hình.

**Cú pháp**

```typescript
c.Open(): boolean
```

**Trả về** `boolean` — True nếu mở thành công

---

### c.Close

Đóng trình duyệt.

**Cú pháp**

```typescript
c.Close(): boolean
```

**Trả về** `boolean` — True nếu đóng thành công

---

### c.IsClosed

Kiểm tra trình duyệt đã đóng chưa.

**Cú pháp**

```typescript
c.IsClosed(): boolean
```

**Trả về** `boolean` — True nếu đã đóng

---

### c.GetSize

Lấy kích thước cửa sổ trình duyệt.

**Cú pháp**

```typescript
c.GetSize(): string
```

**Trả về** `string` — Chuỗi kích thước (vd: "1024x768")

---

### c.SetSize

Đặt kích thước cửa sổ trình duyệt.

**Cú pháp**

```typescript
c.SetSize(width: number, height: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `width` | `number` | Chiều rộng tính bằng pixel |
| `height` | `number` | Chiều cao tính bằng pixel |

**Trả về** `boolean` — True nếu đặt thành công

---

### c.RestoreSize

Khôi phục kích thước gốc của cửa sổ trình duyệt.

**Cú pháp**

```typescript
c.RestoreSize(): boolean
```

**Trả về** `boolean` — True nếu khôi phục thành công

---

### c.GetPosition

Lấy vị trí cửa sổ trình duyệt.

**Cú pháp**

```typescript
c.GetPosition(): string
```

**Trả về** `string` — Chuỗi vị trí (vd: "100,200")

---

### c.SetPosition

Đặt vị trí cửa sổ trình duyệt.

**Cú pháp**

```typescript
c.SetPosition(x: number, y: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `x` | `number` | Vị trí X |
| `y` | `number` | Vị trí Y |

**Trả về** `boolean` — True nếu đặt thành công

---

### c.RestorePosition

Khôi phục vị trí gốc của cửa sổ trình duyệt.

**Cú pháp**

```typescript
c.RestorePosition(): boolean
```

**Trả về** `boolean` — True nếu khôi phục thành công

---

## Trình duyệt

### c.GotoUrl

Điều hướng tới URL.

**Cú pháp**

```typescript
c.GotoUrl(url: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `url` | `string` | URL cần điều hướng |

**Trả về** `boolean` — True nếu thành công

---

### c.GetUrl

Lấy URL trang hiện tại.

**Cú pháp**

```typescript
c.GetUrl(): string
```

**Trả về** `string` — URL hiện tại

---

### c.WaitUrlChanged

Chờ tới khi URL khác `currentUrl`, hoặc timeout.

**Cú pháp**

```typescript
c.WaitUrlChanged(currentUrl: string, timeout: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `currentUrl` | `string` | URL tham chiếu để so sánh |
| `timeout` | `number` | Timeout giây |

**Trả về** `boolean` — True nếu URL đã đổi trước khi timeout

---

### c.Back

Quay lại trong history trình duyệt.

**Cú pháp**

```typescript
c.Back(count: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `count` | `number` | Số lần quay lại |

---

### c.Refresh

Refresh trang hiện tại.

**Cú pháp**

```typescript
c.Refresh(): void
```

---

### c.NewTab

Mở tab mới, chuyển focus sang tab đó và tùy chọn điều hướng tới `url`. (W3C /window/new không tự switch — implementation tự parse handle mới và switch thủ công.)

**Cú pháp**

```typescript
c.NewTab(url?: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `url` | `string *(tùy chọn)*` | URL muốn load trong tab mới (truyền "" để mở tab trắng) |

**Trả về** `boolean` — True nếu tab được tạo

---

### c.ActiveTab

Chuyển focus sang tab theo index (0-based) trong danh sách window handle hiện tại.

**Cú pháp**

```typescript
c.ActiveTab(index: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `index` | `number` | Vị trí tab (0 = tab đầu) |

**Trả về** `boolean` — True nếu switch thành công

---

### c.CloseTab

Đóng tab đang focus. Sau khi đóng, switch về tab[0] nếu còn.

**Cú pháp**

```typescript
c.CloseTab(): boolean
```

**Trả về** `boolean` — True nếu đóng thành công

---

### c.CloseOtherTabs

Đóng tất cả tab khác, giữ tab đang focus.

**Cú pháp**

```typescript
c.CloseOtherTabs(): boolean
```

**Trả về** `boolean` — True nếu thực thi thành công

---

### c.SwitchFrame

Switch vào iframe theo index (chuỗi số) HOẶC selector (xpath/css).

**Cú pháp**

```typescript
c.SwitchFrame(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | Index dạng chuỗi ("0","1",...) hoặc CSS/XPath selector |

**Trả về** `boolean` — True nếu switch thành công

---

### c.SwitchPopup

Tìm cửa sổ popup theo title và switch focus sang đó. Duyệt qua tất cả window handle, switch rồi so sánh title === input.

**Cú pháp**

```typescript
c.SwitchPopup(title: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `title` | `string` | Title cần match (so sánh chính xác) |

**Trả về** `boolean` — True nếu tìm thấy và switch được

---

### c.SwitchDefaultFrame

Thoát toàn bộ nested frame về document top-level.

**Cú pháp**

```typescript
c.SwitchDefaultFrame(): boolean
```

**Trả về** `boolean` — True nếu switch thành công

---

### c.SwitchParentFrame

Switch về frame cha.

**Cú pháp**

```typescript
c.SwitchParentFrame(): boolean
```

**Trả về** `boolean` — True nếu switch thành công

---

### c.AcceptAlert

Accept alert (bấm OK).

**Cú pháp**

```typescript
c.AcceptAlert(): boolean
```

**Trả về** `boolean` — True nếu accept thành công

---

### c.CancelAlert

Dismiss alert (bấm Cancel).

**Cú pháp**

```typescript
c.CancelAlert(): boolean
```

**Trả về** `boolean` — True nếu dismiss thành công

---

### c.GetPageSource

Lấy source HTML của trang.

**Cú pháp**

```typescript
c.GetPageSource(): string
```

**Trả về** `string` — Source trang

---

## Phần tử

### c.ExistElement

Kiểm tra element có tồn tại không.

**Cú pháp**

```typescript
c.ExistElement(selector: string, timeout?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `timeout` | `number *(tùy chọn)*` | Timeout giây (0 = check ngay) |

**Trả về** `boolean` — True nếu element tồn tại

---

### c.ExistElements

Kiểm tra có element nào trong danh sách tồn tại không.

**Cú pháp**

```typescript
c.ExistElements(timeout: number, arrSelector: string[]): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `timeout` | `number` | Timeout giây |
| `arrSelector` | `string[]` | Mảng CSS selector hoặc XPath |

**Trả về** `string` — Selector của element đầu tiên tìm thấy, hoặc chuỗi rỗng

---

### c.WaitElementHide

Chờ element biến mất.

**Cú pháp**

```typescript
c.WaitElementHide(selector: string, timeout: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `timeout` | `number` | Timeout giây |

**Trả về** `boolean` — True nếu element đã biến mất

---

### c.CountElement

Đếm số element match selector.

**Cú pháp**

```typescript
c.CountElement(selector: string): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `number` — Số element match

---

### c.RemoveElement

Xóa element khỏi DOM.

**Cú pháp**

```typescript
c.RemoveElement(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu xóa thành công

---

### c.IsElementVisible

Kiểm tra element có visible trên trang không.

**Cú pháp**

```typescript
c.IsElementVisible(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu visible

---

### c.IsElementOnScreen

Kiểm tra element có ở trong viewport không.

**Cú pháp**

```typescript
c.IsElementOnScreen(selector: string, timeout: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `timeout` | `number` | Timeout giây |

**Trả về** `boolean` — True nếu element nằm trong viewport

---

### c.GetElementAttr

Lấy giá trị attribute của element.

**Cú pháp**

```typescript
c.GetElementAttr(selector: string, attributeName: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `attributeName` | `string` | Tên attribute |

**Trả về** `string` — Giá trị attribute

---

### c.GetElementInnerText

Lấy inner text của element.

**Cú pháp**

```typescript
c.GetElementInnerText(selector: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `string` — Inner text

---

### c.SetElementInnerText

Đặt inner text cho element.

**Cú pháp**

```typescript
c.SetElementInnerText(selector: string, value: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `value` | `string` | Text cần đặt |

**Trả về** `string` — Kết quả

---

### c.GetElementInnerHTML

Lấy innerHTML của element.

**Cú pháp**

```typescript
c.GetElementInnerHTML(selector: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `string` — innerHTML

---

### c.GetElementOuterHTML

Lấy outerHTML của element.

**Cú pháp**

```typescript
c.GetElementOuterHTML(selector: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `string` — outerHTML

---

### c.GetElementValue

Lấy value của element (cho input).

**Cú pháp**

```typescript
c.GetElementValue(selector: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `string` — Value của element

---

### c.SetElementValue

Đặt value cho element (cho input).

**Cú pháp**

```typescript
c.SetElementValue(selector: string, value: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `value` | `string` | Value cần đặt |

**Trả về** `boolean` — Kết quả

---

## Chuột (Click / Hover / Move / Scroll)

### c.Click

Click element theo CSS selector hoặc XPath.

**Cú pháp**

```typescript
c.Click(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu click thành công

---

### c.ClickJS

Click element bằng JavaScript (bypass click interception).

**Cú pháp**

```typescript
c.ClickJS(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu click thành công

---

### c.HoverElement

Hover chuột lên element (W3C Actions API — pointerMove tới tâm element). Dùng duration=100ms để event mouseover/mouseenter fire đầy đủ.

**Cú pháp**

```typescript
c.HoverElement(selector: string, delayMs?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `delayMs` | `number *(tùy chọn)*` | Thời gian hover tính bằng ms (mặc định = 100) |

**Trả về** `boolean` — True nếu hover thành công

---

### c.MoveElement

Di chuyển chuột tới tâm element (instant, không hover delay). Khác với HoverElement vì duration=0 — không trigger mouseover animation.

**Cú pháp**

```typescript
c.MoveElement(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu move thành công

---

### c.ScrollDistance

Scroll một quãng pixel.

**Cú pháp**

```typescript
c.ScrollDistance(distance: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `distance` | `number` | Quãng đường tính bằng pixel (dương = xuống, âm = lên) |

**Trả về** `boolean` — True nếu scroll thành công

---

### c.ScrollElement

Scroll tới element.

**Cú pháp**

```typescript
c.ScrollElement(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu scroll thành công

---

### c.ScrollIfNotOnScreen

Chỉ scroll tới element nếu nó chưa visible trên màn hình.

**Cú pháp**

```typescript
c.ScrollIfNotOnScreen(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu element đã ở trên màn hình

---

### c.ScrollAndWait

Scroll tới element rồi chờ.

**Cú pháp**

```typescript
c.ScrollAndWait(selector: string, timeWait: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `timeWait` | `number` | Thời gian chờ giây sau khi scroll |

**Trả về** `boolean` — True nếu scroll thành công

---

### c.ScrollAndClick

Scroll tới element rồi click.

**Cú pháp**

```typescript
c.ScrollAndClick(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu tìm thấy và click thành công

---

## Bàn phím

### c.SendKeys

Gõ phím vào element (xóa trước rồi gõ từng ký tự).

**Cú pháp**

```typescript
c.SendKeys(selector: string, content: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `content` | `string` | Text cần gõ |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendKeys2

Gõ phím vào element với option không xóa trước.

**Cú pháp**

```typescript
c.SendKeys2(selector: string, content: string, isDontClearText: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `content` | `string` | Text cần gõ |
| `isDontClearText` | `boolean` | Nếu true, append mà không xóa |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendKeys3

Gõ phím dùng JavaScript setValue + input event.

**Cú pháp**

```typescript
c.SendKeys3(selector: string, content: string, isDontClearText: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `content` | `string` | Text cần đặt |
| `isDontClearText` | `boolean` | Nếu true, append mà không xóa |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendFile

Gửi file vào element file input.

**Cú pháp**

```typescript
c.SendFile(selector: string, value: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath của file input |
| `value` | `string` | Đường dẫn file |

**Trả về** `boolean` — True nếu set thành công

---

### c.SelectText

Select toàn bộ text trong element.

**Cú pháp**

```typescript
c.SelectText(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu select thành công

---

### c.ClearText

Xóa text trong input element.

**Cú pháp**

```typescript
c.ClearText(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu xóa thành công

---

### c.ClearText2

Xóa text qua Ctrl+A + Backspace — fallback cho input không hỗ trợ endpoint W3C /clear.

**Cú pháp**

```typescript
c.ClearText2(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu xóa thành công

---

### c.SelectOption

Click <option> con của <select> mà thuộc tính `value` khớp. Compose `selector + ">[value='X']"` rồi delegate sang Click — trusted W3C click.

**Cú pháp**

```typescript
c.SelectOption(selector: string, value: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath của <select> |
| `value` | `string` | Thuộc tính `value` của option đích |

**Trả về** `boolean` — True nếu tìm thấy option và click được

---

### c.KeyPress

Bấm phím hoặc combo trên element. `key` chấp nhận: tên đơn (Enter, Tab, Space, Backspace, Delete, Escape, Home, End, PageUp/Down, Arrow*, Shift, Control, Alt, Meta, F1..F12), literal đơn ("a", "@"...), hoặc combo ("Ctrl+A", "Shift+Tab"). NullKey được append sau combo để release modifier.

**Cú pháp**

```typescript
c.KeyPress(selector: string, key: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `key` | `string` | Tên key, literal, hoặc combo ngăn cách bởi "+" |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendEnter

Bấm Enter trên element.

**Cú pháp**

```typescript
c.SendEnter(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu gửi Enter thành công

---

### c.SendBackspace

Bấm Backspace trên element.

**Cú pháp**

```typescript
c.SendBackspace(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu gửi Backspace thành công

---

### c.SendClear

Xóa field bằng Ctrl+A + Delete.

**Cú pháp**

```typescript
c.SendClear(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu xóa thành công

---

### c.SendDownArrow

Bấm phím mũi tên xuống.

**Cú pháp**

```typescript
c.SendDownArrow(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendUpArrow

Bấm phím mũi tên lên.

**Cú pháp**

```typescript
c.SendUpArrow(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendHome

Bấm phím Home.

**Cú pháp**

```typescript
c.SendHome(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu gửi thành công

---

### c.SendEnd

Bấm phím End.

**Cú pháp**

```typescript
c.SendEnd(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu gửi thành công

---

## Khác (JS / Cookies / Useragent / Screenshot)

### c.ExecuteJS

Thực thi JavaScript trong context trình duyệt.

**Cú pháp**

```typescript
c.ExecuteJS(script: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `script` | `string` | JavaScript code cần thực thi |

**Trả về** `string` — Kết quả thực thi

---

### c.LogJS

Log nội dung ra console của trình duyệt.

**Cú pháp**

```typescript
c.LogJS(content: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `content` | `string` | Nội dung cần log |

---

### c.GetExtensionId

Tra extension ID theo tên hiển thị (vào chrome://extensions/ rồi query shadow DOM). Sau khi xong, tự navigate về URL trước.

**Cú pháp**

```typescript
c.GetExtensionId(name: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `name` | `string` | Tên extension (case-insensitive, trim) |

**Trả về** `string` — Extension ID, hoặc "" nếu không thấy

---

### c.GetCookies

Lấy cookies cho domain.

**Cú pháp**

```typescript
c.GetCookies(domain: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `domain` | `string` | Domain cookie |

**Trả về** `string` — Chuỗi JSON của cookies

---

### c.AddCookies

Thêm nhiều cookies (định dạng mảng JSON).

**Cú pháp**

```typescript
c.AddCookies(cookies: string, domain: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `cookies` | `string` | Chuỗi JSON của mảng cookies |
| `domain` | `string` | Domain cookie |

**Trả về** `boolean` — True nếu add thành công

---

### c.DeleteCookies

Xóa toàn bộ cookies (alias của DeleteAllCookies ở root).

**Cú pháp**

```typescript
c.DeleteCookies(): boolean
```

**Trả về** `boolean` — True nếu xóa thành công

---

### c.GetUseragent

Lấy user agent của trình duyệt.

**Cú pháp**

```typescript
c.GetUseragent(): string
```

**Trả về** `string` — Chuỗi user agent

---

### c.SetUseragent

Đặt user agent cho trình duyệt.

**Cú pháp**

```typescript
c.SetUseragent(useragent: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `useragent` | `string` | User agent cần đặt |

**Trả về** `boolean` — Kết quả

---

### c.Screenshot

Chụp ảnh trang hiện tại và trả về PNG dạng base64.

**Cú pháp**

```typescript
c.Screenshot(): string
```

**Trả về** `string` — Ảnh base64 (rỗng nếu lỗi)

---

### c.PlayVideo

Play element video.

**Cú pháp**

```typescript
c.PlayVideo(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath của element video |

**Trả về** `boolean` — True nếu video bắt đầu chạy

---

## Mô phỏng người dùng (Anti-Bot)

### c.HumanClick

Click element như user thật: scroll vào view, chờ 500-1500ms, thử tối đa 3 lần với điểm random trong bounds (padding 20%), kiểm tra elementFromPoint để tránh bị overlay che, di chuột theo đường cong Bezier (Fitts's law), pause rồi mouse down/up qua W3C Actions API. Tránh detect "instant click không có mousemove" và "click chính giữa".

**Cú pháp**

```typescript
c.HumanClick(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu click thành công; false nếu rect rỗng (fallback sang Click) hoặc cả 3 lần đều bị occluded

---

### c.HumanSendKeys

Gõ text từng ký tự với delay ngẫu nhiên giữa các ký tự. Chèn "pause suy nghĩ" 300-700ms với xác suất 50% mỗi ~10 ký tự để giả lập người. Auto click element trước để focus. Tránh detect "100 ký tự paste trong 0ms".

**Cú pháp**

```typescript
c.HumanSendKeys(selector: string, text: string, minDelay?: number, maxDelay?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |
| `text` | `string` | Text cần gõ |
| `minDelay` | `number *(tùy chọn)*` | Delay tối thiểu ms mỗi ký tự (truyền 0 để dùng mặc định 120) |
| `maxDelay` | `number *(tùy chọn)*` | Delay tối đa ms mỗi ký tự (truyền 0 để dùng mặc định 250) |

**Trả về** `boolean` — True nếu gửi hết ký tự

---

### c.HumanMoveElement

Di chuột tới tâm element theo đường cong Bezier, có jitter ±20% so với tâm chính xác. Tránh fingerprint quỹ đạo tuyến tính.

**Cú pháp**

```typescript
c.HumanMoveElement(selector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `selector` | `string` | CSS selector hoặc XPath |

**Trả về** `boolean` — True nếu move thành công

---

### c.HumanDrag

Drag từ element nguồn sang element đích với chuyển động chậm có pause (1 Actions request atomic). Pattern: move src (200-400ms) → pause 100-250ms → down → pause 50ms → slow move dst (500-1000ms) → pause 100-250ms → up. Dùng cho captcha slider (Cloudflare), reorder list, drag-drop UI.

**Cú pháp**

```typescript
c.HumanDrag(srcSelector: string, dstSelector: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `srcSelector` | `string` | CSS selector hoặc XPath của element nguồn |
| `dstSelector` | `string` | CSS selector hoặc XPath của element đích |

**Trả về** `boolean` — True nếu drag thành công

---

### c.HumanScrollDistance

Mô phỏng scroll thật qua W3C Wheel Actions API — fire `wheel` event trusted với `distance` TRƯỚC khi `scroll` event xảy ra, giống hành vi chuột lăn thật. Khác `ScrollDistance` (dùng window.scrollBy chỉ fire `scroll`): bypass anti-bot kiểm tra "scroll không có wheel" (DataDome, hCaptcha, Cloudflare). Split `distance` thành 3-5 chunk với jitter ±10% và delay 80-200ms giữa các chunk để giả lập scroll từng nấc.

**Cú pháp**

```typescript
c.HumanScrollDistance(distance: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `distance` | `number` | Quãng đường pixel (dương = scroll xuống, âm = scroll lên) |

**Trả về** `boolean` — True nếu scroll hoàn thành

---

## Delay

### c.DelayTime

Delay execution.

**Cú pháp**

```typescript
c.DelayTime(delay: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### c.DelayRandom

Delay for a random duration within a range.

**Cú pháp**

```typescript
c.DelayRandom(min: number, max: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
