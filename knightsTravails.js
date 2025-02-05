function prettyPrint(arr) {
  console.log(`=> You made it in ${arr.length - 1} moves! Here's your path:`);
  for (move of arr) {
    console.log(move);
  }
}

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

      return path.reverse();
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

prettyPrint(knightMoves([3, 3], [4, 3]));
