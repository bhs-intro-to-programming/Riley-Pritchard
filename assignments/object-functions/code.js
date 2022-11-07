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

const distance = ({'x' : x1,'y': y1}, {'x': x2,'y': y2}) => {
  return Math.sqrt(Math.abs(x1 - x2)**2 + Math.abs(y1 - y2)**2)
}

const midpoint = ({'x' : x1,'y': y1}, {'x': x2,'y': y2}) => {
  let o = {'x' : 0, 'y' : 0}
   o.x = ((Math.abs(x2 - x1)) / 2)
   o.y = ((Math.abs(y2 - y1)) / 2)
   return o
}

const sumSalaries = ([]) => {
  return []
}