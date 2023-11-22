//@ts-check

// Library
import { URLState } from "../../modules/classes/URLState.js"

// DOM Elements
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const input = /** @type HTMLInputElement */ (document.getElementById('input'))
const list = /** @type HTMLDivElement */ (document.getElementById('list'))

// URL State Manager
const state = new URLState()

let s = new Set(state.get('q')?.split(',')) || []
if (s.size) {
    s.forEach(x => addToList(x))
    makeSelection()
}

function updateURL() {
    let res = []
    for (const item of s) {
        res.push(item)
    }
    let q = res.join(',')
    state.set('q', q)
    state.push()
}

// Add the text-input to the list of options when the "Enter" key is pressed
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let text = input.value
        if (!text) { return }   // If text is null, return
        addToList(text)         // Add text to the list of options
        s.add(text)
        updateURL()             // Update the url
        input.value = ""        // Clear the input element
    }
})

/**
 * Adds the given text to the list of options
 * @param {string} item The text to add to the list of options
 */
function addToList(item) {
    const div = document.createElement('div')   // Container
    div.classList.add('list-item', 'fade-in')   // Apply styles

    const text = document.createElement('p')    // Text Element
    text.innerText = item
    div.appendChild(text)

    const buttons = document.createElement('div')   // Buttons
    buttons.classList.add('flex', 'flex-row')

    const copyBtn = document.createElement('button')    // Copy to clipboard button
    copyBtn.classList.add('btn-secondary')
    copyBtn.innerText = "📋"
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(item)
        copyBtn.innerText = "✅"
        setTimeout(() => {
            copyBtn.innerText = "📋"
        }, 2000)
    })
    buttons.appendChild(copyBtn)

    const clearBtn = document.createElement('button')   // Delete button
    clearBtn.classList.add('btn-secondary')
    clearBtn.innerText = "🗑️"
    clearBtn.addEventListener('click', () => {
        s.delete(item)
        updateURL()
        list.removeChild(div)
    })
    buttons.appendChild(clearBtn)

    div.appendChild(buttons)
    list.appendChild(div)
}

// Register a on-click event listener to select one of the element from the list
button.addEventListener('click', makeSelection)

function makeSelection() {
    // Remove the selected class from any items that already have it
    for (const child of list.children) {
        child.classList.remove('selected')
    }
    // Select one option at random
    const idx = Math.floor(Math.random() * list.children.length)
    const selection = list.children.item(idx)
    if (!selection) { return }

    // Add the select class to highlight the selection
    selection.classList.add('selected')
    // and scroll it into view if it is off-screen
    scrollToViewIfNeeded(selection)
}

/**
 * Scroll the element into view if it is off screen
 * @param {Element} e Element
 */
function scrollToViewIfNeeded(e) {
    if (!e) { return }
    var rect = e.getBoundingClientRect()
    if (rect.top < 0 || rect.bottom > window.innerHeight) {
        e.scrollIntoView({ behavior: 'smooth' })
    }
}
