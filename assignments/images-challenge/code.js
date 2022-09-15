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

const drawCircleLine = (y, r, color) => {
  for (let n = 0; r * n < width - (r * 2); n = n + 2) {
    let x = 0 + r * 2
    drawFilledCircle(x + r * n, y, r, color)
  }
}
//drawCircleLine(280, 10, 'red')

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

const drawSpicyCircles = (c) => {
  for (let r = width / 2; ; r = r - (width - c)){
    drawCircle(width / 2, height / 2, r, 'blue')
    if (r % c === 0) {
      color = 'blue'
    } else {
      color = 'red'
    }
  }
}

drawSpicyCircles(11)
