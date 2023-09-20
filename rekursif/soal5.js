function hapusSimbolRec(str) {
  let result = "";
  let temp;
  if (str.length == 1) {
    temp = str.charAt(0).toLowerCase();
    if (str.charCodeAt(temp) >= 97 && str.charCodeAt(temp) <= 122) {
      result = temp;
    } else if (parseInt(str.charAt(0)) >= 0 && parseInt(str.charAt(0)) <= 9) {
      result = str.charAt(0);
    }
    return result;
  } else {
    temp = str.charAt(0).toLowerCase();
    if (str.charCodeAt(temp) >= 97 && str.charCodeAt(temp) <= 122) {
      result = temp;
    }else if (parseInt(str.charAt(0)) >= 0 && parseInt(str.charAt(0)) <= 9) {
        result = str.charAt(0);
      }
    return `${result}${hapusSimbolRec(str.slice(1))}`;
  }
}

console.log(hapusSimbolRec("test4@aa")); //test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
