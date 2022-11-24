// Write code to create a function that returns the factorial of `num`
var factorial = function(num) {
    let arr = [];
    let factor = 1;
    for (i=1; i< num; num--) {
        arr.unshift(num);
        factor *= num;
    };
    return factor;
}
factorial(10);
