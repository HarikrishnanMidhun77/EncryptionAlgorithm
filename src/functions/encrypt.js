const charKeys =
  `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !"#$%&'()*+-./:;<=>?@{|}~`.split(
    ""
  ); /*ASCII 44 (`) is not included, total 88 chars
  90  is possible as we need all index to be 2 digits 
  */
export const ecncryptText = (text, password) => {
  //password legth must be grater than 4 chars and less than 10 chars
  var encryptedString = "";

  var shiftLength = password.length;
  var reversedString = strReverse(text);
  var charArray = reversedString.split("");
  var shiftedString = asciiLeftShift(charArray, shiftLength);
  encryptedString = shiftedString;

  var encodedString = encode(text.split(""));
  mixAndIndex(encodedString);

  console.log(`encryptedString`, encryptedString);
  return encryptedString;
};

const strReverse = (s) => {
  return s.split("").reverse().join("");
};

const asciiLeftShift = (charArray, shiftLength) => {
  var shiftedString = "";
  var nextChar = "";
  charArray.forEach((char) => {
    nextChar = String.fromCharCode(char.charCodeAt() - shiftLength);
    shiftedString += nextChar;
  });
  return shiftedString;
};

// Using ~ as seperator because it can never be an encrypted value as it is postioned after the alphabets
// Password is restrict to 10 because there is only  15 symbols before numbers including space

export const mixAndIndex = (originalText, password) => {
  var textArr = originalText.split("");
  var pswdArr = password.split("");
  var pswdLength = password.length;
  var textArrLength = textArr.length;
  var resArr = new Array(20 - textArrLength);
  var randomArray = genrateRandomN(20 - textArrLength); //as length of password increases, complexity increases
  var indexArray = randomArray.slice(0, textArr.length);

  for (var i = 0; i < textArr.length; i++) {
    resArr[randomArray[i]] = textArr[i];
  }
  for (i = 0; i < randomArray.length; i++) {
    if (resArr[i] === undefined) {
      resArr[i] = randomArray[i] + 10; // to make all numbers 2 digits
    }
  }
  resArr = resArr.concat(make2Digits(indexArray));
  return resArr;

  /*
  without encoding [15, 12, "b", "f", "g", "a", "d", 21, "e", 11, "c", 19, 10, 15, 12, 20, 16, 18, 13, 14]
   */
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//generate array of random numbers with 0 to 20 without duplicates
export const genrateRandom20 = () => {
  var a = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    ],
    i,
    j;
  var r = new Array(20);
  for (a, i = a.length, j = 0; j < 20; i--, j++) {
    var random = a.splice(Math.floor(Math.random() * (i + 0)), 1)[0];
    r[j] = random;
  }
  return r;
};
export const genrateRandomN = (N) => {
  var i, j, k;
  var a = new Array(N);
  for (k = 0; k < N; k++) {
    a[k] = k;
  }
  var r = new Array(N);
  for (a, i = a.length, j = 0; j < N; i--, j++) {
    var random = a.splice(Math.floor(Math.random() * (i + 0)), 1)[0];
    r[j] = random;
  }
  return r;
};

// ensure all the  numbers are 2 digits by adding 10 to all
export const make2Digits = (arr) => {
  var r = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    r[i] = arr[i] + 10;
  }
  return r;
};

const encode = (arr) => {
  var r = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    r[i] = charKeys.indexOf(arr[i]) + 10;
    //if character is alphabet or number  convert it to number using charKeys and make it two digit
    /*if character is not alphanumeric perform ascii store ascii number, 
 as we only deal with 2 digit numbers, we will need to manage {,|,},~ seperately as this 
 characters' ascii is 3 digits
 */
  }
  return r;
};
export const isAlphaNumeric = (char) => {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }

  return true;
};
