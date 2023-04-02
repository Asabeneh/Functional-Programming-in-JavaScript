const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
const countriesWithLand = countries.filter(country => country.includes('land'))

console.log(countriesWithLand) // ["Finland", "Iceland"]

const countriesWithoutLand = countries.filter(country => !country.includes('land'))

console.log(countriesWithoutLand) // ["Estonia", "Sweden", "Norway"]

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = numbers.filter(n => n % 2 === 0)
const odds = numbers.filter(n => n % 2 !== 0)

console.log(evens) // [0, 2, 4, 6, 8, 10]

console.log(odds) // [1, 3, 5, 7, 9]