// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.x * rect.y
};

const higherPaid = (e1, e2) => {
  if(e1 > e2){
    return e1
  }else{
    return e2
  }
};

const isSamePoint = (p1, p2) => {
  return p1.x === p2.x && p1.y === p2.y
};

const totalWithTip = (bill, tipPercentage) => {
  return {'bill': bill, 'tip' : bill * tipPercentage, 'total' : bill * (tipPercentage + 1)}
};

const isWinner = (player) => {
};

const updateWins = (players) => {
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
