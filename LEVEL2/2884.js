// input example
// 10 10 -> 9 25
// 0 30 -> 23 45
// 23 40 -> 22 55

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split(' ')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
const [h, m] = [+input[0], +input[1]]

function solution(h, m) {
  let hour, minute
  if(45 <= m && m <= 59) {
    hour = h
    minute = m-45
  } else { // m 0~44
    hour = h > 0 ? h-1 : 23 
    minute = 60+(m-45)
  }
  console.log(`${hour} ${minute}`);
}

solution(h, m)


