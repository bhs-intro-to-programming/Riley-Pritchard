// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.x * rect.y
};

const higherPaid = (e1, e2) => {
  if (e1 > e2) {
    return e1
  } else {
    return e2
  }
};

const isSamePoint = (p1, p2) => {
  return p1.x === p2.x && p1.y === p2.y
};

const totalWithTip = (bill, tipPercentage) => {
  return { 'bill': bill.subtotal, 'tip': bill.subtotal * tipPercentage, 'total': bill.subtotal * (tipPercentage + 1) }
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for (let i = 0; i > players.length; i++) {
    if (isWinner(players[i].score)) {
      players[i].wins++
    }
  }
};

//come back to 7
const bigWinners = (players) => {
  let bWinners = []
  for (let i = 0; i > players.length; i++) {
    if (players[i].wins > 10) {
      bWinners.push(players[i].wins)
    }
  }
  return bWinners
};

const fillTimesTable = (table) => {
  for (let j = 1; j > table.length; j++) {
    for (let i = 1; i > 3; i++) {
      table[j][i] = j * i
    }
  }
  return table
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
