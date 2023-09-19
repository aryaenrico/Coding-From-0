function initialObjectGrouping(studentsArr) {
  let arrayCharacter = [];
  let studentsArrSort = studentsArr.sort();
  arrayCharacter[0] = studentsArrSort[0].charAt(0);
  let pointer = 0;
  for (let i = 1; i < studentsArrSort.length; i++) {
    if (arrayCharacter[pointer] != studentsArrSort[i].charAt(0)) {
      pointer++;
      arrayCharacter.push(studentsArrSort[i].charAt(0));
    }
  }
  let obj = {};
  for (let i = 0; i < arrayCharacter.length; i++) {
    let result = [];

    for (let j = 0; j < studentsArrSort.length; j++) {
      if (arrayCharacter[i] == studentsArrSort[j].charAt(0)) {
        result.push(studentsArrSort[j]);
      }
    }
    obj[arrayCharacter[i]] = result;
  }
  return obj;
}
console.log(
  initialObjectGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
console.log(
  initialObjectGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
