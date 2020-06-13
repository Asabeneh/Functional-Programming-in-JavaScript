const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenIndex = numbers.findIndex((n) => n % 2 === 0)
const firstOddIndex = numbers.findIndex((n) => n % 2 !== 0)
console.log(firstEvenIndex)  // 0

console.log(firstOddIndex)   // 1

const index = countries.findIndex((country) => country.length === 6)
console.log(index) //2

const index = countries.findIndex((country) => country.includes('o'))
console.log(index // 1