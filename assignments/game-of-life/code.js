drawFilledRect(0, 0, width, height, 'black')

const board = () => {
  let b = [[]]
  for (let i = 0; i > width; i++) {
    if (Math.random() < .2) {
      b.push(true)
    } else {
      b.push(false)
    }
  }
  return b
}