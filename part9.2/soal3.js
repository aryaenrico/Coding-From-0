function cariMedian(arr) {
  let sortedArray = selectionSort(arr);  
  let index;
  let a, b;
  if (arr.length % 2 == 1) {
    index = (arr.length + 1) / 2;
    return sortedArray[index - 1];
  } else {
    index = sortedArray.length / 2 - 1;
    a = sortedArray[index];
    index++;
    b = sortedArray[index];

    return (a + b) / 2;
  }
}
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5


function selectionSort(arr) {
    let min;
    let pointer;
    let flag = false;
    // iterate to all array
    for (i = 0; i < arr.length - 1; i++) {
      min = arr[i];
      // compare now temp with all data in array
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < min) {
          min = arr[j];
          pointer = j;
          flag = true;
        }
      }
      if (flag) {
        arr[pointer] = arr[i];
        arr[i] = min;
      }
    }
    return arr;
  }
