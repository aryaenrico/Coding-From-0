function shoppingTime(memberId, money) {
  let daftarBelanjaan = [];
  let uangSisa = money;
  let keranjang="";
  let flag = false;
  if (memberId == '' || memberId == undefined) {
    return "Mohon maaf, toko X hanya berlaku untuk member saja";
  } else if (money < 50000) {
    return "Mohon maaf, uang tidak cukup";
  } else {
    while (uangSisa >= 50000) {
      if(flag && (keranjang == pilihanBarang(uangSisa))){
        break;
      }
      keranjang =pilihanBarang(uangSisa);
      daftarBelanjaan.push(keranjang);
      uangSisa = uangSisa - sisaUang(pilihanBarang(uangSisa));
      flag = true;
    }
  }
  return {
    memberId,
    money,
    listPurchased: daftarBelanjaan,
    uangSisa,
  };
}

function pilihanBarang(uang) {
  if (uang >= 1500000) {
    return "Sepatu Stacattu";
  } else if (uang >= 500000) {
    return "Baju Zorro";
  } else if (uang >= 250000) {
    return "Sweater Baju H&N";
  } else if (uang >= 175000) {
    return "Sweater Uniklooh";
  } else if (uang >= 50000) {
    return "Casing Handphone";
  }
}

function sisaUang(param) {
  if (param == "Sepatu Stacattu") {
    return 1500000;
  } else if (param == "Baju Zorro") {
    return 500000;
  } else if (param == "Sweater Baju H&N") {
    return 250000;
  } else if (param == "Sweater Uniklooh") {
    return 175000;
  } else if (param == "Casing Handphone") {
    return 50000;
  }
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
