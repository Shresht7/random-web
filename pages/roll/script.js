// DOM Elements
const result = /** @type HTMLParagraphElement */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const rollInput = /** @type HTMLInputElement */ (document.getElementById('roll'))

// State
let expression = rollInput.value || '1d20'

button.addEventListener('click', () => {
    result.innerText = roll()
})

// ================
// HELPER FUNCTIONS
// ================

function roll(expression) {
    return Math.ceil(Math.random() * 20)
}
