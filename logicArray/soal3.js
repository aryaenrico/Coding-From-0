function groupAnimals(animals) {
  let sortedAnimals = animals.sort();
  let result = [];
  let tempResult = [];
  let counter = 0;

  for (let i = 0; i <= animals.length - 1; i++) {
    tempResult.push(sortedAnimals[i]);
    for (let j = i + 1; j < animals.length; j++) {
      if (sortedAnimals[i].charAt(0) != sortedAnimals[j].charAt(0)) {
        i = j - 1;
        break;
      } else {
        tempResult.push(sortedAnimals[j]);
      }
    }

    counter += tempResult.length;
    result.push(tempResult.reverse());
    tempResult = [];
    if (counter == animals.length) {
      break;
    }
  }

  return result;
}

console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
//[anoa,ayam,cacing,kuda,kancil] lenght =5
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
