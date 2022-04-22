// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting first criteria of character length for password



function () {
  var answerA = prompt ('How long would you like your password to be? Must be greater than or equal to 8 and less than or equal to 128 characters', 16)
  If (answerA == Number && >= 8 && <= 128) {
    
  } 

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
