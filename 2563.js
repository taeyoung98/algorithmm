// input
// 3
// 3 7
// 15 7
// 5 2
// -> 260

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [n, ...square] = input

function solution(n, square) {
  // 2차원 배열 arr[100][100] 0으로 초기화
  const rowArr = Array.from({ length: 100 }, () => 0) // [0, ..., 0] 
  const arr = Array.from({ length: 100 }, () => rowArr) // [[0, ..., 0], ..., [0, ..., 0]] 

  // 색종이 붙이는 곳의 좌표값은 1로 변경
  for (let i = 0; i < n; i++) {
    let [width, length] = square[i].split(' ').map(v => +v)

    for (let y = length; y < length+10; y++) { // 색종이 세로 10칸
      arr[y].splice(width, 10, ...new Array(10).fill(1)) // 색종이 가로 10칸
    }
  }

  // 총 색종이 면적 구하기
  let sum = 0
  for (let y = 0; y < 100; y++) {
    for (let x = 0; x < 100; x++) {
      arr[y][x] === 1 && sum++
    }
  }
  console.log(sum);
}

solution(n, square)