/** 
 Write a function that takes in a non-empty array of distinct integers and an integer representing a target
 sum. If any two numbers in the input array sum up to the target sum, the function should return in an array
 in any order. If no two numbers sum up to the target sum, the function shoutl return an empty array.

 Note that the target sum has to be obtained by summing two different integers in the array: you ccan't add a 
 single integer to itself in order to obtain the target sum.

 You can assume that therw will be at most one pair of numbers summing up to the target sumn.

 SAMPLE INPUT
 array = [3, 5, -4, 8, 11, 1, -1, 6]
 targetSum = 10

 SAMPLE OUTPUT
 [-1, 11] // the numbers could be in reverse order
*/ 

// *******************************************************************************************
// SOLUTION 1
// O(n) time complexity | O(n) space
function twoNumberSum(array, targetSum) {
  let sum_obj = {}
  let sumPair = [];
  for (let i = 0; i < array.length; i++){
    console.log({ i })
    const diff = targetSum - array[i]
    if(diff in sum_obj){
      return [array[i], diff]
    }
    else {
      sum_obj[array[i]] = true
    }
  }
  return sumPair
}

// SOLUTION 2
// O(n log(n))
function twoNumberSum2(array, targetSum) {
  // sort the array by ascending order
  array.sort((a, b) => a - b);
  // set the leftmost and rightmost indexes as the two extremes
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]]
    } else if (currentSum > targetSum) {
      right--;
    } else if (currentSum < targetSum) {
      left++;
    }
  }
  return []
}

console.log(twoNumberSum([3, 5, 8, 11, 1, 4, -1], 9))