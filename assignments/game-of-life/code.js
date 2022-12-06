drawFilledRect(0, 0, width, height, 'black')

const makeArrayRow = (columns) => {
  let row = []
  for (let i = 0; i < columns; i++) {
    if (Math.random() < .2) {
      row.push(1)
    } else {
      row.push(0)
    }
  }
  return row
}
const makeArray = (rows, columns) => {
  let b = []
  for (let i = 0; i < rows; i++) {
    b.push(makeArrayRow(columns))
  }
  return b;
}

const drawTheThings = (b, cellsize) => {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      if (b[i][j] === 1) {
        drawFilledRect(j * cellsize, i * cellsize, cellsize, cellsize, 'lavender')
      }
    }
  }
}

const neighbors = (y, x, b) => {
  let n = 0
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++)
      if (x === 0) {
        let j = j + 1
      }
    if (y === 0) {
      let i = i + 1
    }
    if (y === Math.floor(height / cellsize)) {
      while (i < 1) {
        if (x === Math.floor(width / cellsize)) {
          while (j < 1) {
            if (b[y + i][x + j] === 1) {
              n = n + 1
            }
          }
        }
      }
    }
  }
    return n
  }

  const whatLives = (b) => {
    for (let i = 0; i < height; i += 5) {
      for (let j = 0; j < b.length; j++) {
        if (neighbors(i, j) < 3)
          b[i][j] = 0
        if (Math.random() < .2 && b[i][j] === 0) {
          b[i][j] = 1
        }
      }
    }
  }

  const cellsize = 5
  const board = makeArray(Math.floor(height / cellsize), Math.floor(width / cellsize));
  drawTheThings(board, cellsize);

  const redraw = (t) => {
    clear()
    drawTheThings(board, cellsize)
  }

  animate(redraw)
