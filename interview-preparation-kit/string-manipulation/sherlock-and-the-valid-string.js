function checkValidation(occurencies) {
  const letterCount = occurencies.length;
  if (occurencies[0] === occurencies[letterCount - 1]) return true;
  if (letterCount > 3 && occurencies[1] !== occurencies[letterCount - 2]) return false;
  return Math.abs(occurencies[0] - occurencies[letterCount - 1]) === 1;
}

function countLetters(s) {
  let letterCounts = {};
  for (let letter of s) {
    letterCounts[letter] = letterCounts[letter] ? letterCounts[letter] + 1 : 1;
  }
  return letterCounts;
}

function checkValidation2(keys, values) {
  if (keys.length === 1) return true;
  if (keys.length > 2) return false;
  if (values[0] !== 1 && values[1] !== 1) return false;
  if ((keys[0] * values[0] === 1) || (keys[1] * values[1] === 1 )) return true;
  return Math.abs(keys[0] - keys[1]) === 1;
}

function isValid(s) {
  const occurencies = Object.values(countLetters(s));
  console.log(occurencies);
  const frequencies = countLetters(occurencies);
  console.log(frequencies);
  if (checkValidation2(Object.keys(frequencies).map(k => +k), Object.values(frequencies))) {
    return 'YES';
  } else {
    return 'NO';
  }
}

// console.log(isValid('abcdefghhgfedecba'));
// console.log(isValid('aabbccddeefghi'));
console.log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'));
console.log(isValid('aaaaabc'));
