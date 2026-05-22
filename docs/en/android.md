# Android — `d.*`

> Device automation API. Available when the workflow runs against an Android device via ADB.

**Total functions:** 82

## Table of Contents

- **Interact Functions**
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
- **Device Functions**
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
- **App Functions**
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
- **Instagram Functions**
  - [d.OpenUrlSchemeIG](#dopenurlschemeig)
- **Facebook Lite**
  - [d.OpenUrlSchemeFBLite](#dopenurlschemefblite)
- **Other Functions**
  - [d.Delay](#ddelay)
  - [d.DelayRandom](#ddelayrandom)

---

## Interact Functions

### d.PerformAction

Perform system action

**Signature**

```typescript
d.PerformAction(typeAction: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `typeAction` | `number` | 1: Home, 2: Back, 3: Recent apps |

---

### d.Back

Press back button multiple times

**Signature**

```typescript
d.Back(count?: number, delay?: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `count` | `number *(optional)*` | Number of times to press back (default: 1) |
| `delay` | `number *(optional)*` | Delay between presses in seconds (default: 1) |

---

### d.DumpXml

Dump screen XML hierarchy

**Signature**

```typescript
d.DumpXml(): string
```

**Returns** `string` — XML string

---

### d.DetectScreen

Detect current screen

**Signature**

```typescript
d.DetectScreen(xml?: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |

**Returns** `string` — Screen type identifier

---

### d.ExistElement

Check if element exists

**Signature**

```typescript
d.ExistElement(xpath: string, xml?: string, timeout?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `timeout` | `number *(optional)*` | Timeout in seconds (default: 0) |

**Returns** `boolean` — True if element exists

---

### d.ExistElements

Check if any of multiple elements exist

**Signature**

```typescript
d.ExistElements(timeout: number, xml: string, lstXpath: string[]): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `timeout` | `number` | Timeout in seconds (default: 0) |
| `xml` | `string` | XML dump (empty string to auto dump) |
| `lstXpath` | `string[]` | Array of Xpath selectors |

**Returns** `string` — Xpath of first found element, or empty string

---

### d.ExistAllElements

Check if all elements exist

**Signature**

```typescript
d.ExistAllElements(lstXpath: string[], xml?: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `lstXpath` | `string[]` | Array of Xpath selectors |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |

**Returns** `boolean` — True if all elements exist

---

### d.CountElement

Count elements matching xpath

**Signature**

```typescript
d.CountElement(xpath: string, xml?: string): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |

**Returns** `number` — Number of matching elements

---

### d.WaitElementHide

Wait for element to disappear

**Signature**

```typescript
d.WaitElementHide(xpath: string, timeout: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `timeout` | `number` | Timeout in seconds |

**Returns** `boolean` — True if element disappeared

---

### d.GetElementAttr

Get attribute values of elements matching xpath

**Signature**

```typescript
d.GetElementAttr(xml: string, xpath: string, attribute: string): string[]
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xml` | `string` | XML dump (empty string to auto dump) |
| `xpath` | `string` | Xpath selector |
| `attribute` | `string` | Attribute name (e.g., "text", "bounds", "content-desc") |

**Returns** `string[]` — Array of attribute values

---

### d.TapXY

Tap at specific coordinates

**Signature**

```typescript
d.TapXY(x: number, y: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `x` | `number` | X coordinate |
| `y` | `number` | Y coordinate |

**Returns** `boolean` — Success status

---

### d.Tap

Tap on element by xpath

**Signature**

```typescript
d.Tap(xpath: string, xml?: string, timeFind?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `timeFind` | `number *(optional)*` | Timeout in seconds to find element (default: 0) |

**Returns** `boolean` — Success status

---

### d.TapCenter

Tap center of element by xpath

**Signature**

```typescript
d.TapCenter(xpath: string, xml?: string, timeFind?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `timeFind` | `number *(optional)*` | Timeout in seconds to find element (default: 0) |

**Returns** `boolean` — Success status

---

### d.DoubleTapXY

Double tap at specific coordinates

**Signature**

```typescript
d.DoubleTapXY(x: number, y: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `x` | `number` | X coordinate |
| `y` | `number` | Y coordinate |

**Returns** `boolean` — Success status

---

### d.TapLongXY

Long tap at specific coordinates

**Signature**

```typescript
d.TapLongXY(x: number, y: number, delay?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `x` | `number` | X coordinate |
| `y` | `number` | Y coordinate |
| `delay` | `number *(optional)*` | Hold duration in seconds (default: 1) |

**Returns** `boolean` — Success status

---

### d.TapLong

Long tap on element

**Signature**

```typescript
d.TapLong(xpath: string, xml?: string, delay?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `delay` | `number *(optional)*` | Hold duration in seconds (default: 1) |

**Returns** `boolean` — Success status

---

### d.TapLongCenter

Long tap at center of element

**Signature**

```typescript
d.TapLongCenter(xpath: string, xml?: string, delay?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `delay` | `number *(optional)*` | Hold duration in seconds (default: 1) |

**Returns** `boolean` — Success status

---

### d.Swipe

Swipe from point to point

**Signature**

```typescript
d.Swipe(x1: number, y1: number, x2: number, y2: number, steps?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `x1` | `number` | Start X |
| `y1` | `number` | Start Y |
| `x2` | `number` | End X |
| `y2` | `number` | End Y |
| `steps` | `number *(optional)*` | Number of steps (higher = slower, 0 for random 30-40) |

**Returns** `boolean` — Success status

---

### d.SwipeUp

Swipe upwards

**Signature**

```typescript
d.SwipeUp(count?: number, checkScreenChange?: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `count` | `number *(optional)*` | Number of swipes |
| `checkScreenChange` | `boolean *(optional)*` | If true, swipe until screen doesn't change (default: false) |

**Returns** `boolean` — True if screen stopped changing (only if checkScreenChange is true)

---

### d.SwipeDown

Swipe downwards

**Signature**

```typescript
d.SwipeDown(count?: number, checkScreenChange?: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `count` | `number *(optional)*` | Number of swipes |
| `checkScreenChange` | `boolean *(optional)*` | If true, swipe until screen doesn't change (default: false) |

**Returns** `boolean` — True if screen stopped changing (only if checkScreenChange is true)

---

### d.SwipeLeft

Swipe to left

**Signature**

```typescript
d.SwipeLeft(count?: number, checkScreenChange?: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `count` | `number *(optional)*` | Number of swipes |
| `checkScreenChange` | `boolean *(optional)*` | If true, swipe until screen doesn't change (default: false) |

**Returns** `boolean` — True if screen stopped changing (only if checkScreenChange is true)

---

### d.SwipeRight

Swipe to right

**Signature**

```typescript
d.SwipeRight(count?: number, checkScreenChange?: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `count` | `number *(optional)*` | Number of swipes |
| `checkScreenChange` | `boolean *(optional)*` | If true, swipe until screen doesn't change (default: false) |

**Returns** `boolean` — True if screen stopped changing (only if checkScreenChange is true)

---

### d.SwipeXpath

Swipe from one element to another

**Signature**

```typescript
d.SwipeXpath(xpathFrom: string, xpathTo: string, xml?: string, steps?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpathFrom` | `string` | Xpath of start element |
| `xpathTo` | `string` | Xpath of end element |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `steps` | `number *(optional)*` | Number of steps (higher = slower, 0 for random 30-40) |

**Returns** `boolean` — Success status

---

### d.SwipeAndTap

Swipe and tap on element when found

**Signature**

```typescript
d.SwipeAndTap(xpath: string, xml?: string, timeout?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `timeout` | `number *(optional)*` | Timeout in seconds (default: 0) |

**Returns** `boolean` — Success status

---

### d.InputText

Input text to element

**Signature**

```typescript
d.InputText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector (empty string to input at current focus) |
| `content` | `string` | Text to input |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `isDontClearText` | `boolean *(optional)*` | If true, append text without clearing (default: false) |

**Returns** `boolean` — Success status

---

### d.TypeText

Input text to element (input character by character)

**Signature**

```typescript
d.TypeText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string` | Xpath selector (empty string to input at current focus) |
| `content` | `string` | Text to input |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |
| `isDontClearText` | `boolean *(optional)*` | If true, append text without clearing (default: false) |

**Returns** `boolean` — Success status

---

### d.InputKeyCode

Press specific key code

**Signature**

```typescript
d.InputKeyCode(keyCode: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `keyCode` | `number` | Android key code |

**Returns** `boolean` — Success status

---

### d.InputEnter

Press Enter key

**Signature**

```typescript
d.InputEnter(): boolean
```

**Returns** `boolean` — Success status

---

### d.InputEnd

Press End key (move cursor to end)

**Signature**

```typescript
d.InputEnd(): boolean
```

**Returns** `boolean` — Success status

---

### d.ClearText

Clear text in element

**Signature**

```typescript
d.ClearText(xpath?: string, xml?: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string *(optional)*` | Xpath selector |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump) |

**Returns** `boolean` — Success status

---

### d.SetAdbKeyboard

Set ADB keyboard as default input method

**Signature**

```typescript
d.SetAdbKeyboard(): boolean
```

**Returns** `boolean` — Success status

---

### d.HideAdbKeyboard

Hide ADB keyboard

**Signature**

```typescript
d.HideAdbKeyboard(): void
```

---

### d.ScreenShot

Take screenshot, optionally cropped to an element

**Signature**

```typescript
d.ScreenShot(xpath?: string, xml?: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `xpath` | `string *(optional)*` | Xpath selector to crop screenshot to element bounds (optional) |
| `xml` | `string *(optional)*` | XML dump (empty string to auto dump, optional) |

**Returns** `string` — Base64 encoded image

---

## Device Functions

### d.Shell

Execute shell command on device

**Signature**

```typescript
d.Shell(command: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `command` | `string` | Shell command to execute |

**Returns** `string` — Command output

---

### d.IsClosed

Check if phone is disconnected

**Signature**

```typescript
d.IsClosed(): boolean
```

**Returns** `boolean` — True if disconnected

---

### d.DeviceInfo

Get device info

**Signature**

```typescript
d.DeviceInfo(): string
```

**Returns** `string` — Device info string

---

### d.DeviceSize

Get device screen size as string

**Signature**

```typescript
d.DeviceSize(): string
```

**Returns** `string` — Size string (e.g., "1080x1920")

---

### d.DeviceHeight

Get device screen height

**Signature**

```typescript
d.DeviceHeight(): number
```

**Returns** `number` — Screen height in pixels

---

### d.DeviceWidth

Get device screen width

**Signature**

```typescript
d.DeviceWidth(): number
```

**Returns** `number` — Screen width in pixels

---

### d.GetDeviceIP

Get device IP address on current network (LAN IP)

**Signature**

```typescript
d.GetDeviceIP(): string
```

**Returns** `string` — IP address

---

### d.ChangeLanguage

Change device language

**Signature**

```typescript
d.ChangeLanguage(lang: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `lang` | `string` | Language code (e.g., "en", "vi") |

**Returns** `boolean` — Success status

---

### d.SetWallpaper

Set device wallpaper

**Signature**

```typescript
d.SetWallpaper(imagePath: string, wallpaperType: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `imagePath` | `string` | Local path to image file (already selected by caller) |
| `wallpaperType` | `string` | "home", "lock", or "both" |

**Returns** `boolean` — Success status

---

### d.IsScreenOn

Check if screen is on

**Signature**

```typescript
d.IsScreenOn(): boolean
```

**Returns** `boolean` — True if screen is on

---

### d.SleepScreen

Put screen to sleep

**Signature**

```typescript
d.SleepScreen(): void
```

---

### d.UnlockScreen

Unlock screen with swipe

**Signature**

```typescript
d.UnlockScreen(): void
```

---

### d.EnableWifi

Enable WiFi

**Signature**

```typescript
d.EnableWifi(): void
```

---

### d.DisableWifi

Disable WiFi

**Signature**

```typescript
d.DisableWifi(): void
```

---

### d.ConnectWifi

Connect to WiFi

**Signature**

```typescript
d.ConnectWifi(wifiName: string, wifiPass: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `wifiName` | `string` | WiFi SSID |
| `wifiPass` | `string` | WiFi password |

**Returns** `boolean` — Success status

---

### d.CreateFolder

Create folder on device

**Signature**

```typescript
d.CreateFolder(folderPath: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Folder path |

---

### d.DeleteFolder

Delete folder on device

**Signature**

```typescript
d.DeleteFolder(folderPath: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Folder path |

---

### d.DeleteFile

Delete file on device

**Signature**

```typescript
d.DeleteFile(path: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `path` | `string` | File path (supports wildcards) |

---

### d.PullFile

Pull file from device to PC

**Signature**

```typescript
d.PullFile(filePath: string, folderPath: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | file path on device |
| `folderPath` | `string` | folder path on PC to save |

---

### d.PushFile

Push file from PC to device

**Signature**

```typescript
d.PushFile(filePath: string, folderPath: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | file path on PC |
| `folderPath` | `string` | folder path on device (e.g., "/sdcard/") |

---

### d.PushImage

Push image(s) to device gallery

**Signature**

```typescript
d.PushImage(filePath: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePath` | `string` | Local image path(s), multiple paths separated by "|" |

---

### d.PushMedia

Push media file(s) to device gallery (support images and videos)

**Signature**

```typescript
d.PushMedia(filePaths: string[]): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `filePaths` | `string[]` | Local media path(s) |

---

### d.CheckProxy

Get current IP address of proxy

**Signature**

```typescript
d.CheckProxy(proxy?: string, web?: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `proxy` | `string *(optional)*` | Proxy string (optional, format: "host:port" or "host:port:user:pass") |
| `web` | `string *(optional)*` | URL to check IP (default: "ifconfig.co") |

**Returns** `string` — IP address or error message

---

### d.ConnectProxy

Connect proxy

**Signature**

```typescript
d.ConnectProxy(proxy: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `proxy` | `string` | Proxy string (format: "host:port") |

---

### d.DisconnectProxy

Disconnect proxy

**Signature**

```typescript
d.DisconnectProxy(): void
```

---

### d.GetClipboard

Get clipboard content

**Signature**

```typescript
d.GetClipboard(): string
```

**Returns** `string` — Clipboard text

---

### d.SetClipboard

Set clipboard content

**Signature**

```typescript
d.SetClipboard(content: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `content` | `string` | Text to set in clipboard |

---

## App Functions

### d.OpenApp

Open app by package name

**Signature**

```typescript
d.OpenApp(package: string, isKill?: boolean, timeout?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |
| `isKill` | `boolean *(optional)*` | If true, force close app before opening (default: false) |
| `timeout` | `number *(optional)*` | Timeout in seconds to wait for app to open (default: 0 = no wait) |

**Returns** `boolean` — Success status

---

### d.CloseApp

Close app by package

**Signature**

```typescript
d.CloseApp(package: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | App package |

---

### d.IsAppOpened

Check if app is opened (in foreground)

**Signature**

```typescript
d.IsAppOpened(package: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |

**Returns** `boolean` — True if app is in foreground

---

### d.GetCurrentApp

Get current foreground app

**Signature**

```typescript
d.GetCurrentApp(): string
```

**Returns** `string` — App package

---

### d.IsAppInstalled

Check if app is installed

**Signature**

```typescript
d.IsAppInstalled(package: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |

**Returns** `boolean` — True if installed

---

### d.ClearDataApp

Clear app data

**Signature**

```typescript
d.ClearDataApp(package: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |

---

### d.GetAppVersion

Get app version

**Signature**

```typescript
d.GetAppVersion(package: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |

**Returns** `string` — Version string

---

### d.InstallApp

Install app from APK

**Signature**

```typescript
d.InstallApp(apkPath: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `apkPath` | `string` | Path to APK file |

---

### d.UninstallApp

Uninstall app

**Signature**

```typescript
d.UninstallApp(package: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |

---

### d.GetInfoApp

Get app info

**Signature**

```typescript
d.GetInfoApp(package: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | App package name |

**Returns** `string` — App info string

---

### d.GetListApps

Get list of all packages on device

**Signature**

```typescript
d.GetListApps(): string[]
```

**Returns** `string[]` — Array of package names

---

### d.GetListAppsInstalled

Get list of installed (non-system) packages

**Signature**

```typescript
d.GetListAppsInstalled(): string[]
```

**Returns** `string[]` — Array of package names

---

### d.GetCurrentActivity

Get current foreground activity

**Signature**

```typescript
d.GetCurrentActivity(): string
```

**Returns** `string` — Activity name

---

### d.StartActivity

Start an Android activity

**Signature**

```typescript
d.StartActivity(activity: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `activity` | `string` | Activity name (e.g., "com.facebook.katana/.LoginActivity") |

---

## Facebook

### d.OpenAppFB

Open Facebook app with LoginActivity

**Signature**

```typescript
d.OpenAppFB(package: string, isKill?: boolean, timeout?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `package` | `string` | Package name |
| `isKill` | `boolean *(optional)*` | If true, force close app before opening (default: false) |
| `timeout` | `number *(optional)*` | Timeout in seconds to wait for app to open (default: 0 = no wait) |

**Returns** `boolean` — Success status

---

### d.OpenUrlSchemeFB

Open a URL scheme in Facebook app (e.g., "fb://profile/123")

**Signature**

```typescript
d.OpenUrlSchemeFB(link: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `link` | `string` | URL scheme to open |

---

### d.BackupAppFB

Backup app data (requires root)

**Signature**

```typescript
d.BackupAppFB(folderPath: string, fileNameWithoutExtension: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Folder to save backup |
| `fileNameWithoutExtension` | `string` | Backup file name without extension |

**Returns** `boolean` — Success status

---

### d.RestoreAppFB

Restore app data from backup (requires root)

**Signature**

```typescript
d.RestoreAppFB(folderPath: string, fileNameWithoutExtension: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `folderPath` | `string` | Folder containing backup |
| `fileNameWithoutExtension` | `string` | Backup file name without extension |

**Returns** `boolean` — Success status

---

## Instagram Functions

### d.OpenUrlSchemeIG

Open a URL scheme in Instagram app (e.g., "instagram://user?username=xxx")

**Signature**

```typescript
d.OpenUrlSchemeIG(link: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `link` | `string` | URL scheme to open |

---

## Facebook Lite

### d.OpenUrlSchemeFBLite

Open a URL scheme in Facebook Lite app

**Signature**

```typescript
d.OpenUrlSchemeFBLite(link: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `link` | `string` | URL scheme to open |

---

## Other Functions

### d.Delay

Delay execution

**Signature**

```typescript
d.Delay(delay: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### d.DelayRandom

Delay random time

**Signature**

```typescript
d.DelayRandom(min: number, max: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
