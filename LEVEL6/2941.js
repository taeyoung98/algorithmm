// input example
// ljes=njak -> 6
// ddz=z= -> 3
// nljj -> 3
// c=c= -> 2
// dz=ak -> 3

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim()

function solution(input) {
  const regex = /(l|n)j|(c|dz|s|z)=|(c|d)-/g
  const altered = (input.match(regex) || '').length // null 처리
  const original = input.replace(regex, '').length

  console.log(altered + original)
}

solution(input)