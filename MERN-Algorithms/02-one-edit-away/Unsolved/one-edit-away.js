const oneEditAway = function (str1, str2) {
    // TODO: Write function that takes in two strings and returns true if one character away, otherwise false

    // If difference in string lengths is greater than 1 OR strings exactly equal, return false
    if (str1 === str2 || Math.abs(str1.length - str2.length) > 1) {
        return false;
    };
}