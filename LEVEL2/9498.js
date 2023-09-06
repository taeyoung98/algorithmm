// input example
// 100 -> A

const fs = require('fs')
// let input = Number(fs.readFileSync('./input.txt').toString())
let input = Number(fs.readFileSync('/dev/stdin').toString())

function solution(score) {
  if(90 <= score && score <= 100) {
    console.log('A');
  } else if (80 <= score && score < 90) {
    console.log('B');
  } else if (70 <= score && score < 80) {
    console.log('C');
  } else if (60 <= score && score < 70) {
    console.log('D');
  } else {
    console.log('F');
  } 
}

solution(input)
