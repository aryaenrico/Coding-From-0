function isPalindrome(number) {
  let numberString = number.toString();
  if (numberString.length == 1) {
    return true;
  }
  let pointerLast = numberString.length - 1;
  let flag = true;
  for (i = 0; pointerLast > i; i++) {
    if (numberString.charAt(i) != numberString.charAt(pointerLast)) {
      flag = false;
      break;
    }
    pointerLast--;
  }
  return flag;
}

function cekPalindrome(param, counter, value, flag) {
  if (counter != 0 && flag == true) {
    return value;
  } else {
    if (param(value)) {
      if (counter == 0) {
        value++;
        counter++;
      } else {
        flag = true;
      }
    } else {
      value++;
      counter++;
    }
    return cekPalindrome(param, counter, value, flag);
  }
}

function angkaPalindrome(number) {
  let result2 = cekPalindrome(isPalindrome, 0, number, false);
  return result2;
}
console.info(angkaPalindrome(1000));
