function changeXRecursive(data, jenis) {
  let result = data.charAt(0);
  if (data.length == 1) {
    if (jenis == "ganjil") {
      if (result % 2 == 0) {
        result = "x";
      }
      return result;
    } else {
      if (result % 2 == 1) {
        result = "x";
      }
      return result;
    }
  } else {
    if (jenis == "ganjil") {
      if (result % 2 == 0) {
        result = "x";
      }
    } else {
      if (result % 2 == 1) {
        result = "x";
      }
    }
    return ` ${result}${changeXRecursive(data.slice(1), jenis)}`;
  }
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
