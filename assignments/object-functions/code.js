const getX = (o) => {
  return o.x
}

const point = (x, y) => {
  let o = {}
  return o = {'x' : x, 'y' : y}
}

const emptyObject = () => {
  let o = {}
  return o
}

const distance = (p1, p2) => {
  return Math.sqrt(Math.abs(p1.x - p2.x)**2 + Math.abs(p1.y - p2.y)**2)
}

const midpoint = ({'x' : x1,'y': y1}, {'x': x2,'y': y2}) => {
  let o = {'x' : 0, 'y' : 0}
   o.x = ((x2 + x1) / 2)
   o.y = ((y2 + y1) / 2)
   return o
}

const sumSalaries = ([{'salary': x},{'salary' : y}]) => {
  return x + y
}