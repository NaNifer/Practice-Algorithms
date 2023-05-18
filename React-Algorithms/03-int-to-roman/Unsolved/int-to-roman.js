// Write a function that takes in an integer and returns it as a Roman numeral string

const intToRoman = function(num) {
    let result = "";
    
    while (num > 0) {
      if (num >= 1000) {
        result += "M";
        num -= 1000;
      } else if (num >= 900) {
        result += "CM";
        num -= 900;
      }
    }
  
    return result;
  };