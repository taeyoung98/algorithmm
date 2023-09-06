// input example
// 10 10 -> 9 25
// 0 30 -> 23 45
// 23 40 -> 22 55

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
input[0] = input[0].split(' ')
const [a, b, c] = [+input[0][0], +input[0][1], +input[1]]

function solution(h, m, t) {
  // let hour, minute
  const timeH = Math.floor(t/60)
  const timeM = t%60 // 0~59

  if (timeM <= m) {
    minute = m-timeM
  } else { // m < timeM
    minute = m
  }

  // if(45 <= m && m <= 59) {
  //   hour = h
  //   minute = m-45
  // } else { // m 0~44
  //   hour = h > 0 ? h-1 : 23 
  //   minute = 60+(m-45)
  // }
  console.log(`${hour} ${minute}`);
}

solution(a, b, c)


