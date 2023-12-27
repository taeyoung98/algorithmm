// input example
// 6 3 -> 3
// 25 4 -> 0
// 2735 1 -> 1

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')
const [N, K] = input

function solution(N, K) {
  let factors = []
  let flag = 0

  for (let i = 1; i <= N; i++) {
    if (N % i === 0) { // 약수
      if (factors.length === K-1) { // K번째
        flag = i
        break
      } else { // K번째 이전
        factors.push(i)
      }
    }
  }
  
  console.log(flag > 0 ? flag : 0)
}

solution(N, K)