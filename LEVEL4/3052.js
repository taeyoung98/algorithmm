const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

function solution(input) {
  // result[0]은 빈 값
  let result = new Array(43).fill(0)
  
  // 나머지값 인덱스에 1 증가
  for (let i = 0; i < input.length; i++) {
    const value = input[i] % 42
    result[value]++
  }

  // 값이 1 이상인 요소 개수 카운트
  let count = 0
  for (let i = 0; i < result.length; i++) {
    if(result[i] > 0) {
      count++
    }
  }
  console.log(count)
}

solution(input)