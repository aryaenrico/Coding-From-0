function averageLengthWord(words) {
  let splitWords = words.split(" ");
  let result = [];
  let countAllWord = 0;
  for (let i = 0; i < splitWords.length; i++) {
    countAllWord += splitWords[i].length;
  }
  let rata_rata = Math.round(countAllWord / splitWords.length);
  for (let i = 0; i < splitWords.length; i++) {
    if (rata_rata == splitWords[i].length) {
      result.push(splitWords[i]);
    }
  }
  return result;
}
console.log(averageLengthWord("Do you want to become a great coder ?")); // ['you']
console.log(
  averageLengthWord("You dont know what you have until you lose it!")
); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord("I am diligent")); // []
