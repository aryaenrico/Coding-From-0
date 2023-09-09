function changeMe(arr) {
  let result = [];
  let obj = {};
  let name = "";
  if (arr.length == 0) {
    return "//";
  }
  for (let i = 0; i < arr.length; i++) {
    name = `${arr[i][0]} ${arr[i][1]}`;
    console.info(name);
    obj[name] = {};

    obj[name].firstName = arr[i][0];
    obj[name].lastName = arr[i][1];
    obj[name].gender = arr[i][2];
    obj[name].age = getAge(arr[i][3]);
    result.push(obj);
    obj = {};
  }
  return result;
}

function getAge(number) {
  if (number != undefined) {
    return 2023 - number;
  } else {
    return "Invalid Birth Year";
  }
}

console.info(
  changeMe([
    ["Christ", "Evans", "Male", 1982],
    ["Robert", "Downey", "Male"],
  ])
);
console.info(changeMe([]));
