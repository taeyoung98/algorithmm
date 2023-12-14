// input
// 8 16
// 32 4
// 17 5
// 0 0
// output
// factor
// multiple
// neither

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

function solution(input) {
  for (let i = 0; i < input.length-1; i++) {
    const [A, B] = input[i].split(' ').map(v => +v)
    
    if (A<B && B%A===0) { // A가 B의 약수
      console.log('factor')
    } else if (A>B && A%B===0) { // A가 B의 배수
      console.log('multiple')
    } else { // 해당 없음
      console.log('neither')
    }
  }  
}

solution(input)