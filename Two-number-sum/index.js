// SOLUTION 1
// O(n) time complexity | O(n) space
function twoNumberSum(array, targetSum) {
  let sum_obj = {}
  let sumPair = [];
  for (let i = 0; i < array.length; i++){
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