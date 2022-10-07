// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

//1 
const itemsLeftOver = (items, people) => {
  return items % people;
}

//2
const areaOfCircle = (r) => {
  return Math.PI * r**2;
}

//3
const volumeOfCube = (l) => {
  return l**3;
}

//4
const populationGrowth = (population, growth) => {
  return population * (growth + 1)
}

//5
const earnedRunAverage = (eruns, innings) => {
  return eruns / innings * 9
}

//6
const valueOfJewels = (diamonds, emeralds, dvaluegold, evaluegold) => {
  return (diamonds * dvaluegold) + (emeralds * evaluegold)
}

//7
const firstClassPostage = (weight) => {
  return 
}