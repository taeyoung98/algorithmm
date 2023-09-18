// input
// 5
// 1 1
// 12 34
// 5 500
// 40 60
// 1000 1000
// output
// 2
// 46
// 505
// 100
// 2000

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const T = +input[0]
let result = ''

function solution(T) {
  for (let i = 1; i <= T; i++) {
    const item = input[i].split(' ');
    const A = +item[0]
    const B = +item[1]
    result += `${A+B}\n`
  }

  console.log(result);
}

solution(T)
