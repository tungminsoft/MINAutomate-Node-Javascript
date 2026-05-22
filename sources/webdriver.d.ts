// Namespace `c.*` — Chrome/browser automation API exposed to the goja VM.
// Mirrors chromeObj registration in backend/webdriver/vm.go (chromeObj.Set ...).
// Selector auto-detect: starts with `/` or `//` → XPath, otherwise CSS.
//
// NOTE: Functions NOT in the `c.*` namespace (email, captcha, phone, http,
// file IO, JSON helpers, hooks, RunScript, IsUid, IsXpath, ToJSDom, GetLog,
// SpinText, ...) are only available at root level — call directly without the `c.` prefix.
declare const c: {
// ==================== WINDOW ====================

/**
 * Open browser with the configured profile.
 * @returns True if browser opened successfully
 * @throws Error if chromedriver fails to start or session creation fails (Go err non-nil → JS exception)
 */
Open(): boolean;

/**
 * Close the browser.
 * @returns True if browser closed successfully
 * @throws Error if driver.Quit() fails (Go err non-nil → JS exception)
 */
Close(): boolean;

/**
 * Check whether the browser is closed.
 * @returns True if the browser is closed
 */
IsClosed(): boolean;

/**
 * Get browser window size.
 * @returns Size string (e.g., "1024x768")
 */
GetSize(): string;

/**
 * Set browser window size.
 * @param width - Width in pixels
 * @param height - Height in pixels
 * @returns True if set successfully
 */
SetSize(width: number, height: number): boolean;

/**
 * Restore the browser window to its original size.
 * @returns True if restored
 */
RestoreSize(): boolean;

/**
 * Get browser window position.
 * @returns Position string (e.g., "100,200")
 */
GetPosition(): string;

/**
 * Set browser window position.
 * @param x - X position
 * @param y - Y position
 * @returns True if set successfully
 */
SetPosition(x: number, y: number): boolean;

/**
 * Restore the browser window to its original position.
 * @returns True if restored
 */
RestorePosition(): boolean;

// ==================== BROWSER ====================

/**
 * Navigate to a URL.
 * @param url - URL to navigate to
 * @returns True if navigation succeeded
 */
GotoUrl(url: string): boolean;

/**
 * Get the current page URL.
 * @returns Current URL
 */
GetUrl(): string;

/**
 * Wait until the URL changes away from `currentUrl`, or until timeout.
 * @param currentUrl - Reference URL to compare against
 * @param timeout - Timeout in seconds
 * @returns True if the URL changed before timeout
 */
WaitUrlChanged(currentUrl: string, timeout: number): boolean;

/**
 * Go back in browser history.
 * @param count - Number of times to go back
 */
Back(count: number): void;

/**
 * Refresh the current page.
 */
Refresh(): void;

/**
 * Open a new tab, switch focus to it, and optionally navigate to `url`.
 * (W3C /window/new does not auto-switch — the implementation parses the new handle and switches manually.)
 * @param url - Optional URL to load in the new tab (pass "" to open a blank tab)
 * @returns True if the tab was created
 */
NewTab(url?: string): boolean;

/**
 * Switch focus to the tab at the given index (0-based) within the current window handles.
 * @param index - Tab position (0 = first tab)
 * @returns True if switched successfully
 */
ActiveTab(index: number): boolean;

/**
 * Close the currently focused tab. After closing, switches back to tab[0] if any remain.
 * @returns True if closed successfully
 */
CloseTab(): boolean;

/**
 * Close all other tabs, keeping the currently focused tab.
 * @returns True if executed successfully
 */
CloseOtherTabs(): boolean;

/**
 * Switch into an iframe by index (numeric string) OR by selector (xpath/css).
 * Examples: c.SwitchFrame("0") | c.SwitchFrame("//iframe[@id='ad']") | c.SwitchFrame("iframe#main")
 * @param selector - Index as string ("0","1",...) or a CSS/XPath selector
 * @returns True if switched
 */
SwitchFrame(selector: string): boolean;

/**
 * Find a popup window by title and switch focus to it.
 * Iterates through all window handles, switching and checking title === input.
 * @param title - Window title to match (exact comparison)
 * @returns True if found and switched
 */
SwitchPopup(title: string): boolean;

/**
 * Exit all nested frames and return to the top-level document.
 * @returns True if switched
 */
SwitchDefaultFrame(): boolean;

/**
 * Switch back to the parent frame.
 * @returns True if switched
 */
SwitchParentFrame(): boolean;

/**
 * Accept the browser alert dialog (click OK).
 * @returns True if accepted
 */
AcceptAlert(): boolean;

/**
 * Dismiss the browser alert dialog (click Cancel).
 * @returns True if dismissed
 */
CancelAlert(): boolean;

/**
 * Get the page source HTML.
 * @returns Page source
 */
GetPageSource(): string;

// ==================== ELEMENT ====================

/**
 * Check whether an element exists.
 * @param selector - CSS selector or XPath
 * @param timeout - Timeout in seconds (0 = instant check)
 * @returns True if the element exists
 */
ExistElement(selector: string, timeout?: number): boolean;

/**
 * Check whether any of multiple elements exist.
 * @param timeout - Timeout in seconds
 * @param arrSelector - Array of CSS selectors or XPaths
 * @returns Selector of the first found element, or empty string
 */
ExistElements(timeout: number, arrSelector: string[]): string;

/**
 * Wait for an element to disappear.
 * @param selector - CSS selector or XPath
 * @param timeout - Timeout in seconds
 * @returns True if the element disappeared
 */
WaitElementHide(selector: string, timeout: number): boolean;

/**
 * Count elements matching a selector.
 * @param selector - CSS selector or XPath
 * @returns Number of matching elements
 */
CountElement(selector: string): number;

/**
 * Remove an element from the DOM.
 * @param selector - CSS selector or XPath
 * @returns True if removed
 */
RemoveElement(selector: string): boolean;

/**
 * Check whether an element is visible on the page.
 * @param selector - CSS selector or XPath
 * @returns True if visible
 */
IsElementVisible(selector: string): boolean;

/**
 * Check whether an element is visible on screen (in viewport).
 * @param selector - CSS selector or XPath
 * @param timeout - Timeout in seconds
 * @returns True if the element is on screen
 */
IsElementOnScreen(selector: string, timeout: number): boolean;

/**
 * Get an element attribute value.
 * @param selector - CSS selector or XPath
 * @param attributeName - Attribute name
 * @returns Attribute value
 */
GetElementAttr(selector: string, attributeName: string): string;

/**
 * Get element inner text.
 * @param selector - CSS selector or XPath
 * @returns Inner text
 */
GetElementInnerText(selector: string): string;

/**
 * Set element inner text.
 * @param selector - CSS selector or XPath
 * @param value - Text to set
 * @returns Result
 */
SetElementInnerText(selector: string, value: string): string;

/**
 * Get element innerHTML.
 * @param selector - CSS selector or XPath
 * @returns innerHTML
 */
GetElementInnerHTML(selector: string): string;

/**
 * Get element outerHTML.
 * @param selector - CSS selector or XPath
 * @returns outerHTML
 */
GetElementOuterHTML(selector: string): string;

/**
 * Get element value (for input elements).
 * @param selector - CSS selector or XPath
 * @returns Element value
 */
GetElementValue(selector: string): string;

/**
 * Set element value (for input elements).
 * @param selector - CSS selector or XPath
 * @param value - Value to set
 * @returns Result
 */
SetElementValue(selector: string, value: string): boolean;

// ==================== MOUSE (Click/Hover/Move/Scroll) ====================

/**
 * Click an element by CSS selector or XPath.
 * @param selector - CSS selector or XPath
 * @returns True if the element was clicked
 */
Click(selector: string): boolean;

/**
 * Click an element using JavaScript (bypasses click interception).
 * @param selector - CSS selector or XPath
 * @returns True if the element was clicked
 */
ClickJS(selector: string): boolean;

/**
 * Hover the mouse over an element (W3C Actions API — pointerMove to element center).
 * Uses duration=100ms so mouseover/mouseenter events fire fully.
 * @param selector - CSS selector or XPath
 * @param delayMs - Duration in milliseconds for the hover action (default=100)
 * @returns True if hover succeeded
 */
HoverElement(selector: string, delayMs?: number): boolean;

/**
 * Move the mouse to the center of an element (instant, no hover delay).
 * Differs from HoverElement by duration=0 — does not trigger mouseover animation.
 * @param selector - CSS selector or XPath
 * @returns True if move succeeded
 */
MoveElement(selector: string): boolean;

/**
 * Scroll by a pixel distance.
 * @param distance - Distance in pixels (positive=down, negative=up)
 * @returns True if scrolled successfully
 */
ScrollDistance(distance: number): boolean;

/**
 * Scroll to an element.
 * @param selector - CSS selector or XPath
 * @returns True if scrolled successfully
 */
ScrollElement(selector: string): boolean;

/**
 * Scroll to an element only if it is not currently visible on screen.
 * @param selector - CSS selector or XPath
 * @returns True if the element is now on screen
 */
ScrollIfNotOnScreen(selector: string): boolean;

/**
 * Scroll to an element and wait.
 * @param selector - CSS selector or XPath
 * @param timeWait - Wait time in seconds after scrolling
 * @returns True if scrolled successfully
 */
ScrollAndWait(selector: string, timeWait: number): boolean;

/**
 * Scroll to an element and click it.
 * @param selector - CSS selector or XPath
 * @returns True if the element was found and clicked
 */
ScrollAndClick(selector: string): boolean;

// ==================== KEYBOARD ====================

/**
 * Send keystrokes to an element (clears first, then types character by character).
 * @param selector - CSS selector or XPath
 * @param content - Text to type
 * @returns True if sent successfully
 */
SendKeys(selector: string, content: string): boolean;

/**
 * Send keystrokes to an element with the option not to clear first.
 * @param selector - CSS selector or XPath
 * @param content - Text to type
 * @param isDontClearText - If true, append without clearing
 * @returns True if sent successfully
 */
SendKeys2(selector: string, content: string, isDontClearText: boolean): boolean;

/**
 * Send keystrokes using JavaScript setValue + input event.
 * @param selector - CSS selector or XPath
 * @param content - Text to set
 * @param isDontClearText - If true, append without clearing
 * @returns True if sent successfully
 */
SendKeys3(selector: string, content: string, isDontClearText: boolean): boolean;

/**
 * Send a file to a file input element.
 * @param selector - CSS selector or XPath of the file input
 * @param value - File path
 * @returns True if the file was set
 */
SendFile(selector: string, value: string): boolean;

/**
 * Select all text in an element.
 * @param selector - CSS selector or XPath
 * @returns True if text selected
 */
SelectText(selector: string): boolean;

/**
 * Clear text in an input element.
 * @param selector - CSS selector or XPath
 * @returns True if cleared successfully
 */
ClearText(selector: string): boolean;

/**
 * Clear text via Ctrl+A then Backspace — fallback cho input không hỗ trợ W3C /clear endpoint.
 * @param selector - CSS selector or XPath
 * @returns True if cleared successfully
 */
ClearText2(selector: string): boolean;

/**
 * Click the <option> child of a <select> whose `value` attribute matches.
 * Composes `selector + ">[value='X']"` and delegates to Click — trusted W3C click.
 * @param selector - CSS selector or XPath of the <select> element
 * @param value - Target option's `value` attribute
 * @returns True if option was found and clicked
 */
SelectOption(selector: string, value: string): boolean;

/**
 * Press a key or combo on an element. `key` accepts:
 *   - Single name:    "Enter", "Tab", "Space", "Backspace", "Delete", "Escape" (Esc),
 *                     "Home", "End", "PageUp", "PageDown", "Insert",
 *                     "ArrowUp"/"Down"/"Left"/"Right" (aliases: Up/Down/Left/Right),
 *                     "Shift", "Control" (Ctrl), "Alt", "Meta", "F1".."F12",
 *                     "Clear", "Pause", "Null", "Cancel", "Help".
 *   - Single literal: "a", "@", " ", ... (sent as-is if not in the name table).
 *   - Combo:          modifiers + key separated by "+", e.g. "Ctrl+A", "Shift+Tab",
 *                     "Ctrl+Shift+K", "Ctrl+Alt+Delete". A NullKey is appended after the combo
 *                     to release all modifiers (avoids modifier sticking on next action).
 * Edge case: single literal "+" stays a literal (combo path skipped when len(key) == 1).
 * @param selector - CSS selector or XPath
 * @param key - Key name, literal, or "+"-separated combo
 * @returns True if sent
 */
KeyPress(selector: string, key: string): boolean;

/**
 * Press the Enter key on an element.
 * @param selector - CSS selector or XPath
 * @returns True if Enter sent
 */
SendEnter(selector: string): boolean;

/**
 * Press the Backspace key on an element.
 * @param selector - CSS selector or XPath
 * @returns True if Backspace sent
 */
SendBackspace(selector: string): boolean;

/**
 * Clear the field using Ctrl+A + Delete.
 * @param selector - CSS selector or XPath
 * @returns True if cleared
 */
SendClear(selector: string): boolean;

/**
 * Press the Down Arrow key.
 * @param selector - CSS selector or XPath
 * @returns True if key sent
 */
SendDownArrow(selector: string): boolean;

/**
 * Press the Up Arrow key.
 * @param selector - CSS selector or XPath
 * @returns True if key sent
 */
SendUpArrow(selector: string): boolean;

/**
 * Press the Home key.
 * @param selector - CSS selector or XPath
 * @returns True if key sent
 */
SendHome(selector: string): boolean;

/**
 * Press the End key.
 * @param selector - CSS selector or XPath
 * @returns True if key sent
 */
SendEnd(selector: string): boolean;

// ==================== OTHER (JS/Cookies/Useragent/Screenshot) ====================

/**
 * Execute JavaScript in the browser context.
 * @param script - JavaScript code to execute
 * @returns Script execution result
 */
ExecuteJS(script: string): string;

/**
 * Log content to the browser console.
 * @param content - Content to log
 */
LogJS(content: string): void;

/**
 * Look up an extension ID by display name (navigates to chrome://extensions/ and queries the shadow DOM).
 * After completion, navigates back to the previous URL automatically.
 * @param name - Extension name (case-insensitive, trimmed)
 * @returns Extension ID, or "" if not found
 */
GetExtensionId(name: string): string;

/**
 * Get cookies for a domain.
 * @param domain - Cookie domain
 * @returns JSON string of cookies
 */
GetCookies(domain: string): string;

/**
 * Add multiple cookies (JSON array format).
 * @param cookies - JSON string of a cookies array
 * @param domain - Cookie domain
 * @returns True if added
 */
AddCookies(cookies: string, domain: string): boolean;

/**
 * Delete all cookies (alias of root-level DeleteAllCookies).
 * @returns True if deleted
 */
DeleteCookies(): boolean;

/**
 * Get the browser user agent.
 * @returns User agent string
 */
GetUseragent(): string;

/**
 * Set the browser user agent.
 * @param useragent - User agent to set
 * @returns Result
 */
SetUseragent(useragent: string): boolean;

/**
 * Take a screenshot of the current page and return it as base64-encoded PNG.
 * @returns Base64-encoded screenshot (empty string on failure)
 */
Screenshot(): string;

/**
 * Play a video element.
 * @param selector - CSS selector or XPath of the video element
 * @returns True if the video started playing
 */
PlayVideo(selector: string): boolean;

// ==================== HUMAN-LIKE (ANTI-BOT) ====================
// All implementations live in backend/webdriver/humanize.go.

/**
 * Click an element like a real user:
 *   1. Scroll the element into view, wait 500-1500ms.
 *   2. Try up to 3 attempts — each picks a random target point within the element bounds
 *      (20% inner padding from edges), then hit-tests via `document.elementFromPoint` to
 *      ensure the pixel actually belongs to the target (or a descendant). Skips coords
 *      occluded by overlays (modal, sticky banner, anti-bot layer).
 *   3. On a clickable coord: move the cursor along a cubic Bezier curve (step count adapts
 *      to distance via Fitts's law), pause 100-300ms, then mouse down/up via W3C Actions API.
 * Returns false if all 3 attempts are occluded — caller should dismiss the overlay first.
 * Avoids detection of "instant click with no preceding mousemove" and "exact center click".
 * @param selector - CSS selector or XPath
 * @returns True if the click action succeeded; false if rect is empty (falls back to Click) or all attempts occluded
 */
HumanClick(selector: string): boolean;

/**
 * Type text into an element character by character with random per-character delay.
 * Inserts a "thinking pause" of 300-700ms with 50% probability around every ~10 characters
 * to mimic a human pausing to think. Auto-clicks the element first to focus.
 * Avoids detection of "100 chars pasted in 0ms".
 * @param selector - CSS selector or XPath
 * @param text - Text to type
 * @param minDelay - Minimum delay per character in ms (pass 0 to use default 120)
 * @param maxDelay - Maximum delay per character in ms (pass 0 to use default 250)
 * @returns True if all characters were sent
 */
HumanSendKeys(selector: string, text: string, minDelay?: number, maxDelay?: number): boolean;

/**
 * Move the cursor to an element's center along a Bezier curve, with ±20% jitter from exact center.
 * Resolves the element rect, computes a randomized target near the center, then runs the same
 * cubic Bezier trajectory used by HumanClick (Fitts's law-based step count, randomized control
 * points to avoid linear-trajectory fingerprinting).
 * @param selector - CSS selector or XPath
 * @returns True if the move action succeeded
 */
HumanMoveElement(selector: string): boolean;

/**
 * Drag from source element to destination element with slow paused motion (1 atomic Actions request).
 * Pattern: move to src (200-400ms) → pause 100-250ms → down → pause 50ms →
 *   slow move to dst (500-1000ms) → pause 100-250ms → up. Releases action state afterwards.
 * Use for: captcha sliders (Cloudflare puzzle), reorder lists, drag-drop UIs.
 * @param srcSelector - CSS selector or XPath of the source element
 * @param dstSelector - CSS selector or XPath of the destination element
 * @returns True if the drag action succeeded
 */
HumanDrag(srcSelector: string, dstSelector: string): boolean;

/**
 * Simulate a real user scrolling via W3C Wheel Actions API — fires a trusted `wheel` event
 * with `distance` BEFORE the resulting `scroll` event, matching real mouse-wheel behavior.
 * Different from `ScrollDistance` (which uses `window.scrollBy` and fires only `scroll`):
 * bypasses anti-bot checks that flag "scroll without preceding wheel" (common in behavior
 * analysis by DataDome, hCaptcha, Cloudflare).
 *
 * Splits `distance` into 3-5 chunks with ±10% jitter and 80-200ms delay between chunks to mimic
 * scrolling notch-by-notch instead of teleporting scrollPos. Wheel x/y coordinates come from
 * the tracked last cursor position (continuity with HumanMoveElement); samples near viewport
 * center if cursor has not been initialized yet.
 *
 * @param distance - Pixel distance (positive = scroll down, negative = scroll up)
 * @returns True if the scroll action completed
 */
HumanScrollDistance(distance: number): boolean;

// ==================== DELAY ====================

/**
 * Delay execution.
 * @param delay - Delay in seconds
 */
DelayTime(delay: number): void;

/**
 * Delay for a random duration within a range.
 * @param min - Minimum seconds
 * @param max - Maximum seconds
 */
DelayRandom(min: number, max: number): void;
};
