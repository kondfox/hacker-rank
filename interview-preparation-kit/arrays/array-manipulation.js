function findMax(arr) {
  let max = 0;
  let sum = 0;
  for (let num of arr) {
    sum += num;
    max = Math.max(max, sum);
  }
  return max;
}

function arrayManipulation(n, queries) {
  let arr = new Array(n).fill(0);
  
  for (let op of queries) {
    arr[op[0] - 1] += op[2];
    if (op[1] < arr.length) arr[op[1]] -= op[2];
  }
  return findMax(arr);
}

let q = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
];

console.log(arrayManipulation(5, q));

