// input
// 5
// 54321
// output 15

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, num] = [+input[0], input[1].split('')]

function solution(N, num) {
  let sum = 0
  for (let i = 0; i < N; i++) {
    sum += +num[i]
  }
  console.log(sum)
}

solution(N, num)