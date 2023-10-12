// input example
// level -> 1
// baekjoon -> 0

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('')

function solution(input) {
  // 글자수 홀수일 경우, 가운데 글자 전까지 비교
  const len = Math.floor(input.length/2)
  
  for (let i = 0; i < len; i++) {
    const start = input[i] // 앞에서 i번째
    const end = input[input.length-1-i] // 뒤에서 i번째
    if (start !== end) {
      console.log(0)
      return
    }
  }
  console.log(1)
}

solution(input)