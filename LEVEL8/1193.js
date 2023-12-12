const fs = require('fs')
const input = +fs.readFileSync('./input.txt').toString().trim()

function solution(X) {
  let cross = 1, nth = 1

  while (nth < X) {
    nth += ++cross
  }

  const distance = nth - X

  // 짝수번째 대각선
  // nth 좌측 하단에서 끝 
  if (cross % 2 === 0) { 
    console.log(`${cross-distance}/${1+distance}`)

  // 홀수번째 대각선
  // nth 우측 상단에서 끝
  } else { 
    console.log(`${1+distance}/${cross-distance}`)
  }
}

solution(input);