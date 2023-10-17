// input example
// Mississipi -> ?
// zZa -> Z

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().toUpperCase() // 전체 대문자 전환

function solution(input) {
  // 대문자별 개수 세기
  let upper = {}
  for (let i = 0; i < input.length; i++) {
    if(!upper[input[i]]) {
      upper[input[i]] = 1
    } else {
      upper[input[i]]++
    }
  }
  
  // 최다 대문자 구하기
  let max = ['', 0] // key, value
  let twinMax = null
  for (const key in upper) {
    if (max[1] < upper[key]) {
      max = [key, upper[key]]
    } else if (max[1] === upper[key]) {
      max[1] = upper[key]
      twinMax = upper[key]
    }
  }
  
  console.log(max[1] === twinMax ? '?' : max[0])
}

solution(input)