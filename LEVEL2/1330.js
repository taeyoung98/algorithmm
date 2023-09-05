// input example
// 1 2 -> >
// 10 2 -> <
// 5 5 -> ==

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split(' ')

const inputA = +input[0]
const inputB = +input[1]

function solution(A, B) {
  if(A > B) {
    console.log('>')
  } else if (A < B) {
    console.log('<');
  } else {
    console.log('==');
  }
}

solution(inputA, inputB)