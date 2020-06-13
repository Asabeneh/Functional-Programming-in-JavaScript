const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum) // 55

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur, 5)
console.log(sum) // 60

const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorld) // "Hello world !"

const numbers = [1, 2, 3, 4, 5]
const value = numbers.reduce((acc, cur) => acc * cur)
console.log(value) // 120

const numbers = [1, 2, 3, 4, 5]
const value = numbers.reduce((acc, cur) => acc * cur, 10)
console.log(value) // 1200