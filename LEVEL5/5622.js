// input example
// WA -> 13
// UNUCIC -> 36

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('')

function solution(input) {
  const dial = ['', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
  
  // 문자 -> 숫자 변환
  let num = []
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];
    for (let j = 0; j < dial.length; j++) {
      if (dial[j].includes(letter)) {
        num.push(j)
      }
    }
  }

  // 시간 계산
  let time = 0
  for (let i = 0; i < num.length; i++) {
    time += num[i]+1;
  }
  console.log(time);
}

solution(input)