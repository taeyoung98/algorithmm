// STEP 1. 입력 
const fs = require('fs')
// 백준 linux -> 입력 프로그램 /dev/stdin
// vsc darwin -> 예제 입력 파일 .input.txt
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt'
let input = fs.readFileSync(filePath).toString()
input = input.split(' ')

const inputA = +input[0] // 숫자 변환
const inputB = +input[1] // Number(input[1])

// STEP 2. 문제 풀이
function solution(A, B) {
  const sum = A+B
  console.log(sum);
}

// STEP 3. 실행
solution(inputA, inputB)
