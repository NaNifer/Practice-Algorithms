// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function (str) {
//     let length = str.length-1
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let letter = str.slice(length, length+1);
//         console.log(letter, i, length);
//         length--;
//         result = result.concat(letter);
//     }
//     return (result === str);
// };


var isPalindrome = function (str) {
    return (str === str.split(" ").reverse().toString())
};

