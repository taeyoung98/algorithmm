// input example
// 12 5 -> 1
// 9 -13 -> 4

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
let input = []

rl.on('line', (line) => {
  // line를 통해서 사용자가 입력한 문자열이 들어온다.
  input.push(+line)

  //한줄을 받고 입력 종료
  // rl.close()
}).on('close', () => {
  //개발 로직 작성
  solution(input[0], input[1])

  //프로세스 종료
  process.exit()
})

function solution(x, y) {
  if (y > 0) {
    if (x > 0) console.log(1)
    else if (x < 0) console.log(2)
  } else if (y < 0) {
    if (x > 0) console.log(4)
    else if (x < 0) console.log(3)
  }
}


