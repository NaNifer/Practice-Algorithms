// Write code to create a function that returns the factorial of `num`
var factorial = function(num) {
    arr = [];
    for (i=0; i< num; num--) {
        arr.unshift(num);
    };
    return arr
}
factorial(10);
