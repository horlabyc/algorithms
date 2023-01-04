function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a-b)
  let targetArray = []
  
  for(let i=0; i<array.length; i++){
  	let rightPointer = array.length - 1;
    let leftPointer = i + 1;
  	while(leftPointer < rightPointer){
      if(array[i] + array[rightPointer] + array[leftPointer] === targetSum){
        targetArray.push([array[i], array[leftPointer], array[rightPointer]])
        leftPointer++
      } else if(array[i] + array[rightPointer] + array[leftPointer] > targetSum){
        rightPointer--
      } else if(array[i] + array[rightPointer] + array[leftPointer] < targetSum){
        leftPointer++
      }
    }
  }
  return targetArray
}