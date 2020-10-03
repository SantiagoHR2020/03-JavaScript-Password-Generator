// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterAmountNumber = document.querySelector("#characterAmountNumber");
var lowercase = document.querySelector("#lowercase");
var uppercase = document.querySelector("#uppercase");
var numbers = document.querySelector("#numbers");
var symbols = document.querySelector("#symbols");

var lowerCaseCode = arrayLowToHigh(97, 122);
console.log(lowerCaseCode);
var upperCaseCode = arrayLowToHigh(65, 90);
var numberCaseCode = arrayLowToHigh(48, 57);
var symbolsCaseCode = arrayLowToHigh(32, 47)
  .concat(arrayLowToHigh(58, 64))
  .concat(arrayLowToHigh(91, 96))
  .concat(arrayLowToHigh(58, 64))
  .concat(arrayLowToHigh(123, 126));

// Write password to the #password input
function writePassword() {
  var password = buildPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function arrayLowToHigh(low, high) {
  var array = [];
  for (let i = low; i <= high; i++) {
    var character = String.fromCharCode(i);
    array.push(character);
  }
  return array;
}

function generatePassLength() {
  var passLength = document.getElementById("characterAmountNumber").value;
  document.getElementById("lengthDisplay").innerHTML = passLength;
  console.log(passLength);
  return passLength;
}

function generateCharArray() {
  console.log("hi");
  var charArray = [];

  if (characterAmountNumber.value >= 8 && characterAmountNumber.value <= 128) {
    if (
      !lowercase.checked &&
      !uppercase.checked &&
      !numbers.checked &&
      !symbols.checked
    ) {
      alert("Please select your criterion");
    } else {
      console.log(lowercase.checked);
      if (lowercase.checked) {
        charArray = charArray.concat(lowerCaseCode);
      }
      if (numbers.checked) {
        charArray = charArray.concat(numberCaseCode);
      }
      console.log(charArray);
      if (uppercase.checked) {
        charArray = charArray.concat(upperCaseCode);
      }
      console.log(charArray);
      if (symbols.checked) {
        charArray = charArray.concat(symbolsCaseCode);
      }
    }
  } else {
    alert("Please select from 8 to 128 characters");
  }

  return charArray;
}

function buildPassword() {
  var length = generatePassLength();
  console.log(length);
  var passArray = generateCharArray();
  console.log(passArray);
  var results = [];

  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * passArray.length);
    console.log(index);
    var digit = passArray[index];
    results.push(digit);
    console.log(results);
  }
  return results.join("");
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
