// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

let str = "hello"

var characterCount = function (str) {
    let charMap = new Map();
    const count = 0;
    for (const key of str) {
        charMap.set(key, count);
    }
    for (const key of str) {
        let count = charMap.get(key);
        charMap.set(key, count + 1);
      }
      for (const [key,value] of charMap) {
        console.log(key,value);
      }

};

