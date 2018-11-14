function minimumSwaps(arr) {
  let minSwaps = 0;

  for (let i = 0; i < arr.length; ) {
    let goodValue = i + 1;
    if (arr[i] === goodValue) {
      i++;
      continue;
    }
    arr = swap(arr, i);
    minSwaps++;
  }

  return minSwaps;
}

function swap(arr, i) {
  const a = arr[i];
  arr[i] = arr[a - 1];
  arr[a - 1] = a;
  return arr;
}

console.log(minimumSwaps([2,3,4,1,5]));
// console.log(swap([5, 2, 3, 4, 1], 0));

