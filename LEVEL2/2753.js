// input example
// 2000 -> 1
// 1999 -> 0

const fs = require('fs')
let input = Number(fs.readFileSync('./input.txt').toString())
// let input = Number(fs.readFileSync('/dev/stdin').toString())

function solution(year) {
  const is4n = year%4 === 0
  const is100n = year%100 === 0
  const is400n = year%400 === 0
  
  if ((is4n && !is100n) || is400n) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution(input)
