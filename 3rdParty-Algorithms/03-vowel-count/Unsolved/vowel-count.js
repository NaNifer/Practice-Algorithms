// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    const regex = /[aeiou]/gi;
    if (str.length === 0)
        return 0;
    const found = str.match(regex);
    return found.length;
};

