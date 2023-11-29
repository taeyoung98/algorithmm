// input example
// 1 -> 9
// 2 -> 25
// 5 -> 1089

const fs = require('fs')
const input = +fs.readFileSync('./input.txt').toString().trim()

function solution(N) {
  const rowBox = Math.pow(2, N) // 한 행의 정사각형 개수
  const rowDots = rowBox + 1 // 한 줄의 점 개수
  const result = Math.pow(rowDots, 2) // (한 줄의 점 개수)²

  console.log(result)
}

solution(input)