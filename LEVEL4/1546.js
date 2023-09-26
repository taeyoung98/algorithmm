// input1
// 3
// 40 80 60
// => 75.0

// input2 
// 9
// 10 20 30 40 50 60 70 80 90
// => 55.55555555555556


const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(/\s+/)
const [N, ...score] = input

function solution(N, score) {
  // 최고점수 M 구하기
  let M = +score[0]
  for (let i = 1; i < score.length; i++) {
    if (M < +score[i]) {
      M = +score[i]
    }
  }

  // 새 평균 구하기
  const sum = score.reduce((acc, curr) => acc + +curr, 0)
  const avg = (sum/M*100)/N
  console.log(avg);
}

solution(N, score)