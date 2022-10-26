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
  //drawText(player, x, y, 'black', Math.min(width, height) * 0.3);
  //if (player === 'x') {
  //player = 'o'
  //} else {
  //player = 'x'
  //}
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
  console.log(`${x} ${y}`)
  if (topLeft(x, y)) {
    drawText(player, width / 6, height / 12 * 3, 'black', 70)
    board[0] = player
    if (topMid(x, y)) {
      drawText(player, width / 2, height / 12 * 3, 'black', 70)
      board[1] = player
      if (topRight(x, y)) {
        board[2] = player
        if (midLeft(x, y)) {
          board[3] = player
          if (midMid(x, y)) {
            board[4] = player
            if (midRight(x, y)) {
              board[5] = player
              if (botLeft(x, y)) {
                board[6] = player
                if (botMid(x, y)) {
                  board[7] = player
                  if (botRight(x, y)) {
                    board[8] = player
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

const win = () => {
  if ((board[0] && board[1] && board[2]) === ('x' || 'o')) {
    drawLine(width / 6, height / 6, width / 6 * 5, height / 6)
  }
}