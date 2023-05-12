const maxSumArray = function(numbers) {

  // One integer, return sum

  if (numbers.length === 1) {
    return numbers[0];
    
    // Two integers or positive integer, return sum
  }
  if (numbers.length === 2 || numbers.every((x) => x >= 0)) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  
};