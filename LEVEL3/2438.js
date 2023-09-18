// input
// 5
// 1000 1000
// output
// *
// **
// ***
// ****
// *****

const fs = require('fs')
const input = Number(fs.readFileSync('./input.txt').toString().trim())

function solution(N) {
  for (let i = 1; i <= N; i++) {
    let row = ''
    for (let j = 0; j < i; j++) {
      row += '*'
    }
    console.log(row);
  }
}

solution(input)
