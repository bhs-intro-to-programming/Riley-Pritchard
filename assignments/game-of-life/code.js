drawFilledRect(0, 0, width, height, 'black')

const makeArrayRow = (s) => {
  for (let i = 0;i < height; i++){
    if (Math.random() < .2) {
        s.push(1)
      } else {
        s.push(0)
      }
  }
  return s
}

const makeArray = () => {
  let b = []
  for (let i = 0; i < height; i += 5) {
    for (let j = 0; j < width; j += 5) {
      if (Math.random() < .2) {
        b.push(1)
      } else {
        b.push(0)
      }
    }
    return b
  }


  const drawTheThings = () => {
    for (let i = 0; i < height; i = i + 5) {
      for (let j = 0; j < width; j = j + 5) {
        if (Math.random() < .2) {
          drawFilledRect(j, i, 5, 5, 'yellow')
          b.push(j + 1)
        } else {
          b.push(0)
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
}
