// Write a function that takes in a 2D array of meeting times, where each sub array contains 2 integers representing a meeting start and end time. Return a new 2D array such that overlapping meeting blocks are condensed into combined meeting blocks

const mergeMeetingTimes = function(arr) {
  let arrCopy = JSON.parse(JSON.stringify(arr));
  let sortedArr = arrCopy.sort((a, b) => a[0] - b[0]);

  let result = [sortedArr[0]];

  for (let i = 1; i < sortedArr.length; i++) {
    let lastMeeting = result[result.length - 1];
    let currentMeeting = sortedArr[i];

    if (lastMeeting[1] >= currentMeeting[0]) {
      
      if (lastMeeting[1] < currentMeeting[1]) {
        lastMeeting[1] = currentMeeting[1];
      }
    } else {
      result.push(currentMeeting);
    }
  }

  return result;
};