const maxSumArray = function (numbers) {

  // One integer, return sum

  if (numbers.length === 1) {
    return numbers[0];

    // Two integers or positive integer, return sum
  }
  if (numbers.length === 2 || numbers.every((x) => x >= 0)) {
    return numbers.reduce((a, b) => a + b, 0);
  }

  // Set the current max and max sum to the value of the first integer in array

  let currentMax = numbers[0];
  let maxSum = numbers[0];

  // Loop for maximum sum

  for (let x = 1; x < numbers.length; x++) {
    let numToTest = numbers[x];

    // Set currentMax to equal either the test number or sum of test number and currentMax

    currentMax = Math.max(numToTest, numToTest + currentMax)

    // Set maxSum to be the max of the currentMax or the current maxSum value

    maxSum = Math.max(maxSum, currentMax);
  }
  return maxSum;
};