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
  return s[0] + s[.length]
}