// Library
import { URLState } from "../../modules/classes/URLState.js";
import { generateRandomString } from "../../modules/helpers/generateRandomString.js";

// DOM Elements
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))

// URL State Manager
const state = new URLState()

// State
let charset = state.get('charset') || 'ALPHANUMERIC'
let length = +state.get('length') || 16
let string = generateRandomString(charset, length)

// Initialize a random string
result.innerText = string

// Register an on-click event listener to regenerate the string when the button is pressed
button.addEventListener('click', () => {
    string = generateRandomString(charset, length)
    result.innerText = string
})
