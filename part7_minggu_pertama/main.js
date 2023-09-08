function bandingkanAngka(angka1, angka2) {
  if (angka2 > angka1){
    return true;
  }else if (angka2 ==  angka1){
    return -1;
  }else {
    return false;2
  }
}
function balikKata(text){
  let result='';
  for (let i=text.length-1;i>=0;i--){
    result =`${result}${text.charAt(i)}`;
  }

  return result
}

function konversiMenit(param){
  let jam=0;
  let menit=0;
  let detik=0;
  let sisa=0;
  if (param >= 3600){
    jam = parseInt(param / 3600);
    sisa = parseInt(param % 3600);
    menit = parseInt(sisa / 60);
    detik = parseInt (sisa % 60);
  }else {
    menit = parseInt(param / 60);
    detik = parseInt (param % 60);

  }

  menit =  menit <=9 ? `0${menit}` : `${menit}`;
  detik =  detik <=9 ? `0${detik}` : `${detik}`;
  jam =  jam <=9 ? `0${jam}` : `${jam}`;

  return `${jam}:${menit}:${detik}`;

}

function xo(str){
  let counterX=0;
  let counterO=0;
 
    for (let i=0;i<str.length;i++){
      if (str.charAt(i) == 'x'){
        counterX++;
      }else if(str.charAt(i) == 'o'){
        counterO++;
      }
    
   
  }
  return counterX == counterO ? true:false;

}

console.info(bandingkanAngka(10,11));
console.info(balikKata("arya enrico"));
console.info(konversiMenit(40));
console.info(xo('oxox'));
