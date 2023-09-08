// input example
// 3 -> 6

const fs = require('fs')
// let input = Number(fs.readFileSync('./input.txt').toString().trim())
let input = Number(fs.readFileSync('/dev/stdin').toString().trim())

function solution(input) {
  let sum = 0
  for (let i = 1; i <= input; i++) {
    sum += i
  }
  console.log(sum);
}

solution(input)