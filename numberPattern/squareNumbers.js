function squareNumbers(param){
  if (param < 3){
    return "Minimal input adalah 3";
  }
  let tempMatrix = new Array(param).fill(0).map(() => new Array(param).fill(0));
  let content=1;
  let pointer=param-1;
  for (let i=0;i<tempMatrix.length;i++){
    for (let j=0;j<tempMatrix.length;j++){
      if (i %2==0){
        tempMatrix[i][j]= changeContent(content);
      }else{
        tempMatrix[i][pointer] = changeContent(content);
        pointer--
      }
      content++;
    }
    pointer=param-1;
  }
  return tempMatrix;
}

function changeContent(content){
  if (content % 4==0){
    return '#';
  }else if (content %2 == 0){
    return 'o';
  }else{
    return 'x';
  }
}

console.info(squareNumbers(4));