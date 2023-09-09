function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  let peta = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3],
    ["D", 4],
    ["E", 5],
    ["F", 6],
  ]);
  if (arrPenumpang.length == 0) {
    return [];
  }
  let result = [];

  for (let i = 0; i < arrPenumpang.length; i++) {
    let obj = {};
    obj.penumpang = arrPenumpang[i][0];
    obj.naikDari = arrPenumpang[i][1];
    obj.tujuan = arrPenumpang[i][2];
    obj.bayar =
      (peta.get(arrPenumpang[i][2]) - peta.get(arrPenumpang[i][1])) * 2000;
    result.push(obj);
  }
  return result;
}
console.log(
  naikAngkot([
    ["Dimitri", "B", "F"],
    ["Icha", "A", "B"],
  ])
);
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
