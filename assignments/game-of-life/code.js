drawFilledRect(0, 0, width, height, 'black')
const cellsize = 5

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
        drawFilledRect(j * cellsize, i * cellsize, cellsize, cellsize, 'palevioletred')
      }
    }
  }
}

const neighbors = (y, x, b) => {
  let n = 0
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++)
      if (x === 0) {
        j = j + 1
      }
    if (y === 0) {
      i = i + 1
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

const whatLives = (b, cellsize) => {
  for (let i = 0; i < height / cellsize; i ++) {
    for (let j = 0; j < width / cellsize; j++) {
      if (neighbors(i, j) > 2) {
        b[i][j] = 1
      } else {
        if (b[i] === undefined){
          console.log(i + ' ' + j)
        }
        b[i][j] = 0
      }
    }
  }
}


const board = makeArray(Math.floor(height / cellsize), Math.floor(width / cellsize));
drawTheThings(board, cellsize);

const redraw = (t) => {
  clear()
  whatLives(board, cellsize)
  drawTheThings(board, cellsize)
}

animate(redraw)
