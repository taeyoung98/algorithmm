const file = process.platform === 'linux' ? '/dev/stdin' : 'input.txt'
const fs = require('fs')
const input = fs.readFileSync(file).toString().trim().split('\n')

function solution([N, ...arr]) {
  let answer = 0

  // 영수가 생각할 수 있는 모든 세자리 수의 경우 
  for (let i = 1; i <= 9; i++) { // 100의 자리
    for (let j = 1; j <= 9; j++) { // 10의 자리
      for (let k = 1; k <= 9; k++) { // 1의 자리
        // 서로 다른 숫자
        if (i==j || j==k || k==i) continue

        // 임의의 수 ijk
        // 모든 힌트에 부합하는지 확인
        let rightHint = 0
        arr.forEach(hint => {
          const [number, strike, ball] = hint.split(' ')
          let strCnt = 0, ballCnt = 0

          let tmp = [i, j, k]
          for (let n = 0; n < 3; n++) { // 각 자리수 비교
            if (number.includes(tmp[n])) { // 포함한다면
              if (number[n] == tmp[n]) strCnt++ // 같은 위치에 있다면
              else ballCnt++
            }
          }
          // 스트라이크/볼 개수가 각각 일치하면, ijk는 해당 힌트에 부합
          if (strike == strCnt && ball == ballCnt) rightHint++
        })
        // ijk가 모든 힌트에 부합한다면
        if (rightHint == N) answer++
      }
    }
  }
  console.log(answer)
}

solution(input)