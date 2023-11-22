//@ts-check

// DOM Elements
const button = /** @type HTMLButtonElement */ (document.getElementById('randomize'))
const input = /** @type HTMLInputElement */ (document.getElementById('input'))
const list = /** @type HTMLDivElement */ (document.getElementById('list'))

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let text = input.value
        addToList(text)
        input.value = ""
    }
})

function addToList(item) {
    const div = document.createElement('div')
    div.classList.add('list-item', 'fade-in')
    const text = document.createElement('p')
    text.innerText = item
    div.appendChild(text)
    list.appendChild(div)
}

// Register a on-click event listener to select one of the element from the list
button.addEventListener('click', () => {
    for (const child of list.children) {
        child.classList.remove('selected')
    }
    const idx = Math.floor(Math.random() * list.children.length)
    const selection = list.children.item(idx)
    selection?.classList.add('selected')
})
