/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (pulled, smoke, drill) => {
  return pulled || smoke || drill
}

const canBePresident = (age, citizen, live) => {
  return (age > 34) && citizen && (live > 13)
}

const willSeeTweet = (follow, followRetweeter, blocked) => {
  return (follow || followRetweeter) && !blocked
}

const evenGreaterThanZero = (x) => {
  return x % 2 === 0 && x > 0
}

//come back to 5
const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 && year % 400 === 0)
}
  
const firstAndLast = (s) => {
  return s[0] + s.substring(s.length - 1)
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

const simplePigLatin = (s, n) => {
  return s.substring(n) + s.substring(0, n) + 'ay'
}

const randomCharacter = (s) => {
  return s[rand(s.length)]
}

//come back to 10
const randomCharacterUpDown = (s) => {
  return s[rand(s.length)].toUpperCase() + s[rand(s.length)].toLowerCase()
}

const isAllUpperCase = (s) => {
  return s === s.toUpperCase()
}

const sameIgnoringCase = (s1, s2) => {
  return s1 === s2
}