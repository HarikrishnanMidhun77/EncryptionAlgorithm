import { charKeys } from "./encrypt";

export const decryptText = (text, enteredPswd) => {
  var numberOfDigitsOfLength = parseInt(text[text.length - 1]);
  var ar = text
    .split("")
    .slice(
      text.length - (1 + numberOfDigitsOfLength + enteredPswd.length + 2),
      text.length - (1 + numberOfDigitsOfLength + enteredPswd.length + 1)
    );

  var textLength = parseInt(ar.join(""));
  console.log(`textLength`, textLength);
  var newTextArr = text
    .split("")
    .slice(
      0,
      text.length - (1 + numberOfDigitsOfLength + enteredPswd.length + 2)
    );
  console.log(
    `(1 + numberOfDigitsOfLength + enteredPswd.length)`,
    1 + numberOfDigitsOfLength + enteredPswd.length + 1
  );

  console.log(`newTextArr`, newTextArr);
  if (managePassword(text, enteredPswd)) {
    return decrypt(newTextArr, textLength); //text.split("")
  } else {
    return "Password does not match";
  }
};

const managePassword = (text, enteredPswd) => {
  var passwordLength = parseInt(text[text.length - 1]);
  console.log(`passwordLength`, text.length, text[44], passwordLength);
  var ar = text
    .split("")
    .slice(text.length - (1 + 2 * passwordLength), text.length - 1);
  console.log(`a`, text.length - (1 + passwordLength), "b", text.length - 1);

  var pswd = ar.join(""); //parseInt(ar.join(""));
  var decodedPswd = decode(decode10to2(pswd));
  console.log(`pswd`, pswd, decodedPswd);
  if (decodedPswd !== enteredPswd) {
    return false;
  }
  return true;
};

export const decrypt = (encText10, textLength) => {
  console.log(`encText10`, encText10);
  var digit2Array = decode10to2(encText10);
  console.log(`digit2Array`, digit2Array);
  var demixedArray = demix(digit2Array, textLength);
  console.log(`demixedArray`, demixedArray);
  var decodedString = decode(demixedArray);
  return decodedString;
};

export const demix = (digit2Array, textLength) => {
  var indexArray = digit2Array.slice(
    digit2Array.length - textLength,
    digit2Array.length
  );
  indexArray = remove2Digits(indexArray);
  console.log(`indexArray`, indexArray);
  var r = new Array(indexArray.length);
  for (var i = 0; i < indexArray.length; i++) {
    r[i] = digit2Array[indexArray[i]];
  }
  return r;
};

export const decode = (digit2Array) => {
  digit2Array = remove2Digits(digit2Array);
  console.log(`digit2Array in decode`, digit2Array);
  var r = "";
  for (var i = 0; i < digit2Array.length; i++) {
    r += charKeys[digit2Array[i]];
  }
  return r;
};

export const decode10to2 = (str10) => {
  var r = new Array(Math.round(parseInt(str10.length / 2)));
  for (var i = 0, j = 0; i < str10.length; i += 2, j++) {
    r[j] = parseInt(str10[i]) * 10 + parseInt(str10[i + 1]);
  }
  return r;
};

export const remove2Digits = (arr) => {
  var r = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    r[i] = arr[i] - 10;
  }
  return r;
};
