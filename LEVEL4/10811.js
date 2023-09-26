// input
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2
// output
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M] = input[0].split(' ')
const ij = input.splice(1, input.length)

function solution(N, M, ij) {
  // 1~N번 적힌 바구니 N개
  let result = [0]
  for (let x = 1; x <= N; x++) {
    result[x] = x
  }

  // i~j번 바구니 순서 바꾸기 X M번 반복
  for (let x = 0; x < M; x++) {
    const i = +ij[x].split(' ')[0] // start index
    const j = +ij[x].split(' ')[1] // end index

    // 순서 바꿀 두 인덱스 번호 같으면 pass
    if (i === j) continue // return은 solution() 함수를 종료시킴

    const copy = result.slice(i, j+1) // index i~j 복사
    const copyReversed = copy.reverse() // 복사본 역순
    const count = j-i+1 // delete count
    result.splice(i, count, ...copyReversed) // 원본 바구니 i~j 제거 & 복사본 추가
  }

  result.shift() // 0번 바구니 제거
  console.log(result.join(' '))
}

solution(N, M, ij)