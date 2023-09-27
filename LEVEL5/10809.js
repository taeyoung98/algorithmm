// input example
// baekjoon
// 1 0 -1 -1 2 -1 -1 -1 -1 4 3 -1 -1 7 5 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('')

function solution(input) {
  const a = 'a'.charCodeAt(0)
  const z = 'z'.charCodeAt(0)
  
  for (let i = a; i <= z; i++) {
    process.stdout.write(`${input.indexOf(String.fromCharCode(i))} `)
  }
}

solution(input)