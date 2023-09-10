function sorting(arrNumber) {
  let min, flag, pointer, k;
  for (let i = 0; i < arrNumber.length - 1; i++) {
    min = arrNumber[i];
    flag = false;
    k = i + 1;
    for (let j = 0; j < arrNumber.length - i - 1; j++) {
      if (min > arrNumber[k]) {
        min = arrNumber[k];
        flag = true;
        pointer = k;
      }
      k++;
    }
    if (flag) {
      arrNumber[pointer] = arrNumber[i];
      arrNumber[i] = min;
    }
  }

  return arrNumber;
}

function getTotal(arrNumber) {
    if(arrNumber.length == 0){
        return " ";
    }
    let max =arrNumber[arrNumber.length-1];
    let counter=0;
    for (let i=arrNumber.length-1;i>=0;i--){
        if(arrNumber[i] == max){
            counter++;
        }else{
            break;
        }
    }
    return counter;
    
  
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  let result = `angka paling besar adalah ${listSort[listSort.length-1]} dan jumlah kemunculan sebanyak ${countHighest} kali`;
  return  countHighest != " " ?result : " ";
}


console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
console.log(mostFrequentLargestNumbers([]));
//''

