// Library
import { URLState } from "../../modules/classes/URLState.js";
import { generateRandomNumber } from "../../modules/helpers/generateRandomNumbers.js"

// DOM Elements - Result and Randomize Button
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))

// URL State Manager
const state = new URLState()

// State
let min = +state.get('min')
let max = +state.get('max')
let number = generateRandomNumber(min, max)

// Initialize a random result
result.innerHTML = number

// Register an on-click event listener to regenerate the number when the button is pressed
button.addEventListener('click', () => {
    number = generateRandomNumber(min, max)
    result.innerHTML = number
})

// DOM Elements - Min and Max Options
const minInput = /** @type HTMLInputElement */ (document.getElementById('min'))
const maxInput = /** @type HTMLInputElement */ (document.getElementById('max'))

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
