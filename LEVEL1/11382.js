// input example 
// 77 77 7777 -> 7931

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString()
// let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = +input[0]
const inputB = +input[1]
const inputC = +input[2]

function solution(A, B, C) {
  const sum = A+B+C
  console.log(sum);
}

solution(inputA, inputB, inputC)