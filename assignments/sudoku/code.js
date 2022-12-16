const drawBoard = () => {
  for (let i = 0; i < 10; i++) {
    drawLine((width / 2) - (height / 2) + (height / 9) * i - (height / 9), 0, (width / 2) - (height / 2) + height / 9 * i  - (height / 9), height, 'black', 1)
  }
  for (let j = 0; j < 11; j++) {
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
const board = makeArray(9, 10)

const drawArray = () => {
  for (let j = 0; j < board.length; j++)
    for (let i = 0; i < 9; i++) {
      if (board[j][i] !== '') {
        drawText(board[j][i], width / 9 * (i), height / 9 * (j + 1), 'black', 20);
      }
    }
}

const addSelect2Array = () => {
  for (let i = 0; i < 9; i++){
    board[i][0] = i + 1
  }
  return board
}

const row = (y) => Math.floor(y / (height / 9))
const column = (x) => Math.floor(x / (width / 9))
const selectColumn = (x) => Math.floor(x / (198 / 9 - 20))

const drawSelectNumbers = () => {
  for (let i = 1; i < 10; i++){
    drawText(i, (width / 2) - (height / 2) + (height / 9) - (height / 9 * 2) + 7, i * (height / 9) - 5, 'black', 25)
  }
}
drawSelectNumbers()

let aSelect = []
const move = (x, y) => {
  if (aSelect.length === 1) {
    drawText(aSelect, width / 9 * column(x), height / 9 * (row(y) + 1), 'black', 20)
    board[row(y)][column(x)] = aSelect[0]
    aSelect.pop(board[row(y)][column(x)])
    draw()
  } else {
    drawText(selectors[selectColumn(x)], (198 / 9 - 20) * selectColumn(x), 30, 'blue', 30)
    aSelect.push(selectors[selectColumn(x)])
  }
}
registerOnclick(move);

const draw = () => {
  clear()
  drawBoard()
  drawArray()
}