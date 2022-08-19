// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lower = 'abcdefghijklmnopqrstuvwxyz'
  var upper = lower.toUpperCase();
  var numbers = '0123456789'
  var special = '"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~'
  var possible = '';
  var password = '';

  var characters = 12;

  var hasLower = confirm('Has lowercase letter?')
  var hasUpper = confirm('Has upper case letters?')
  var hasnumbers = confirm('Has numbers?')
  var hasspecial = confirm('Has special characters?')
  
  if (hasLower) {
    possible += lower ;
  }

  debugger;

  return '';
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
