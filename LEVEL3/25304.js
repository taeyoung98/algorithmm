// input example
/*
  260000
  4
  20000 5
  30000 2
  10000 6
  5000 8
  -> Yes
*/

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [X, N, ab] = [+input[0], +input[1], []]

for (let i = 0; i < N; i++) {
  ab.push(input[2+i].split(' '))
}

function solution(X, N, ab) {
  let sum = 0
  for (let i = 0; i < N; i++) {
    let a = +ab[i][0]
    let b = +ab[i][1]
    sum += a*b
  }

  console.log(sum === X ? 'Yes' : 'No');
}

solution(X, N, ab)