import math

def sortedSquaredArray(array):
  squaredArray = list()
  for index in range(len(array)):
    squaredArray.append(array[index] * array[index])
  squaredArray.sort()
  return squaredArray 

# print(sortedSquaredArray([-10, -9, 1,2,3,5,6,8,9]))

def sortedSquaredArray2(array):
  squaredArray = list(range(len(array)))
  startPointer = 0
  endPointer = len(array) - 1
  for i in range(len(array) -1, -1, -1):
    startSquared = math.pow(abs(array[startPointer]), 2)
    endSquared = math.pow(abs(array[endPointer]), 2)
    if startSquared > endSquared:
      squaredArray[i] = int(startSquared)
      startPointer +=1
    else:
      squaredArray[i] = int(endSquared)
      endPointer -= 1
  return squaredArray

print(sortedSquaredArray2([-10, -9, 1,2,3,5,6,8,9]))