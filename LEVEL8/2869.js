// input example
// 2 1 5 -> 4
// 5 1 6 -> 2
// 100 99 1000000000 -> 999999901

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(v => +v)
const [A, B, V] = input

function solution(A, B, V) {
  // A*day - B(day-1) >= V
  // day(A-B)+B >= V
  // day(A-B) >= V-B
  day = Math.ceil((V-B)/(A-B))
  console.log(day)

  // 정답 but 시간초과
  // let height = 0, day = 0
  // while (height < V) {
  //   if (day !== 0)
  //   height -= B
  //   day++
  //   height += A
  // }
  // console.log(day)
}

solution(A, B, V)