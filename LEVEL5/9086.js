// input
// 3
// ACDKJFOWIEGHE
// O
// AB
// output
// AE
// OO
// AB

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [T, ...string] = input

function solution(T, string) {
  for (let i = 0; i < T; i++) {
    const text = string[i]
    console.log(`${text[0]}${text[text.length-1]}`)
  }
}

solution(T, string)