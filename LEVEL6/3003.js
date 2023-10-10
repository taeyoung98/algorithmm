// input example
// 0 1 2 2 2 7 -> 1 0 0 0 0 1
// 2 1 2 1 2 1 -> -1 0 0 1 0 7

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')

function solution(input) {
  const chess = [1, 1, 2, 2, 2, 8]

  for (let i = 0; i < input.length; i++) {
    const number = chess[i] - input[i]
    process.stdout.write(`${number} `)
    
  }
}

solution(input)