const file = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const fs = require('fs')
const input = +fs.readFileSync(file).toString().trim()

function solution(N) {
  let count = 0
  
  for (let a = 1; a <= N; a++) {
    for (let b = 1; b <= N; b++) {
      for (let c = 1; c <= N; c++) {
        if ((a+b+c === N) && (c >= b+2) && (a%2 === 0)) {
          count++
        }
      }
    }
  }

  console.log(count)
}

solution(input)


