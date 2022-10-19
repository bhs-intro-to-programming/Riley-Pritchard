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
  let a2 = []
  for (let c = 0; c < a.length; c++) {
    if (a[c] % 2 === 0) {
      a2.push(a[c])
    }
  }
  return a2
}

const anyOverOneHundred = (a) => {
  let x = 0
  for (let c = 0; c < a.length; c++) {
    if (a[c] > 100){
      x++
    }
  }
  return x > 0
}

const pyramid = (a) => {
  let a2 = []
  for (let i = 0; i < c; i = i)
  for (let c = 1; c < a + 1; c++) {
    a2.push[c]
  }
  return a2
}