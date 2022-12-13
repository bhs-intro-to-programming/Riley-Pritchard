const drawBoard = (width) => {
  for (let i = 0; i < 10; i++) {
    drawLine((width / 2) - (height / 2) + (height / 9) * i, 0, (width / 2) - (height / 2) + height / 9 * i, height, 'black', width)
  }
  for (let j = 0; j < 10; j++) {
    drawLine((width / 2) - (height / 2), height / 9 * j, (width / 2) + (height / 2), height / 9 * j, 'black', width)
  }
}
drawBoard(1)