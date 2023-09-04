function squareNumbers(param) {
  if (param < 3) {
    return "Minimal input adalah 3";
  }
  let tempMatrix = new Array(param).fill(0).map(() => new Array(param).fill(0));
  let content = 1;
  for (let i = tempMatrix.length-1; i >=0; i--) {
    for (let j = 0; j <tempMatrix.length; j++) {
      
        tempMatrix[i][j] = content;
      
      content++;
    }
   
  }
  return tempMatrix;
}

function changeContent(content) {
  if (content % 4 == 0) {
    return "#";
  } else if (content % 2 == 0) {
    return "o";
  } else {
    return "x";
  }
}

console.info(squareNumbers(5));
