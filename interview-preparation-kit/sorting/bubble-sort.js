function swap(a, i1, i2) {
  a[i1] = a[i1] ^ a[i2];
  a[i2] = a[i1] ^ a[i2];
  a[i1] = a[i1] ^ a[i2];
  return a;
}

function bubbleSort(a) {
  let swaps = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        a = swap(a, j, j + 1);
        swaps++;
      }
    }
  }
  return [swaps, a[0], a[a.length - 1]];
}

function countSwaps(a) {
  const [swaps, first, last] = bubbleSort(a);
  console.log(`Array is sorted in ${swaps} swaps.\nFirst Element: ${first}\nLast Element: ${last}`);
}

console.log(swap([6, 4, 1], 0, 1));
