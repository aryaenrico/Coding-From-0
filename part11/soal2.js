function meleeRangedGrouping(str) {
    if (str.length == 0){
        return [];
    }
  let strWithoutDeliiter = str.split(",");
  let strHeroesAndType = [];
  for(let i=0;i<strWithoutDeliiter.length;i++){
    let temp=[];
    temp = strWithoutDeliiter[i].split("-");
    for(let k=0;k<temp.length;k++){
        strHeroesAndType.push(temp[k]);
    }
  }
 
  let result = [[], []];
  let pointerType = 1;
  let pointerHerous = 0;
  for (let i = 0; i < strWithoutDeliiter.length; i++) {
    if (strHeroesAndType[pointerType] == "Ranged") {
      result[0].push(strHeroesAndType[pointerHerous]);
    } else {
      result[1].push(strHeroesAndType[pointerHerous]);
    }
    pointerHerous += 2;
    pointerType += 2;
  }
  return result;
}
console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('')); // []
