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

const neighbors = (x, y, b) => {
let n = 0
if(b[x][y] === 1 && b[x][y + 1] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x][y - 1] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x + 1][y] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x - 1][y] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x + 1][y + 1] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x + 1][y - 1] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x - 1][y + 1] === 1){
  n = n + 1
}
if(b[x][y] === 1 && b[x - 1][y - 1] === 1){
  n = n + 1
}
return n
}

const whatLives = (b) => {
  for (let i = 0; i < height; i += 5) {
    for (let j = 0; j < b.length; j++) {
      if (neighbors(i,j) < 3)
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
  // clear()
  // draw new board
}

animate(redraw);