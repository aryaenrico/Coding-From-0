function isPalindrome(number) {
  let numberString = number.toString();
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

function angkaPalindrome(number) {
  let flag = true;
  let result = number;
  if (number < 10) {
    result++
  } else {
    while (flag) {
      if(isPalindrome(result)){
        flag = false;
      }else{
        result++;
      }
    }
  }

  return result;
}
console.info(angkaPalindrome(1000));
