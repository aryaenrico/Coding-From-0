function digitPerkalianMinimum(angka) {
    let result2;
    let result;
    let flag=`1${angka}`.length;
    let temp;
  for (let i = 1; i <= Math.floor(Math.sqrt(angka)); i++) {
        if(angka % i==0){
            result2 = angka / i;
            temp =`${i}${result2}`.length;
            if (temp < flag){
                result = temp;
                flag =temp;
            }
        }
  }
  return temp;
}
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
