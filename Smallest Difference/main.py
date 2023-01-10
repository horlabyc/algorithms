def smallestDifference(arrayOne, arrayTwo):
  arrayOne.sort()
  arrayTwo.sort()

  pointer1 = 0
  pointer2 = 0

  smallestDiff = float("inf")
  current = float("inf")
  pair = []

  while pointer1 < len(arrayOne) and pointer2 < len(arrayTwo):
    elem1 = arrayOne[pointer1]
    elem2 = arrayTwo[pointer2]
    if elem1 == elem2:
      return [elem1, elem2]
    current = abs(elem1 - elem2)
    if elem1 < elem2:
      pointer1 += 1
    else:
      pointer2 += 1
    if smallestDiff > current:
      smallestDiff = current
      pair = [elem1, elem2]
  return pair

array1 = [-1,5,10,20,28,3]
array2 = [26,134,135,15,17]
print(smallestDifference(array1, array2))