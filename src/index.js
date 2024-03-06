import './style.css';

const array = [
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
];

const combinations = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1, -2],
];

for (let x = 0; x < 8; x += 1) {
  for (let y = 0; y < 8; y += 1) {
    combinations.forEach(combination => {
      const newX = x + combination[0];
      const newY = y + combination[1];

      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        array[x][y].push([newX, newY]);
      }
    });
  }
}

const searchFastest = function getPath(start, end, queue = [], moves = [[start[0], start[1]]]) {
  let finalMove = false;
  array[start[0]][start[1]].forEach(move => {
    if (move[0] === end[0] && move[1] === end[1]) {
      finalMove = true;
      moves.push(move);
    }
    if (move[0] === start[0] && move[1] === start[1]) {
      console.log('Skip this move');
    } else {
      const historyMoves = [...moves, move];
      queue.push([historyMoves, move]);
    }
  });
  if (finalMove === true) {
    return moves;
  }
  const [historyMoves, nextMove] = queue.shift();
  return searchFastest(nextMove, end, queue, historyMoves);
};

console.log(searchFastest([0, 0], [7, 7]));
