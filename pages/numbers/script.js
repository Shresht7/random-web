// DOM Elements
const result = /* @type HTMLParagraphElement  */ (document.getElementById('result'))

/**
 * Generate a random number between min and max
 * @param {number} min Lower number
 * @param {number} max Higher number
 * @returns Random number between min and max
 */
function generateRandomNumber(min = 0, max = 1000) {
    return min + Math.floor(Math.random() * max)
}

// Initialize a random result
result.innerHTML = generateRandomNumber()
