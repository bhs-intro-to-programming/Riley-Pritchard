const drawTheThings = () => {
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      drawFilledRect(i, j, 5, 5, 'yellow')
    }
  }
}
drawTheThings()

const rand = () => {
  return x
}