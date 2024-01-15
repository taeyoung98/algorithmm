// input
// 3
// 29
// 38
// 12
// 57
// 74
// 40
// 85
// 61
// output
// 85
// 8

const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').trim().split(/\s+/)

function solution(input) {
  let max = input[0], index = 0

  for (let i = 0; i < 9; i++) {
    if(max < +input[i]) {
      max = +input[i]
      index = i
    }
  }
  console.log(max)
  console.log(index+1)
}

solution(input)