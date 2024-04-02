const fs = require('fs')
const [A, B] = fs.readFileSync('./input.txt').toString().trim().split('\n').map(v => +v)

console.log(A * B)