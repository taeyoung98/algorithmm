// input
// 5
// 20 10 35 30 7
// output
// 7 35

const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').split(/\s+/)
const [N, ...arr] = input

function solution(N, arr) {
  let min = +arr[0], max = +arr[0]
  for (let i = 1; i < N; i++) {
    if (+arr[i] < min) min = +arr[i]
    if (max < +arr[i]) max = +arr[i]
  }
  console.log(min, max)
}

solution(N, arr)