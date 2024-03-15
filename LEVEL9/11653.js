const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim()

let dividend = +input // 피제수
const divisorArr = [] // 소수인 제수 배열
let divisor = 2 // 제수

while (dividend > 1) {
  let quotient = Math.floor(dividend/divisor) // 72/2 36/2 18/2 9/2 9/3 3/3
  let remainder = dividend % divisor // 0 0 0 1 0 0
  if (remainder === 0) {
    divisorArr.push(divisor) // 2 2 2 _ 3 3
    dividend = quotient // 36 18 9 _ 3 1
  } else {
    divisor++ // _ _ _ 3
  }
}

console.log(divisorArr.join('\n'))