function tentukanDeretGeometri(arr) {
  let gap = arr[1] / arr[0];
  for (let i = 1; i <= arr.length - 2; i++) {
    let selisih = arr[i + 1] / arr[i];
    if (selisih != gap) {
      return false;
    }
  }
  return true;
}
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
