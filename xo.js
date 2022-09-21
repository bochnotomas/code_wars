function XO(str) {
  let counts = {};
  str
    .toLowerCase()
    .split('')
    .forEach((el) => {
      if (counts.hasOwnProperty(el)) {
        counts[el] = counts[el] + 1;
      } else {
        counts[el] = 1;
      }
    });
  if (counts['x'] === counts['o']) {
    return true;
  } else {
    return false;
  }
}

console.log(XO('xxoo'));
