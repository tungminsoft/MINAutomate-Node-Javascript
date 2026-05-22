// All device functions are available via d.FunctionName()
// Example: d.Tap(xpath), d.DeleteFile(path), d.OpenApp(pkg)
declare const d: {
// ==================== INTERACT FUNCTIONS ====================
// Navigation
/**
 * Perform system action
 * @param typeAction - 1: Home, 2: Back, 3: Recent apps
 */
PerformAction(typeAction: number): void;

/**
 * Press back button multiple times
 * @param count - Number of times to press back (default: 1)
 * @param delay - Delay between presses in seconds (default: 1)
 */
Back(count?: number, delay?: number): void;

// Xml, Element
/**
 * Dump screen XML hierarchy
 * @returns XML string
 */
DumpXml(): string;

/**
 * Detect current screen
 * @param xml - XML dump (empty string to auto dump)
 * @returns Screen type identifier
 */
DetectScreen(xml?: string): string;

/**
 * Check if element exists
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @param timeout - Timeout in seconds (default: 0)
 * @returns True if element exists
 */
ExistElement(xpath: string, xml?: string, timeout?: number): boolean;

/**
 * Check if any of multiple elements exist
 * @param timeout - Timeout in seconds (default: 0)
 * @param xml - XML dump (empty string to auto dump)
 * @param lstXpath - Array of Xpath selectors
 * @returns Xpath of first found element, or empty string
 */
ExistElements(timeout: number, xml: string, lstXpath: string[]): string;

/**
 * Check if all elements exist
 * @param lstXpath - Array of Xpath selectors
 * @param xml - XML dump (empty string to auto dump)
 * @returns True if all elements exist
 */
ExistAllElements(lstXpath: string[], xml?: string): boolean;

/**
 * Count elements matching xpath
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @returns Number of matching elements
 */
CountElement(xpath: string, xml?: string): number;

/**
 * Wait for element to disappear
 * @param xpath - Xpath selector
 * @param timeout - Timeout in seconds
 * @returns True if element disappeared
 */
WaitElementHide(xpath: string, timeout: number): boolean;

/**
 * Get attribute values of elements matching xpath
 * @param xml - XML dump (empty string to auto dump)
 * @param xpath - Xpath selector
 * @param attribute - Attribute name (e.g., "text", "bounds", "content-desc")
 * @returns Array of attribute values
 */
GetElementAttr(xml: string, xpath: string, attribute: string): string[];

// Tap
/**
 * Tap at specific coordinates
 * @param x - X coordinate
 * @param y - Y coordinate
 * @returns Success status
 */
TapXY(x: number, y: number): boolean;

/**
 * Tap on element by xpath
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @param timeFind - Timeout in seconds to find element (default: 0)
 * @returns Success status
 */
Tap(xpath: string, xml?: string, timeFind?: number): boolean;

/**
 * Tap center of element by xpath
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @param timeFind - Timeout in seconds to find element (default: 0)
 * @returns Success status
 */
TapCenter(xpath: string, xml?: string, timeFind?: number): boolean;

/**
 * Double tap at specific coordinates
 * @param x - X coordinate
 * @param y - Y coordinate
 * @returns Success status
 */
DoubleTapXY(x: number, y: number): boolean;

/**
 * Long tap at specific coordinates
 * @param x - X coordinate
 * @param y - Y coordinate
 * @param delay - Hold duration in seconds (default: 1)
 * @returns Success status
 */
TapLongXY(x: number, y: number, delay?: number): boolean;

/**
 * Long tap on element
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @param delay - Hold duration in seconds (default: 1)
 * @returns Success status
 */
TapLong(xpath: string, xml?: string, delay?: number): boolean;

/**
 * Long tap at center of element
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @param delay - Hold duration in seconds (default: 1)
 * @returns Success status
 */
TapLongCenter(xpath: string, xml?: string, delay?: number): boolean;

// Swipe
/**
 * Swipe from point to point
 * @param x1 - Start X
 * @param y1 - Start Y
 * @param x2 - End X
 * @param y2 - End Y
 * @param steps - Number of steps (higher = slower, 0 for random 30-40)
 * @returns Success status
 */
Swipe(x1: number, y1: number, x2: number, y2: number, steps?: number): boolean;

/**
 * Swipe upwards
 * @param count - Number of swipes
 * @param checkScreenChange - If true, swipe until screen doesn't change (default: false)
 * @returns True if screen stopped changing (only if checkScreenChange is true)
 */
SwipeUp(count?: number, checkScreenChange?: boolean): boolean;

/**
 * Swipe downwards
 * @param count - Number of swipes
 * @param checkScreenChange - If true, swipe until screen doesn't change (default: false)
 * @returns True if screen stopped changing (only if checkScreenChange is true)
 */
SwipeDown(count?: number, checkScreenChange?: boolean): boolean;

/**
 * Swipe to left
 * @param count - Number of swipes
 * @param checkScreenChange - If true, swipe until screen doesn't change (default: false)
 * @returns True if screen stopped changing (only if checkScreenChange is true)
 */
SwipeLeft(count?: number, checkScreenChange?: boolean): boolean;

/**
 * Swipe to right
 * @param count - Number of swipes
 * @param checkScreenChange - If true, swipe until screen doesn't change (default: false)
 * @returns True if screen stopped changing (only if checkScreenChange is true)
 */
SwipeRight(count?: number, checkScreenChange?: boolean): boolean;

/**
 * Swipe from one element to another
 * @param xpathFrom - Xpath of start element
 * @param xpathTo - Xpath of end element
 * @param xml - XML dump (empty string to auto dump)
 * @param steps - Number of steps (higher = slower, 0 for random 30-40)
 * @return Success status
 */
SwipeXpath(xpathFrom: string, xpathTo: string, xml?: string, steps?: number): boolean;

/**
 * Swipe and tap on element when found
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @param timeout - Timeout in seconds (default: 0)
 * @returns Success status
 */
SwipeAndTap(xpath: string, xml?: string, timeout?: number): boolean;

// Input
/**
 * Input text to element
 * @param xpath - Xpath selector (empty string to input at current focus)
 * @param content - Text to input
 * @param xml - XML dump (empty string to auto dump)
 * @param isDontClearText - If true, append text without clearing (default: false)
 * @returns Success status
 */
InputText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean;

/**
 * Input text to element (input character by character)
 * @param xpath - Xpath selector (empty string to input at current focus)
 * @param content - Text to input
 * @param xml - XML dump (empty string to auto dump)
 * @param isDontClearText - If true, append text without clearing (default: false)
 * @returns Success status
 */
TypeText(xpath: string, content: string, xml?: string, isDontClearText?: boolean): boolean;

/**
 * Press specific key code
 * @param keyCode - Android key code
 * @returns Success status
 */
InputKeyCode(keyCode: number): boolean;

/**
 * Press Enter key
 * @returns Success status
 */
InputEnter(): boolean;

/**
 * Press End key (move cursor to end)
 * @returns Success status
 */
InputEnd(): boolean;

/**
 * Clear text in element
 * @param xpath - Xpath selector
 * @param xml - XML dump (empty string to auto dump)
 * @returns Success status
 */
ClearText(xpath?: string, xml?: string): boolean;

/**
 * Set ADB keyboard as default input method
 * @returns Success status
 */
SetAdbKeyboard(): boolean;

/**
 * Hide ADB keyboard
 */
HideAdbKeyboard(): void;

// ScreenShot
/**
 * Take screenshot, optionally cropped to an element
 * @param xpath - Xpath selector to crop screenshot to element bounds (optional)
 * @param xml - XML dump (empty string to auto dump, optional)
 * @returns Base64 encoded image
 */
ScreenShot(xpath?: string, xml?: string): string;

// ==================== DEVICE FUNCTIONS ====================
/**
 * Execute shell command on device
 * @param command - Shell command to execute
 * @returns Command output
 */
Shell(command: string): string;

/**
 * Check if phone is disconnected
 * @returns True if disconnected
 */
IsClosed(): boolean;

/**
 * Get device info
 * @returns Device info string
 */
DeviceInfo(): string;

/**
 * Get device screen size as string
 * @returns Size string (e.g., "1080x1920")
 */
DeviceSize(): string;

/**
 * Get device screen height
 * @returns Screen height in pixels
 */
DeviceHeight(): number;

/**
 * Get device screen width
 * @returns Screen width in pixels
 */
DeviceWidth(): number;

/**
 * Get device IP address on current network (LAN IP)
 * @returns IP address
 */
GetDeviceIP(): string;

/**
 * Change device language
 * @param lang - Language code (e.g., "en", "vi")
 * @returns Success status
 */
ChangeLanguage(lang: string): boolean;

/**
 * Set device wallpaper
 * @param imagePath - Local path to image file (already selected by caller)
 * @param wallpaperType - "home", "lock", or "both"
 * @returns Success status
 */
SetWallpaper(imagePath: string, wallpaperType: string): boolean;

/**
 * Check if device is emulator
 * @returns True if emulator
 */
// IsEmulator(): boolean;

// Screen
/**
 * Check if screen is on
 * @returns True if screen is on
 */
IsScreenOn(): boolean;

/**
 * Put screen to sleep
 */
SleepScreen(): void;

/**
 * Unlock screen with swipe
 */
UnlockScreen(): void;

// Wifi
/**
 * Enable WiFi
 */
EnableWifi(): void;

/**
 * Disable WiFi
 */
DisableWifi(): void;

/**
 * Connect to WiFi
 * @param wifiName - WiFi SSID
 * @param wifiPass - WiFi password
 * @returns Success status
 */
ConnectWifi(wifiName: string, wifiPass: string): boolean;

// File
/**
 * Create folder on device
 * @param folderPath - Folder path
 */
CreateFolder(folderPath: string): void;

/**
 * Delete folder on device
 * @param folderPath - Folder path
 */
DeleteFolder(folderPath: string): void;

/**
 * Delete file on device
 * @param path - File path (supports wildcards)
 */
DeleteFile(path: string): void;

/**
 * Pull file from device to PC
 * @param filePath - file path on device
 * @param folderPath - folder path on PC to save
 */
PullFile(filePath: string, folderPath: string): void;

/**
 * Push file from PC to device
 * @param filePath - file path on PC
 * @param folderPath - folder path on device (e.g., "/sdcard/")
 */
PushFile(filePath: string, folderPath: string): void;

/**
 * Push image(s) to device gallery
 * @param filePath - Local image path(s), multiple paths separated by "|"
 */
PushImage(filePath: string): void;

/**
 * Push media file(s) to device gallery (support images and videos)
 * @param filePaths - Local media path(s)
 */
PushMedia(filePaths: string[]): void;

// Proxy
/**
 * Get current IP address of proxy
 * @param proxy - Proxy string (optional, format: "host:port" or "host:port:user:pass")
 * @param web - URL to check IP (default: "ifconfig.co")
 * @returns IP address or error message
 */
CheckProxy(proxy?: string, web?: string): string;

/**
 * Connect proxy
 * @param proxy - Proxy string (format: "host:port")
 */
ConnectProxy(proxy: string): void;

/**
 * Disconnect proxy
 */
DisconnectProxy(): void;

// Clipboard
/**
 * Get clipboard content
 * @returns Clipboard text
 */
GetClipboard(): string;

/**
 * Set clipboard content
 * @param content - Text to set in clipboard
 */
SetClipboard(content: string): void;

// ==================== APP FUNCTIONS ====================
/**
 * Open app by package name
 * @param package - Package name
 * @param isKill - If true, force close app before opening (default: false)
 * @param timeout - Timeout in seconds to wait for app to open (default: 0 = no wait)
 * @returns Success status
 */
OpenApp(package: string, isKill?: boolean, timeout?: number): boolean;

/**
 * Close app by package
 * @param package - App package
 */
CloseApp(package: string): void;

/**
 * Check if app is opened (in foreground)
 * @param package - Package name
 * @returns True if app is in foreground
 */
IsAppOpened(package: string): boolean;

/**
 * Get current foreground app
 * @returns App package
 */
GetCurrentApp(): string;

/**
 * Check if app is installed
 * @param package - Package name
 * @returns True if installed
 */
IsAppInstalled(package: string): boolean;

/**
 * Clear app data
 * @param package - Package name
 */
ClearDataApp(package: string): void;

/**
 * Get app version
 * @param package - Package name
 * @returns Version string
 */
GetAppVersion(package: string): string;

/**
 * Install app from APK
 * @param apkPath - Path to APK file
 */
InstallApp(apkPath: string): void;

/**
 * Uninstall app
 * @param package - Package name
 */
UninstallApp(package: string): void;

/**
 * Get app info
 * @param package - App package name
 * @returns App info string
 */
GetInfoApp(package: string): string;

/**
 * Get list of all packages on device
 * @returns Array of package names
 */
GetListApps(): string[];

/**
 * Get list of installed (non-system) packages
 * @returns Array of package names
 */
GetListAppsInstalled(): string[];

/**
 * Get current foreground activity
 * @returns Activity name
 */
GetCurrentActivity(): string;

/**
 * Start an Android activity
 * @param activity - Activity name (e.g., "com.facebook.katana/.LoginActivity")
 */
StartActivity(activity: string): void;

// ==================== FACEBOOK ====================
/**
 * Open Facebook app with LoginActivity
 * @param package - Package name
 * @param isKill - If true, force close app before opening (default: false)
 * @param timeout - Timeout in seconds to wait for app to open (default: 0 = no wait)
 * @returns Success status
 */
OpenAppFB(package: string, isKill?: boolean, timeout?: number): boolean;

/**
 * Open a URL scheme in Facebook app (e.g., "fb://profile/123")
 * @param link - URL scheme to open
 * @returns Result string
 */
OpenUrlSchemeFB(link: string): void;

/**
 * Backup app data (requires root)
 * @param folderPath - Folder to save backup
 * @param fileNameWithoutExtension - Backup file name without extension
 * @returns Success status
 */
BackupAppFB(folderPath: string, fileNameWithoutExtension: string): boolean;

/**
 * Restore app data from backup (requires root)
 * @param folderPath - Folder containing backup
 * @param fileNameWithoutExtension - Backup file name without extension
 * @returns Success status
 */
RestoreAppFB(folderPath: string, fileNameWithoutExtension: string): boolean;

// ==================== INSTAGRAM FUNCTIONS ====================
/**
 * Open a URL scheme in Instagram app (e.g., "instagram://user?username=xxx")
 * @param link - URL scheme to open
 * @returns Result string
 */
OpenUrlSchemeIG(link: string): void;

// ==================== FACEBOOK LITE ====================
/**
 * Open a URL scheme in Facebook Lite app
 * @param link - URL scheme to open
 * @returns Result string
 */
OpenUrlSchemeFBLite(link: string): void;

// ==================== IMAGE FUNCTIONS ====================

// ==================== OCR FUNCTIONS ====================
/**
 * Get text from image using OCR
 * @param filePath - Image file path (empty to use current screenshot)
 * @returns Extracted text
 */
// GetText(filePath?: string): string;

/**
 * Find text position in image using OCR
 * @param text - Text to find
 * @param filePath - Image file path (empty to use current screenshot)
 * @returns Position information
 */
// FindText(text: string, filePath?: string): string;

/**
 * Dump all text from image using OCR
 * @param filePath - Image file path (empty to use current screenshot)
 * @returns All extracted text
 */
// DumpText(filePath: string): string;

// ==================== OTHER FUNCTIONS ====================
/**
 * Delay execution
 * @param delay - Delay in seconds
 */
Delay(delay: number): void;

/**
 * Delay random time
 * @param min - Minimum seconds
 * @param max - Maximum seconds
 */
DelayRandom(min: number, max: number): void;

};