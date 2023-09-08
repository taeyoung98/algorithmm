// input example
// 4 -> long int
// 20 -> long long long long long int

const fs = require('fs')
// let input = Number(fs.readFileSync('./input.txt').toString().trim())
let input = Number(fs.readFileSync('/dev/stdin').toString().trim())

function solution(N) {
  let type = ''
  for (let i = 0; i < N/4; i++) {
    type += 'long '
  }
  console.log(type + 'int');
}

solution(input)