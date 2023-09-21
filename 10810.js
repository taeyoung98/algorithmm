// input
// 5 4
// 1 2 3
// 3 4 4
// 1 4 1
// 2 2 2
// output
// 1 2 1 1 0

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M] = input[0].split(' ')
const arr = input.slice(1)

function solution(N, M, arr) {
  let basket = new Array(+N).fill(0)
  
  for (let x = 0; x < M; x++) {
    const row = arr[x].split(' ')
    const i = +row[0]
    const j = +row[1]
    const k = +row[2]

    // i번부터 j번째까지 바구니에 숫자k 공 넣기
    for (let y = i-1; y < j; y++) {
      basket[y] = k    
    }
  }

  let result = ''
  for (let z = 0; z < N; z++) {
    result += basket[z] + ' '
    
  }
  console.log(result);
}


solution(N, M, arr)