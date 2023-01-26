## MOVE ELEMENT TO END

You are given an array of integer and an integer. Write a function that moves all instances of that integer
in the array to the end of the array and returns the array.

The function should perform this in place(i.e should mutate the input array) and doesn't need to maintain the
order of the other integers.

Note that the absolute difference of two integers is the distance between them in the real number line. For
example, the absolute difference of -5 and 5 is 10, and the absolute difference of -5 and -4 is 1.

You can assume that there will only be one pair of numbers with the smallest difference

 ### Sample Input
```js
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove = 2
```

### Sample Output
```js
 [1, 3, 4, 2, 2, 2, 2] // the numbers 1, 3 and 4 could be ordered differently
```