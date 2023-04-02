const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const areAllEvens = numbers.every((n) => n % 2 === 0)
const areAllOdds = numbers.every((n) => n % 2 !== 0)

console.log(areAllEvens) // false
console.log(areAllOdds)  // false

const evens = [0, 2, 4, 6, 8, 10]
const areSomeEvens = evens.some((n) => n % 2 === 0)
const areSomeOdds = evens.some((n) => n % 2 !== 0)

console.log(areSomeEvens) // true
console.log(areSomeOdds)  // false