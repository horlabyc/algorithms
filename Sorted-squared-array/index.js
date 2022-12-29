// Solution1
function sortedSquaredArray(array) {
  let squaredArray = []
  for(let i=0; i<array.length; i++){
  	squaredArray.push(array[i] * array[i])
  }
  return squaredArray.sort((a,b) => a -b);
}

console.log(sortedSquaredArray([-10, -9, 1,2,3,5,6,8,9]))

// Solution2
function sortedSquaredArray2(array) {
  let squaredArray = new Array(array.length).fill(0)
  let startPointer = 0
  let endPointer = array.length - 1
  for(let i = array.length - 1; i>=0; i--){
    const startSquared = Math.abs(array[startPointer]) **2
    const endSquared = Math.abs(array[endPointer]) ** 2
    if(startSquared > endSquared){
      squaredArray[i] = startSquared
      startPointer++
    } else {
      squaredArray[i] = endSquared
      endPointer--
    }
  }
  return squaredArray;
}

console.log(sortedSquaredArray2([-10, -9, 1,2,3,5,6,8,9]))