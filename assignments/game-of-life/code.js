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
        drawFilledRect(j * cellsize, i * cellsize, cellsize, cellsize, 'yellow')
      }
    }
  }
}

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

const cellsize = 5
const board = makeArray(Math.floor(height/cellSize), Math.floor(width/cellsize));
drawTheThings(board, cellSize);

