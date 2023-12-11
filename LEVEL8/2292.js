// input example
// 13 -> 3

const fs = require('fs')
const input = +fs.readFileSync('./input.txt').toString().trim()

function solution(input) {
  let i = 1, sum = 1

  // while (true) {
  //   if (input === 1) {
  //     console.log(i)
  //     return
  //   }

  //   start = sum 
  //   end = sum += 6*i
  //   if (start < input && input <= end) {
  //     console.log(i+1)
  //     return
  //   }

  //   i++
  // }

  while (sum < input) {
    sum += 6*i
    i++  
  }
  console.log(i)
}

solution(input)