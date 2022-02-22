var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {  
  var passwordText = document.querySelector("#password"); 
  passwordText.textContent=""
  var password = generatePwd();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Character arrays for this application
var numericArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = ['@',  '%',  '+',  '\\',  '/',  '&',  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = ['f', 'j', 'n', 'r', 'v', 'z', 'y', 'u', 'q', 'm', 'i', 'd', 'w', 'x', 's', 't', 'o', 'p', 'k', 'l', 'g', 'h', 'c', 'b', 'e', 'a'];
var upperCaseArray = ['A', 'E', 'I', 'M', 'Q', 'U', 'Y', 'Z', 'V', 'R', 'N', 'J', 'F', 'B', 'C', 'H', 'G', 'L', 'K', 'P', 'O', 'T', 'S', 'X', 'W', 'D'];

//Changed the letter characters so they are not alphabetically listed to added a uniqueness to result of using lowercase and uppoercase characters
// var lowerCaseArray = ['a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l','m',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
// var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// function to radomize array
function shuffleArray(array) {

  var getIndex = Math.floor(Math.random() * array.length); //returns random index NUMBER based on array length
  var indexValue = array[getIndex]; //returns actual index VALUE based on random index number returned above

  console.log ("randomIndex: "+ getIndex)
  console.log("Actual index value: " + indexValue)
  return indexValue; // makes indexValue available outside of function

}
//test shuffle array
shuffleArray(upperCaseArray)

// function to get and store user and put into object called user input
function getUserInput(){
  var passwordText  = document.getElementById("password")
  passwordText.innerHTML=""
  var userPwdLength= prompt("How long you want passwork to be?")
  if(userPwdLength <8){alert("password must be greater than 7 characters")
return;
} 
if(userPwdLength >128){alert("password must not be greater than 128 characters")
return;
} 
  var confirmNumeric= confirm("Do you want numeric characters?")
  var confirmSpecial = confirm("Do you want special Characters?")
  var confirmLowercase = confirm("Do you want lowercase characters?")
  var confirmUppercase = confirm("Do you wnat uppercase characters?")
if(confirmNumeric===false && confirmSpecial===false && confirmLowercase===false && confirmUppercase===false){
  alert("You must choose atleast one character type.")
  return null
}
  var inputObject = {
    pwdLength: userPwdLength,
    NumericChoice: confirmNumeric,
    SpecialChoice: confirmSpecial,
    LowerCaseChoice: confirmLowercase,
    UpperCaseChoice: confirmUppercase
}

  console.log(inputObject)
  return inputObject
} 
// generate password function that takes user input and radomize function and create a new randomize array
// based on user input and dispaly array in browser via index.html
function generatePwd(){
  var passwordText = document.querySelector("#password"); 
  passwordText.textContent=""
  
  var userInput = getUserInput() //userInput.pwdLength, userInput.NumericChoice
  var finalPwd = []
  var characterSet = []

    if(userInput.NumericChoice===true){
      characterSet = characterSet.concat(numericArray)
  characterSet.push(shuffleArray(numericArray))
    }
    if(userInput.SpecialChoice===true){
      characterSet = characterSet.concat(specialArray)
  characterSet.push(shuffleArray(specialArray))
    }
    if(userInput.LowerCaseChoice===true){
      characterSet = characterSet.concat(lowerCaseArray)
  characterSet.push(shuffleArray(lowerCaseArray))
    }
    if(userInput.UpperCaseChoice===true){
      characterSet = characterSet.concat(upperCaseArray)
  characterSet.push(shuffleArray(upperCaseArray))
    }
  for(var i = 0; i <userInput.pwdLength; i++){
    var stageArray = shuffleArray(characterSet)
    finalPwd.push(stageArray)
    }

    console.log(finalPwd)
    return finalPwd.join("")
}
// Add to README.md; ShuffleArray research at : http://php.net/manual/en/function.shuffle.php