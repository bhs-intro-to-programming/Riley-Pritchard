// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.

registerOnclick((x, y) => {
  drawText('+', x, y, 'black', Math.min(width, height) * 0.3);
});
drawLine(0, 0, width, height, 'black', 30)

const topLeft = () => {
  return x < width / 3 && y < height / 3
}

const topMiddle = () => {
  return x > width / 3 && x < width / 3 * 2 && y < height / 3
}

const topRight = () => {
  return x > width / 3 * 2 && y < height / 3
}

const ticTacToe = () => {
  let board = [[], [], []]
  if (registerOnclick === topleft) {
    board.push(x)
    if (registerOnclick === topMiddle) {
      board.push([], x)
      if (registerOnclick === topRight) {
        board.push([], [], x)
      }
    }
  }
}