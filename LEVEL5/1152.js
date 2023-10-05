// input example
// The Curious Case of Benjamin Button -> 6

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')

function solution(input) {
  let result = input.length
  for (let i = 0; i < input.length; i++) {
    if(input[i] === '') result-- // 공백 제거
    
  }
  console.log(result)
}

solution(input)