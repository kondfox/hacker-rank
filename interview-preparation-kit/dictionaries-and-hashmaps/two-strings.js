function countLetters(s) {
  let letterCounts = {};
  for (let letter of s) {
    letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
  }
  return letterCounts;
}

function hasCommonLetters(letterCounts, s) {
  for (let letter of s) {
    if (letterCounts[letter]) {
      return true;
    }
  }
  return false;
}

function twoStrings(s1, s2) {
  const shorter = s1.length <= s2.length ? s1 : s2;
  const longer = s1.length > s2.length ? s1 : s2;
  const letterCounts = countLetters(shorter);
  if (hasCommonLetters(letterCounts, longer)) {
    return 'YES';
  } else {
    return 'NO';
  }
}

console.log(twoStrings('hello', 'world'));
console.log(twoStrings('hi', 'world'));
