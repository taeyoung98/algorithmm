// input example
// joonas -> joonas??!
// baekjoon -> baekjoon??!

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString()

function solution(id) {
  const result = `${id}??!`.split("\n").join('')
  console.log(result)
}

solution(input)