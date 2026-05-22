# Browser — `c.*`

> Browser automation API. Available when the workflow runs against a Chrome browser via WebDriver.

**Total functions:** 81

## Table of Contents

- **Window**
  - [c.Open](#copen)
  - [c.Close](#cclose)
  - [c.IsClosed](#cisclosed)
  - [c.GetSize](#cgetsize)
  - [c.SetSize](#csetsize)
  - [c.RestoreSize](#crestoresize)
  - [c.GetPosition](#cgetposition)
  - [c.SetPosition](#csetposition)
  - [c.RestorePosition](#crestoreposition)
- **Browser**
  - [c.GotoUrl](#cgotourl)
  - [c.GetUrl](#cgeturl)
  - [c.WaitUrlChanged](#cwaiturlchanged)
  - [c.Back](#cback)
  - [c.Refresh](#crefresh)
  - [c.NewTab](#cnewtab)
  - [c.ActiveTab](#cactivetab)
  - [c.CloseTab](#cclosetab)
  - [c.CloseOtherTabs](#ccloseothertabs)
  - [c.SwitchFrame](#cswitchframe)
  - [c.SwitchPopup](#cswitchpopup)
  - [c.SwitchDefaultFrame](#cswitchdefaultframe)
  - [c.SwitchParentFrame](#cswitchparentframe)
  - [c.AcceptAlert](#cacceptalert)
  - [c.CancelAlert](#ccancelalert)
  - [c.GetPageSource](#cgetpagesource)
- **Element**
  - [c.ExistElement](#cexistelement)
  - [c.ExistElements](#cexistelements)
  - [c.WaitElementHide](#cwaitelementhide)
  - [c.CountElement](#ccountelement)
  - [c.RemoveElement](#cremoveelement)
  - [c.IsElementVisible](#ciselementvisible)
  - [c.IsElementOnScreen](#ciselementonscreen)
  - [c.GetElementAttr](#cgetelementattr)
  - [c.GetElementInnerText](#cgetelementinnertext)
  - [c.SetElementInnerText](#csetelementinnertext)
  - [c.GetElementInnerHTML](#cgetelementinnerhtml)
  - [c.GetElementOuterHTML](#cgetelementouterhtml)
  - [c.GetElementValue](#cgetelementvalue)
  - [c.SetElementValue](#csetelementvalue)
- **Mouse (Click/Hover/Move/Scroll)**
  - [c.Click](#cclick)
  - [c.ClickJS](#cclickjs)
  - [c.HoverElement](#choverelement)
  - [c.MoveElement](#cmoveelement)
  - [c.ScrollDistance](#cscrolldistance)
  - [c.ScrollElement](#cscrollelement)
  - [c.ScrollIfNotOnScreen](#cscrollifnotonscreen)
  - [c.ScrollAndWait](#cscrollandwait)
  - [c.ScrollAndClick](#cscrollandclick)
- **Keyboard**
  - [c.SendKeys](#csendkeys)
  - [c.SendKeys2](#csendkeys2)
  - [c.SendKeys3](#csendkeys3)
  - [c.SendFile](#csendfile)
  - [c.SelectText](#cselecttext)
  - [c.ClearText](#ccleartext)
  - [c.ClearText2](#ccleartext2)
  - [c.SelectOption](#cselectoption)
  - [c.KeyPress](#ckeypress)
  - [c.SendEnter](#csendenter)
  - [c.SendBackspace](#csendbackspace)
  - [c.SendClear](#csendclear)
  - [c.SendDownArrow](#csenddownarrow)
  - [c.SendUpArrow](#csenduparrow)
  - [c.SendHome](#csendhome)
  - [c.SendEnd](#csendend)
- **Other (Js/Cookies/Useragent/Screenshot)**
  - [c.ExecuteJS](#cexecutejs)
  - [c.LogJS](#clogjs)
  - [c.GetExtensionId](#cgetextensionid)
  - [c.GetCookies](#cgetcookies)
  - [c.AddCookies](#caddcookies)
  - [c.DeleteCookies](#cdeletecookies)
  - [c.GetUseragent](#cgetuseragent)
  - [c.SetUseragent](#csetuseragent)
  - [c.Screenshot](#cscreenshot)
  - [c.PlayVideo](#cplayvideo)
- **Human-Like (Anti-Bot)**
  - [c.HumanClick](#chumanclick)
  - [c.HumanSendKeys](#chumansendkeys)
  - [c.HumanMoveElement](#chumanmoveelement)
  - [c.HumanDrag](#chumandrag)
  - [c.HumanScrollDistance](#chumanscrolldistance)
- **Delay**
  - [c.DelayTime](#cdelaytime)
  - [c.DelayRandom](#cdelayrandom)

---

## Window

### c.Open

Open browser with the configured profile.

**Signature**

```typescript
c.Open(): boolean
```

**Returns** `boolean` — True if browser opened successfully

---

### c.Close

Close the browser.

**Signature**

```typescript
c.Close(): boolean
```

**Returns** `boolean` — True if browser closed successfully

---

### c.IsClosed

Check whether the browser is closed.

**Signature**

```typescript
c.IsClosed(): boolean
```

**Returns** `boolean` — True if the browser is closed

---

### c.GetSize

Get browser window size.

**Signature**

```typescript
c.GetSize(): string
```

**Returns** `string` — Size string (e.g., "1024x768")

---

### c.SetSize

Set browser window size.

**Signature**

```typescript
c.SetSize(width: number, height: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `width` | `number` | Width in pixels |
| `height` | `number` | Height in pixels |

**Returns** `boolean` — True if set successfully

---

### c.RestoreSize

Restore the browser window to its original size.

**Signature**

```typescript
c.RestoreSize(): boolean
```

**Returns** `boolean` — True if restored

---

### c.GetPosition

Get browser window position.

**Signature**

```typescript
c.GetPosition(): string
```

**Returns** `string` — Position string (e.g., "100,200")

---

### c.SetPosition

Set browser window position.

**Signature**

```typescript
c.SetPosition(x: number, y: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `x` | `number` | X position |
| `y` | `number` | Y position |

**Returns** `boolean` — True if set successfully

---

### c.RestorePosition

Restore the browser window to its original position.

**Signature**

```typescript
c.RestorePosition(): boolean
```

**Returns** `boolean` — True if restored

---

## Browser

### c.GotoUrl

Navigate to a URL.

**Signature**

```typescript
c.GotoUrl(url: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `url` | `string` | URL to navigate to |

**Returns** `boolean` — True if navigation succeeded

---

### c.GetUrl

Get the current page URL.

**Signature**

```typescript
c.GetUrl(): string
```

**Returns** `string` — Current URL

---

### c.WaitUrlChanged

Wait until the URL changes away from `currentUrl`, or until timeout.

**Signature**

```typescript
c.WaitUrlChanged(currentUrl: string, timeout: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `currentUrl` | `string` | Reference URL to compare against |
| `timeout` | `number` | Timeout in seconds |

**Returns** `boolean` — True if the URL changed before timeout

---

### c.Back

Go back in browser history.

**Signature**

```typescript
c.Back(count: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `count` | `number` | Number of times to go back |

---

### c.Refresh

Refresh the current page.

**Signature**

```typescript
c.Refresh(): void
```

---

### c.NewTab

Open a new tab, switch focus to it, and optionally navigate to `url`.
(W3C /window/new does not auto-switch — the implementation parses the new handle and switches manually.)

**Signature**

```typescript
c.NewTab(url?: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `url` | `string *(optional)*` | Optional URL to load in the new tab (pass "" to open a blank tab) |

**Returns** `boolean` — True if the tab was created

---

### c.ActiveTab

Switch focus to the tab at the given index (0-based) within the current window handles.

**Signature**

```typescript
c.ActiveTab(index: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `index` | `number` | Tab position (0 = first tab) |

**Returns** `boolean` — True if switched successfully

---

### c.CloseTab

Close the currently focused tab. After closing, switches back to tab[0] if any remain.

**Signature**

```typescript
c.CloseTab(): boolean
```

**Returns** `boolean` — True if closed successfully

---

### c.CloseOtherTabs

Close all other tabs, keeping the currently focused tab.

**Signature**

```typescript
c.CloseOtherTabs(): boolean
```

**Returns** `boolean` — True if executed successfully

---

### c.SwitchFrame

Switch into an iframe by index (numeric string) OR by selector (xpath/css).
Examples: c.SwitchFrame("0") | c.SwitchFrame("//iframe[@id='ad']") | c.SwitchFrame("iframe#main")

**Signature**

```typescript
c.SwitchFrame(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | Index as string ("0","1",...) or a CSS/XPath selector |

**Returns** `boolean` — True if switched

---

### c.SwitchPopup

Find a popup window by title and switch focus to it.
Iterates through all window handles, switching and checking title === input.

**Signature**

```typescript
c.SwitchPopup(title: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `title` | `string` | Window title to match (exact comparison) |

**Returns** `boolean` — True if found and switched

---

### c.SwitchDefaultFrame

Exit all nested frames and return to the top-level document.

**Signature**

```typescript
c.SwitchDefaultFrame(): boolean
```

**Returns** `boolean` — True if switched

---

### c.SwitchParentFrame

Switch back to the parent frame.

**Signature**

```typescript
c.SwitchParentFrame(): boolean
```

**Returns** `boolean` — True if switched

---

### c.AcceptAlert

Accept the browser alert dialog (click OK).

**Signature**

```typescript
c.AcceptAlert(): boolean
```

**Returns** `boolean` — True if accepted

---

### c.CancelAlert

Dismiss the browser alert dialog (click Cancel).

**Signature**

```typescript
c.CancelAlert(): boolean
```

**Returns** `boolean` — True if dismissed

---

### c.GetPageSource

Get the page source HTML.

**Signature**

```typescript
c.GetPageSource(): string
```

**Returns** `string` — Page source

---

## Element

### c.ExistElement

Check whether an element exists.

**Signature**

```typescript
c.ExistElement(selector: string, timeout?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `timeout` | `number *(optional)*` | Timeout in seconds (0 = instant check) |

**Returns** `boolean` — True if the element exists

---

### c.ExistElements

Check whether any of multiple elements exist.

**Signature**

```typescript
c.ExistElements(timeout: number, arrSelector: string[]): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `timeout` | `number` | Timeout in seconds |
| `arrSelector` | `string[]` | Array of CSS selectors or XPaths |

**Returns** `string` — Selector of the first found element, or empty string

---

### c.WaitElementHide

Wait for an element to disappear.

**Signature**

```typescript
c.WaitElementHide(selector: string, timeout: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `timeout` | `number` | Timeout in seconds |

**Returns** `boolean` — True if the element disappeared

---

### c.CountElement

Count elements matching a selector.

**Signature**

```typescript
c.CountElement(selector: string): number
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `number` — Number of matching elements

---

### c.RemoveElement

Remove an element from the DOM.

**Signature**

```typescript
c.RemoveElement(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if removed

---

### c.IsElementVisible

Check whether an element is visible on the page.

**Signature**

```typescript
c.IsElementVisible(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if visible

---

### c.IsElementOnScreen

Check whether an element is visible on screen (in viewport).

**Signature**

```typescript
c.IsElementOnScreen(selector: string, timeout: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `timeout` | `number` | Timeout in seconds |

**Returns** `boolean` — True if the element is on screen

---

### c.GetElementAttr

Get an element attribute value.

**Signature**

```typescript
c.GetElementAttr(selector: string, attributeName: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `attributeName` | `string` | Attribute name |

**Returns** `string` — Attribute value

---

### c.GetElementInnerText

Get element inner text.

**Signature**

```typescript
c.GetElementInnerText(selector: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `string` — Inner text

---

### c.SetElementInnerText

Set element inner text.

**Signature**

```typescript
c.SetElementInnerText(selector: string, value: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `value` | `string` | Text to set |

**Returns** `string` — Result

---

### c.GetElementInnerHTML

Get element innerHTML.

**Signature**

```typescript
c.GetElementInnerHTML(selector: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `string` — innerHTML

---

### c.GetElementOuterHTML

Get element outerHTML.

**Signature**

```typescript
c.GetElementOuterHTML(selector: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `string` — outerHTML

---

### c.GetElementValue

Get element value (for input elements).

**Signature**

```typescript
c.GetElementValue(selector: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `string` — Element value

---

### c.SetElementValue

Set element value (for input elements).

**Signature**

```typescript
c.SetElementValue(selector: string, value: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `value` | `string` | Value to set |

**Returns** `boolean` — Result

---

## Mouse (Click/Hover/Move/Scroll)

### c.Click

Click an element by CSS selector or XPath.

**Signature**

```typescript
c.Click(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if the element was clicked

---

### c.ClickJS

Click an element using JavaScript (bypasses click interception).

**Signature**

```typescript
c.ClickJS(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if the element was clicked

---

### c.HoverElement

Hover the mouse over an element (W3C Actions API — pointerMove to element center).
Uses duration=100ms so mouseover/mouseenter events fire fully.

**Signature**

```typescript
c.HoverElement(selector: string, delayMs?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `delayMs` | `number *(optional)*` | Duration in milliseconds for the hover action (default=100) |

**Returns** `boolean` — True if hover succeeded

---

### c.MoveElement

Move the mouse to the center of an element (instant, no hover delay).
Differs from HoverElement by duration=0 — does not trigger mouseover animation.

**Signature**

```typescript
c.MoveElement(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if move succeeded

---

### c.ScrollDistance

Scroll by a pixel distance.

**Signature**

```typescript
c.ScrollDistance(distance: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `distance` | `number` | Distance in pixels (positive=down, negative=up) |

**Returns** `boolean` — True if scrolled successfully

---

### c.ScrollElement

Scroll to an element.

**Signature**

```typescript
c.ScrollElement(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if scrolled successfully

---

### c.ScrollIfNotOnScreen

Scroll to an element only if it is not currently visible on screen.

**Signature**

```typescript
c.ScrollIfNotOnScreen(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if the element is now on screen

---

### c.ScrollAndWait

Scroll to an element and wait.

**Signature**

```typescript
c.ScrollAndWait(selector: string, timeWait: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `timeWait` | `number` | Wait time in seconds after scrolling |

**Returns** `boolean` — True if scrolled successfully

---

### c.ScrollAndClick

Scroll to an element and click it.

**Signature**

```typescript
c.ScrollAndClick(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if the element was found and clicked

---

## Keyboard

### c.SendKeys

Send keystrokes to an element (clears first, then types character by character).

**Signature**

```typescript
c.SendKeys(selector: string, content: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `content` | `string` | Text to type |

**Returns** `boolean` — True if sent successfully

---

### c.SendKeys2

Send keystrokes to an element with the option not to clear first.

**Signature**

```typescript
c.SendKeys2(selector: string, content: string, isDontClearText: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `content` | `string` | Text to type |
| `isDontClearText` | `boolean` | If true, append without clearing |

**Returns** `boolean` — True if sent successfully

---

### c.SendKeys3

Send keystrokes using JavaScript setValue + input event.

**Signature**

```typescript
c.SendKeys3(selector: string, content: string, isDontClearText: boolean): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `content` | `string` | Text to set |
| `isDontClearText` | `boolean` | If true, append without clearing |

**Returns** `boolean` — True if sent successfully

---

### c.SendFile

Send a file to a file input element.

**Signature**

```typescript
c.SendFile(selector: string, value: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath of the file input |
| `value` | `string` | File path |

**Returns** `boolean` — True if the file was set

---

### c.SelectText

Select all text in an element.

**Signature**

```typescript
c.SelectText(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if text selected

---

### c.ClearText

Clear text in an input element.

**Signature**

```typescript
c.ClearText(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if cleared successfully

---

### c.ClearText2

Clear text via Ctrl+A then Backspace — fallback cho input không hỗ trợ W3C /clear endpoint.

**Signature**

```typescript
c.ClearText2(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if cleared successfully

---

### c.SelectOption

Click the <option> child of a <select> whose `value` attribute matches.
Composes `selector + ">[value='X']"` and delegates to Click — trusted W3C click.

**Signature**

```typescript
c.SelectOption(selector: string, value: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath of the <select> element |
| `value` | `string` | Target option's `value` attribute |

**Returns** `boolean` — True if option was found and clicked

---

### c.KeyPress

Press a key or combo on an element. `key` accepts:
  - Single name:    "Enter", "Tab", "Space", "Backspace", "Delete", "Escape" (Esc),
                    "Home", "End", "PageUp", "PageDown", "Insert",
                    "ArrowUp"/"Down"/"Left"/"Right" (aliases: Up/Down/Left/Right),
                    "Shift", "Control" (Ctrl), "Alt", "Meta", "F1".."F12",
                    "Clear", "Pause", "Null", "Cancel", "Help".
  - Single literal: "a", "@", " ", ... (sent as-is if not in the name table).
  - Combo:          modifiers + key separated by "+", e.g. "Ctrl+A", "Shift+Tab",
                    "Ctrl+Shift+K", "Ctrl+Alt+Delete". A NullKey is appended after the combo
                    to release all modifiers (avoids modifier sticking on next action).
Edge case: single literal "+" stays a literal (combo path skipped when len(key) == 1).

**Signature**

```typescript
c.KeyPress(selector: string, key: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `key` | `string` | Key name, literal, or "+"-separated combo |

**Returns** `boolean` — True if sent

---

### c.SendEnter

Press the Enter key on an element.

**Signature**

```typescript
c.SendEnter(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if Enter sent

---

### c.SendBackspace

Press the Backspace key on an element.

**Signature**

```typescript
c.SendBackspace(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if Backspace sent

---

### c.SendClear

Clear the field using Ctrl+A + Delete.

**Signature**

```typescript
c.SendClear(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if cleared

---

### c.SendDownArrow

Press the Down Arrow key.

**Signature**

```typescript
c.SendDownArrow(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if key sent

---

### c.SendUpArrow

Press the Up Arrow key.

**Signature**

```typescript
c.SendUpArrow(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if key sent

---

### c.SendHome

Press the Home key.

**Signature**

```typescript
c.SendHome(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if key sent

---

### c.SendEnd

Press the End key.

**Signature**

```typescript
c.SendEnd(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if key sent

---

## Other (Js/Cookies/Useragent/Screenshot)

### c.ExecuteJS

Execute JavaScript in the browser context.

**Signature**

```typescript
c.ExecuteJS(script: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `script` | `string` | JavaScript code to execute |

**Returns** `string` — Script execution result

---

### c.LogJS

Log content to the browser console.

**Signature**

```typescript
c.LogJS(content: string): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `content` | `string` | Content to log |

---

### c.GetExtensionId

Look up an extension ID by display name (navigates to chrome://extensions/ and queries the shadow DOM).
After completion, navigates back to the previous URL automatically.

**Signature**

```typescript
c.GetExtensionId(name: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `name` | `string` | Extension name (case-insensitive, trimmed) |

**Returns** `string` — Extension ID, or "" if not found

---

### c.GetCookies

Get cookies for a domain.

**Signature**

```typescript
c.GetCookies(domain: string): string
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `domain` | `string` | Cookie domain |

**Returns** `string` — JSON string of cookies

---

### c.AddCookies

Add multiple cookies (JSON array format).

**Signature**

```typescript
c.AddCookies(cookies: string, domain: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `cookies` | `string` | JSON string of a cookies array |
| `domain` | `string` | Cookie domain |

**Returns** `boolean` — True if added

---

### c.DeleteCookies

Delete all cookies (alias of root-level DeleteAllCookies).

**Signature**

```typescript
c.DeleteCookies(): boolean
```

**Returns** `boolean` — True if deleted

---

### c.GetUseragent

Get the browser user agent.

**Signature**

```typescript
c.GetUseragent(): string
```

**Returns** `string` — User agent string

---

### c.SetUseragent

Set the browser user agent.

**Signature**

```typescript
c.SetUseragent(useragent: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `useragent` | `string` | User agent to set |

**Returns** `boolean` — Result

---

### c.Screenshot

Take a screenshot of the current page and return it as base64-encoded PNG.

**Signature**

```typescript
c.Screenshot(): string
```

**Returns** `string` — Base64-encoded screenshot (empty string on failure)

---

### c.PlayVideo

Play a video element.

**Signature**

```typescript
c.PlayVideo(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath of the video element |

**Returns** `boolean` — True if the video started playing

---

## Human-Like (Anti-Bot)

### c.HumanClick

Click an element like a real user:
  1. Scroll the element into view, wait 500-1500ms.
  2. Try up to 3 attempts — each picks a random target point within the element bounds
     (20% inner padding from edges), then hit-tests via `document.elementFromPoint` to
     ensure the pixel actually belongs to the target (or a descendant). Skips coords
     occluded by overlays (modal, sticky banner, anti-bot layer).
  3. On a clickable coord: move the cursor along a cubic Bezier curve (step count adapts
     to distance via Fitts's law), pause 100-300ms, then mouse down/up via W3C Actions API.
Returns false if all 3 attempts are occluded — caller should dismiss the overlay first.
Avoids detection of "instant click with no preceding mousemove" and "exact center click".

**Signature**

```typescript
c.HumanClick(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if the click action succeeded; false if rect is empty (falls back to Click) or all attempts occluded

---

### c.HumanSendKeys

Type text into an element character by character with random per-character delay.
Inserts a "thinking pause" of 300-700ms with 50% probability around every ~10 characters
to mimic a human pausing to think. Auto-clicks the element first to focus.
Avoids detection of "100 chars pasted in 0ms".

**Signature**

```typescript
c.HumanSendKeys(selector: string, text: string, minDelay?: number, maxDelay?: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |
| `text` | `string` | Text to type |
| `minDelay` | `number *(optional)*` | Minimum delay per character in ms (pass 0 to use default 120) |
| `maxDelay` | `number *(optional)*` | Maximum delay per character in ms (pass 0 to use default 250) |

**Returns** `boolean` — True if all characters were sent

---

### c.HumanMoveElement

Move the cursor to an element's center along a Bezier curve, with ±20% jitter from exact center.
Resolves the element rect, computes a randomized target near the center, then runs the same
cubic Bezier trajectory used by HumanClick (Fitts's law-based step count, randomized control
points to avoid linear-trajectory fingerprinting).

**Signature**

```typescript
c.HumanMoveElement(selector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `selector` | `string` | CSS selector or XPath |

**Returns** `boolean` — True if the move action succeeded

---

### c.HumanDrag

Drag from source element to destination element with slow paused motion (1 atomic Actions request).
Pattern: move to src (200-400ms) → pause 100-250ms → down → pause 50ms →
  slow move to dst (500-1000ms) → pause 100-250ms → up. Releases action state afterwards.
Use for: captcha sliders (Cloudflare puzzle), reorder lists, drag-drop UIs.

**Signature**

```typescript
c.HumanDrag(srcSelector: string, dstSelector: string): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `srcSelector` | `string` | CSS selector or XPath of the source element |
| `dstSelector` | `string` | CSS selector or XPath of the destination element |

**Returns** `boolean` — True if the drag action succeeded

---

### c.HumanScrollDistance

Simulate a real user scrolling via W3C Wheel Actions API — fires a trusted `wheel` event
with `distance` BEFORE the resulting `scroll` event, matching real mouse-wheel behavior.
Different from `ScrollDistance` (which uses `window.scrollBy` and fires only `scroll`):
bypasses anti-bot checks that flag "scroll without preceding wheel" (common in behavior
analysis by DataDome, hCaptcha, Cloudflare).

Splits `distance` into 3-5 chunks with ±10% jitter and 80-200ms delay between chunks to mimic
scrolling notch-by-notch instead of teleporting scrollPos. Wheel x/y coordinates come from
the tracked last cursor position (continuity with HumanMoveElement); samples near viewport
center if cursor has not been initialized yet.

**Signature**

```typescript
c.HumanScrollDistance(distance: number): boolean
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `distance` | `number` | Pixel distance (positive = scroll down, negative = scroll up) |

**Returns** `boolean` — True if the scroll action completed

---

## Delay

### c.DelayTime

Delay execution.

**Signature**

```typescript
c.DelayTime(delay: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `delay` | `number` | Delay in seconds |

---

### c.DelayRandom

Delay for a random duration within a range.

**Signature**

```typescript
c.DelayRandom(min: number, max: number): void
```

**Parameters**

| Name | Type | Description |
|------|------|-------------|
| `min` | `number` | Minimum seconds |
| `max` | `number` | Maximum seconds |

---
