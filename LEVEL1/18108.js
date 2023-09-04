// input example
// 2541 -> 1998

const fs = require('fs')
// const input = +fs.readFileSync('./input.txt').toString()
const input = +fs.readFileSync('/dev/stdin').toString()

function solution(year) {
  console.log(year-543);
}

solution(input)