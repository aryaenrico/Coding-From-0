function economyChangeSummary(tradeActivity) {
  let objTempp = {
    JeffBezos: { company: "Amazon", deposit: 100000, name: "Jeff Bezos" },
    LarryPage: { company: "Google", deposit: 95000, name: "Larry Page" },
    JackMa: { company: "Alibaba", deposit: 90000, name: "Jack Ma" },
  };

  let result = [];

  for (let i = 0; i < tradeActivity.length; i++) {
    for (let j = 0; j < tradeActivity[i].length; j++) {
      let nama = "";
      let growth = "";
      let obj = {};
      for (let k = 0; k < tradeActivity[i][j].length - 1; k++) {
        if (
          tradeActivity[i][j].charAt(k) != "+" &&
          tradeActivity[i][j].charAt(k) != "-" &&
          isNaN(tradeActivity[i][j].charAt(k))
        ) {
          nama = `${nama}${tradeActivity[i][j].charAt(k)}`;
        } else {
          growth = `${growth}${tradeActivity[i][j].charAt(k)}`;
        }
      }
      console.info(nama);

      obj.name = nama;
      obj.company = objTempp[nama].company;
      obj.deposit = getCurrentMoney(objTempp[nama]["deposit"], growth);

      result.push(obj);
      objTempp[nama] = obj;
    }
  }
  return result;
}

function getCurrentMoney(money, growth) {
  let result;
  let operator = growth.charAt(1);
  let percentage = parseInt(growth.substring(2, growth.length)) / 100;

  if (operator == "+") {
    result = money + money * percentage;
  } else {
    result = money - money * percentage;
  }
  return result;
}

console.log(
  economyChangeSummary([
    ["Jeff Bezos+5%", "Larry Page+10%", "Jeff Bezos-3%"],
    ["Larry Page+2%", "Larry Page-1%"],
    ["Jack Ma+4%"],
    ["Larry Page-8%", "Jack Ma+20%", "Jeff Bezos-3%", "Jeff Bezos+8%"],
  ])
);
/* 
  [ { name: 'Jeff Bezos', deposit: 105000, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 104500, owner: 'Google' },
  { name: 'Jeff Bezos', deposit: 101850, owner: 'Amazon' },
  { name: 'Larry Page', deposit: 106590, owner: 'Google' },
  { name: 'Larry Page', deposit: 105524.1, owner: 'Google' },
  { name: 'Jack Ma', deposit: 93600, owner: 'Alibaba' },
  { name: 'Larry Page', deposit: 97082.172, owner: 'Google' },
  { name: 'Jack Ma', deposit: 112320, owner: 'Alibaba' },
  { name: 'Jeff Bezos', deposit: 98794.5, owner: 'Amazon' },
  { name: 'Jeff Bezos', deposit: 106698.06, owner: 'Amazon' } ]
*/
