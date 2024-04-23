const file = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const fs = require('fs')
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number)

function solution([a, b, c, d, e, f]) {
  for (let x = -999; x <= 999; x++) {
    for (let y = -999; y <= 999; y++) {
      if (a*x+b*y==c && d*x+e*y==f) {
        console.log(x, y)
        return
      }
    } 
  }
}

solution(input)


