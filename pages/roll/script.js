// Library
import { URLState } from "../../modules/classes/URLState.js"

// DOM Elements
const result = /** @type HTMLParagraphElement */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const rollInput = /** @type HTMLInputElement */ (document.getElementById('roll'))

// URL State Manager
const state = new URLState()

// State
let expression = state.get('q') || rollInput.value || '1d20'

// Register on-click event handler to reroll
button.addEventListener('click', () => {
    const [rolls, total] = evaluate(expression)
    result.innerText = total.toString()
})

// Initialize the input values from the initial URL
rollInput.value = expression

// Register on change event handlers to update the state
rollInput.addEventListener('change', (e) => {
    if (!e.target) { return }
    expression = e.target.value
    state.set('q', expression)
    state.push()
})

// ================
// HELPER FUNCTIONS
// ================

/**
 * Evaluates the given dice roll expression and returns the result
 * @param {string} expression The roll expression
 * @returns {[Record<string, number[]>, number]}
 */
function evaluate(expression = "1d20") {

    // Extract the terms
    const terms = expression.split("+").map(x => x.trim())

    // Determine the rolls, additions and the total
    /** @type Record<string, number[]> */
    let rolls = {}
    let total = 0
    for (const term of terms) {
        // If this is a dice term...
        if (term.toLowerCase().includes('d')) {
            // Roll the dice
            let r = roll(term)
            total += r.reduce((acc, cur) => acc + cur)
            rolls[term] = r
        } else { // ... else if the term is an addition
            total += parseInt(term)
        }
    }

    return [rolls, total]
}

/**
 * Rolls the given dice and returns the results
 * @param {string} dice The dice expression to roll for
 * @returns An array of rolls
 */
function roll(dice) {
    // Determine the dice count and range
    const [count, range] = dice.split('d').map(x => parseInt(x))

    // Roll each dice and record the results
    let rolls = []
    for (let i = 0; i < count; i++) {
        let r = Math.ceil(Math.random() * range)
        rolls.push(r)
    }

    // Return the results
    return rolls
}
