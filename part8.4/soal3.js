function jumlahKata(kalimat) {
  let result = kalimat.split(" ");
  return result.length;
}
console.info(jumlahKata('A song to sing'));
