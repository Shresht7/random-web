// Library
import { generateRandomNumber } from "../../modules/helpers/generateRandomNumbers.js"

// DOM Elements
const result = /* @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /* @type HTMLButtonElement */ (document.getElementById('generate'))

// Initialize a random result
result.innerHTML = generateRandomNumber()

// Register an on-click event listener to regenerate the number when the button is pressed
button.addEventListener('click', () => {
    result.innerHTML = generateRandomNumber()
})
