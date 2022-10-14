const countTens = (a) => {
  let tens = 0
  for (let c = 0; c < a.length; c++) {
    if (a[c] === 10) {
      tens++
    }
  }
  return tens
}