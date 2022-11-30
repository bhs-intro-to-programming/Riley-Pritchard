const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

// Example of drawing one of the pieces
//drawText(WHITE_KING, width/2, height/2, 'black', 64);
const drawRow = (y, color) => {
  for (let i = 0; i < width; i += width / 8) {
    drawFilledRect(i, y, width / 8, height / 8, color)
    if (color === 'grey') {
      color = 'white'
    } else {
      color = 'grey'
    }
  }
}
const colorBoard = (color) => {
  for (let i = 0; i < height; i += height / 8) {
    drawRow(i, color)
    if (color === 'grey') {
      color = 'white'
    } else {
      color = 'grey'
    }
  }
}
colorBoard('white')

const drawBoard = () => {
  for (let i = 0; i < 8; i++) {
    drawLine(width / 8 * i, 0, width / 8 * i, height, 'purple', 2)
  }
  for (let j = 0; j < 8; j++) {
    drawLine(0, height / 8 * j, width, height / 8 * j, 'purple', 2)
  }
}
//drawBoard()

let board =
  [[WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_KING, WHITE_QUEEN, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK],
  [WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  [BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN],
  [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_KING, BLACK_QUEEN, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK]]
//let player = 'w'

const row = (y) => Math.floor(y / (height / 8))
const column = (x) => Math.floor(x / (width / 8))

let aSelect = []
const move = (x, y) => {
  if (aSelect.length === 1) {
    drawText(aSelect, width / 8 * column(x), height / 8 * (row(y) + 1), 'black', 40)
    board[row(y)][column(x)] = aSelect[0]
    aSelect.pop(board[row(y)][column(x)])
    draw()
  } else {
    drawText(board[row(y)][column(x)], width / 8 * column(x), height / 8 * (row(y) + 1), 'purple', 40)
    aSelect.push(board[row(y)][column(x)])
    board[row(y)][column(x)] = ''

  }
}


registerOnclick(move);

const drawArray = () => {
  for (let j = 0; j < board.length; j++)
    for (let i = 0; i < 8; i++) {
      if (board[j][i] !== '') {
        drawText(board[j][i], width / 8 * (i), height / 8 * (j + 1), 'black', 40);
      }
    }
}
drawArray()

const draw = () => {
  clear()
  colorBoard(color)
  //drawBoard()
  drawArray()
}