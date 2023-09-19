function doubleReverse(arr) {
  let pointerStrat = 0;
  let pointerEnd = arr.length - 1;
  let result = [];
  while (pointerStrat < pointerEnd) {
    result[pointerStrat] = reverseWord(arr[pointerEnd]);
    result[pointerEnd] = reverseWord(arr[pointerStrat]);
    pointerStrat++;
    pointerEnd--;
  }
  if (arr.length % 2 == 1) {
    result[pointerStrat] = reverseWord(arr[pointerStrat]);
  }
  return result;
}
function reverseWord(word) {
  let result = "";
  if (word.length % 2 == 0) {
    for (let i = word.length - 1; i >= 0; i--) {
      result = `${result}${word.charAt(i)}`;
    }
    return result;
  } else {
    return word;
  }
}
console.log(doubleReverse(["rabu", "cinta", "benci", "masuk", "nikmat"]));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(["aku", "sayang", "kamu"]));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(["pelakor", "perusak", "rumah", "tangga"]));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]));
