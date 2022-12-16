const drawBoard = (thick) => {
  for (let i = 0; i < 10; i++) {
    drawLine((width / 2) - (height / 2) + (height / 9) * i, 0, (width / 2) - (height / 2) + height / 9 * i, height, 'black', 1)
  }
  for (let j = 0; j < 10; j++) {
    drawLine((width / 2) - (height / 2), height / 9 * j, (width / 2) + (height / 2), height / 9 * j, 'black', 1)
  }
}
drawBoard(1)