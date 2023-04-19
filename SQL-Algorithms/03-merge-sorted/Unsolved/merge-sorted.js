// Write code to merge two sorted arrays into a new sorted array

const mergeSorted = function (arr1, arr2) {
  let result = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    let num1 = arr1[idx1];
    let num2 = arr2[idx2];

    if (num1 < num2) {
      result.push(num1);
      idx1++;
    } else {
      result.push(num2);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    let num1 = arr1[idx1];
    result.push(num1);
    idx1++;
  }

  while (idx2 < arr2.length) {
    let num2 = arr2[idx2];
    result.push(num2);
    idx2++;
  }

  return result;
};
