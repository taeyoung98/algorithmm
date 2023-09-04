// input example
// 1 3 -> 0.33333333333333333333333333333333
// 4 5 -> 0.8

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = input[0]
const inputB = input[1]

function solution(A, B) {
  console.log(A/B);
}

solution(inputA, inputB)