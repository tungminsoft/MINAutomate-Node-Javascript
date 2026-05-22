# Android — `d.*`

> API điều khiển thiết bị. Khả dụng khi workflow chạy trên thiết bị Android qua ADB.

**Tổng số hàm:** 82

## Mục lục

- **Hàm tương tác**
  - [d.PerformAction](#d-performaction)
  - [d.Back](#d-back)
  - [d.DumpXml](#d-dumpxml)
  - [d.DetectScreen](#d-detectscreen)
  - [d.ExistElement](#d-existelement)
  - [d.ExistElements](#d-existelements)
  - [d.ExistAllElements](#d-existallelements)
  - [d.CountElement](#d-countelement)
  - [d.WaitElementHide](#d-waitelementhide)
  - [d.GetElementAttr](#d-getelementattr)
  - [d.TapXY](#d-tapxy)
  - [d.Tap](#d-tap)
  - [d.TapCenter](#d-tapcenter)
  - [d.DoubleTapXY](#d-doubletapxy)
  - [d.TapLongXY](#d-taplongxy)
  - [d.TapLong](#d-taplong)
  - [d.TapLongCenter](#d-taplongcenter)
  - [d.Swipe](#d-swipe)
  - [d.SwipeUp](#d-swipeup)
  - [d.SwipeDown](#d-swipedown)
  - [d.SwipeLeft](#d-swipeleft)
  - [d.SwipeRight](#d-swiperight)
  - [d.SwipeXpath](#d-swipexpath)
  - [d.SwipeAndTap](#d-swipeandtap)
  - [d.InputText](#d-inputtext)
  - [d.TypeText](#d-typetext)
  - [d.InputKeyCode](#d-inputkeycode)
  - [d.InputEnter](#d-inputenter)
  - [d.InputEnd](#d-inputend)
  - [d.ClearText](#d-cleartext)
  - [d.SetAdbKeyboard](#d-setadbkeyboard)
  - [d.HideAdbKeyboard](#d-hideadbkeyboard)
  - [d.ScreenShot](#d-screenshot)
- **Hàm thiết bị**
  - [d.Shell](#d-shell)
  - [d.IsClosed](#d-isclosed)
  - [d.DeviceInfo](#d-deviceinfo)
  - [d.DeviceSize](#d-devicesize)
  - [d.DeviceHeight](#d-deviceheight)
  - [d.DeviceWidth](#d-devicewidth)
  - [d.GetDeviceIP](#d-getdeviceip)
  - [d.ChangeLanguage](#d-changelanguage)
  - [d.SetWallpaper](#d-setwallpaper)
  - [d.IsScreenOn](#d-isscreenon)
  - [d.SleepScreen](#d-sleepscreen)
  - [d.UnlockScreen](#d-unlockscreen)
  - [d.EnableWifi](#d-enablewifi)
  - [d.DisableWifi](#d-disablewifi)
  - [d.ConnectWifi](#d-connectwifi)
  - [d.CreateFolder](#d-createfolder)
  - [d.DeleteFolder](#d-deletefolder)
  - [d.DeleteFile](#d-deletefile)
  - [d.PullFile](#d-pullfile)
  - [d.PushFile](#d-pushfile)
  - [d.PushImage](#d-pushimage)
  - [d.PushMedia](#d-pushmedia)
  - [d.CheckProxy](#d-checkproxy)
  - [d.ConnectProxy](#d-connectproxy)
  - [d.DisconnectProxy](#d-disconnectproxy)
  - [d.GetClipboard](#d-getclipboard)
  - [d.SetClipboard](#d-setclipboard)
- **Hàm app**
  - [d.OpenApp](#d-openapp)
  - [d.CloseApp](#d-closeapp)
  - [d.IsAppOpened](#d-isappopened)
  - [d.GetCurrentApp](#d-getcurrentapp)
  - [d.IsAppInstalled](#d-isappinstalled)
  - [d.ClearDataApp](#d-cleardataapp)
  - [d.GetAppVersion](#d-getappversion)
  - [d.InstallApp](#d-installapp)
  - [d.UninstallApp](#d-uninstallapp)
  - [d.GetInfoApp](#d-getinfoapp)
  - [d.GetListApps](#d-getlistapps)
  - [d.GetListAppsInstalled](#d-getlistappsinstalled)
  - [d.GetCurrentActivity](#d-getcurrentactivity)
  - [d.StartActivity](#d-startactivity)
- **Facebook**
  - [d.OpenAppFB](#d-openappfb)
  - [d.OpenUrlSchemeFB](#d-openurlschemefb)
  - [d.BackupAppFB](#d-backupappfb)
  - [d.RestoreAppFB](#d-restoreappfb)
- **Hàm Instagram**
  - [d.OpenUrlSchemeIG](#d-openurlschemeig)
- **Facebook Lite**
  - [d.OpenUrlSchemeFBLite](#d-openurlschemefblite)
- **Hàm khác**
  - [d.Delay](#d-delay)
  - [d.DelayRandom](#d-delayrandom)

---

## Hàm tương tác

### d.PerformAction

Thực thi hành động hệ thống.

**Chữ ký**

```typescript
d.PerformAction(typeAction: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `typeAction` | `number` | 1: Home, 2: Back, 3: Recent apps |

---

### d.Back

Bấm nút Back nhiều lần.

**Chữ ký**

```typescript
d.Back(count?: number, delay?: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `count` | `number *(tùy chọn)*` | Số lần bấm Back (mặc định: 1) |
| `delay` | `number *(tùy chọn)*` | Khoảng cách giữa các lần bấm, đơn vị giây (mặc định: 1) |

---

### d.DumpXml

Dump cây XML hierarchy của màn hình.

**Chữ ký**

```typescript
d.DumpXml(): string
```

**Trả về** `string` — Chuỗi XML

---

### d.DetectScreen

Nhận diện màn hình hiện tại.

**Chữ ký**

```typescript
d.DetectScreen(xml?: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |

**Trả về** `string` — Định danh loại màn hình

---

### d.ExistElement

Kiểm tra element có tồn tại không.

**Chữ ký**

```typescript
d.ExistElement(xpath: string, xml?: string, timeout?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `timeout` | `number *(tùy chọn)*` | Timeout giây (mặc định: 0) |

**Trả về** `boolean` — True nếu element tồn tại

---

### d.ExistElements

Kiểm tra có element nào trong danh sách tồn tại không.

**Chữ ký**

```typescript
d.ExistElements(timeout: number, xml: string, lstXpath: string[]): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `timeout` | `number` | Timeout giây (mặc định: 0) |
| `xml` | `string` | XML dump (rỗng để tự động dump) |
| `lstXpath` | `string[]` | Mảng xpath selector |

**Trả về** `string` — Xpath của element đầu tiên tìm thấy, hoặc chuỗi rỗng

---

### d.ExistAllElements

Kiểm tra tất cả element có tồn tại không.

**Chữ ký**

```typescript
d.ExistAllElements(lstXpath: string[], xml?: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `lstXpath` | `string[]` | Mảng xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |

**Trả về** `boolean` — True nếu tất cả tồn tại

---

### d.CountElement

Đếm số element match xpath.

**Chữ ký**

```typescript
d.CountElement(xpath: string, xml?: string): number
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |

**Trả về** `number` — Số element match

---

### d.WaitElementHide

Chờ element biến mất.

**Chữ ký**

```typescript
d.WaitElementHide(xpath: string, timeout: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `timeout` | `number` | Timeout giây |

**Trả về** `boolean` — True nếu element đã biến mất

---

### d.GetElementAttr

Lấy giá trị attribute của các element match xpath.

**Chữ ký**

```typescript
d.GetElementAttr(xml: string, xpath: string, attribute: string): string[]
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xml` | `string` | XML dump (rỗng để tự động dump) |
| `xpath` | `string` | Xpath selector |
| `attribute` | `string` | Tên attribute (vd: "text", "bounds", "content-desc") |

**Trả về** `string[]` — Mảng giá trị attribute

---

### d.TapXY

Tap vào tọa độ cụ thể.

**Chữ ký**

```typescript
d.TapXY(x: number, y: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `x` | `number` | Tọa độ X |
| `y` | `number` | Tọa độ Y |

**Trả về** `boolean` — Trạng thái thành công

---

### d.Tap

Tap vào element theo xpath.

**Chữ ký**

```typescript
d.Tap(xpath: string, xml?: string, timeFind?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `timeFind` | `number *(tùy chọn)*` | Timeout giây để tìm element (mặc định: 0) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.TapCenter

Tap vào tâm element theo xpath.

**Chữ ký**

```typescript
d.TapCenter(xpath: string, xml?: string, timeFind?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `timeFind` | `number *(tùy chọn)*` | Timeout giây để tìm element (mặc định: 0) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.DoubleTapXY

Tap đúp vào tọa độ cụ thể.

**Chữ ký**

```typescript
d.DoubleTapXY(x: number, y: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `x` | `number` | Tọa độ X |
| `y` | `number` | Tọa độ Y |

**Trả về** `boolean` — Trạng thái thành công

---

### d.TapLongXY

Giữ (long tap) tại tọa độ cụ thể.

**Chữ ký**

```typescript
d.TapLongXY(x: number, y: number, delay?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `x` | `number` | Tọa độ X |
| `y` | `number` | Tọa độ Y |
| `delay` | `number *(tùy chọn)*` | Thời gian giữ tính bằng giây (mặc định: 1) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.TapLong

Giữ (long tap) trên element.

**Chữ ký**

```typescript
d.TapLong(xpath: string, xml?: string, delay?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `delay` | `number *(tùy chọn)*` | Thời gian giữ tính bằng giây (mặc định: 1) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.TapLongCenter

Giữ (long tap) tại tâm element.

**Chữ ký**

```typescript
d.TapLongCenter(xpath: string, xml?: string, delay?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `delay` | `number *(tùy chọn)*` | Thời gian giữ tính bằng giây (mặc định: 1) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.Swipe

Vuốt từ điểm tới điểm.

**Chữ ký**

```typescript
d.Swipe(x1: number, y1: number, x2: number, y2: number, steps?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `x1` | `number` | X bắt đầu |
| `y1` | `number` | Y bắt đầu |
| `x2` | `number` | X kết thúc |
| `y2` | `number` | Y kết thúc |
| `steps` | `number *(tùy chọn)*` | Số bước (lớn hơn = chậm hơn, 0 = ngẫu nhiên 30-40) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.SwipeUp

Vuốt lên.

**Chữ ký**

```typescript
d.SwipeUp(count?: number, checkScreenChange?: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `count` | `number *(tùy chọn)*` | Số lần vuốt |
| `checkScreenChange` | `boolean *(tùy chọn)*` | Nếu true, vuốt cho đến khi màn hình không đổi nữa (mặc định: false) |

**Trả về** `boolean` — True nếu màn hình dừng đổi (chỉ khi checkScreenChange = true)

---

### d.SwipeDown

Vuốt xuống.

**Chữ ký**

```typescript
d.SwipeDown(count?: number, checkScreenChange?: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `count` | `number *(tùy chọn)*` | Số lần vuốt |
| `checkScreenChange` | `boolean *(tùy chọn)*` | Nếu true, vuốt cho đến khi màn hình không đổi nữa (mặc định: false) |

**Trả về** `boolean` — True nếu màn hình dừng đổi (chỉ khi checkScreenChange = true)

---

### d.SwipeLeft

Vuốt sang trái.

**Chữ ký**

```typescript
d.SwipeLeft(count?: number, checkScreenChange?: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `count` | `number *(tùy chọn)*` | Số lần vuốt |
| `checkScreenChange` | `boolean *(tùy chọn)*` | Nếu true, vuốt cho đến khi màn hình không đổi nữa (mặc định: false) |

**Trả về** `boolean` — True nếu màn hình dừng đổi (chỉ khi checkScreenChange = true)

---

### d.SwipeRight

Vuốt sang phải.

**Chữ ký**

```typescript
d.SwipeRight(count?: number, checkScreenChange?: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `count` | `number *(tùy chọn)*` | Số lần vuốt |
| `checkScreenChange` | `boolean *(tùy chọn)*` | Nếu true, vuốt cho đến khi màn hình không đổi nữa (mặc định: false) |

**Trả về** `boolean` — True nếu màn hình dừng đổi (chỉ khi checkScreenChange = true)

---

### d.SwipeXpath

Vuốt từ element này tới element khác.

**Chữ ký**

```typescript
d.SwipeXpath(xpathFrom: string, xpathTo: string, xml?: string, steps?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpathFrom` | `string` | Xpath element bắt đầu |
| `xpathTo` | `string` | Xpath element kết thúc |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `steps` | `number *(tùy chọn)*` | Số bước (lớn hơn = chậm hơn, 0 = ngẫu nhiên 30-40) |

**Trả về** `boolean` — Success status

---

### d.SwipeAndTap

Vuốt liên tục cho đến khi tìm thấy element rồi tap.

**Chữ ký**

```typescript
d.SwipeAndTap(xpath: string, xml?: string, timeout?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `timeout` | `number *(tùy chọn)*` | Timeout giây (mặc định: 0) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.InputText

Nhập text vào element.

**Chữ ký**

```typescript
d.InputText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector (rỗng để nhập tại focus hiện tại) |
| `content` | `string` | Nội dung cần nhập |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `isDontClearText` | `boolean *(tùy chọn)*` | Nếu true, append text mà không xóa cũ (mặc định: false) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.TypeText

Nhập text vào element theo từng ký tự một.

**Chữ ký**

```typescript
d.TypeText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string` | Xpath selector (rỗng để nhập tại focus hiện tại) |
| `content` | `string` | Nội dung cần nhập |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |
| `isDontClearText` | `boolean *(tùy chọn)*` | Nếu true, append text mà không xóa cũ (mặc định: false) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.InputKeyCode

Bấm key code cụ thể.

**Chữ ký**

```typescript
d.InputKeyCode(keyCode: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `keyCode` | `number` | Mã key code của Android |

**Trả về** `boolean` — Trạng thái thành công

---

### d.InputEnter

Bấm phím Enter.

**Chữ ký**

```typescript
d.InputEnter(): boolean
```

**Trả về** `boolean` — Trạng thái thành công

---

### d.InputEnd

Bấm phím End (di chuyển con trỏ về cuối).

**Chữ ký**

```typescript
d.InputEnd(): boolean
```

**Trả về** `boolean` — Trạng thái thành công

---

### d.ClearText

Xóa text trong element.

**Chữ ký**

```typescript
d.ClearText(xpath?: string, xml?: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string *(tùy chọn)*` | Xpath selector |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.SetAdbKeyboard

Đặt ADB keyboard làm input method mặc định.

**Chữ ký**

```typescript
d.SetAdbKeyboard(): boolean
```

**Trả về** `boolean` — Trạng thái thành công

---

### d.HideAdbKeyboard

Ẩn ADB keyboard.

**Chữ ký**

```typescript
d.HideAdbKeyboard(): void
```

---

### d.ScreenShot

Chụp ảnh màn hình, có thể crop theo element.

**Chữ ký**

```typescript
d.ScreenShot(xpath?: string, xml?: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `xpath` | `string *(tùy chọn)*` | Xpath selector để crop ảnh theo bounds của element (tùy chọn) |
| `xml` | `string *(tùy chọn)*` | XML dump (rỗng để tự động dump, tùy chọn) |

**Trả về** `string` — Ảnh base64

---

## Hàm thiết bị

### d.Shell

Thực thi câu lệnh shell trên thiết bị.

**Chữ ký**

```typescript
d.Shell(command: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `command` | `string` | Câu lệnh shell |

**Trả về** `string` — Output của câu lệnh

---

### d.IsClosed

Kiểm tra điện thoại có bị mất kết nối không.

**Chữ ký**

```typescript
d.IsClosed(): boolean
```

**Trả về** `boolean` — True nếu mất kết nối

---

### d.DeviceInfo

Lấy thông tin thiết bị.

**Chữ ký**

```typescript
d.DeviceInfo(): string
```

**Trả về** `string` — Chuỗi thông tin thiết bị

---

### d.DeviceSize

Lấy kích thước màn hình thiết bị dạng chuỗi.

**Chữ ký**

```typescript
d.DeviceSize(): string
```

**Trả về** `string` — Kích thước (vd: "1080x1920")

---

### d.DeviceHeight

Lấy chiều cao màn hình thiết bị.

**Chữ ký**

```typescript
d.DeviceHeight(): number
```

**Trả về** `number` — Chiều cao tính bằng pixel

---

### d.DeviceWidth

Lấy chiều rộng màn hình thiết bị.

**Chữ ký**

```typescript
d.DeviceWidth(): number
```

**Trả về** `number` — Chiều rộng tính bằng pixel

---

### d.GetDeviceIP

Lấy địa chỉ IP của thiết bị trên mạng hiện tại (LAN IP).

**Chữ ký**

```typescript
d.GetDeviceIP(): string
```

**Trả về** `string` — Địa chỉ IP

---

### d.ChangeLanguage

Đổi ngôn ngữ thiết bị.

**Chữ ký**

```typescript
d.ChangeLanguage(lang: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `lang` | `string` | Mã ngôn ngữ (vd: "en", "vi") |

**Trả về** `boolean` — Trạng thái thành công

---

### d.SetWallpaper

Đặt hình nền thiết bị.

**Chữ ký**

```typescript
d.SetWallpaper(imagePath: string, wallpaperType: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `imagePath` | `string` | Đường dẫn local tới file ảnh (caller phải chọn sẵn) |
| `wallpaperType` | `string` | "home", "lock", hoặc "both" |

**Trả về** `boolean` — Trạng thái thành công

---

### d.IsScreenOn

Kiểm tra màn hình có đang bật không.

**Chữ ký**

```typescript
d.IsScreenOn(): boolean
```

**Trả về** `boolean` — True nếu màn hình đang bật

---

### d.SleepScreen

Tắt màn hình.

**Chữ ký**

```typescript
d.SleepScreen(): void
```

---

### d.UnlockScreen

Mở khóa màn hình bằng thao tác vuốt.

**Chữ ký**

```typescript
d.UnlockScreen(): void
```

---

### d.EnableWifi

Bật WiFi.

**Chữ ký**

```typescript
d.EnableWifi(): void
```

---

### d.DisableWifi

Tắt WiFi.

**Chữ ký**

```typescript
d.DisableWifi(): void
```

---

### d.ConnectWifi

Kết nối WiFi.

**Chữ ký**

```typescript
d.ConnectWifi(wifiName: string, wifiPass: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `wifiName` | `string` | SSID WiFi |
| `wifiPass` | `string` | Mật khẩu WiFi |

**Trả về** `boolean` — Trạng thái thành công

---

### d.CreateFolder

Create folder on device

**Chữ ký**

```typescript
d.CreateFolder(folderPath: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Folder path |

---

### d.DeleteFolder

Delete folder on device

**Chữ ký**

```typescript
d.DeleteFolder(folderPath: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Folder path |

---

### d.DeleteFile

Delete file on device

**Chữ ký**

```typescript
d.DeleteFile(path: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `path` | `string` | File path (supports wildcards) |

---

### d.PullFile

Pull file từ thiết bị về PC.

**Chữ ký**

```typescript
d.PullFile(filePath: string, folderPath: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn file trên thiết bị |
| `folderPath` | `string` | Đường dẫn thư mục trên PC để lưu |

---

### d.PushFile

Push file từ PC sang thiết bị.

**Chữ ký**

```typescript
d.PushFile(filePath: string, folderPath: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn file trên PC |
| `folderPath` | `string` | Đường dẫn thư mục trên thiết bị (vd: "/sdcard/") |

---

### d.PushImage

Push ảnh vào gallery thiết bị.

**Chữ ký**

```typescript
d.PushImage(filePath: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePath` | `string` | Đường dẫn ảnh local; nhiều ảnh ngăn cách bởi "|" |

---

### d.PushMedia

Push file media vào gallery thiết bị (ảnh và video).

**Chữ ký**

```typescript
d.PushMedia(filePaths: string[]): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `filePaths` | `string[]` | Mảng đường dẫn media local |

---

### d.CheckProxy

Get current IP address of proxy

**Chữ ký**

```typescript
d.CheckProxy(proxy?: string, web?: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `proxy` | `string *(tùy chọn)*` | Proxy string (optional, format: "host:port" or "host:port:user:pass") |
| `web` | `string *(tùy chọn)*` | URL to check IP (default: "ifconfig.co") |

**Trả về** `string` — IP address or error message

---

### d.ConnectProxy

Kết nối proxy.

**Chữ ký**

```typescript
d.ConnectProxy(proxy: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `proxy` | `string` | Chuỗi proxy (format: "host:port") |

---

### d.DisconnectProxy

Ngắt kết nối proxy.

**Chữ ký**

```typescript
d.DisconnectProxy(): void
```

---

### d.GetClipboard

Lấy nội dung clipboard.

**Chữ ký**

```typescript
d.GetClipboard(): string
```

**Trả về** `string` — Nội dung clipboard

---

### d.SetClipboard

Đặt nội dung clipboard.

**Chữ ký**

```typescript
d.SetClipboard(content: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `content` | `string` | Nội dung cần copy vào clipboard |

---

## Hàm app

### d.OpenApp

Mở app theo package name.

**Chữ ký**

```typescript
d.OpenApp(package: string, isKill?: boolean, timeout?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |
| `isKill` | `boolean *(tùy chọn)*` | Nếu true, force close app trước khi mở (mặc định: false) |
| `timeout` | `number *(tùy chọn)*` | Timeout giây chờ app mở (mặc định: 0 = không chờ) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.CloseApp

Đóng app theo package.

**Chữ ký**

```typescript
d.CloseApp(package: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package app |

---

### d.IsAppOpened

Kiểm tra app có đang ở foreground không.

**Chữ ký**

```typescript
d.IsAppOpened(package: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |

**Trả về** `boolean` — True nếu app đang ở foreground

---

### d.GetCurrentApp

Lấy app đang ở foreground.

**Chữ ký**

```typescript
d.GetCurrentApp(): string
```

**Trả về** `string` — Package app

---

### d.IsAppInstalled

Kiểm tra app đã cài hay chưa.

**Chữ ký**

```typescript
d.IsAppInstalled(package: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |

**Trả về** `boolean` — True nếu đã cài

---

### d.ClearDataApp

Xóa dữ liệu app.

**Chữ ký**

```typescript
d.ClearDataApp(package: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |

---

### d.GetAppVersion

Lấy phiên bản app.

**Chữ ký**

```typescript
d.GetAppVersion(package: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |

**Trả về** `string` — Chuỗi version

---

### d.InstallApp

Cài app từ file APK.

**Chữ ký**

```typescript
d.InstallApp(apkPath: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `apkPath` | `string` | Đường dẫn file APK |

---

### d.UninstallApp

Gỡ app.

**Chữ ký**

```typescript
d.UninstallApp(package: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |

---

### d.GetInfoApp

Lấy thông tin app.

**Chữ ký**

```typescript
d.GetInfoApp(package: string): string
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name app |

**Trả về** `string` — Chuỗi thông tin app

---

### d.GetListApps

Lấy danh sách tất cả package trên thiết bị.

**Chữ ký**

```typescript
d.GetListApps(): string[]
```

**Trả về** `string[]` — Mảng package name

---

### d.GetListAppsInstalled

Lấy danh sách package đã cài (loại trừ system app).

**Chữ ký**

```typescript
d.GetListAppsInstalled(): string[]
```

**Trả về** `string[]` — Mảng package name

---

### d.GetCurrentActivity

Lấy activity đang ở foreground.

**Chữ ký**

```typescript
d.GetCurrentActivity(): string
```

**Trả về** `string` — Tên activity

---

### d.StartActivity

Khởi động Android activity.

**Chữ ký**

```typescript
d.StartActivity(activity: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `activity` | `string` | Tên activity (vd: "com.facebook.katana/.LoginActivity") |

---

## Facebook

### d.OpenAppFB

Mở Facebook app với LoginActivity.

**Chữ ký**

```typescript
d.OpenAppFB(package: string, isKill?: boolean, timeout?: number): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `package` | `string` | Package name |
| `isKill` | `boolean *(tùy chọn)*` | Nếu true, force close app trước khi mở (mặc định: false) |
| `timeout` | `number *(tùy chọn)*` | Timeout giây chờ app mở (mặc định: 0 = không chờ) |

**Trả về** `boolean` — Trạng thái thành công

---

### d.OpenUrlSchemeFB

Mở URL scheme trong Facebook app (vd: "fb://profile/123").

**Chữ ký**

```typescript
d.OpenUrlSchemeFB(link: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `link` | `string` | URL scheme cần mở |

---

### d.BackupAppFB

Backup dữ liệu app (cần root).

**Chữ ký**

```typescript
d.BackupAppFB(folderPath: string, fileNameWithoutExtension: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Thư mục lưu backup |
| `fileNameWithoutExtension` | `string` | Tên file backup không kèm đuôi |

**Trả về** `boolean` — Trạng thái thành công

---

### d.RestoreAppFB

Restore dữ liệu app từ backup (cần root).

**Chữ ký**

```typescript
d.RestoreAppFB(folderPath: string, fileNameWithoutExtension: string): boolean
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `folderPath` | `string` | Thư mục chứa backup |
| `fileNameWithoutExtension` | `string` | Tên file backup không kèm đuôi |

**Trả về** `boolean` — Trạng thái thành công

---

## Hàm Instagram

### d.OpenUrlSchemeIG

Mở URL scheme trong Instagram app (vd: "instagram://user?username=xxx").

**Chữ ký**

```typescript
d.OpenUrlSchemeIG(link: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `link` | `string` | URL scheme cần mở |

---

## Facebook Lite

### d.OpenUrlSchemeFBLite

Mở URL scheme trong Facebook Lite app.

**Chữ ký**

```typescript
d.OpenUrlSchemeFBLite(link: string): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `link` | `string` | URL scheme cần mở |

---

## Hàm khác

### d.Delay

Delay execution

**Chữ ký**

```typescript
d.Delay(delay: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### d.DelayRandom

Delay random time

**Chữ ký**

```typescript
d.DelayRandom(min: number, max: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
