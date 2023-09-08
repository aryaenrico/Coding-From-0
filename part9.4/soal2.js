function urutkanAbjad(str) {
  let arrChar = [];
  for (let i = 0; i < str.length; i++) {
    arrChar.push(str.charAt(i));
  }
  let sortedArr = bubleSort(arrChar);

  return sortedArr;
}
function bubleSort(arr) {
  let temp;
  for (let i = 0; i <= arr.length - 2; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
