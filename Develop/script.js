// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define the variables
var specialCharacters = "!@#$%^&*()_+<>?:{}";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var upperCase = "AZQWERTYUIOPASDFGHJKLZXCVBNM";
var numeric = "1234567890";

var characterChoices = [
  "1-lowerCase",
  "2-upperCase",
  "3-specialCharacters",
  "4-numeric",
];

var characterChoice = function () {
  parseInt(
    prompt(
      "Enter the Characters you would like to use 1-lowerCase 2-UpperCase 3-SpecialCharacters 4-numeric"
    )
  );
  for (i = 0; i < 3; i++) console.log(characterChoices(characterChoice));
  //result for character choice

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Write password to the #password input
function writePassword() {
  //prompt user for password length
  var passwordLength = parseInt(
    prompt(
      "What would you like the length of your password to be? Please select between 8 & 128"
    )
  );
  //check if user input is valid
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128");
    return;
  }
  //Prompt user for character choices
  const wantUppers = confirm("Do you want uppers?");
  const wantLowers = confirm("Do you want lowers?");
  const wantSpecials = confirm("Do you want Specials?");
  const wantNums = confirm("Do you want Numbers?");

  let possibleCharacters = "";

  if (wantUppers) {
    possibleCharacters += upperCase;
  }
  if (wantLowers) {
    possibleCharacters += lowerCase;
  }
  if (wantSpecials) {
    possibleCharacters += specialCharacters;
  }
  if (wantNums) {
    possibleCharacters += numeric;
  }

  let password = "";

  for (var i = 0; i < passwordLength; i++) {
    const randIndex = Math.floor(Math.random() * possibleCharacters.length);
    const random = possibleCharacters[randIndex];
    password += random;
  }

  document.querySelector("#password").value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
