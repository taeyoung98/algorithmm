// input
// 3
// 124
// 25
// 194
// output
// 4 2 0 4
// 1 0 0 0
// 7 1 1 4

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [test, ...changes] = input

function solution(test, changes) {
  const coins = [25, 10, 5, 1]

  for (let i = 0; i < test; i++) {
    let change = changes[i]
    let result = '' // 각 동전별 거스름 개수

    for (let i = 0; i < coins.length; i++) {
      const count = Math.floor(change / coins[i])
      change -= coins[i] * count // coins[i] 거스르고 남은 잔돈
      result += count + ' '
    }
    console.log(result)
  }
}

solution(test, changes)