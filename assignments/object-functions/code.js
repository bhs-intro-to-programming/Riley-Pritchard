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

const distance = (x, y) => {
  let o = {'x' : x, 'y' : y}
  return Math.sqrt(x+y)**2
}