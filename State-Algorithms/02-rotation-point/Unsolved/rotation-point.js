// Write a function that takes in an array of sorted strings and returns the index of its rotation point if it has one, else return -1

const rotationPoint = function (words) {
    let left = 0;
    let right = words.length;

    while (left <= right) {
        let center = Math.floor((right + left) / 2);

        if (words[center] < words[center - 1]) {
            return center;
        }
    }
};
