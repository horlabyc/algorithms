function moveElementToEnd(array, toMove) {
  let startPointer = 0;
  let endPointer = array.length - 1
  while(startPointer < endPointer) {
    while((startPointer < endPointer) && (array[endPointer] == toMove)) {
    	endPointer -= 1
    }
    if(array[startPointer] == toMove){
      let startNum = array[startPointer];
      let endNum = array[endPointer]
      array[startPointer] = endNum
      array[endPointer] = startNum
    }
    startPointer += 1
  }
  return array
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))