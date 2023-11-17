// Character Sets
const CHARSET = {}
CHARSET.LOWERCASE_ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
CHARSET.UPPERCASE_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
CHARSET.ALPHABETS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
CHARSET.NUMBERS = "1234567890"
CHARSET.ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
CHARSET.SPECIAL = ")(*&^%$#@!~"
CHARSET.ALL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890)(*&^%$#@!~"

/**
 * Generates a random string based on the given character set and the given length
 * @param {string} charset The character set to use
 * @param {number} length Length of the string to generate
 * @returns Random string
 */
export function generateRandomString(charset = 'ALPHANUMERIC', length = 16) {
    // Not using a custom charset
    if (charset.toUpperCase() in CHARSET) {
        charset = CHARSET[charset.toUpperCase()]
    }

    let result = ""
    for (let i = 0; i < length; i++) {
        const idx = Math.floor(Math.random() * charset.length)
        result += charset[idx]
    }

    return result
}
