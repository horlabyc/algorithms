def twoNumberSum(array, targetSum):
  sum_obj = dict()
  sum_pair = list()
  for i in range(0, len(array) -1):
    diff = targetSum - array[i]
    if diff in sum_obj:
      return [array[i], diff]
    else:
      sum_obj[array[i]] = True
  return sum_pair

print(twoNumberSum([3, 5, 8, 11, 1, 4, -1], 9))

def twoNumberSum2(array, targetSum): 
  array.sort()
  leftPointer = 0
  rightPointer = len(array) - 1
  while leftPointer < rightPointer:
    current_sum = array[leftPointer] + array[rightPointer]
    if current_sum == targetSum:
      return [array[leftPointer], array[rightPointer]]
    elif current_sum > targetSum:
      rightPointer -= 1
    elif current_sum < targetSum:
      leftPointer += 1
  return []

print(twoNumberSum2([3, 5, 8, 11, 1, 4, -1], 9))