# Android — `d.*`

> API điều khiển thiết bị. Khả dụng khi workflow chạy trên thiết bị Android qua ADB.

**Tổng số hàm:** 82

## Mục lục

- **Hàm tương tác**
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
- **Hàm thiết bị**
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
- **Hàm app**
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
- **Hàm Instagram**
  - [d.OpenUrlSchemeIG](#dopenurlschemeig)
- **Facebook Lite**
  - [d.OpenUrlSchemeFBLite](#dopenurlschemefblite)
- **Hàm khác**
  - [d.Delay](#ddelay)
  - [d.DelayRandom](#ddelayrandom)

---

## Hàm tương tác

### d.PerformAction

Thực thi hành động hệ thống.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.DumpXml(): string
```

**Trả về** `string` — Chuỗi XML

---

### d.DetectScreen

Nhận diện màn hình hiện tại.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.InputEnter(): boolean
```

**Trả về** `boolean` — Trạng thái thành công

---

### d.InputEnd

Bấm phím End (di chuyển con trỏ về cuối).

**Cú pháp**

```typescript
d.InputEnd(): boolean
```

**Trả về** `boolean` — Trạng thái thành công

---

### d.ClearText

Xóa text trong element.

**Cú pháp**

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

**Cú pháp**

```typescript
d.SetAdbKeyboard(): boolean
```

**Trả về** `boolean` — Trạng thái thành công

---

### d.HideAdbKeyboard

Ẩn ADB keyboard.

**Cú pháp**

```typescript
d.HideAdbKeyboard(): void
```

---

### d.ScreenShot

Chụp ảnh màn hình, có thể crop theo element.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.IsClosed(): boolean
```

**Trả về** `boolean` — True nếu mất kết nối

---

### d.DeviceInfo

Lấy thông tin thiết bị.

**Cú pháp**

```typescript
d.DeviceInfo(): string
```

**Trả về** `string` — Chuỗi thông tin thiết bị

---

### d.DeviceSize

Lấy kích thước màn hình thiết bị dạng chuỗi.

**Cú pháp**

```typescript
d.DeviceSize(): string
```

**Trả về** `string` — Kích thước (vd: "1080x1920")

---

### d.DeviceHeight

Lấy chiều cao màn hình thiết bị.

**Cú pháp**

```typescript
d.DeviceHeight(): number
```

**Trả về** `number` — Chiều cao tính bằng pixel

---

### d.DeviceWidth

Lấy chiều rộng màn hình thiết bị.

**Cú pháp**

```typescript
d.DeviceWidth(): number
```

**Trả về** `number` — Chiều rộng tính bằng pixel

---

### d.GetDeviceIP

Lấy địa chỉ IP của thiết bị trên mạng hiện tại (LAN IP).

**Cú pháp**

```typescript
d.GetDeviceIP(): string
```

**Trả về** `string` — Địa chỉ IP

---

### d.ChangeLanguage

Đổi ngôn ngữ thiết bị.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.IsScreenOn(): boolean
```

**Trả về** `boolean` — True nếu màn hình đang bật

---

### d.SleepScreen

Tắt màn hình.

**Cú pháp**

```typescript
d.SleepScreen(): void
```

---

### d.UnlockScreen

Mở khóa màn hình bằng thao tác vuốt.

**Cú pháp**

```typescript
d.UnlockScreen(): void
```

---

### d.EnableWifi

Bật WiFi.

**Cú pháp**

```typescript
d.EnableWifi(): void
```

---

### d.DisableWifi

Tắt WiFi.

**Cú pháp**

```typescript
d.DisableWifi(): void
```

---

### d.ConnectWifi

Kết nối WiFi.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.DisconnectProxy(): void
```

---

### d.GetClipboard

Lấy nội dung clipboard.

**Cú pháp**

```typescript
d.GetClipboard(): string
```

**Trả về** `string` — Nội dung clipboard

---

### d.SetClipboard

Đặt nội dung clipboard.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.GetCurrentApp(): string
```

**Trả về** `string` — Package app

---

### d.IsAppInstalled

Kiểm tra app đã cài hay chưa.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.GetListApps(): string[]
```

**Trả về** `string[]` — Mảng package name

---

### d.GetListAppsInstalled

Lấy danh sách package đã cài (loại trừ system app).

**Cú pháp**

```typescript
d.GetListAppsInstalled(): string[]
```

**Trả về** `string[]` — Mảng package name

---

### d.GetCurrentActivity

Lấy activity đang ở foreground.

**Cú pháp**

```typescript
d.GetCurrentActivity(): string
```

**Trả về** `string` — Tên activity

---

### d.StartActivity

Khởi động Android activity.

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

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

**Cú pháp**

```typescript
d.DelayRandom(min: number, max: number): void
```

**Tham số**

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
