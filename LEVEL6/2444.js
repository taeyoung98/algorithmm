/*
input example
5 ->
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim()

function solution(input) {
  // 순서
  for (let i = 1; i <= input; i++) {
    const starNum = 2*i-1
    for (let j = 0; j < input-i; j++) {
      process.stdout.write(' ')
    }
    for (let k = 0; k < starNum; k++) {
      process.stdout.write('*')
    }
    console.log()
  }

  // 역순
  for (let i = input-1; i >= 0; i--) {
    const starNum = 2*i-1
    for (let j = 0; j < input-i; j++) {
      process.stdout.write(' ')
    }
    for (let k = 0; k < starNum; k++) {
      process.stdout.write('*')
    }
    console.log()
  }
}

solution(input)