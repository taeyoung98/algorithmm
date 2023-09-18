// input -> output 3
// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 2
// input2 -> output 0
// 11
// 1 4 1 2 4 2 4 2 3 4 4
// 5

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, arr, v] = [+input[0], [], +input[2]]

for (let i = 0; i < N; i++) {
  const num = +input[1].split(' ')[i]
  arr.push(num)
}

function solution(N, arr, v) {
  let count = 0
  for (let i = 0; i < N; i++) {
    if(v === arr[i]) count++
  }
  console.log(count)
}

solution(N, arr, v)