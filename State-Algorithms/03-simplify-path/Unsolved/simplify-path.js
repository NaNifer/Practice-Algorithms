// Write a function that takes in an absolute file path and simplifies it

const simplifyPath = function (path) {
  let pathArr = path.split("/");
  let finalPath = [];

  for (let i = 0; i < pathArr.length; i++) {
    let segment = pathArr[i];

    if (!segment) {
      continue;
    }
    if (segment === ".") {
      continue;
    }
    if (segment === "..") {
      finalPath.pop();
      continue;
    }

    finalPath.push(segment);
  }

  return "/" + finalPath.join("/");
};