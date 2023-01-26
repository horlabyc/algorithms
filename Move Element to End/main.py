def moveElementToEnd(array, toMove):
  startPointer = 0
  endPointer = len(array) - 1

  while startPointer < endPointer:
    while startPointer < endPointer & array[endPointer] == toMove:
      endPointer -= 1
    if array[startPointer] == toMove:
      array[startPointer], array[endPointer] = array[endPointer], array[startPointer]
    startPointer += 1
  
  return array

print(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))