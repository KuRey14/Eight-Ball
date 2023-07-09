let userName = ''; // Your Name (optional)

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

console.log('') // Space

let userQuestion = '' //Put your question inside quotes

userName ? console.log(`${userName}, you want to know the answer of \'${userQuestion}\'.`) : console.log(`Hm, you want to know the answer of \"${userQuestion}\"`);

console.log('')

let randomNumber = Math.floor(Math.random() * 8); //Take random number from 0 to 7
let eightBall = randomNumber.toString(); //Make it string and give to another variable

switch (eightBall) {
  case '0':
    console.log('It is certain');
    break;
  case '1':
    console.log('It is decidedly so');
    break;
  case '2':
    console.log('Reply hazy try again');
    break;
  case '3':
    console.log('Cannot predict now');
    break;
  case '4':
    console.log('Do not count on it');
    break;
  case '5':
    console.log('My sources say no');
    break;
  case '6':
    console.log('Outlook not so good');
    break;
  case '7':
    console.log('Signs point to yes');
    break;
  default:
    console.log('Error #999 (FATE CHANGES)');
    break;
}
