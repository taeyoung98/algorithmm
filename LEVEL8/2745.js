// input example
// ZZZZZ 36 -> 60466175

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ')
const [N, B] = input

function toNumber(letter) {
  // A: 10 ~ Z: 35
  // typeof letter === 'string' -> X. 숫자든 알파벳이든 string으로 넘어옴
  // isNaN(+letter) -> 312ms
  // 'A' <= letter && letter <= 'Z' -> 200ms
  return 'A' <= letter && letter <= 'Z' ? letter.charCodeAt() - 'A'.charCodeAt() + 10 : +letter
}
function solution(N, B) {
  let dec = 0
  for (let i = 0; i < N.length; i++) {
    const num = toNumber(N[i]) // 10 초과 진법일 경우, 알파벳 숫자로 변환
    const bPower = Math.pow(B, N.length -1 -i) // B의 n승

    dec += num * bPower
  }

  console.log(dec);
}

solution(N, B)