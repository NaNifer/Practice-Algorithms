// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
    let total = 0;
    for (const i in arr) {
        total += arr[i];
    }
    return total
};
