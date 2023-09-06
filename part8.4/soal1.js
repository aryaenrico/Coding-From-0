function palindrome(kata) {
  let pointerLast = kata.length-1;
  let flag=true;
  for (i=0; pointerLast > i ;i++){
    if (kata.charAt(i) != kata.charAt(pointerLast)){
      flag = false;
      break;
    }
    pointerLast--;
  }
  return flag;
}

console.info(palindrome("abc"));
