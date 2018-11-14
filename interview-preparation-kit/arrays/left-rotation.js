function rotLeft(a, d) {
  let result = [];
  let index = d % a.length;
  for (let i = 0; i < a.length; i++) {
    result.push(a[(index + i) % a.length]);
  }
  return result;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));
