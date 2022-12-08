const yesIfEven = (x) => {
  if (x % 2 === 0){
    return 'yes'
  }else{
    return 'no'
  }
}

const countXs = (s) => {
  let count = 0
  for (let i = 0; i < s.length; i++){
    if (s[i] === 'x'){
      count = count + 1
    }
  }
  return count
}

const timesTable = (x) => {
  for (let i = 0; i < x + 1; i++){
    for (let j = 0; j < x + 1; j++){
      emit(i, j, i * j)
    }
  }
}