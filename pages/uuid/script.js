// Library
import { v4 as uuidV4 } from "https://cdn.skypack.dev/uuid"

// DOM Elements
const results = /** @type HTMLParagraphElement */ (document.getElementById('result'))
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))

// Initialize a random uuid
let uuid = uuidV4()

// Initialize a random uuid
results.innerText = uuid

// Register an on-click event listener to regenerate the uuid whenever the button is pressed
button.addEventListener('click', () => {
    uuid = uuidV4()
    results.innerText = uuid
})
