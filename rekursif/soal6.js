function palindromeRecursive(sentence) {
  if (sentence.length <= 1) {
    return true;
  } else {
    if (sentence.charAt(0) == sentence.charAt(sentence.length - 1)) {
      return palindromeRecursive(sentence.slice(1, sentence.length - 1));
    } else {
      return false;
    }
  }
}
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister"));
