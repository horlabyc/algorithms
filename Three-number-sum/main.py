def threeNumberSum(array, targetSum):
  array.sort()
  targetArray = []

  for i in range(len(array)):
    rightPointer = len(array) - 1
    leftPointer = i + 1
    while(leftPointer < rightPointer):
      if array[i] + array[rightPointer] + array[leftPointer] == targetSum:
        targetArray.append([array[i], array[leftPointer], array[rightPointer]])
        leftPointer += 1
      elif array[i] + array[rightPointer] + array[leftPointer] > targetSum:
        rightPointer -= 1
      elif array[i] + array[rightPointer] + array[leftPointer] < targetSum:
        leftPointer += 1
  return targetArray

print(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))