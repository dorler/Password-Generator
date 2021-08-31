const { randomFill } = require("node:crypto");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function to Calls out Invalid input
var test = function () {
  var response = prompt("Question?");
  if (response === "" || response === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    test();
  }
  return response;
};

// Input Length of password? 8-128
var passwordLength = function () {
  var x = window.prompt(
    "Please select the length of your password between 8 and 128"
  );
  if (x < "8" || x > "128" || response === null) {
    test();
    passwordLength();
  } else {
    passwordCharacter();
  }
};

// Please select the character types you would like to include:
var passwordCharacter = function () {
  var y = window.prompt(" Which character types would you like to include? ");
  
  if ( y !== /[^a-zA-Z0-9\-\/]/ || response === null) {
    window.alert("You need to provide a valid answer! Please try again.");
  }
  else {
    generatePassword();
  }
};

// Write password to the #password input
function writePassword() {
  window.alert("Please select the necessary password criteria");
  //call Password length function
  passwordLength();
  //call password character function
  passwordCharacter();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

// Generate Password

var generatePassword = function () {
  x + y + randomFill ;
};

//display new password 