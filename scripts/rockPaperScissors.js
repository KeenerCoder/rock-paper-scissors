
// Create variable to store playerSelection
let playerSelection;
// Create variable to store computerSelection
let computerSelection;
// Create variable to store roundResult
let roundResult;
// Create variable to store selection options
const selectionOptions = ["rock", "paper", "scissors"];
// Create variable to store playerWinCount initialze to zero
let playerWinCount = 0;
// Create variable to store computerWinCount initialize to zero
let computerWinCount = 0;
// Create variable to store gameResult
let gameResult;


game();
game();
game();
game()
game();

// Message user with declared result (winner/loser/tie)
if (playerWinCount > computerWinCount)
    gameResult = `You win ${playerWinCount} to ${computerWinCount}.`;
else if (playerWinCount < computerWinCount)
    gameResult = `You lose ${computerWinCount} to ${playerWinCount}.`;
else
    gameResult = `Game ended in draw of ${computerWinCount} to ${playerWinCount}.`;

console.log(gameResult);


function game() {

    // Prompt user input for Rock, Paper, Scissors
    // Store user selection into variable
    playerSelection = promptUserForSelection();

    // Ensure input is compared case-insensitve
    // make use response lowercase
    playerSelection = makeUserSelectionLowerCase(playerSelection);
    // validate user selection is one of the valid options
    // while not valid send message to user to reenter valid response
    // while (isUserSelectionValid(!playerSelection)) {
    //     // Prompt user input for Rock, Paper, Scissors
    //     // Store user selection into variable
    //     playerSelection = promptUserForSelection();

    //     // Ensure input is compared case-insensitve
    //     // make use response lowercase
    //     playerSelection = makeUserSelectionLowerCase(playerSelection);
    // }
    // if valid user selection then computer will generate random selection
    computerSelection = computerPlay();
    //determine user result (win/lose/tie) based on rules
    // compare user selection to computer selection
    // determine if user is winner or loser based on rules

    console.log(determinePlayerResult(playerSelection, computerSelection));
    // message user the user's result
}



function promptUserForSelection() {
    return prompt("Please enter rock, paper, or scissors");
}
function makeUserSelectionLowerCase(selection) {
    return selection.toLowerCase();
}

function isUserSelectionValid(selection) {
    return (seletion === selectionOptions[0] || // rock
        selection === selectionOptions[1] || // paper
        selection === selectionOptions[2]); // scissors
}

// Have computer randomly choose rock, paper, or scissors
function computerPlay() {
    // Choose a random valid option
    // Start off by creating a random value up to the number of options
    // in this case there are 3 options (rock, paper, scissors)
    let optionNumber = Math.floor(Math.random() * selectionOptions.length)
    return selectionOptions[optionNumber];
}

function determinePlayerResult(playerSelection, computerSelection) {
    // compare user selection to computer selection
    // determine user result (win/lose/tie) based on rules
    //        rules: rock beats scissors
    //                paper beats rock
    //               scissors beats paper

    if (playerSelection === computerSelection) // tie 
    {
        roundResult = `Tie! Both chose ${playerSelection}.`;
        return roundResult; // no need to look any further
    }
    else if (playerSelection === selectionOptions[0]) //rock
    {
        if (computerSelection === selectionOptions[1]) // paper
        {
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}.`;
            computerWinCount++;
        }
        else if (computerSelection === selectionOptions[2]) // scissors
        {
            roundResult = `You win! ${playerSelection} beats ${computerSelection}.`;
            playerWinCount++;
        }
    }
    else if (playerSelection === selectionOptions[1]) //paper
    {
        if (computerSelection === selectionOptions[2]) // scissors
        {
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}.`;
            computerWinCount++;
        }
        else if (computerSelection === selectionOptions[0]) // rock
        {
            roundResult = `You win! ${playerSelection} beats ${computerSelection}.`;
            playerWinCount++;
        }
    }
    else if (playerSelection === selectionOptions[2]) //scissors
    {
        if (computerSelection === selectionOptions[0]) // rock
        {
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}.`;
            computerWinCount++;
        }
        else if (computerSelection === selectionOptions[1]) // paper
        {
            roundResult = `You win! ${playerSelection} beats ${computerSelection}.`;
            playerWinCount++;
        }
    }
    return roundResult;
}
// Store computer selection into variable

// Determine winner: person or computer (or tie)
//      compare user selection value to computer selection value


// Message user the result of match
