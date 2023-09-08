function ubahHuruf(kata) {
  let tempAscii = [];
  let temp;
  let result = "";
  for (let i = 0; i < kata.length; i++) {
    temp = kata.charCodeAt(i) == 90 ? 65 : kata.charCodeAt(i) + 1;
    tempAscii.push(temp);
  }
  for (let i = 0; i < tempAscii.length; i++) {
    result += String.fromCharCode(tempAscii[i]);
  }
  return result;
}
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
