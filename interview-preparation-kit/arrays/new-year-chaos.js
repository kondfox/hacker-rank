function minimumBribes(q) {
  let minimumBribes = 0;

  for (let i = q.length - 1; i >= 0;) {
    // console.log(q);
    let normalPosition = i + 1;
    if (q[i] === normalPosition) {
      i--;
      continue;
    }
    if (q[i - 1] === normalPosition) {
      q = unbribe(q, i - 1, i);
      minimumBribes++;
    } else if (q[i - 2] === normalPosition) {
      q = unbribe(q, i - 2, i);
      minimumBribes += 2;
    } else {
      return "Too chaotic";
    }
  }
  return minimumBribes;
}

function unbribe(q, oldI, newI) {
  return [...q.slice(0, oldI), ...q.slice(oldI + 1, newI + 1), q[oldI], ...q.slice(newI + 1)];
}

function minimumBribes2(q) {
  const diffs = q.map((n, i) => n - (i+1))
    .filter(n => n >= 0);
  let minimumBribes = 0;
  for (let i = 0; i < diffs.length; i++) {
    if (diffs[i] > 2) return 'Too chaotic';
    if (diffs[i] > 0) minimumBribes += diffs[i];
    if (diffs[i] === 2 && diffs[i + 1] === 0) minimumBribes++;
  }
  return minimumBribes;
}

// console.log(unbribe([1,2,5,4,3], 2, 4));
// console.log(unbribe([1,2,3,4,5], 1, 2));

console.log(minimumBribes2([5,1,2,3,7,8,6,4]));
console.log(minimumBribes2([1,2,5,3,7,8,6,4]));
// console.log(minimumBribes([1,2,5,4,3]));
// [1,2,5,4,3] >> 0,0,2,0,-2
// [2,1,5,3,4] >> 1,-1,2,-1,-1