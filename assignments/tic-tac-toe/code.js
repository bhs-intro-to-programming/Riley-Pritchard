// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('x', x, y, 'black', Math.min(width, height) * 0.3);
});

drawLine(width / 3, 0, width / 3, height, 'black', 5)
drawLine(width / 3 * 2, 0, width / 3 * 2, height, 'black', 5)
drawLine(0, height / 3, width, height / 3, 'black', 5)
drawLine(0, height / 3 * 2, width, height / 3 * 2, 'black', 5)

const topLeft = () => {
  return x < width / 3 && y < height / 3
}
const topMid = () => {
  return x > width / 3 && x < width / 3 * 2 && y < height / 3
}
const topRight = () => {
  return x > width / 3 * 2 && y < height / 3
}
const midLeft = () => {
  return x < width / 3 && y > height / 3 && y < height / 3 * 2
}
const midMid = () => {
  return x < width / 3 * 2 && x > width / 3 && y > height / 3 && y < height / 3 * 2
}
const midRight = () => {
  return x > width / 3 * 2 && y > height / 3 && y < height / 3 * 2
}
const botLeft = () => {
  return x < width / 3 && y > height / 3 * 2
}
const botMid = () => {
  return x < width / 3 * 2 && x > width / 3 && y > height / 3 * 2
}
const botRight = () => {
  return x > width / 3 * 2 && y > height / 3 * 2
}


const ticTacToe = () => {
  let board = [[], [], [], [], [], [], [], [], []]
  if (registerOnclick === topleft) {
    board[0] = 'x'
    if (registerOnclick === topMid) {
      board[1] = 'x'
      if (registerOnclick === topRight) {
        board[2] = 'x'
        if (registerOnclick === midLeft) {
          board[3] = 'x'
          if (registerOnclick === midMid) {
            board[4] = 'x'
            if (registerOnclick === midRight) {
              board[5] = 'x'
              if (registerOnclick === botLeft) {
                board[6] = 'x'
                if (registerOnclick === botMid) {
                  board[7] = 'x'
                  if (registerOnclick === botRight) {
                    board[8] = 'x'
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
  if ((board[0] && board[1] && board[2]) === 'x' || 'o')
}