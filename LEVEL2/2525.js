// input example
// 14 30\n 20 -> 14 50
// 17 40\n 80 -> 19 0
// 23 48\n 25 -> 0 13

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
input[0] = input[0].split(' ')
const [a, b, c] = [+input[0][0], +input[0][1], +input[1]]

function solution(h, m, t) {
  let hour, minute
  if (m+t < 60) {
    hour = h
    minute = m+t
  } else { // 60 <= m+t
    hour = h + Math.floor((m+t)/60) 
    hour = hour < 24 ? hour : hour-24 
    minute = (m+t)%60
  }
  console.log(`${hour} ${minute}`);
}

solution(a, b, c)
