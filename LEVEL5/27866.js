 // input
// Sprout
// 3
// output r

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [S, i] = input

function solution(S, i) {
  console.log(S[i-1])
  // console.log(S.slice(i-1, i))
  // console.log(S.split('')[i-1])
  // console.log(S.splice(i-1, 1)) // error
}

solution(S, i)