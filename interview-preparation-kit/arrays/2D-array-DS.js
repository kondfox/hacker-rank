function hourglassSum(arr) {
  let max = calculateOneHourglass(getSubMatrix(arr, 0, 0));
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      max = Math.max(max, calculateOneHourglass(getSubMatrix(arr, i, j)));
    }
  }
  return max;
}

function getSubMatrix(arr, i, j) {
  let matrix = [];
  for (let k = 0; k < 3; k++) {
    let row = [];
    for (let l = 0; l < 3; l++) {
      row.push(arr[i + k][j + l]);
    }
    matrix.push(row);
  }
  return matrix;
}

function calculateOneHourglass(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i != 1 || i === j) {
        sum += arr[i][j];
      }
    }
  }
  return sum;
}

let a = [
  [-9,-9,-9,1,1,1],
  [0,-9,0,4,3,2],
  [-9,-9,-9,1,2,3],
  [0,0,8,6,6,0],
  [0,0,0,-2,0,0],
  [0,0,1,2,4,0]
];

console.log(hourglassSum(a));
