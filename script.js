// Function to get a random result for the computer's choice
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    // Generate a random index to select a choice from the options array
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
  // Function to determine if the player has won the round
  function hasPlayerWonTheRound(player, computer) {
    return (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    );
  }
  
  // Initialize player and computer scores
  let playerScore = 0;
  let computerScore = 0;
  
  // Function to get the results of a round based on the player's choice
  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
  
    // Check if the player won the round
    if (hasPlayerWonTheRound(userOption, computerResult)) {
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else if (computerResult === userOption) {
      // If both chose the same option, it's a tie
      return `It's a tie! Both chose ${userOption}`;
    } else {
      // Otherwise, the computer wins the round
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
  }
  
  // Get references to HTML elements
  const playerScoreSpanElement = document.getElementById("player-score");
  const computerScoreSpanElement = document.getElementById("computer-score");
  const roundResultsMsg = document.getElementById("results-msg");
  const winnerMsgElement = document.getElementById("winner-msg");
  const optionsContainer = document.querySelector(".options-container");
  const resetGameBtn = document.getElementById("reset-game-btn");
  
  // Function to show the results of a round
  function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption);
    computerScoreSpanElement.innerText = computerScore;
    playerScoreSpanElement.innerText = playerScore;
  
    // Check if either player or computer has won the game
    if (playerScore === 3 || computerScore === 3) {
      winnerMsgElement.innerText = `${
        playerScore === 3 ? "Player" : "Computer"
      } has won the game!`;
  
      // Display the reset button and hide the options container
      resetGameBtn.style.display = "block";
      optionsContainer.style.display = "none";
    }
  }
  
  // Function to reset the game
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
  }
  
  // Add event listener to the reset button
  resetGameBtn.addEventListener("click", resetGame);
  
  // Get references to the option buttons
  const rockBtn = document.getElementById("rock-btn");
  const paperBtn = document.getElementById("paper-btn");
  const scissorsBtn = document.getElementById("scissors-btn");
  
  // Add event listeners to the option buttons to handle user choices
  rockBtn.addEventListener("click", function () {
    showResults("Rock");
  });
  
  paperBtn.addEventListener("click", function () {
    showResults("Paper");
  });
  
  scissorsBtn.addEventListener("click", function () {
    showResults("Scissors");
  });
  
  
