function changeVocals(str) {
  let vocalMap = new Map([
    ["a", "b"],
    ["i", "j"],
    ["u", "v"],
    ["e", "f"],
    ["o", "p"],
    ["A", "B"],
    ["I", "J"],
    ["U", "V"],
    ["E", "F"],
    ["O", "P"],
  ]);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let temp = vocalMap.get(str[i]) ?? str.charAt(i);
    result = result + temp;
  }
  return result;
}
function reverseWord(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str.charAt(i);
  }
  return result;
}

function setLowerUpperCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != " ") {
      if (str.charAt(i) == str.charAt(i).toUpperCase()) {
        result = result + str.charAt(i).toLowerCase();
      } else  {
        result = result + str.charAt(i).toUpperCase();
      }
    } else {
      result = result + str.charAt(i);
    }
  }
  return result;
}

function removeSpaces(str) {
  let tempStr = str.split(" ");
  let result = "";
  for (let i = 0; i < tempStr.length; i++) {
    result = result + tempStr[i];
  }
  return result;
}

function passwordGenerator (name) {
    if(name.length < 5){
        return'Minimal karakter yang diinputkan adalah 5 karakter';
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
