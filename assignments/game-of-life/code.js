drawFilledRect(0, 0, width, height, 'black')

const drawTheThings = () => {
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      if (Math.random() < .2)
      drawFilledRect(j, i, 5, 5, 'yellow')
    }
  }
}
drawTheThings()
