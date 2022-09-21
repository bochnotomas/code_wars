function count(string) {
  let counts = {};

  for (let l of string) {
    if (counts.hasOwnProperty(l)) {
      counts[l] = counts[l] + 1;
    } else {
      counts[l] = 1;
    }
  }
  return counts;
}

console.log(count('aba'));
