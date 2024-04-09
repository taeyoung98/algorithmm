const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

let count = [{}, {}] // x y
for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(' ').map(Number);

  count[0][x] = count[0][x] ? ++count[0][x] : 1
  count[1][y] = count[1][y] ? ++count[1][y] : 1
}

const result = [] // x y
for (let i = 0; i < count.length; i++) {
  const countObj = count[i];
  result[i] = Object.keys(countObj).find(key => countObj[key] === 1)
}
console.log(result.join(' '))