const drawTheThings = () => {
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      drawFilledRect(i, j, 4, 4, 'yellow')
    }
  }
}
//drawTheThings()

drawFilledRect(0,0,100,100,'yellow')