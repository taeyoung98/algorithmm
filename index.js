const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = +input[0]
const inputB = +input[1]

function solution(A, B) {
  const sum = A-B
  console.log(sum);
}

solution(inputA, inputB)