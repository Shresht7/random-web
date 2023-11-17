// Library
import { generateRandomString } from "../../modules/helpers/generateRandomString.js";

// DOM Elements
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))

// Initialize a random string
result.innerText = generateRandomString()

// Register an on-click event listener to regenerate the string when the button is pressed
button.addEventListener('click', () => {
    result.innerText = generateRandomString()
})
