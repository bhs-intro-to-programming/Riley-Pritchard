/*
 * This code is running in an environment with five functions defined:
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *    Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
 *    lineWidth, is optional and defaults to 1.
 *
 *  drawCircle(x, y, r, color, lineWidth=1)
 *
 *    Draws a circle centered at x,y with radius r using the given color. The
 *    fith argument, lineWidth, is optional and defaults to 1.
 *
 *  drawRect(x, y, width, height, color, lineWidth=1)
 *
 *    Draws a rectangle starting at x,y with the given width, height, and color.
 *    Positive widths go to the right and negative to the left; positive heights
 *    go down and negative heights go up. The sixth argument, lineWidth, is
 *    optional and defaults to 1.
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *    Draws a filled rectangle starting at x,y with the given width, height, and
 *    color. Positive widths go to the right and negative to the left; positive
 *    heights go down and negative heights go up.
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *    Draws a filled circle centered at x,y with radius r using the given color.
 *
 * There are also a couple variables that might be useful:
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 */

//drawLine(0, 0, width, height, 'red')

drawFilledRect(0, height - 1000, 1000, 1000, 'red');

drawFilledRect(0, height - 500, 1000, 1000, 'orange');

drawFilledRect(0, height - 400, 1000, 1000, 'yellow');

drawFilledRect(0, height - 300, 1000, 1000, 'red');

drawFilledRect(0, height - 200, 1000, 1000, 'orange');

drawFilledRect(0, height - 100, 1000, 1000, 'yellow');

drawFilledRect(5, height - 550, 200, 100, 'green');

//drawCircle(width/2, height/4, 10, 'blue');

//drawRect(50, 50, 60, 40, 'black');

drawFilledCircle(width/2, height/1.1, 200, 'brown');

drawFilledCircle(width/2, height/2, 100, 'brown');

drawCircle(width/2, height/2, 100, 'black');

//drawFilledRect(5, height - 20, 45, 15, 'purple');

drawFilledCircle(width/3, height/3, 50, 'brown');

drawFilledCircle(width/1.5, height/3, 50, 'brown');

drawCircle(width/2, height/1.9, 50, 'black');

drawFilledCircle(width/1.7, height/2.1, 50, 'brown');

drawFilledCircle(width/2.2, height/2.1, 50, 'brown');


drawFilledCircle(width/2, height/2, 15, 'black');

drawFilledCircle(width/1.7, height/2.2, 12, 'black');

drawFilledCircle(width/2.5, height/2.2, 12, 'black');



