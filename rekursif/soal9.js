function virusCheckRecursive(str, viruses) {
  let result = 0;
  let virusArray = [];
  if (viruses == undefined) {
    return "There is no virus";
  }

  for (let i = 0; i < viruses.length; i++) {
    if (viruses.charAt(i) != "|") {
      if (isNaN(viruses.charAt(i))) {
        virusArray.push(viruses.charAt(i).toLowerCase());
      } else {
        virusArray.push(viruses.charAt(i));
      }
    }
  }
  if (str.length == 1) {
    for (let i = 0; i < virusArray.length; i++) {
      if (str.charAt(0) == virusArray[i]) {
        result++;
      }
    }
    return result;
  } else if (str.length == 0) {
    return "There is no virus";
  } else {
    for (let i = 0; i < virusArray.length; i++) {
      if (str.charAt(0).toLowerCase() == virusArray[i]) {
        result++;
      }
    }
    return result + virusCheckRecursive(str.slice(1), viruses);
  }
}

console.log(virusCheckRecursive("qlD4MZax0raQqew", "x|0|q")); // 5
console.log(virusCheckRecursive("HH0NBP1zRa", "h|r")); // 3
console.log(virusCheckRecursive("4O4TmIF6ONaiMlzpXxPqwy", "4|X|p")); // 6
console.log(virusCheckRecursive("mjBgPlzks", "m")); // 1
console.log(virusCheckRecursive("AIn4Ks05bBaa", "x")); // 0
console.log(virusCheckRecursive("RsMFjBUjvIaP")); // There is no virus
console.log(virusCheckRecursive("")); // There is no virus
