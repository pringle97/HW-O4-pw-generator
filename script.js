
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




button.addEventListener('click', (event) => {

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
    let password = '';
    
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random(random) * passwordString.length)
      let randomLetter = passwordString[randomNumber];
      password += randomLetter
    }

    document.getElementById("password").innerHTML = password;

  }

});

