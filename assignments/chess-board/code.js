const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
//drawText(WHITE_KING, width/2, height/2, 'black', 64);

drawLine(width / 8, 0, width / 8, height, 'black', 2)
drawLine(width / 4, 0, width / 4, height, 'black', 2)
drawLine(width / 8 * 3, 0, width / 8 * 3, height, 'black', 2)
drawLine(width / 2, 0, width / 2, height, 'black', 2)