// Library
import { URLState } from "../modules/classes/URLState.js"

// Character Sets
const CHARSET = {}
CHARSET.LOWERCASE_ALPHABETS = "abcdefghijklmnopqrstuvwxyz"
CHARSET.UPPERCASE_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
CHARSET.ALPHABETS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
CHARSET.NUMBERS = "1234567890"
CHARSET.ALPHANUMERIC = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
CHARSET.SPECIAL = ")(*&^%$#@!~"
CHARSET.ALL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890)(*&^%$#@!~"

// DOM Elements
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const lengthInput = /** @type HTMLInputElement */ (document.getElementById('length'))
const charsetInput = /** @type HTMLInputElement */ (document.getElementById('charset'))

// URL State Manager
const state = new URLState()

// State
let charset = state.get('charset') || charsetInput.value || 'ALPHANUMERIC'
let length = +state.get('length') || +lengthInput.value || 16
let string = generateRandomString(charset, length)

// Initialize a random string
result.innerText = string

// Register an on-click event listener to regenerate the string when the button is pressed
button.addEventListener('click', () => {
    string = generateRandomString(charset, length)
    result.innerText = string
})

// Initialize the option values from the initial URL
lengthInput.value = length
charsetInput.value = charset

// Register on change event handlers to update the state
lengthInput.addEventListener('change', (e) => {
    length = +e.target.value
    state.set('length', length)
    state.push()
})
charsetInput.addEventListener('change', (e) => {
    charset = e.target.value
    state.set('charset', charset)
    state.push()
})

// ================
// HELPER FUNCTIONS
// ================

/**
 * Generates a random string based on the given character set and the given length
 * @param {string} charset The character set to use
 * @param {number} length Length of the string to generate
 * @returns Random string
 */
function generateRandomString(charset = 'ALPHANUMERIC', length = 16) {
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
