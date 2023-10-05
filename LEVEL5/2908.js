// input example
// 734 893 -> 437

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split(' ')


function solution(input) {
  // 두 수 뒤집기
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split('').reverse().join('')
  }
  const [A, B] = input

  // 더 큰 숫자 출력
  console.log(A > B ? A : B);
}

solution(input)