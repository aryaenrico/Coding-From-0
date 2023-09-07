function perkalianUnik(arr) {
    let result = [];
    let tempResult;
    for (let i = 0; i < arr.length; i++) {
      tempResult = 1;
      for (let j = 0; j < arr.length; j++) {
        if (j == i) {
          continue;
        } else {
          tempResult = tempResult * arr[j];
        }
      }
      result.push(tempResult);
    }
    return result;
  }
