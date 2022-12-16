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
makeArray(9,9)