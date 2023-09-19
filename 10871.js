// input
// 10 5
// 1 10 4 9 2 3 8 5 7 6
// output
// 1 4 2 3

const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf8').trim().split(/\s+/)
const [N, X, ...A] = input

function solution(N, X, A) {
  let result = ''
  for (let i = 0; i < N; i++) {
    const num = +A[i];
    if (num < X) {
      result += num + ' '
    }
  }
  console.log(result);
}

solution(N, X, A)