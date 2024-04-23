const file = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const fs = require('fs')
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number)
const [N, ...arr] = input

for (let i = 0; i < N; i++) {
  const element = arr[i]

  for (let j = 2; j <= 1000000; j++) {
    if (element % j == 0) {
      console.log('NO')
      break
    }
    if(j === 1000000) {
      console.log('YES')
    }
  }
}