// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

const productOfLargestTwo = (arr) => {
  const sortedArr = arr.sort(compareNumbers);
  function compareNumbers(a, b) {
    return a - b;
  }
  return sortedArr[arr.length - 1] * sortedArr[arr.length - 2];
}

