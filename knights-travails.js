#!/usr/bin/env node

function knightMoves(start, target) {
  let step = 0;
  const queue = [{ location: start, step }];
  const visited = [{ location: start, step }];
  const indexArray = [1, 2, 2, 1, -1, -2, -2, -1];
  const indexArrayTwo = [2, 1, -1, -2, -2, -1, 1, 2];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].location[0] === target[0] && queue[i].location[1] === target[1]) {
        const paths = [target];

        for (let i = step - 1; i > 0; i--) {
          for (let j = 0; j < indexArray.length; j++) {
            const square = [paths[0] + indexArray[j], paths[0] + indexArrayTwo[j]];

            for (let k = 0; k < visited.length; k++) {
              const visitedSquare = visited[k].location;
              const visitedStep = visited[k].step;
            
              if (visitedStep === i && square[0] === visitedSquare[0] && square[1] === visitedSquare[1]) {
                paths.unshift(square);
                break;
              }
            }
          }
        }

        paths.unshift(start);
        console.log(`=> You made it in ${step} moves! Here's your path:`);

        for (const location of paths) {
          console.log(location);
        }

        return;
      }
    }

    const length = queue.length;
    step += 1;
    
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < indexArray.length; j++) {
        const current = queue[i].location;
        const square = [current[0] + indexArray[j], current[1] + indexArrayTwo[j]];
        let alreadyVisited;
        
        for (let k = 0; k < visited.length; k++) {
          const visitedSquare = visited[k].location;

          if (square[0] === visitedSquare[0] && square[1] === visitedSquare[1]) {
            alreadyVisited = true;
          }
        }

        if (!alreadyVisited && square[0] >= 0 && square[0] <= 7 && square[1] >= 0 && square[1] <= 7) {
          queue.push({ location: square, step });
          visited.push({ location: square, step });
        }
      }
    }
    
    for (let i = 0; i < length; i++) {
      queue.shift();
    }
  }
}

knightMoves([3, 3], [4, 3]);
