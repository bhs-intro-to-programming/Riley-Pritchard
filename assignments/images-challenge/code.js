/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */

const drawCircleLine = (r, color) => {
  for (let n = 0; r * n < width - (r * 2); n = n + 2) {
    let x = 0 + r * 2
    let y = height / 2
    drawFilledCircle(x + r * n, y, r, color)
  }
}
//drawCircleLine(10, 'red')

const drawSpicyCircleLine = (y, r, color) => {
  for (let n = 0; r * n < width - (r * 2); n = n + 2) {
    let x = 0 + r * 2
    drawFilledCircle(x + r * n, y, r, color)
    if (n % 4 === 0) {
      color = 'blue'
    } else {
      color = 'red'
    }
  }
}
//drawSpicyCircleLine(280, 10, 'red')

const drawSpicyCircles = (c, color) => {
  for (let r = width / 2; c === c; r = r - width / 2 / c) {
    drawFilledCircle(width / 2, height / 2, r, color)
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
  }
}
//drawSpicyCircles(11, 'blue')

//the code after this message doesn't work yet
const drawSpicyCheckers = (n, color) => {
  for (let y = 0; y < height; y = y + width / n) {
    for (let x = 0; x < width; x = x + width / n) {
      let a = width / n
      drawFilledRect(x, y, a, a, color)
      if (color === 'red') {
        color = 'blue'
      } else {
        color = 'red'
        if (x === 0 && color === 'blue') {
          color = 'red'
        }
      }
    }
  }
}
drawSpicyCheckers(9, 'blue')
//for (let y = 0; y < height; y = y + width / n) {

//drawFilledRect(0, 0, width, height, 'blue')
//drawFilledRect(x, 0, width/ n, height/ n, 'red')

const drawTooManyLines = (n) => {
  for (let x2 = 0; x2 < width; x2 = x2 + width / n) {
    let y2 = height
    let y1 = 0
    let x1 = 0
    drawLine(x1, y1, x2, y2, 'black', 1)}
    for (let y1 = height; y1 < 0; y1 = y1 - height / n) {
      let x1 = 0
      let x2 = width
      let y2 = height
      drawLine(x1, y1, x2, y2, 'black, 1')
    }
  }

//for (let y2 = 0; y2 < height; y2 = y2 + height / n) {
//drawTooManyLines(10)

// the code after this message works
const drawTooManyCircles = (r, color) => {
  for (let y = r * 2; y < height - r * 2; y = y + r * 2) {
    for (let n = 0; r * n < width - (r * 2); n = n + 2) {
      let x = 0 + r * 2
      drawCircle(x + r * n, y, r, color)
    }
  }
}
//drawTooManyCircles(17, 'blue')

const drawSomeFunnyCircles = (r, p, color) => {
  for (let y = r * 2; y < height - r * 2; y = y + r * 2) {
    for (let n = 0; r * n < width - (r * 2); n = n + 2) {
      let x = 0 + r * 2
      drawCircle(x + r * n, y, r, color)
      if (Math.random() < p) {
        drawFilledCircle(x + r * n, y, r, color)
      }
    }
  }
}
//drawSomeFunnyCircles(17, .23, 'blue')
