// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
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


const ticTacToe = () => {
  let board = [[], [], [], [], [], [], [], [], []]
  if (registerOnclick === topleft) {
    board.push(x)
    if (registerOnclick === topMid) {
      board.push([], x)
      if (registerOnclick === topRight) {
        board.push([], [], x)
        if (registerOnclick === midLeft) {
    board.push([], [], [], x)
    if (registerOnclick === midMid) {
      board.push([], [], [], [], x)
      if (registerOnclick === midRight) {
        board.push([], [], [], [], [], x)
      }
    }
  }
}