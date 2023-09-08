function angkaPrima(angka) {
  let counter = 1;
  let condition = Math.floor(Math.sqrt(angka));
  for (let i = 1; i <= condition; i++) {
    if (angka % i == 0) {
      counter++;
    }
  }
  return counter == 2 ? true : false;
}


console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false


