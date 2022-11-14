// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
    const regex = /[aeiou]/g;
    const found = str.match(regex);
    return found.length;

};

