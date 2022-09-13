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

const drawCircleLine = (x, y, r, color) => {
  for (let n = 0; drawFilledCircle(x + r * n, y, r, color); n = n + 2){
drawFilledCircle(x + r * n, y, r, color)
}

   //drawFilledCircle(x, y, r, color);
   //let width / (r * 2) = n
//let drawFilledCircle2((x + r * 2), y, r, color)
  //return drawFilledCircle1(x, y, r, color) + (drawFilledCircle2((x + r * 2), y, r, color)) + (drawFilledCircle((x + r * 4), y, r, color));

drawCircleLine(10, 50, 10, 'red')