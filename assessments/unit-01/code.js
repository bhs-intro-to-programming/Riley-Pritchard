// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...

const averageWeight = (x, y) => {
  return x / y;
}

const hypotenuse = (a, b) => {
  return Math.sqrt(a ** 2 + b ** 2);
}

const maxRadius = (c, d) => {
  if (c / 2 > d / 2) {
    return d / 2
  } else {
    return c / 2
  }
}

const numCircles = (r, w) => {
  return w / (r * 2)
}

const offset = (width, figureWidth) => {
  return (width - figureWidth) / 2;
}

const canSleepIn = (weekday, vacation) => {
 return !weekday || vacation
}

const canGoToProm = (isSenior, invitedBySenior, promExclusionList) => {
  return (isSenior || invitedBySenior) && !promExclusionList
}

const getsSpeedingTicket = (a, s) => {
  return a > 70 || (s === 'grouchy' && a > 65)
}

const moreThanTwiceAsLong = (s1, s2) => {
  return s1.length > s2.length * 2
}

const aFartherThanB = (a, b, c) => {
  return Math.abs(a - b) < Math.abs(a - c)
}

const firstHalf = (s) => {
  s.substring(0, s.length / 2)
}

const secondHalf = (s) => {
  return s.substring(s.length / 2, s.length)
}

const upDown = (s) => {
  return s.toUpperCase() + s.toLowerCase()
}

const everyOther = (s) => {
  return s[0] + s[2] + s[4]
}

const upDownLastCharacter = (s) => {
  return s[s.length - 1].toUpperCase() + s[s.length - 1].toLowerCase()
}

const yesIfEven = (a) => {
  if (a % 2 === 0) {
    return 'yes'
  } else {
    return 'no'
  }
}

const countXs = (s) => {
  let c = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      c++
    } else {
      c = c
    }
  }
  return c
}

const timesTable = (x) => {
  for (let j = 1; j < x + 1; j++) {
    for (let i = 1; i < x + 1; i++) {
      emit(j, i, j * i)
    }
  }
}

const containsX = (s) => {
  return (s.search(/[x]/) !== -1)
}

//comeback to 20
const sumSquares = (a) => {
  let s = 0
  for (let x = 1; x < a; x++) {
    s = s + (a - (x) ** 2)
  }
}