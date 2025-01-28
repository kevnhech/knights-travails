function knightMoves(start, end) {}

function possibleMoves(pos) {
  let array = [];
  if (pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8) {
    if (pos[0] + 1 < 8 && pos[1] + 2 < 8) {
      array.push([pos[0] + 1, pos[1] + 2]);
    }
    if (pos[0] + 2 < 8 && pos[1] + 1 < 8) {
      array.push([pos[0] + 2, pos[1] + 1]);
    }
    if (pos[0] + 2 < 8 && pos[1] - 1 >= 0) {
      array.push([pos[0] + 2, pos[1] - 1]);
    }
    if (pos[0] + 1 < 8 && pos[1] - 2 >= 0) {
      array.push([pos[0] + 1, pos[1] - 2]);
    }
    if (pos[0] - 1 >= 0 && pos[1] - 2 >= 0) {
      array.push([pos[0] - 1, pos[1] - 2]);
    }
    if (pos[0] - 2 >= 0 && pos[1] - 1 >= 0) {
      array.push([pos[0] - 2, pos[1] - 1]);
    }
    if (pos[0] - 2 >= 0 && pos[1] + 1 < 8) {
      array.push([pos[0] - 2, pos[1] + 1]);
    }
    if (pos[0] - 1 >= 0 && pos[1] + 2 < 8) {
      array.push([pos[0] - 1, pos[1] + 2]);
    }
  } else {
    throw new Error(">Please enter a valid starting point.");
  }

  console.log(`You have ${array.length} possible moves!`)
  return array;
}

console.log(possibleMoves([3, 3]));
