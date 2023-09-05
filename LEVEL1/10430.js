// input example 
// 5 8 4 -> 1 1 0 0

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = +input[0]
const inputB = +input[1]
const inputC = +input[2]

function solution(A, B, C) {
  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C)*(B%C))%C);
}

solution(inputA, inputB, inputC)