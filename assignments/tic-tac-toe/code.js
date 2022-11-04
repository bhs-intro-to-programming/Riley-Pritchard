// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

let player = 'x'
let board = ['', '', '', '', '', '', '', '', ''];

registerOnclick((x, y) => {
  ticTacToe(x, y)
});

drawLine(width / 3, 0, width / 3, height, 'black', 5)
drawLine(width / 3 * 2, 0, width / 3 * 2, height, 'black', 5)
drawLine(0, height / 3, width, height / 3, 'black', 5)
drawLine(0, height / 3 * 2, width, height / 3 * 2, 'black', 5)

const topLeft = (x, y) => {
  return x < width / 3 && y < height / 3
}
const topMid = (x, y) => {
  return x > width / 3 && x < width / 3 * 2 && y < height / 3
}
const topRight = (x, y) => {
  return x > width / 3 * 2 && y < height / 3
}
const midLeft = (x, y) => {
  return x < width / 3 && y > height / 3 && y < height / 3 * 2
}
const midMid = (x, y) => {
  return x < width / 3 * 2 && x > width / 3 && y > height / 3 && y < height / 3 * 2
}
const midRight = (x, y) => {
  return x > width / 3 * 2 && y > height / 3 && y < height / 3 * 2
}
const botLeft = (x, y) => {
  return x < width / 3 && y > height / 3 * 2
}
const botMid = (x, y) => {
  return x < width / 3 * 2 && x > width / 3 && y > height / 3 * 2
}
const botRight = (x, y) => {
  return x > width / 3 * 2 && y > height / 3 * 2
}

const ticTacToe = (x, y) => {
  if (topLeft(x, y) && (board[0] !== ('x' && 'o'))) {
    drawText(player, width / 6, height / 12 * 3, 'black', 70)
    board[0] = player
  } else if (topMid(x, y) && (board[1] !== ('x' && 'o'))) {
    drawText(player, width / 2, height / 12 * 3, 'black', 70)
    board[1] = player
  } else if (topRight(x, y) && (board[2] !== ('x' && 'o'))) {
    drawText(player, width / 6 * 5, height / 12 * 3, 'black', 70)
    board[2] = player
  } else if (midLeft(x, y) && (board[3] !== ('x' && 'o'))) {
    drawText(player, width / 6, height / 12 * 7, 'black', 70)
    board[3] = player
  } else if (midMid(x, y) && (board[4] !== ('x' && 'o'))) {
    drawText(player, width / 2, height / 12 * 7, 'black', 70)
    board[4] = player
  } else if (midRight(x, y) && (board[5] !== ('x' && 'o'))) {
    drawText(player, width / 6 * 5, height / 12 * 7, 'black', 70)
    board[5] = player
  } else if (botLeft(x, y) && (board[6] !== ('x' && 'o'))) {
    drawText(player, width / 6, height / 12 * 11, 'black', 70)
    board[6] = player
  } else if (botMid(x, y) && (board[7] !== ('x' && 'o'))) {
    drawText(player, width / 2, height / 12 * 11, 'black', 70)
    board[7] = player
  } else if (botRight(x, y) && (board[8] !== ('x' && 'o'))) {
    drawText(player, width / 6 * 5, height / 12 * 11, 'black', 70)
    board[8] = player
  }
  if (player === 'x') {
    player = 'o'
  } else {
    player = 'x'
  }
  console.log(board)
}

const win = () => {
  return winner || boardFull
  //drawLine(width / 12, height / 6, width / 12 * 11, height / 6)
}

const boardFull = () => {
  return board.every((x) => x !== '')
}

const winner = () => {
  return rowWin || columnWin || diagonalWin
}

const xRowWin = () => {
  return topRowXWin || midRowXWin || botRowXWin
}
const topRowXWin = () => {
  return (board[0] === 'x') && (board[1] === 'x') && (board[2] === 'x')
}
const midRowXWin = () => {
  return (board[3] === 'x') && (board[4] === 'x') && (board[5] === 'x')
}
const botRowXWin = () => {
  return (board[6] === 'x') && (board[7] === 'x') && (board[8] === 'x')
}