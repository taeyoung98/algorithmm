// input example
// 3 3 6 -> 1300
// 2 2 2 -> 12000
// 6 2 5 -> 600

const fs = require('fs')
// let input = fs.readFileSync('./input.txt').toString().trim().split(' ')
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')
const dice = [+input[0], +input[1], +input[2]]

function sameSpot(dice) {
  let [count, num] = [0, 0]
  for (let i = 0; i < dice.length-1; i++) {
    for (let j = i+1; j < dice.length; j++) {
      if (dice[i] === dice[j]) {
        count++
        num = dice[i]
      }
    }
  }
  return [count, num]
}

function maxSpot(dice) {
  let max = dice[0]
  for (let i = 1; i < dice.length; i++) {
    if (max < dice[i]) {
      max = dice[i]
    }
  }
  return max
}

function solution(dice) {
  const [count, num] = sameSpot(dice)
  let prize
  if (count === 3) {
    prize = 10000 + num*1000
  } else if (count === 1) {
    prize = 1000 + num*100
  } else { // count === 0
    prize = maxSpot(dice)*100
  }
  console.log(prize)
}

solution(dice)