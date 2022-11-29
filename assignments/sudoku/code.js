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

const row = (y) => Math.floor(y / (height / 4))
const column = (x) => Math.floor(x / (width / 4))

const columnx = () => (column(Math.random() * 662)) * width / 4
const rowx = () => (row(Math.random() * 274) + 1) * height / 4

const random2 = () => {
  const x = columnx + 100();
  const y = rowx();
  console.log(`x: ${x}`);
  console.log(`y: ${y}`);
  drawText('2', x, y, 'black', 80)
}

const left = (x) => {
  return x < width / 4;
}
const right = (x) => {
  return x > width / 4 * 3;
}
const topp = (x, y) => {
  return x > width / 4 && x < width / 4 * 3 && y < height / 2;
}
const bot = (x, y) => {
  return x > width / 4 && x < width / 4 * 3 && y > height / 2;
}

registerOnclick( () => {
  random2()
});