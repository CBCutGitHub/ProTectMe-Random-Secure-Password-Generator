// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePwd();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Character arrays
var numericArray =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCaseArray = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCaseArray = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

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
  var userPwdLength= prompt("How long you want pwd to be?")
  var confirmNumeric= confirm("Do you want numericCharacters in pwd?")
  var confirmSpecial = confirm("Do you want specialCharacters?")
  var confirmLowercase = confirm("Do you want lowercaseCharacters?")
  var confirmUppercase = confirm("Do you wnat uppercase characters?")

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
// generate password function that takes user input and radomize function and cerate a new randomize array
// based on user input and dispaly array in html
function generatePwd(){
  var userInput = getUserInput() //userInput.pwdLength, userInput.NumericChoice
  var finalPwd = []
  var characterPool = []

  if(userInput.NumericChoice===true){
    characterPool = characterPool.concat(numericArray)
characterPool.push(shuffleArray(numericArray))
  }
  if(userInput.SpecialChoice===true){
    characterPool = characterPool.concat(specialArray)
characterPool.push(shuffleArray(specialArray))
  }
  if(userInput.LowerCaseChoice===true){
    characterPool = characterPool.concat(lowerCaseArray)
characterPool.push(shuffleArray(lowerCaseArray))
  }
  if(userInput.UpperCaseChoice===true){
    characterPool = characterPool.concat(upperCaseArray)
characterPool.push(shuffleArray(upperCaseArray))
  }
for(var i = 0; i <userInput.pwdLength; i++){
  var stageArray = shuffleArray(characterPool)
  finalPwd.push(stageArray)
}
console.log(finalPwd)
return finalPwd.join("")
}