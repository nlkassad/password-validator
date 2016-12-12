function isPasswordValid(input) {
  if(hasUppercase(input)) {
    console.log('Password is valid for upper case');
  }
  if(!hasUppercase(input)) {
    console.log('The password needs at least one upper case letter');
  }
  if(hasLowercase(input)) {
    console.log('Password is valid for lowercase');
  }
  if(!hasLowercase(input)) {
    console.log('The password needs a lower case character');
  }
  if(isLongEnough(input)) {
    console.log('Password has at least eight characters');
  }
  if(!isLongEnough(input)) {
    console.log('The password needs to be at least eight characters long');
  }
  if(hasSpecialCharacter(input)) {
    console.log('Password is valid for special characters');
  }
  if(!hasSpecialCharacter(input)) {
    console.log('Please use at least one special character');
  }
}
function hasUppercase(input) {
  for(var i = 0; i < input.length; i++) {
    if(input[i] === input[i].toUpperCase()) {
      return true;
    }
  }
}
function hasLowercase(input) {
  for(var i = 0; i < input.length; i++) {
    if(input[i] === input[i].toLowerCase()) {
      return true;
    }
  }
}
function isLongEnough(input) {
  if(input.length >= 8) {
    return true;
  }
}
function hasSpecialCharacter(input) {
  var specialCharacters = ['!', '@', '#', '$', '?', '&'];
  for(var i = 0; i < input.length; i++) {
    for(var j = 0; j < specialCharacters.length; j++) {
      if(input[i] === specialCharacters[j]) {
        return true;
      }
    }
  }
}
isPasswordValid('Aaaaaaaa$');
