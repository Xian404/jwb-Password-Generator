// Assignment Code
var generateBtn = document.querySelector("#generate");


// setting var for lowercase letters
let alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

// setting var for uppercase letters
let alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// setting var for single digit numbers 0 thru 9
let numberChara = ['0','1','2','3','4','5','6','7','8','9']

// setting var for special characters
let specialChara = ['!','@','#','$','%','*','?','/','=','-','+','_','(',')']


// Setting first criteria of character length for password

generateBtn.addEventListener("click", function () {


})


prompt('How many characters would you like your password to be?')




prompt('Do you want your password to contain numbers?')
prompt('Do you want you password to contain Upper Case letters?')
prompt('Do you want your password to contain lower case letters?')
prompt('Do you want your password to contain special characters?')






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
