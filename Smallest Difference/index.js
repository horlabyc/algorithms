function smallestDifference(arrayOne, arrayTwo) {
  arrayOne = arrayOne.sort((a,b) => a - b)
  arrayTwo = arrayTwo.sort((a,b) => a - b)
  
  let pointer1 = 0
  let pointer2 = 0
  
  smallestDiff = Infinity
  current = Infinity
  pair = []
  
  while (pointer1 < arrayOne.length && pointer2 < arrayTwo.length) {
  	const elem1 = arrayOne[pointer1]
    const elem2 = arrayTwo[pointer2]
  	if(elem1 === elem2){
    	return [elem1, elem2]
    }
  	current = Math.abs(elem1 - elem2)
    if(elem1 < elem2){
    	pointer1 += 1
    } else {
    	pointer2 += 1
    }
    if (smallestDiff > current) {
    	smallestDiff = current
      pair = [elem1, elem2]
    }
  }
  return pair
}

array1 = [-1,5,10,20,28,3]
array2 = [26,134,135,15,17]

console.log(smallestDifference(array1, array2))