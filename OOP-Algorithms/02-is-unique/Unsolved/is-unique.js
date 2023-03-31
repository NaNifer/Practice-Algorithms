// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {
    const arrMap = {};

    for (var i = 0; i <= arr.length; i++) {
        const currentNum = arr[i];

        return arr.includes(currentNum);

        if (arrMap[currentNum] === true) {
            return false
        }
    }
    return true
};

