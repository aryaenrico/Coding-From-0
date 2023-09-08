function targetTerdekat(arr) {
  let counter = 0;
  let min = arr.length;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] != " ") {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == "x" && arr[j] == "o") {
          counter = j - i;
          break;
        } else if (arr[i] == "o" && arr[j] == "x") {
          counter = j - i;
          break;
        }
      }
      if (counter > 0 && counter < min) {
        min = counter;
      }
      counter = 0;
    }
  }
  return min == arr.length ? 0 : min;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
