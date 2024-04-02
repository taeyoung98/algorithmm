const fs = require('fs')
const [x, y, w, h] = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number)

const distance = [x, y, w-x, h-y]

// 방법1
// let min = x;
// for (let i = 1; i < distance.length; i++) {
//   if(min > distance[i]) {
//     min = distance[i]
//   }
// }

// 방법2
let min = Math.min([...distance])

console.log(min)