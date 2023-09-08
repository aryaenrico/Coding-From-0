function checkAB(num) {
  for (let i = 0; i < num.length; i++) {
    if (num.charAt(i) == "a") {
      if (num.charAt(i + 4) == "b") {
        return true;
      }
    } else if (num.charAt(i) == "b") {
      if (num.charAt(i + 4) == "a") {
        return true;
      }
    }
  }
  return false;
}
console.log(checkAB("lane borrowed")); // true
console.log(checkAB("i am sick")); // false
console.log(checkAB("you are boring")); // true
console.log(checkAB("barbarian")); // true
console.log(checkAB("bacon and meat")); // false
