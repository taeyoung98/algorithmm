// input
// 3 3
// 1 1 1
// 2 2 2
// 0 1 0
// 3 3 3
// 4 4 4
// 5 5 100
// output
// 4 4 4
// 6 6 6
// 5 6 100

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M] = input[0].split(' ')
let A = [], B = []

// [N][M]인 2차원 배열 A B 저장
for (let i = 1; i <= N; i++) {
  const rowA = input[i].split(' ')
  const rowB = input[+N+i].split(' ')
  A.push(rowA)
  B.push(rowB)
}

function solution(N, M, A, B) {
  // 같은 행, 열끼리 더하기
  for (let i = 0; i < N; i++) {
    let row = []
    for (let j = 0; j < M; j++) {
      // process.stdout.write(`${+A[i][j] + +B[i][j]} `) // 너무 느림 - 지양할 것
      row.push(+A[i][j] + +B[i][j])
    }
    console.log(row.join(' '))
  }
}

solution(N, M, A, B)