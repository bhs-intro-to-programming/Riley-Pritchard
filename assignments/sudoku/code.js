const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    drawLine((width / 2) - (height / 2) + (height / 9) * i, 0, (width / 2) - (height / 2) + height / 9 * i, height, 'black', 1)
  }
  for (let j = 0; j < 10; j++) {
    drawLine((width / 2) - (height / 2), height / 9 * j, (width / 2) + (height / 2), height / 9 * j, 'black', 1)
  }
    for (let i = 0; i < 4; i++) {
    drawLine((width / 2) - (height / 2) + (height / 3) * i, 0, (width / 2) - (height / 2) + height / 3 * i, height, 'black', 3)
  }
  for (let j = 0; j < 4; j++) {
    drawLine((width / 2) - (height / 2), height / 3 * j, (width / 2) + (height / 2), height / 3 * j, 'black', 3)
  }
}
drawBoard()

const makeArrayRow = (columns) => {
  let row = []
  for (let i = 0; i < columns; i++) {
    row.push('')
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
const board = makeArray(9, 9)

const row = (y) => Math.floor(y / (height / 9))
const column = (x) => Math.floor(x / (width / 9))

const drawSelectNumbers = () => {
  for (let i = 0; i < 10; i++){
    drawText(i, i * 20 + 3, 20, 'black', 20)
  }
}
drawSelectNumbers()

let aSelect = []
const move = (x, y) => {
  if (aSelect.length === 1) {
    drawText(aSelect, width / 9 * column(x), height / 9 * (row(y) + 1), 'black', 40)
    board[row(y)][column(x)] = aSelect[0]
    aSelect.pop(board[row(y)][column(x)])
    draw()
  } else {
    drawText(board[row(y)][column(x)], width / 9 * column(x), height / 9 * (row(y) + 1), 'blue', 40)
    aSelect.push(board[row(y)][column(x)])
    board[row(y)][column(x)] = ''

  }
}
