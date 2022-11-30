drawFilledRect(0, 0, width, height, 'black')
let b = []

const makeArrayRow = () => {
  let row = []
  for (let i = 0;i < width; i += 5){
    if (Math.random() < .2) {
        row.push(1)
      } else {
        row.push(0)
      }
  }
  return row
}
const makeArray = () => {
  for (let i = 0; i < height; i += 5) {
    b.push(makeArrayRow())
    }
  }
makeArray()


  const drawTheThings = () => {
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (b[i][j] === 1) {
          drawFilledRect(j * 5, i * 5, 5, 5, 'yellow')
        }
      }
    }
  }
  drawTheThings()

  const whatLives = () => {
    for (let i = 0; i < height; i += 5) {
      for (let start = 0; start < b.length; start++) {
        if (b[start] > 0 && b[start + 1] > 0 && b[start + 3] > 0) {
          drawFilledRect(b[start] - 1, i, 5, 5, 'yellow')
          drawFilledRect(b[start] + 4, i, 5, 5, 'yellow')
          drawFilledRect(b[start] + 9, i, 5, 5, 'yellow')
          start = start + 2
        } else {
          if (Math.random() < .2) {
            drawFilledRect(b[start] - 1, i, 5, 5, 'yellow')
          }
        }
      }
    }
  }

