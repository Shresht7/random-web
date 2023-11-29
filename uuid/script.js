// DOM Elements
const result = /** @type HTMLParagraphElement  */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))

// State
let uuid = crypto.randomUUID()

// Initialize a random string
result.innerText = uuid

// Register an on-click event listener to regenerate the string when the button is pressed
button.addEventListener('click', () => {
    uuid = crypto.randomUUID()
    result.innerText = uuid
})
