// ==================== COMMON FUNCTIONS ====================

/**
 * Log a message to the execution log (real-time)
 * @param msg - Message to log
 */
declare function Log(msg: any): void;

/**
 * Set a real-time progress message for the current workflow (e.g., shown in the host UI status bar).
 * Routed through the per-instance MessageCallback hook configured on the Go side.
 * @param msg - Progress message to display
 */
declare function SetMessage(msg: any): void;

/**
 * Delay execution
 * @param delay - Delay in seconds
 */
declare function Delay(delay: number): void;

/**
 * Alias of Delay.
 */
declare function DelayTime(delay: number): void;

/**
 * Delay random time
 * @param min - Minimum seconds
 * @param max - Maximum seconds
 */
declare function DelayRandom(min: number, max: number): void;

/**
 * Send an HTTP request
 * @param method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param url - Request URL
 * @param contentType - Content-Type header (e.g. "application/json")
 * @param headers - Additional headers as JSON string
 * @param body - Request body
 * @param timeout - Timeout in seconds
 * @returns Response body as string
 */
declare function HttpRequest(method: string, url: string, contentType: string, headers: string, body: string, timeout: number): string;

/**
 * Generate a TOTP code from a secret key (2fa)
 * @param secret - TOTP secret key
 * @returns 6-digit TOTP code
 */
declare function GetOtp2FA(secret: string): string;

/**
 * Alias of GetOtp2FA.
 * @param secret - TOTP secret key
 * @returns 6-digit TOTP code
 */
declare function GetTotp(secret: string): string;

// ==================== RANDOM ====================
/**
 * Generate random integer between min and max
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random integer
 */
declare function RandomNumber(min: number, max: number): number;

/**
 * Alias of RandomNumber.
 */
declare function RandomInt(min: number, max: number): number;

/**
 * Generate a random integer with N digits (e.g., length=4 → 1000-9999).
 * @param length - Number of digits
 * @returns Random integer
 */
declare function Random(length: number): number;

/**
 * Generate random string
 * @param length - String length
 * @param typeRandom - Type of string (a: lowercase, A: uppercase, 0: number, $: special character)
 * @returns Random string
 */
declare function RandomString(length: number, typeRandom?: string): string;

/**
 * Generate random boolean with given percentage of true
 * @param percent - Percentage of true (0-100)
 * @returns Random boolean
 */
declare function RandomBool(percent: number): boolean;

/**
 * Pick a random item from an array
 * @param arr - Array of strings
 * @returns Random item
 */
declare function RandomItem(arr: string[]): string;

// ==================== STRING ====================
/**
 * Spin text - randomly select from variants
 * @param text - Spin syntax text (e.g., "{Hello|Hi|Hey}")
 * @returns Randomly selected variant
 */
declare function SpinText(text: string): string;

/**
 * Replace all occurrences of a string
 * @param s - Source string
 * @param old - String to replace
 * @param newStr - Replacement string
 * @returns Result string
 */
declare function Replace(s: string, old: string, newStr: string): string;

/**
 * Remove emoji/icon characters from string
 * @param text - Input text
 * @returns Text without emojis
 */
declare function RemoveIcon(text: string): string;

/**
 * Convert Vietnamese text to unsigned (no diacritics)
 * @param text - Vietnamese text
 * @returns Text without diacritics
 */
declare function ConvertToUnSign(text: string): string;

/**
 * Check if text is a valid Vietnamese name (matches pattern + diacritics).
 * @param text - Input text
 * @returns True if valid Vietnamese name
 */
declare function IsVNName(text: string): boolean;

// ==================== BASE64 ====================
/**
 * Decode base64 string
 * @param encoded - Base64 encoded string
 * @returns Decoded string
 */
declare function DecodeBase64(encoded: string): string;

/**
 * Encode string to base64
 * @param text - Plain text
 * @returns Base64 encoded string
 */
declare function EncodeBase64(text: string): string;

// ==================== REGEX ====================
/**
 * Match regex and get specific group
 * @param input - Text to match
 * @param pattern - Regex pattern
 * @param index - Group index to return
 * @returns Captured group
 */
declare function RegexGroups1(input: string, pattern: string, index: number): string;

/**
 * Match regex and return all captured groups.
 * @param input - Text to match
 * @param pattern - Regex pattern
 * @returns Array of captured groups
 */
declare function RegexGroups(input: string, pattern: string): string[];

// ==================== FILE/FOLDER ====================
// Note: Use forward slashes "/" in file paths (e.g., "C:/Users/Admin/file.txt")
// Backslash "\" is JavaScript escape character, so "C:\Users" will NOT work correctly

/**
 * Check if file or folder exists
 * @param path - Path to check
 * @returns True if exists
 */
