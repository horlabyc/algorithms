/** 
Given two non-empty arrays of integers, write a function that determines whether the second array is a 
subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that asre in 
the same order as thet appear in teh array. For instance, the numebrs [1,3,4] form a subsequence of
the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array
itself are both valid subsequences of the array.

SAMPLE INPUT

array = [5,1,22,25,6,-1,8,10]
sequence = [1,6,-1,10]

SAMPLE OUTPUT
true
*/
function isValidSubsequence(array, sequence) {
  let arrayIndex = 0
  let sequenceIndex = 0
  while(arrayIndex < array.length){
    if(array[arrayIndex] === sequence[sequenceIndex]){
      sequenceIndex++
    }
    arrayIndex++
  }
  return sequenceIndex === sequence.length
}

//Second solution
function isValidSubsequence2(array, sequence) {
  for (let i = array.length - 1; i >= 0; i--){
    // if the last item in the sequence array matches the current iterating item in array, 
    // pop the item from the sequence array 
    if (array[i] === sequence[sequence.length -1]) {
      sequence.pop()
    }
  }
  return !sequence.length
}

console.log(isValidSubsequence([1, 22, 25, 6, -1, 8, 5, 10], [1, 6, -1, 5]))