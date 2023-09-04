/**
 * input example
 * 7 3 -> 
 * 10
 * 4
 * 21
 * 2
 * 1
 */

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = +input[0]
const inputB = +input[1]

function solution(A, B) {
  console.log(A+B)
  console.log(A-B)
  console.log(A*B)
  console.log(Math.floor(A/B))
  console.log(A%B)
}

solution(inputA, inputB)