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

//come back to 6 and 7
const canSleepIn = (isWeekend, vacation) => {
 return isWeekend || vacation
}

const moreThanTwiceAsLong = ('a', 'b') => {
  return 'a'.length()  > 'b'.length() * 2
}



