
//Prompt the user and take a number input
//Validate the input is within the proper bounds, error if not valid
//Prompt the user and display check boxes for the 4 character types
//Generate the password
//Alert the password



const button = document.getElementById('generateBtn')
const textBox = document.getElementById('password')
let upperCaseLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
let lowerCaseLetters = 'qwertyuiopasdfghjklzxcvbnm'
let numbers = '1234567890'
let symbols = '!@#$%^&*(){}[]=<>/,.'
let passwordString = '';


// function createPassword(input){
//   console.log(input);
// }



button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('passwordString = ', passwordString);

  const passwordLength = parseInt(prompt('Please choose how long you want your password (must be between 8 and 128)'))

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error: password must be 8-128 characters. Please try again.")
  }
  else if (passwordLength >= 8 || passwordLength <= 128) {

    const askNumbers = prompt('would you like numbers ')
    if (askNumbers !== null) {
      passwordString += numbers;
      console.log('password String = ', passwordString)
    }

    const askLowerCaseLetters = prompt('would you like lower case letters?');
    if (askLowerCaseLetters !== null) {
      passwordString += lowerCaseLetters;
      console.log('password String = ', passwordString)
    }

    const askUpperCaseLetters = prompt('would you like upper case letters?');
    if (askUpperCaseLetters !== null) {
      passwordString += upperCaseLetters;
      console.log('password String = ', passwordString)
    }

    const askSymbols = prompt('would you like symbols?')
    if (askSymbols !== null) {
      passwordString += symbols;
      console.log('password String = ', passwordString)
    }

    let random = Math.floor(Math.random() * passwordString.length)



    for (let i = 0; i < passwordLength; i++) {
      let midPassword = [i];
      console.log()
    }
  }
});



  //key value key value key value key value
  //key: value

  //   askUpperCaseLetters = confirm("Include uppercase letters?");
//   askLowerCaseLetters = confirm("Include lowercase letters?");
//   askNumbers = confirm("Include numbers?");
//   askSymbols = confirm("Include symbols?");
// }
// if (upperCaseLetters == false && lowerCaseLetters == false && numbersConfirm == false && symbols == false) {
//   alert("Error: You must select at least one character type!");
// }


// for (i = 0; i < passwordLength; i++) {
//   if (askLowerCaseLetters && password.length < passwordLength) {
//     password = password += lowerCaseLetters.charAt(Math.floor(Math.random() * lowerCaseLetters.length));
//   }
//   if (askUpperCaseLetters && password.length < passwordLength) {
//     password = password += upperCaseLetters.charAt(Math.floor(Math.random() * upperCaseLetters.length));

//   }
//   if (askNumbers && password.length < passwordLength) {
//     password = password += numbers.charAt(Math.floor(Math.random() * numbers.length));

//   }
//   if (askSymbols && password.length < passwordLength) {
//     password = password += symbols.charAt(Math.floor(Math.random() * symbols.length));
//   }
