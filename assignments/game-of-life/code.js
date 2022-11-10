const drawTheThings = () => {
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){
      drawFilledRect(i, j, 1, 1, 'green')
    }
  }
}
drawTheThings()