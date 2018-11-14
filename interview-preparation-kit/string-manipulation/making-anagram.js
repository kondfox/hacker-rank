function countLetters(s) {
  let letterCounts = {};
  for (let letter of s) {
    letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
  }
  return letterCounts;
}

function calculateDifference(letters, s) {
  let difference = 0;
  for (let letter of s) {
    if (letters[letter]) {
      letters[letter]--;
    } else {
      difference++;
    }
  }
  return difference;
}

function sumRemaining(letters) {
  return Object.values(letters).reduce((a, b) => a + b);
}

function makeAnagram(a, b) {
  const shorter = a.length <= b.length ? a : b;
  const longer = a.length > b.length ? a : b;
  const shorterLetters = countLetters(shorter);
  let diff = calculateDifference(shorterLetters, longer);
  diff += sumRemaining(shorterLetters);
  return diff;
}


console.log(makeAnagram('cde', 'abc'), 4);
console.log(makeAnagram('cde', 'dcf'), 2);