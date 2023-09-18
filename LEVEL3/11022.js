// input
// 5
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// 1000 1000
// output
// Case #1: 1 + 1 = 2
// Case #2: 2 + 3 = 5
// Case #3: 3 + 4 = 7
// Case #4: 9 + 8 = 17
// Case #5: 5 + 2 = 7

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const T = +input[0]

function solution(T) {
  for (let i = 1; i <= T; i++) {
    const item = input[i].split(' ');
    const A = +item[0]
    const B = +item[1]
    console.log(`Case #${i}: ${A} + ${B} = ${A+B}`);
  }
}

solution(T)
