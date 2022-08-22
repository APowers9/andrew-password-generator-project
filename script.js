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

  var hasLower = confirm('Has lowercase letter?');
  var hasUpper = confirm('Has upper case letters?');
  var hasNumbers = confirm('Has numbers?');
  var hasSpecial = confirm('Has special characters?');
  var input = prompt('How long would you like your password to be (8-128)')

  if (hasLower === true) {
    possible += lower
  }
  if (hasUpper === true) {
    possible += upper
  }
  if (hasNumbers === true) {
    possible += numbers
  }
  if (hasSpecial === true) {
    possible += special
  }



  for (var i=0; i < characters; i ++) {
    var random = Math.floor(Math.random(generatePassword) * possible.length)
    console.log(random)
    password += possible[random];
  };

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
