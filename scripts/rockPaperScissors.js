
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
// Create variable to store matchResult
let matchResult;
let divRound = document.querySelector("#roundResult");
let divScore = document.querySelector("#runningScore");
let divMatch = document.querySelector("#matchResult");


let rock = document.querySelector("#rock");
rock.addEventListener("click", function (e) {
    playRound(this.id);
})

let paper = document.querySelector("#paper");
paper.addEventListener("click", function (e) {
    playRound(this.id);
})

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", function (e) {
    playRound(this.id);
})
divMatch.style.fontbold = true;
divMatch.textContent = matchResult;




function playRound(id) {

    // If match is already done, then reset all the values
    if (divMatch.innerHTML.length > 0) {
        resetMatch();
    }

    // Prompt user input for Rock, Paper, Scissors
    // Store user selection into variable
    playerSelection = id.toString();

    // Ensure input is compared case-insensitve
    // make use response lowercase
    playerSelection = makeUserSelectionLowerCase(playerSelection);
    // validate user selection is one of the valid options
    // while not valid send message to user to reenter valid response

    // if valid user selection then computer will generate random selection
    computerSelection = computerPlay();
    //determine user result (win/lose/tie) based on rules
    // compare user selection to computer selection
    // determine if user is winner or loser based on rules
    roundResult = determineRoundResult(playerSelection, computerSelection);
    divRound.innerHTML += roundResult + "<br/>";

    displayScore();

    if (isMatchFinished()) {
        declareWinner();
    }

    // message user the user's result
}

function resetMatch() {
    computerWinCount = 0;
    playerWinCount = 0;
    divScore.innerHTML = "";
    divMatch.innerHTML = "";
    divRound.innerHTML = ""
}


function isMatchFinished() {
    return (computerWinCount === 5 || playerWinCount === 5);
}
function displayScore() {
    divScore.innerHTML = `Your score: ${playerWinCount} Computer score: ${computerWinCount}`;
}

function declareWinner() {
    // Message user with declared result (winner/loser/tie)
    if (playerWinCount > computerWinCount) {
        divMatch.style.color = "green";
        matchResult = `You win ${playerWinCount} to ${computerWinCount}.`;
    }
    else if (playerWinCount < computerWinCount) {
        divMatch.style.color = "red";
        matchResult = `You lose ${computerWinCount} to ${playerWinCount}.`;
    }
    else
        matchResult = `Game ended in draw of ${computerWinCount} to ${playerWinCount}.`;

    divMatch.innerHTML = matchResult;

}

function promptUserForSelection() {
    return prompt("Please enter rock, paper, or scissors");
}
function makeUserSelectionLowerCase(selection) {
    return selection.toLowerCase();
}

function isUserSelectionValid(selection) {
    return (selection === selectionOptions[0] || // rock
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

function determineRoundResult(playerSelection, computerSelection) {
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
            roundResult = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
            computerWinCount++;
        }
        else if (computerSelection === selectionOptions[2]) // scissors
        {
            roundResult = `You win! ${playerSelectioncccc} beats ${computerSelection.toUpperCase()}.`;
            playerWinCount++;
        }
    }
    else if (playerSelection === selectionOptions[1]) //paper
    {
        if (computerSelection === selectionOptions[2]) // scissors
        {
            roundResult = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
            computerWinCount++;
        }
        else if (computerSelection === selectionOptions[0]) // rock
        {
            roundResult = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
            playerWinCount++;
        }
    }
    else if (playerSelection === selectionOptions[2]) //scissors
    {
        if (computerSelection === selectionOptions[0]) // rock
        {
            roundResult = `You lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
            computerWinCount++;
        }
        else if (computerSelection === selectionOptions[1]) // paper
        {
            roundResult = `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
            playerWinCount++;
        }
    }
    return roundResult;
}
// Store computer selection into variable

// Determine winner: person or computer (or tie)
//      compare user selection value to computer selection value


// Message user the result of match
