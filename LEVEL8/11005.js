const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(v => +v)
const [N, B] = input

function solution(N, B) {
  const conversion = N.toString(B) // 소문자 알파벳으로 표현된 B진수
  const result = conversion.split('').map(v => // 배열로 뵨환
    'a' <= v && v <= 'z' ? v.toUpperCase() : v // 소문자는 대문자로 변경
    ).join('') // 문자열로 변환
  console.log(result);
}

/*
function solution(N, B) {
  // 10진법 ↔︎ B진법 숫자 변환
  let quotient = N, remainder, conversion = [] // 몫, 나머지, B진수 변환된 숫자
  while (quotient >= B) {
    remainder = quotient % B
    conversion.push(remainder)
    
    quotient = Math.floor(quotient / B)
  }
  if(quotient < B) {
    conversion.push(quotient)
  }
  conversion.reverse()

  // 10이상은 B진법에서 알파벳 대문자로 치환 (숫자 불가)
  let result = ''
  for (let i = 0; i < conversion.length; i++) {
    const num = conversion[i]
    result += num < 10 ? num : String.fromCharCode(num+55) // A:65 ~
  }
  
  console.log(result)
}
*/

solution(N, B)