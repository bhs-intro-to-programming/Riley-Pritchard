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
  return Math.sqrt(a**2 + b**2);
}

//come back to 3
const maxRadius = (c, d) => {
  if (c / 2 < d / 2) {
    d / 2
  }else{
    c / 2
  }
}

const numCircles = (r, w) => {
  return w / (r * 2) 
}

const offset = (w, x1, x2) => {
  return (w / 2) - (Math.abs(x2 - x1) / 2);
}

//come back to 6 and 7 8
const canSleepIn = (isWeekend, vacation) => {
 return isWeekend || vacation
}

//come back to 9 and 10
const moreThanTwiceAsLong = (s1, s2) => {
  return s1.length()  > s2.length() * 2
}

const firstHalf = (s) => {
  s.substring(s.length / 2)
}

const secondHalf = (s) => {
  return s.substring(s.length / 2, s.length)
}

const upDown = (s) => {
return s.toUpperCase() + s.toLowerCase()
}

const everyOther =(s) => {
  return s[0] + s[3] + s[4]
}