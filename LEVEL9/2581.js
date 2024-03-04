/**
 * @input
 * 60
 * 100
 * @output
 * 620
 * 61
 */

/**
 * @input
 * 64
 * 65
 * @output
 * -1
 */

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [M, N] = input.map((v) => +v)

function isPrime(num) {
  if (num === 1) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function solution(M, N) {
  const prime = [] // 소수
  for (let i = M; i <= N; i++) {
    if (isPrime(i)) {
      prime.push(i)
    }
  }

  if (!prime.length) {
    console.log(-1)
    return
  }

  const sum = prime.reduce((acc, curr) => {
    return acc + curr
  }, 0)
  console.log(sum)
  console.log(prime[0])
}

solution(M, N)
