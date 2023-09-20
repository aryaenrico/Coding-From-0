function numberIterator(num) {
    let result='';
   
    if(num == 0){
      result = num.toString();
      return result;
    }else{
      result =num.toString();
      return numberIterator(num-1)+result;
    }
  }
  console.log(numberIterator(5)); // '012345'
  console.log(numberIterator(7)); // '01234567'
  console.log(numberIterator(3)); // '0123'
  console.log(numberIterator(1)); // '01'
  console.log(numberIterator(0)); // '0'