 let computerScore = 0;
    let humanScore = 0;

    function getComputerChoice() {
      let randomNum = Math.floor(Math.random() * 3);
      if (randomNum === 0) return "rock";
      if (randomNum === 1) return "paper";
      return "scissor";
    }

    function playRound(playerSelection) {
      let computerSelection = getComputerChoice();

      if (playerSelection === computerSelection) {
        document.getElementById("result").textContent = `It's a tie! Both chose ${playerSelection}.`;
      } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        humanScore++;
        document.getElementById("result").textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
      } else {
        computerScore++;
        document.getElementById("result").textContent = `You lose this round! ${computerSelection} beats ${playerSelection}`;
      }

      // Update running score
      document.getElementById("score").textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

      // Announce winner at 5 points
      if (humanScore === 5) {
        document.getElementById("result").textContent = "🎉 You won the game!";
        disableButtons();
      } else if (computerScore === 5) {
        document.getElementById("result").textContent = "💀 Computer won the game!";
        disableButtons();
      }
    }

    function disableButtons() {
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissor").disabled = true;
    }

    // Event listeners for player buttons
    document.getElementById("rock").addEventListener("click", () => playRound("rock"));
    document.getElementById("paper").addEventListener("click", () => playRound("paper"));
    document.getElementById("scissor").addEventListener("click", () => playRound("scissor"));
