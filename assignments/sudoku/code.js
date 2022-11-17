//this isn't sudoku, it's 2048
const drawBoard = () => {
  for (let i = 0; i < 4; i++) {
    drawLine(width / 4 * i, 0, width / 4 * i, height, 'black', 2)
  }
  for (let j = 0; j < 4; j++) {
    drawLine(0, height / 4 * j, width, height / 4 * j, 'black', 2)
  }
}
drawBoard()

let board = [['','','',''],['','','',''],['','','',''],['','','','']]

const random2 = () => {
  drawText('2', Math.random, Math.random, 'black', 80)
}


drawText('2', 50, 50, 'black', 70)