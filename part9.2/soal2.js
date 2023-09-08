

function fpb (angka1,angka2){
    let min,max;
    if(angka1 > angka2){
        max = angka1;
        min =angka2;
    }else{
        max =angka2;
        min =angka1;
    }
    if (angkaPrima(max) && angkaPrima (min)){
        return 1;
    }else{
        return max % min;
    }
}

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
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1