declare function ExistsPath(path: string): boolean;

/**
 * Create folder
 * @param folderPath - Path to folder
 * @returns Success status
 */
declare function CreateFolder(folderPath: string): boolean;

/**
 * Delete a folder and all its contents
 * @param folderPath - Path to folder
 * @returns Success status
 */
declare function DeleteFolder(folderPath: string): boolean;

/**
 * List subfolders in folder
 * @param folderPath - Path to folder
 * @param folderPrefix - Filter by prefix, empty for all folders
 * @returns Array of folder paths
 */
declare function ListFolders(folderPath: string, folderPrefix?: string): string[];

/**
 * Read file content
 * @param filePath - Path to file
 * @returns File content as string
 */
declare function ReadFile(filePath: string): string;

/**
 * Append content to file
 * @param filePath - Path to file
 * @param content - Content to append
 * @returns Success status
 */
declare function AppendFile(filePath: string, content: string): boolean;

/**
 * Write content to file (overwrite)
 * @param filePath - Path to file
 * @param content - Content to write
 * @returns Success status
 */
declare function WriteFile(filePath: string, content: string): boolean;

/**
 * Delete a file
 * @param filePath - Path to file
 * @returns Success status
 */
declare function DeleteFile(filePath: string): boolean;

/**
 * List files in folder
 * @param folderPath - Path to folder
 * @param extensions - Filter by extension (e.g., ".txt"), empty for all files
 * @returns Array of file paths
 */
declare function ListFiles(folderPath: string, extensions?: string): string[];

/**
 * Save data (URL or base64) to a file
 * @param data - URL (http/https) or base64 encoded data (supports data URI prefix)
 * @param filePath - Destination file path
 * @returns Success status
 */
declare function SaveAssets(data: string, filePath: string): boolean;

// ==================== PROXY ====================

/**
 * Check proxy and get current IP address
 * @param proxy - Proxy string (format: "host:port" or "host:port:user:pass")
 * @param typeProxy - Proxy type (0: HTTP, 1: SOCKS5)
 * @param timeout - Timeout in seconds
 * @returns IP address or error message
 */
declare function CheckProxy(proxy: string, typeProxy: number, timeout: number): string;

// ==================== JSON ====================
/**
 * Get string value from JSON by path
 * @param json - JSON string
 * @param path - JSON path (e.g., "data.user.name")
 * @returns String value
 */
declare function JsonGetString(json: string, path: string): string;

/**
 * Get integer value from JSON by path
 * @param json - JSON string
 * @param path - JSON path (e.g., "data.user.age")
 * @returns Integer value
 */
declare function JsonGetInt(json: string, path: string): number;

/**
 * Get boolean value from JSON by path
 * @param json - JSON string
 * @param path - JSON path (e.g., "data.user.active")
 * @returns Boolean value
 */
declare function JsonGetBool(json: string, path: string): boolean;

// ==================== FACEBOOK ====================
/**
 * Check if string is Facebook UID
 * @param input - String to check
 * @returns True if valid UID
 */
declare function IsUidFB(input: string): boolean;

/**
 * Alias of IsUidFB.
 */
declare function IsUid(input: string): boolean;

/**
 * Check Facebook UID live status via a wall request.
 * @param uid - Facebook UID
 * @param proxy - Proxy string (empty for direct)
 * @returns Status code (0: dead, 1: live, 2: locked/checkpoint — implementation-dependent)
 */
declare function CheckLiveUidFB(uid: string, proxy: string): number;

// ==================== CAPTCHA ====================
/**
 * Solve Image To Text captcha using OmoCaptcha
 * @param apiKey - API Key for OmoCaptcha
 * @param base64Image - Base64 encoded image
 * @returns Captcha result text
 */
declare function OmoCaptcha_ImageToText(apiKey: string, base64Image: string): string;

// ==================== CONCURRENCY ====================
//
// WARNING:
//   - NOT REENTRANT: calling nested with the same name causes a permanent deadlock.
//     Convention: use scoped prefixes ("fileio:/path", "device:abc") to reduce collisions.
//   - If callback throws, the lock is still released (defer), but the exception
//     propagates to the caller. Wrap with try/catch if you need to handle it.

/**
 * Acquire a named lock (block until acquired), run callback, auto-release.
 *
 * Use to protect critical sections when multiple scripts run in parallel and
 * touch the same shared resource (file, device, ...).
 *
 * @param name - Lock name. Script/Go code using the same name → block each other.
 * @param fn - Callback executed inside the critical section.
 *
 * @example
 * RunWithLock("fileio:C:/config.json", () => {
 *   WriteFile("C:/config.json", JSON.stringify(data));
 * });
 */
declare function RunWithLock(name: string, fn: () => void): void;
