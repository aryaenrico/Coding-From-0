function tukarBesarKecil(kalimat) {
  let result = "";
  for (let i = 0; i < kalimat.length; i++) {
    if (kalimat.charAt(i) != " ") {
      result += reverse(kalimat.charAt(i));
    }else{
        result+=kalimat.charAt(i);
    }
  }
  return result;
}
function reverse(character) {
  if (character == character.toUpperCase()) {
    return character.toLowerCase();
  } else {
    return character.toUpperCase();
  }
}
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW"));
