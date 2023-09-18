// input
// 1 1
// 2 3
// 3 4
// 9 8
// 5 2
// output
// 2
// 5
// 7
// 17
// 7

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')


function solution() {
  for (let i = 0; i < input.length; i++) {
    const item = input[i].split(' ');
    const A = +item[0]
    const B = +item[1]
    console.log(A+B);
  }
}

solution()
