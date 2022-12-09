const drawBoard = () => {
  for (let i = 0; i < 4; i++) {
    drawLine(width / 4 * i, 0, width / 4 * i, height, 'black', 2)
  }
  for (let j = 0; j < 4; j++) {
    drawLine(0, height / 4 * j, width, height / 4 * j, 'black', 2)
  }
}
drawBoard()

let board = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]

const row = (y) => Math.floor(y / (height / 4))
const column = (x) => Math.floor(x / (width / 4))
const columnx = () => (column(Math.random() * 662)) * width / 4
const rowx = () => (row(Math.random() * 274) + 1) * height / 4

const random2 = () => {
  const x = columnx() + 50;
  const y = rowx() - 5;
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
  drawText('2', x, y, 'black', 80)
  board[row(y)][column(x)] = '2'
}
random2()
random2()

const drawArray = () => {
  for (let j = 0; j < board.length; j++)
    for (let i = 0; i < 8; i++) {
      if (board[j][i] !== '') {
        drawText(board[j][i], width / 4 * (i) + 50, height / 4 * (j + 1) - 5, 'black', 80);
      }
    }
}
drawArray()

const doIt = () => {
  clear()
  drawBoard()
  drawArray()
}

const moveLeft = () => {
  let left = board
  for (let i = 0; i < 4; i++) {
    let c = 0
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== '') {
        left[i][c] = board[i][j]
        board[i][j] = ''
        c++
      }
    }
  }
  board = left
  doIt()
}

const moveRight = () => {
  let left = board
  for (let i = 3; i > -1; i = i - 1) {
    let c = 0
    for (let j = 3; j > - 1; j = j - 1) {
      if (board[i][j] !== '') {
        right[i][c] = board[i][j]
        board[i][j] = ''
        c++
      }
    }
  }
  board = right
  doIt()
}

registerOnKeyDown((key) => {
  console.log(key)
  if (key === 'ArrowLeft') {
    moveLeft()
  }
  if (key === 'ArrowRight') {
    moveRight()
  }
})