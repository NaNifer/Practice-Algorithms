// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function (num) {
    while (num >= 1) {
        console.log(num);
        num--;
    }
    // Weird but works:
    // for (; num >= 1; num--) {
    //     console.log(num);
    // }
};
