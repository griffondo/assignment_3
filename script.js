var length;
var lowerCase;
var capital;
var characters;



// Get references to the #generate element
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
  var length = 10,
    charset = "abcdefghijklmnopqrstuvwxyz1234567890"
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i)

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
