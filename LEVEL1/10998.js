// input example
// 1 2 -> 2
// 3 4 -> 12

const fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = input[0]
const inputB = input[1]

function solution(A, B) {
  console.log(A/B);
}

solution(inputA, inputB)