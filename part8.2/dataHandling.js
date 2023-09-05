function dataHandling(data) {
  for(let i=0;i<data.length;i++){
   
      console.info(`
      Nomor ID:${data[i][0]}
      Nama Lengkap:${data[i][1]}  
      TTL:  ${data[i][2]}
      Hobi:  ${data[i][3]}`)
   
  }
}
function dataHandling2 (input){
  let result =[input[0],`${input[1]} Elsharawy`,`Provinsi ${input[2]}`,input[3],input[4],'Pria','SMA Internasional Metro'];
  let splitDates = input[3].split("/");
  console.info(result);
  let resultDates= [splitDates[2],splitDates[0],splitDates[1]];
  console.log("Mei");
  console.log(resultDates);
  console.info(`${splitDates[0]}-${splitDates[1]}-${splitDates[2]}`)
  console.info(input[1].slice(0,14));
}

let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];
let input2 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling(input);
dataHandling2(input2);