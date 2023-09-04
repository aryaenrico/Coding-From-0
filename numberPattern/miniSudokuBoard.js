function miniSudokuBoard(text){
  let boardMatrix = new Array(3).fill(0).map(() => new Array(3).fill(0));
     if (text.length <= 0){
          return "Empty board";          
     } else if (text.length <9){
      return "Invalid Input";
     }
     let content=0;
     for (let i=0;i < 3;i++){
      for(let j=0;j<3;j++){
        boardMatrix[i][j] = text.charAt(content);
        content++;
      }
     }
     return boardMatrix;               
}

console.info(miniSudokuBoard('87109'));