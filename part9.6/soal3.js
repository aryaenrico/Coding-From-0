function countProfit(shoppers) {
  var listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1],
  ];
  
  let stokAwal = [10, 2, 1];
  let result = [];

  let customer = [[],[],[]];
  if (shoppers.length == 0){
    return [];
  }

  for (let i = 0; i < shoppers.length; i++) {
    if (
      shoppers[i].product == "Sepatu Stacattu" &&
      listBarang[0][2] >= shoppers[i].amount
    ) {
      customer[0].push(shoppers[i].name);
      listBarang[0][2] = listBarang[0][2] - shoppers[i].amount;
    } else if (
      shoppers[i].product == "Baju Zoro" &&
      listBarang[1][2] >= shoppers[i].amount
    ) {
      customer[1].push(shoppers[i].name);
      listBarang[1][2] = listBarang[1][2] - shoppers[i].amount;
    } else if (
      shoppers[i].product == "Sweater Uniklooh" &&
      listBarang[2][2] >= shoppers[i].amount
    ) {
      customer[2].push(shoppers[i].name);
      listBarang[2][2] = listBarang[2][2] - shoppers[i].amount;
    }else{
        continue;
    }
  }
  for (let i = 0; i <= 2; i++) {
    let obj={};
    obj.product  = listBarang[i][0];
    obj.shoppers = customer[i] ==  undefined ? [] : customer[i];
    obj.leftOver = listBarang[i][2];
    obj.totalProfit =getProfit(listBarang[i][1],(stokAwal[i]-listBarang[i][2]));
    result.push(obj);
  }

  return result;

  // you can only write your code here!
}

function getProfit(harga, laku) {
    return harga*laku;
}

console.log(countProfit([]))