// input example
// 2
// 3 ABC
// 5 /HTP
// output
// AAABBBCCC
/////HHHHHTTTTTPPPPP

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [T, ...RS] = input

function solution(T, RS) {
  for (let i = 0; i < T; i++) {
    const [R, S] = RS[i].split(' ');
    
    let result = ''
    for (let i = 0; i < S.length; i++) {
      const letter = S[i];
      result += letter.repeat(+R)
    }
    console.log(result)
  }
}

solution(T, RS)