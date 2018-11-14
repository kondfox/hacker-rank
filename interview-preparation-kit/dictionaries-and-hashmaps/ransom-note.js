function getMagazineWords(magazine) {
  let magazineWords = {};
  for (let word of magazine) {
    magazineWords[word] = magazineWords[word] ? magazineWords[word] + 1 : 1;
  }
  return magazineWords;
}

function canCreateNote(magazineWords, note) {
  for (let word of note) {
    if (magazineWords[word]) {
      magazineWords[word]--;
    } else {
      console.log('No');
      return;
    }
  }
  console.log('Yes');
}

function checkMagazine(magazine, note) {
  const magazineWords = getMagazineWords(magazine);
  console.log(`aabza: ${magazineWords['aabza']}`);
  return canCreateNote(magazineWords, note);
}

// checkMagazine(['give','me','one','grand','today','night'], ['give','one','grand','today']);
// checkMagazine(['two','times','three','is','not','four'], ['two','times','two','is','four']);
