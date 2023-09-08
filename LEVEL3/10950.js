// input example
/**
  5
  1 1
  2 3
  3 4
  9 8
  5 2
  ->
  2
  5
  7
  17
  7
*/

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [T, AB] = [+input[0], []]

for (let i = 0; i < T; i++) {
  AB.push(input[1+i].split(' '))
}

function solution(T, AB) {
  for (let i = 0; i <T; i++) {
    let A = +AB[i][0]
    let B = +AB[i][1]

    console.log(A+B);
  }
}

solution(T, AB)