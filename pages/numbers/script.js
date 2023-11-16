// Library
import { URLState } from "../../modules/classes/URLState.js";
import { generateRandomNumber } from "../../modules/helpers/generateRandomNumbers.js"

// DOM Elements
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const minInput = /** @type HTMLInputElement */ (document.getElementById('min'))
const maxInput = /** @type HTMLInputElement */ (document.getElementById('max'))

// State
let min = +minInput.value
let max = +maxInput.value
let number = generateRandomNumber(min, max)

// URL State Manager
const state = new URLState()

// Initialize a random result
result.innerHTML = number

// Register an on-click event listener to regenerate the number when the button is pressed
button.addEventListener('click', () => {
    number = generateRandomNumber(min, max)
    result.innerHTML = number
})

minInput.addEventListener('change', (e) => {
    min = +e.target.value
})
maxInput.addEventListener('change', (e) => {
    max = +e.target.value
})

new MutationObserver((records) => {
    records.forEach(record => {
        state.setState('number', record.target.innerText)
    })
}).observe(result, { childList: true })
