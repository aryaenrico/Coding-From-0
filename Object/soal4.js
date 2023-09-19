function travelingIndonesia(arr, emoney) {
    if(arr.length ==0){
        return [];
    }
  let destination = new Map([
    ["Yogyakarta", 1],
    ["Semarang", 2],
    ["Surabaya", 3],
    ["Denpasar", 4],
  ]);
  let transport = new Map([
    ["Pesawat", 275000],
    ["Kereta", 250000],
    ["Bis", 225000],
  ]);
  let tipePembayaran = new Map([
    ["OVO", 0.15],
    ["Dana", 0.1],
    ["Gopay", 0.05],
    ["Cash", 0],
  ]);

  let temp = "";
  let penumpang = [];
  let rutePenumpang = [];
  let transports = [];
  for (let i = 0; i < arr.length; i++) {
    let rute = [];
    for (let j = 0; j < arr[i].length; j++) {
      temp = `${temp}${arr[i].charAt(j)}`;
      if (arr[i].charAt(j + 1) == "-" || j + 1 == arr[i].length) {
        if (destination.get(temp) == undefined) {
          if (transport.get(temp) == undefined) {
            penumpang.push(temp);
            temp = "";
          } else {
            transports.push(temp);
            temp = "";
          }
        } else {
          rute.push(temp);
          temp = "";
        }
        j++;
      }
    }
    rutePenumpang.push(rute);
  }
  let obj = {};
  let result = [];
  for (i = 0; i < penumpang.length; i++) {
    obj = {};
    let countRute=1;
    if(destination.get(rutePenumpang[i][rutePenumpang[i].length-1]) > destination.get(rutePenumpang[i][0])){
        countRute = destination.get(rutePenumpang[i][rutePenumpang[i].length-1]) - destination.get(rutePenumpang[i][0]);
    }else{
        countRute = destination.get(rutePenumpang[i][0]) - destination.get(rutePenumpang[i][rutePenumpang[i].length-1]);
    }
    // console.info(destination.get(rutePenumpang[i][0]));
    // console.info(rutePenumpang[0].length)
    // console.info(rutePenumpang[i][rutePenumpang.length-1])
    // //let countRute = rutePenumpang.length == 1 ? 1 : rutePenumpang.length - 1;
    let normalprize = countRute * transport.get(transports[i]);
    let discount = normalprize - normalprize * tipePembayaran.get(emoney);
    obj.name = penumpang[i];
    obj.departureCity = rutePenumpang[i][0];
    obj.destinations = rutePenumpang[i][rutePenumpang[i].length - 1];
    obj.transport = transports[i];
    obj.totalCost = discount;
    result.push(obj);
  }
  
  return result.sort((a, b) => b.totalCost - a.totalCost);
}


console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
console.log(travelingIndonesia([], 'Cash')); 