function minDistanceBetweenGreatest(arr) {
  max = arr[0];
  let result = [];
  let response = arr.length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      result = [];
      result.push(i);
    } else if (arr[i] >= max) {
      max = arr[i];
      result.push(i);
    }
  }

  for (let i = result.length - 1; i >= 1; i--) {
    let k = i - 1;
    if (response > result[i] - result[k]) {
      response = result[i] - result[k];
    }
  }

  if (arr.length == result.length) {
    return 1;
  } else if (result.length == 1) {
    return 0;
  } else {
    return response;
  }
}
console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0
