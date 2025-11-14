#!/usr/bin/env node

function knightMoves(start, target) {
  let step = 0;
  const queue = [{ square: start, step }];
  const visited = [{ square: start, step }];
  const indexArray = [[1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2]];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].square[0] === target[0] && queue[i].square[1] === target[1]) {
        const paths = [target];

        for (let j = step - 1; j > 0; j--) {
          for (let k = 0; k < indexArray.length; k++) {
            const square = [paths[0][0] + indexArray[k][0], paths[0][1] + indexArray[k][1]];
            
            for (let l = 0; l < visited.length; l++) {
              const visitedSquare = visited[l].square;
              const visitedStep = visited[l].step;
            
              if (visitedStep === j && square[0] === visitedSquare[0] && square[1] === visitedSquare[1]) {
                paths.unshift(square);
                break;
              }
            }
          }
        }

        paths.unshift(start);
        console.log(`=> You made it in ${step} moves! Here's your path:`);
        
        for (const square of paths) {
          console.log(square);
        }

        return;
      }
    }

    step += 1;
    
    while (step - 1 === queue[0].step) {
      const current = queue[0].square;
      queue.shift();

      for (let i = 0; i < indexArray.length; i++) {
        const square = [current[0] + indexArray[i][0], current[1] + indexArray[i][1]];
        let alreadyVisited;
        
        for (let j = 0; j < visited.length; j++) {
          const visitedSquare = visited[j].square;

          if (square[0] === visitedSquare[0] && square[1] === visitedSquare[1]) {
            alreadyVisited = true;
          }
        }

        if (!alreadyVisited && square[0] >= 0 && square[0] <= 7 && square[1] >= 0 && square[1] <= 7) {
          queue.push({ square, step });
          visited.push({ square, step });
        }
      }
    }
  }
}

knightMoves([3, 3], [4, 3]);
