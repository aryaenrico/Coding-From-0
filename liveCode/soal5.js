function piramid2(num) {
  let tempString;
  let print=num;
  let counter = 0;
  

  for (let parent = 0; parent <= 1; parent++) {
    if (parent == 0) {
      for (let i = 0; i < num; i++) {
        tempString = ``;
        for (let j = 0; j < num - i; j++) {
          tempString = `${tempString}${print}`;
        }
        console.log(tempString);
        print--;
        counter++;
      }
    } else {
      for (let i = 2; i <= num; i++) {
        tempString = "";
        for (let j = 0; j < i; j++) {
          tempString = `${tempString}${i}`;
        }
        if(tempString != undefined || tempString != null){
            console.log(tempString);
        }
        
      }
    }
  }
}

piramid2(5);

/*
55555
4444
333
22
1
22
333
4444
55555
*/
