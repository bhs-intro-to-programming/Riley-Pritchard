const drawBoard = () => {
  for (let i = 0; i < 9; i++) {
    drawLine(width / 9 * i, 0, width / 9 * i, height, 'black', 2)
  }
  for (let j = 0; j < 9; j++) {
    drawLine(0, height / 9 * j, width, height / 9 * j, 'black', 2)
  }
}
drawBoard()