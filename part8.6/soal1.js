function cariMean(data) {
  let jumlah = 0;
  for (let i = 0; i < data.length; i++) {
    jumlah += data[i];
  }
  return Math.round(jumlah / data.length);
}


