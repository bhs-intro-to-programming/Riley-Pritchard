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



const drawCircleLine = (d, color) => {
  for (let i = 0; d * i < width - (d + d); i++) {
    let x = i * d + d
    let y = height / 2
    drawFilledCircle(x, y, d / 2, color)
  }
}
//drawCircleLine(20, 'red')

const drawSpicyCircleLine = (d, color) => {
  for (let i = 0; d * i < width - (d + d); i++) {
    let x = i * d + d
    let y = height / 2
    drawFilledCircle(x, y, d / 2, color)
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
  }
}
//drawSpicyCircleLine(20, 'red')

const drawSpicyCircles = (c, color) => {
  for (let r = width / 2; ; r = r - width / 2 / c) {
    drawFilledCircle(width / 2, height / 2, r, color)
    if (color === 'red') {
      color = 'blue'
    } else {
      color = 'red'
    }
  }
}
//drawSpicyCircles(11, 'red')

const drawSpicyCheckers = (n, color) => {
  if (n % 2 === 0) {
          n = n + 0.0000000000001
        }
  for (let y = 0; y < height; y = y + width / n) {
    for (let x = 0; x < width; x = x + width / n) {
      let a = width / n
      drawFilledRect(x, y, a, a, color)
      if (color === 'blue') {
        color = 'red'
      } else {
        color = 'blue'
      }
    }
  }
}
drawSpicyCheckers(12, 'blue')

const drawTooManyLines = (n) => {
  for (let i = 0; i < n; i++) {
    let x2 = (width / n) * i
    let y2 = height
    let y1 = (height / n) * i
    let x1 = 0
    drawLine(x1, y1, x2, y2, 'black', 1)
  }
}
//drawTooManyLines(20)


const drawTooManyCircles = (d, color) => {
  for (let j = 1; d * j < height - (d); j++) {
    for (let i = 0; d * i < width - (d + d); i++) {
      let x = i * d + d
      let y = j * d
      drawCircle(x, y, d / 2, color)
    }
  }
}
//drawTooManyCircles(17, 'blue')

const drawSomeFunnyCircles = (r, p, color) => {
  for (let y = r * 2; y < height - r * 2; y = y + r * 2) {
    for (let n = 0; r * n < width - (r * 2); n = n + 2) {
      let x = r * 2
      drawCircle(x + r * n, y, r, color)
      if (Math.random() < p) {
        drawFilledCircle(x + r * n, y, r, color)
      }
    }
  }
}
//drawSomeFunnyCircles(17, .23, 'blue')

const drawStrangePictureFrame = (d, color) => {
  const verticalCircles = Math.floor(height / d)
  const horizontleCircles = Math.floor(width / d)
  for (let j = 0; j < verticalCircles; j++) {
    for (let i = 0; i < horizontleCircles; i++) {
      let x = d + d * i
      let y = d + d * j
      if (i === 0 || i === horizontleCircles - 1 || j === verticalCircles - 1 || j === 0) {
        drawCircle(x, y, d / 2, color)
      }
    }
  }
}
//drawStrangePictureFrame(20, 'blue') 