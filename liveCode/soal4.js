function duplicateCount(text) {
  let lowerCase = text.toLowerCase();
  let arrLowerCase = [];
  let sortLowerCase;
  let counter = 1;
  let result = 0;
  for (let i = 0; i < lowerCase.length; i++) {
    arrLowerCase.push(lowerCase.charAt(i));
  }
  sortLowerCase = arrLowerCase.sort();
  for (let i = 0; i < sortLowerCase.length - 1; i++) {
    for (let j = i + 1; j < sortLowerCase.length; j++) {
      if (sortLowerCase[i] == sortLowerCase[j]) {
        counter++;
      } else {
        i = j;
        i--;
        break;
      }
    }
    if (counter >= 2) {
      result++;
    }
    counter = 1;
  }
  return result;
}
console.log(duplicateCount("abcde")); //0
console.log(duplicateCount("aabbcde")); //2
console.log(duplicateCount("aabBcde")); //2
console.log(duplicateCount("Indivisibility")); //1
console.log(duplicateCount("Indivisibilities")); //2
console.log(duplicateCount("abcabcdABcefGhg")); //4
