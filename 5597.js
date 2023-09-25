const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

function solution() {
  // 출석번호 인덱스에 1 저장
  let array = new Array(30).fill(0)
  for (let i = 0; i < input.length; i++) {
    const n = input[i] - 1;
    array[n]++;
  }

  // 값이 0인 출석번호 인덱스 출력
  for (let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      console.log(i+1);
    }
  }
}

solution(input)