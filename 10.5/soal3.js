function makanTerusRekursif(angka) {
  if (angka == 0) {
    return 0;
  } else if (angka <= 15) {
    return 1;
  } else {
    return 1 + makanTerusRekursif(angka - 15);
  }
}
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
