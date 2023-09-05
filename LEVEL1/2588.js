// input example 
// 472 385 -> 2360 3776 1416 181720

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()
input = input.split('\n')

const inputA = +input[0]
const inputB = input[1]

function solution(A, B) {
  const arrB = B.split('')

  console.log(A*(+arrB[2])); // 1의 자리
  console.log(A*(+arrB[1])); // 10의 자리
  console.log(A*(+arrB[0])); // 100의 자리
  console.log(A*(+B));
}

solution(inputA, inputB)