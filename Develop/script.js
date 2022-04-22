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
function generatePassword () {
  let options = getPasswordOptions ()
  console.log(options);
  let possibleChara = []  // master list of possible characters - may not be able to effeciently randomize this
  
  
  if (options.chooseUpper) {
    possibleChara = possibleCharacter.concat(alphaUpper) // combing upper case characters into array
  }

  if (options.chooseLower) {
    possibleChara = possibleCharacter.concat(alphaLower) // combining lower case characters into array
  }
  
  if (options.chooseNum) {
    possibleChara = possibleCharacter.concat(numberChara)  // combining number characters into array
  }

  if (options.chooseSpec) {
    possibleChara = possibleCharacter.concat(specialChara)  // combining number characters into array
  }


for (let index = 0; index < options.chooseChar; index++) {
  const element = array[index];
  
}
}

function getPasswordOptions () {
 let chooseChar = prompt('How many characters would you like your password to be?')
  if (chooseChar < 8) {
    alert('Value must be greater than or equal to 8');
    return null;
  } 
  


  let chooseNum = confirm('Do you want your password to contain numbers?')
  let chooseUpper = confirm('Do you want you password to contain Upper Case letters?')
  let chooseLower = confirm('Do you want your password to contain lower case letters?')
  let chooseSpec = confirm('Do you want your password to contain special characters?')




  
  let passwordOptions = {
    chooseChar: chooseChar,
    chooseNum: chooseNum,
    chooseUpper: chooseUpper,
    chooseLower: chooseLower,
    chooseSpec: chooseSpec
  }
  return passwordOptions
} 








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
