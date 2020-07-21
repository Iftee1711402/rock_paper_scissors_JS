function getUser1Choice(userInput){
  alert('player 1');
  userInput = prompt('Player1: enter your choice between rock, paper, scissors');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  } else {
    alert("error: wrong input");
  }
}

function getUser2Choice(userInput){
  alert('player 2');
  userInput = prompt('Player2: enter your choice between rock, paper, scissors');
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    alert("error: wrong input");
  }
}

function determineWinner(user1Choice, user2Choice){
  // cheat code: if the user enters 'bomb', then the user wins, no matter what

  if(user1Choice === user2Choice){
    return 'the game was a tie';
  }
  if(user1Choice === 'rock'){
      if(user2Choice == 'paper'){
        return 'player2 won';
    } else{
        return 'player1 won';
    }
  } else if (user1Choice === 'paper'){
      if(user2Choice == 'scissors'){
        return 'player2 won';
      } else if (user2Choice === 'rock'){
        return 'player1 won';
      }
  } else if (user1Choice === 'scissors'){
      if(user2Choice === 'paper'){
        return 'player2 won';
      } else if (user2Choice === 'rock'){
        return 'player1 won';
      }
  } else if (user1Choice === 'bomb'){
      if(user2Choice === 'rock' || user2Choice === 'paper' || user2Choice === 'scissors') {
        return 'player1 won';
      }
  }
}

function playGame(){
  let user1Choice = getUser1Choice();
  console.log(user1Choice);

  let user2Choice = getUser2Choice();
  console.log(user2Choice);

  let winner = determineWinner(user1Choice, user2Choice);
  alert(winner);
}

playGame();
