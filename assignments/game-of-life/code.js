const drawTheThings = () => {
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      if (Math.rand() < .5){
      drawFilledRect(i, j, 4, 4, 'yellow')
      }
    }
  }
}
drawTheThings()
drawFilledRect(0,0,100,100,'yellow')