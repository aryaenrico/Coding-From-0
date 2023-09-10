function kaliTerusRekursif(angka) {
  if (angka <= 9) {
    return angka;
  } else {
    let angkaString = angka.toString();
    let resultPerkalian = 1;
    let i = 0;
    if (angkaString.length >= 2) {
      while (i < angkaString.length) {
        resultPerkalian = resultPerkalian * parseInt(angkaString.charAt(i));
        i++;
      }
    }
    return kaliTerusRekursif(resultPerkalian);
  }
}
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
console.log(kaliTerusRekursif(10))
