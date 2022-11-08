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

const midpoint = (p1, p2) => {
  let o = {'x' : 0, 'y' : 0}
   o.x = ((p2.x + p1.x) / 2)
   o.y = ((p2.y + p1.y) / 2)
   return o
}

const sumSalaries = (a) => {
  let count = 0
  for (let i = 0; i < a.length; i++){
    count = count + a[i].salary
  }
  return count
}

const newHighScore = (score, a)