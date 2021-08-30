const { create } = require("istanbul-reports");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  window.alert("Please select the necessary password critera");
  //

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();

//My code section:

window.prompt(" Please select the necessary password critera");

// Input Length of password? 8-128
var passwordLength = function () {
  window.prompt("Please select the length of your password between 8 and 128");
  var response = prompt("Question?");
  if (response === "" || response === null) {
    window.alert("You need to provide a valid answer! Please try again.");
  }
  return response;
};

// Please select the character types you would like to include:
var passwordCharacter = function () {
  window.prompt(" Which character types would you like to include? ");
  var response = prompt("Question?");
  if (response === "" || response === null) {
    window.alert("You need to provide a valid answer! Please try again.");
  }
  return response;
};


// Generate Password

var generatePassword = function () {
  passwordLength + passwordCharacter 
};


//Function to Calls out Invalid input
var test = function () {
  var response = prompt("Question?");
  if (response === "" || response === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    test();
  }
  return response;
};
