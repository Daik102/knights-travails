#!/usr/bin/env node

function knightMoves(start, target) {
  let step = 0;
  let queue = [{ location: start, step }];
  const visited = [{ location: start, step }];
  
  const addLocation = (length) => {
    step += 1;

    for (let i = 0; i < length; i++) {
      const current = queue[i].location;

      const moveA = [current[0] + 1, current[1] + 2];
      const moveB = [current[0] + 2, current[1] + 1];
      const moveC = [current[0] + 2, current[1] - 1];
      const moveD = [current[0] + 1, current[1] - 2];
      const moveE = [current[0] - 1, current[1] - 2];
      const moveF = [current[0] - 2, current[1] - 1];
      const moveG = [current[0] - 2, current[1] + 1];
      const moveH = [current[0] - 1, current[1] + 2];

      let alreadyVisitedA;
      let alreadyVisitedB;
      let alreadyVisitedC;
      let alreadyVisitedD;
      let alreadyVisitedE;
      let alreadyVisitedF;
      let alreadyVisitedG;
      let alreadyVisitedH;

      for (let j = 0; j < visited.length; j++) {
        const visitedSquare = visited[j].location;

        if (moveA[0] === visitedSquare[0] && moveA[1] === visitedSquare[1]) {
          alreadyVisitedA = true;
        }

        if (moveB[0] === visitedSquare[0] && moveB[1] === visitedSquare[1]) {
          alreadyVisitedB = true;
        }

        if (moveC[0] === visitedSquare[0] && moveC[1] === visitedSquare[1]) {
          alreadyVisitedC = true;
        }

        if (moveD[0] === visitedSquare[0] && moveD[1] === visitedSquare[1]) {
          alreadyVisitedD = true;
        }

        if (moveE[0] === visitedSquare[0] && moveE[1] === visitedSquare[1]) {
          alreadyVisitedE = true;
        }

        if (moveF[0] === visitedSquare[0] && moveF[1] === visitedSquare[1]) {
          alreadyVisitedF = true;
        }

        if (moveG[0] === visitedSquare[0] && moveG[1] === visitedSquare[1]) {
          alreadyVisitedG = true;
        }

        if (moveH[0] === visitedSquare[0] && moveH[1] === visitedSquare[1]) {
          alreadyVisitedH = true;
        }
      }

      if (!alreadyVisitedA && moveA[0] <= 7 && moveA[1] <= 7) {
        queue.push({ location: moveA, step });
        visited.push({ location: moveA, step });
      }
      
      if (!alreadyVisitedB && moveB[0] <= 7 && moveB[1] <= 7) {
        queue.push({ location: moveB, step });
        visited.push({ location: moveB, step });
      }

      if (!alreadyVisitedC && moveC[0] <= 7 && moveC[1] >= 0) {
        queue.push({ location: moveC, step });
        visited.push({ location: moveC, step });
      }

      if (!alreadyVisitedD && moveD[0] <= 7 && moveD[1] >= 0) {
        queue.push({ location: moveD, step });
        visited.push({ location: moveD, step });
      }

      if (!alreadyVisitedE && moveE[0] >= 0 && moveE[1] >= 0) {
        queue.push({ location: moveE, step });
        visited.push({ location: moveE, step });
      }

      if (!alreadyVisitedF && moveF[0] >= 0 && moveF[1] >= 0) {
        queue.push({ location: moveF, step });
        visited.push({ location: moveF, step });
      }

      if (!alreadyVisitedG && moveG[0] >= 0 && moveG[1] <= 7) {
        queue.push({ location: moveG, step });
        visited.push({ location: moveG, step });
      }

      if (!alreadyVisitedH && moveH[0] >= 0 && moveH[1] <= 7) {
        queue.push({ location: moveH, step });
        visited.push({ location: moveH, step });
      }
    }
  };

  const trackPaths = (target, start, step, visited) => {
    const paths = [target];

    for (let i = step - 1; i > 0; i--) {
      const current = paths[0];

      const moveA = [current[0] + 1, current[1] + 2];
      const moveB = [current[0] + 2, current[1] + 1];
      const moveC = [current[0] + 2, current[1] - 1];
      const moveD = [current[0] + 1, current[1] - 2];
      const moveE = [current[0] - 1, current[1] - 2];
      const moveF = [current[0] - 2, current[1] - 1];
      const moveG = [current[0] - 2, current[1] + 1];
      const moveH = [current[0] - 1, current[1] + 2];

      for (let j = 0; j < visited.length; j++) {
        const visitedSquare = visited[j].location;
        const visitedStep = visited[j].step;
        
        if (visitedStep === i) {
          if (moveA[0] === visitedSquare[0] && moveA[1] === visitedSquare[1]) {
            paths.unshift(moveA);
            break;
          } else if (moveB[0] === visitedSquare[0] && moveB[1] === visitedSquare[1]) {
            paths.unshift(moveB);
            break;
          } else if (moveC[0] === visitedSquare[0] && moveC[1] === visitedSquare[1]) {
            paths.unshift(moveC);
            break;
          } else if (moveD[0] === visitedSquare[0] && moveD[1] === visitedSquare[1]) {
            paths.unshift(moveD);
            break;
          } else if (moveE[0] === visitedSquare[0] && moveE[1] === visitedSquare[1]) {
            paths.unshift(moveE);
            break;
          } else if (moveF[0] === visitedSquare[0] && moveF[1] === visitedSquare[1]) {
            paths.unshift(moveF);
            break;
          } else if (moveG[0] === visitedSquare[0] && moveG[1] === visitedSquare[1]) {
            paths.unshift(moveG);
            break;
          } else if (moveH[0] === visitedSquare[0] && moveH[1] === visitedSquare[1]) {
            paths.unshift(moveH);
            break;
          }
        }
      }
    }

    paths.unshift(start);
    return paths;
  };

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i].location[0] === target[0] && queue[i].location[1] === target[1]) {
        const paths = trackPaths(target, start, step, visited);
        console.log(`=> You made it in ${step} moves! Here's your path:`);

        for (const location of paths) {
          console.log(location);
        }

        return;
      }
    }

    const length = queue.length;
    addLocation(length);
    
    for (let i = 0; i < length; i++) {
      queue.shift();
    }
  }
}

knightMoves([3, 3], [4, 3]);
