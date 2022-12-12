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
  if (board[row(y)][column(x)] === '')
    drawText('2', x, y, 'black', 80)
  board[row(y)][column(x)] = '2'
}
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
  random2()
}

const emptyArray = [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']]

const eqaulArrays = (a1, a2) => {
  for (let i = 0; i > a1.length; i++) {
    for (let j = 0; j > a1[i].length; j++) {
      a1[i][j] = a2[i][j]
    }
  }
  return a1
}

const moveLeft = () => {
  emptyArray(left)
  for (let i = 0; i < 4; i++) {
    let c = 0
    for (let j = 0; j < 4; j++) {
      if (board[i][j] !== '') {
        left[i][c] = board[i][j]
        board[i][j] = ''
        c++
      }
      if (left[i][0] === left[i][1] && left[i][0] !== '') {
        left[i][0] = left[i][0] * 2
        left[i][1] = ''
      }
    }
  }
  equalArrays(board, left)
  doIt()
}

const moveRight = () => {
  emptyArray(right)
  for (let i = 3; i > -1; i = i - 1) {
    let c = 3
    for (let j = 3; j > - 1; j = j - 1) {
      if (board[i][j] !== '') {
        right[i][c] = board[i][j]
        board[i][j] = ''
        c = c - 1
      }
      if (right[i][3] === right[i][2] && right[i][3] !== '') {
        right[i][3] = right[i][3] * 2
        right[i][2] = ''
      }
    }
  }
  equalArrays(board, right)
  doIt()
}

const moveUp = () => {
  emptyArray(up)
  for (let j = 0; j < 4; j++) {
    let c = 0
    for (let i = 0; i < 4; i++) {
      if (up[i][j] !== '') {
        up[c][j] = board[i][j]
        board[i][j] = ''
        c++
      }
      if (up[0][j] === up[1][j] && up[0][j] !== '') {
        up[0][j] = up[0][j] * 2
        up[1][j] = ''
      }
    }
  }
  equalArrays(board, up)
  doIt()
}

const moveDown = () => {
  emptyArray(down)
  for (let j = 3; j > -1; j = j - 1) {
    let c = 3
    for (let i = 3; i > -1; i = i - 1) {
      if (down[i][j] !== '') {
        down[c][j] = board[i][j]
        board[i][j] = ''
        c = c - 1
      }
    }
  }
  equalArrays(board, down)
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
  if (key === 'ArrowUp') {
    moveUp()
  }
  if (key === 'ArrowDown') {
    moveDown()
  }
})