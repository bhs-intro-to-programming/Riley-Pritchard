const countTens = (a) => {
  let tens = 0
  for (let c = 0; c < a.length; c++) {
    if (a[c] === 10) {
      tens++
    }
  }
  return tens
}

const sum = (a) => {
  let total = 0
  for (let c = 0; c < a.length; c++) {
    total = total + a[c]
  }
  return total
}

const evens = (a) => {
  let a2 = 0
  for (let c = 0; c < a.length; c++) {
    if (a[c] % 2 === 0) {
      a2.push(c)
    }
  }
  return a2
}

const anyOverOneHundred = (a) => {
  for (let c = 0; c < a.length; c++) {
    if (a[c] > 100) {
      return true
    }
  }
}

const pyramid = (a) => {
  for (let c = 0; c < a + 1; c++) {

  }
}