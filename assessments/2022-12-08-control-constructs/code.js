const yesIfEven = (x) => {
  if (x % 2 === 0) {
    return 'yes'
  } else {
    return 'no'
  }
}

const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'x') {
      count = count + 1
    }
  }
  return count
}

const emit = (a, b) => console.log(a + ', ' + b);

const timesTable = (x) => {
  for (let i = 1; i < x + 1; i++) {
    for (let j = 1; j < x + 1; j++) {
      emit(i, j, i * j)
    }
  }
}

const containsX = (s) => {
    let count = 0
  for (let i = 0; i < s.length; i++){
    if (s[i] === 'x'){
      count = count + 1
    }
  }
  return count > 0
}

const sumSquares = (x) => {
  let sum = 0
  for (let i = 1; i < x; i++){
    sum = sum + i**2
  }
  return sum
}