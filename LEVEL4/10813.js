// input
// 5 4
// 1 2
// 3 4
// 1 4
// 2 2
// output
// 3 1 4 2 5

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [N, M] = input[0].split(' ')
const arr = input.slice(1)

let basket = []
for (let x = 0; x < N; x++) {
  basket[x] = x+1
}

function solution(N, M, arr) {
  for (let x = 0; x < M; x++) {
    const row = arr[x].split(' ')
    const i = +row[0]
    const j = +row[1]

    const tmp = basket[i-1]
    basket[i-1] = basket[j-1]
    basket[j-1] = tmp
  }

  // 개행 없이 출력
  // 방법 1
  // basket.forEach(element => {
  //   process.stdout.write(`${element} `)
  // })
  // 방법 2
  console.log(basket.join(' '));
}


solution(N, M, arr)