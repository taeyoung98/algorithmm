// input
// AABCDD
// afzz
// 09121
// a8EWg6
// P5h3kx
// output
// Aa0aPAf985Bz1EhCz2W3D1gkD6x

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

function solution(input) {
  // 최대 열(각 행의 요소 개수) 구하기
  let maxCol = input[0].length
  for (let i = 1; i < input.length; i++) {
    if (maxCol < input[i].length) {
      maxCol = input[i].length
    }
  }
  
  // 같은 열끼리 인덱스 오름차순으로 문자 이어 붙이기
  let result = ''
  for (let i = 0; i < maxCol; i++) {
    for (let j = 0; j < input.length; j++) {
      // j행 i열에 요소 있는 경우만 합치기
      if (input[j][i]) {
        result += input[j][i]
      }
    }
  }
  console.log(result);
}

solution(input)