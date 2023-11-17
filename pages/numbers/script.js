// Library
import { URLState } from "../../modules/classes/URLState.js"
import { generateRandomNumber } from "../../modules/helpers/generateRandomNumbers.js"

// DOM Elements
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const minInput = /** @type HTMLInputElement */ (document.getElementById('min'))
const maxInput = /** @type HTMLInputElement */ (document.getElementById('max'))

// URL State Manager
const state = new URLState()

// State
let min = +state.get('min') || +minInput.value || 0
let max = +state.get('max') || +maxInput.value || 1000
let number = generateRandomNumber(min, max)

// Initialize a random result
result.innerText = number

// Register an on-click event listener to regenerate the number when the button is pressed
button.addEventListener('click', () => {
    number = generateRandomNumber(min, max)
    result.innerText = number
})

// Initialize the input values
minInput.value = min
maxInput.value = max

// Register on change event handlers to update the state
minInput.addEventListener('change', (e) => {
    min = +e.target.value
    state.set('min', min)
    state.push()
})
maxInput.addEventListener('change', (e) => {
    max = +e.target.value
    state.set('max', max)
    state.push()
})
