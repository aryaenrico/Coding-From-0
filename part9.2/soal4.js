function cariModus(arr) {
  let sortedArr = selectionSort(arr);
  let max = 2;
  let i = 0;
  let j = 1;
  let counter = 1;
  let result = [];
  while (i < arr.length) {
    if (sortedArr[i] == sortedArr[j]) {
      counter++;
      j++;
      if (counter == arr.length) {
        return -1;
      }
    } else {
      if (counter >= max) {
        result.push(sortedArr[i]);
        max = counter;
      }
      i = j;
      j = j + 1;
      counter = 1;
    }
  }
  if (result.length == 0) {
    return -1;
  } else if (result.length == 1) {
    return result[0];
  } else {
    let data;
    for (let i = 0; i < arr.length; i++) {
      data = arr[i];
      for (let j = 0; j < result.length; i++) {
        if (data == result[i]) {
          return data;
        }
        continue;
      }
    }
  }
  return result;
}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1

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
