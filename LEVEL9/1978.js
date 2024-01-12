// input
// 4
// 1 3 5 7
// output
// 3

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const arr = input[1].split(' ')

const isPrime = (num) => {
  if (num == 1) return false

  // 약수 구할 때는 최대 제곱근까지만.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

// 굳이 새 배열에 push하기보다 원 배열에 filter 적극 활용
console.log(arr.filter(num => isPrime(num)).length) 
