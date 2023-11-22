//@ts-check

// DOM Elements
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const input = /** @type HTMLInputElement */ (document.getElementById('input'))
const list = /** @type HTMLDivElement */ (document.getElementById('list'))

// Add the text-input to the list of options when the "Enter" key is pressed
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let text = input.value
        if (!text) { return }   // If text is null, return
        addToList(text)         // Add text to the list of options
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

    const clearBtn = document.createElement('button') // Delete button
    clearBtn.classList.add('btn-secondary')
    clearBtn.innerText = "🗑️"
    clearBtn.addEventListener('click', () => {
        list.removeChild(div)
    })
    div.appendChild(clearBtn)

    list.appendChild(div)
}

// Register a on-click event listener to select one of the element from the list
button.addEventListener('click', () => {
    // Remove the selected class from any items that already have it
    for (const child of list.children) {
        child.classList.remove('selected')
    }
    // Select one option at random
    const idx = Math.floor(Math.random() * list.children.length)
    const selection = list.children.item(idx)
    // Add the select class to highlight the selection
    selection?.classList.add('selected')
})
