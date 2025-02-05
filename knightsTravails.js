function knightMoves(start, end) {
  let visited = new Set();
  let queue = [{position: start, parent: null}];

  while (queue.length > 0) {
    let curr = queue.shift();
    let neighbors = possibleMoves(curr.position);
    visited.add(curr.position.toString());

    if (curr.position.toString() == end.toString()) {
      let path = [];
      while (curr != null) {
        path.push(curr.position);
        curr = curr.parent;
      }

      if (start < end) {
        return path.sort();
      } else {
        return path.sort((a, b) => (a > b ? -1 : 1));
      }
    }

    for (n of neighbors) {
      if (!visited.has(n.toString())) {
        queue.push({position: n, parent: {position: curr.position, parent: curr.parent}});
      }
    }
  }
}

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
  return array;
}

console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [7, 7]));
