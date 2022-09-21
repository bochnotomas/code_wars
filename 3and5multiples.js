function solution(number) {
  if (number < 0) {
    return 0;
  }
  const multiples = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      multiples.push(i);
    }
  }

  if (multiples.length <= 0) {
    return 0;
  } else {
    return multiples.reduce((a, b) => a + b);
  }
}

console.log(solution(0));
