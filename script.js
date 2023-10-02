// var main = function (input) {
//   var myOutputValue = 'hello world';
//   console.log('hello world')
//   return myOutputValue;
// };

// var choiceArray = ["scissors", "paper", "stone", 'lizard', 'spock']
// var randomDecimal = Math.random() * choiceArray.length;
// var randomizeInt = Math.floor(randomDecimal)
// console.log(randomizeInt)
// var computerChoice = choiceArray[randomizeInt];
// console.log(computerChoice)

function getComputerChoice() {
  var choiceArray = ["scissors", "paper", "stone"]
  var randomDecimal = Math.random() * choiceArray.length;
  var randomizeInt = Math.floor(randomDecimal)
  var computerChoice = choiceArray[randomizeInt];
  return computerChoice;
}

// Draw scenario

var playGame = function (userInput) {
  var isUserInputValid = validateUserInput(userInput);
  console.log (isUserInputValid)
  if (isUserInputValid) {
    var computerChoice = getComputerChoice();
    console.log ("computer" , computerChoice)
    if (computerChoice === userInput) {
      console.log ('draw');
    } else {
      // User Win Scenario using Scissors
      if ((userInput == "scissors" && computerChoice == "paper") || (userInput == "paper" && computerChoice == "stone") || (userInput == "stone" && computerChoice == "scissors")) {
        console.log('you win')
      } else {
        console.log('you lose')
      }
    }
  } else {
    console.log('Please input again')
  }
}
var validateUserInput = function (userInput){
  if ((userInput === "paper") ||  (userInput === "stone") ||  (userInput === "scissors")) {
    return true;
  } else {
    return false;
  }
}

playGame('scissors')

