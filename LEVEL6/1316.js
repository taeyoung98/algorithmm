const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')
const [ num, ...words ] = input

function solution(num, words) {
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    let count = [] // 사용된 알파벳 저장

    for (let j = 0; j < word.length; j++) {
      const letter = word[j];
      if (count.includes(letter)) { // 이미 사용되었고
        if (word[j-1] !== letter) { // 바로 앞에서 사용된 게 아니면
          num-- // 총 그룹 단어 개수 -1
          break
        }
      } else { // 처음 사용하면 count배열에 추가
        count.push(letter)
      }
    } // .word    
  } // .words

  console.log(num)
}

solution(num, words)