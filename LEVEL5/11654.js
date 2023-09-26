// input example
// A -> 65
// 0 -> 48
// z -> 122

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim()

console.log(input.charCodeAt(0))