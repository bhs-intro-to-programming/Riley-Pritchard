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

const drawBoard = () => {
  for (let i = 0; i < 8; i++) {
    drawLine(width / 8 * i, 0, width / 8 * i, height, 'black', 2)
  }
  for (let j = 0; j < 8; j++) {
    drawLine(0, height / 8 * j, width, height / 8 * j, 'black', 2)
  }
}
drawBoard()

let board =
  [['wr', 'wn', 'wb', 'wk', 'wq', 'wb', 'wn', 'wr'],
  ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
  ['br', 'bn', 'bb', 'bk', 'bq', 'bb', 'bn', 'br']]
let player = 'w'

const row = (y) => Math.floor(y / (height / 8))
const column = (x) => Math.floor(x / (width / 8))

