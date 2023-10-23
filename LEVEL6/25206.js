const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split('\n')

function gradeToScore(grade) {
  switch (grade) {
    case 'A+':
      return 4.5
    case 'A0':
      return 4.0
    case 'B+':
      return 3.5
    case 'B0':
      return 3.0
    case 'C+':
      return 2.5
    case 'C0':
      return 2.0
    case 'D+':
      return 1.5
    case 'D0':
      return 1.0
    case 'F':
      return 0.0
  }
}

function solution(input) {
  let gradeSum = 0 // 학점 x 과목평점(등급)
  let creditSum = 0 // 총 학점
  let avg = 0 // 전공평점

  for (let i = 0; i < input.length; i++) {
    const [name, credit, grade] = input[i].split(' ') // 과목명 학점 등급

    if (grade === 'P') continue

    gradeSum += credit * gradeToScore(grade)
    creditSum += +credit 
  }  
  avg = (gradeSum / creditSum).toFixed(6)
  console.log(avg);
}

solution(input)