/**
 * Generate a random number between min and max
 * @param {number} min Lower number
 * @param {number} max Higher number
 * @returns Random number between min and max
 */
export function generateRandomNumber(min = 0, max = 1000) {
    min = min || 0
    max = max || 1000
    return min + Math.floor(Math.random() * (max - min))
}