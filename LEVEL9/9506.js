// input
// 6
// 12
// 28
// -1
// output
// 6 = 1 + 2 + 3
// 12 is NOT perfect.
// 28 = 1 + 2 + 4 + 7 + 14

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

function solution(input) {
    for (let i = 0; i < input.length - 1; i++) {
      let num = +input[i]      
      let factor = 2 // 나눌 숫자
      let factors = [1] // 전체 약수 (자신 제외)

      // 전체 약수 구하기
      while (factor < num/2) {
        if(num % factor === 0) {
          if (!factors.includes(factor)) {
            factors.push(factor)
            factors.push(num/factor)
          } else {
            break
          }
        }
        factor++
      } 
      
      // 자신 제외 약수들의 합
      const sum = factors.reduce((acc, cur) => {
        return acc+cur
      }, 0)

      // 완전수 판별
      if (sum === num) {  
        factors.sort((a, b) => a - b) // 내림차순 정렬
        console.log(`${num} = ${factors.join(' + ')}`);
      } else {
        console.log(`${num} is NOT perfect.`);
      }
    }
}

solution(input)

