function sorted(data) {
  let dataTemp = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i][j] != " ") {
        dataTemp.push(data[i][j]);
      }
    }
  }

  return mergeSort(dataTemp);
}

function missingNum(data) {
  let paramData = sorted(data);

  let result = [];
  let counterData = 0;
  for (let i = paramData[0]; i <= paramData[paramData.length - 1]; i++) {
    if (paramData[counterData] != i) {
      result.push(i);
    } else {
      counterData++;
    }
  }
  return result;
}

function mergeSort(arr) {
  let arr_lenghth = arr.length;
  let midIndex = Math.floor(arr_lenghth / 2);

  if (arr_lenghth == 1) {
    return arr;
  }
  let leftArray = [];
  let RightArray = [];
  for (i = 0; i < midIndex; i++) {
    leftArray.push(arr[i]);
  }
  for (i = midIndex; i < arr_lenghth; i++) {
    RightArray.push(arr[i]);
  }
  let left = mergeSort(leftArray);
  let right = mergeSort(RightArray);
  let result = Sort(left, right);
  return result;
}

function Sort(left, right) {
  let sortedArr = [];
  let i = 0;
  let k = 0;

  while (i < left.length && k < right.length) {
    if (left[i] < right[k]) {
      sortedArr.push(left[i]);
      i++;
    } else {
      sortedArr.push(right[k]);
      k++;
    }
  }

  while (i < left.length) {
    sortedArr.push(left[i]);
    i++;
  }

  while (k < right.length) {
    sortedArr.push(right[k]);
    k++;
  }
  return sortedArr;
}

console.info(
  missingNum([
    [2, " "],
    [" ", 5],
  ])
);
