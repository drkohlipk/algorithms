// Create a spiral array of size n x n given n
// Constraints: Will be n x n and spiral must move clockwise
// Given 4, return n x n array of the following:
// [[ 1,  2,  3,  4],
//  [12, 13, 14,  5],
//  [11, 16, 15,  6],
//  [10,  9,  8,  7]]
// Have 2 pointers: anchorIdx and runnerIdx
// Have variable for current count: currCount
// Have variable for current high and current low
// Have variabe for incrementing: incrementer

const spiral = (n) => {
	const SIDES_IN_FULL_ROTATION = 4;
  const topVal = Math.pow(n, 2);
  const retArr = [];
  
  for (let i = 0; i < n; i++) { // O(n^2)
		retArr.push([]);
	
    for (let j = 0; j < n; j++) {
      retArr[i].push(undefined);
    }
  }
  
  let anchorIdx = 0;
  
  let currCount = 0;
  let currEnd = n - 1;
	let currBeg = 0;
	let sides = 0;
  
  let incrementer = 1;
  let isSwap = false;
  
  while (currCount < topVal) { // O(n^2)
		let runnerIdx;

		if (currBeg === currEnd) {
			retArr[currBeg][currBeg] = ++currCount;

			break;
		}
    
    for (runnerIdx = currBeg; runnerIdx !== currEnd; runnerIdx += incrementer) {
      retArr[isSwap ? runnerIdx : anchorIdx][isSwap ? anchorIdx : runnerIdx] = ++currCount;
		}

		sides++;

    if (anchorIdx === currEnd) {
      incrementer *= -1;
      
      let swapVal = currBeg;
      currBeg = currEnd;
      currEnd = swapVal;
    }
	
		if (sides === SIDES_IN_FULL_ROTATION) {
			currBeg++;
			currEnd--;
			runnerIdx = currBeg;
			sides = 0;
		}
    
    isSwap = !isSwap;
		anchorIdx = runnerIdx;
  }
  
  return retArr;
};
