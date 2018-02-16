

    // Possible computer choices
    var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Grab all HTML Elements and store in variables
    // var userHTML = document.getElementById('userGuess');
        //var computerHTML = document.getElementById('computer-guess');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guessesLeft');
    var guessesSofarHTML = document.getElementById('guessesSofar[]');

    // Wins/Losses/Guesses Left/Guesses so far
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSofar = [];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // capture user input
      var userGuess = event.key;

      // randomly pick a letter from the computerChoices array using Math.random()
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // run if/else statement checking to see if user input matches r/p/s
      if (userGuess === computerGuess){
        // Run Game
          wins++ && guessesLeft--;
        if (userGuess !== computerGuess) {
            wins-- && guessesLeft--;
          }
        
        
        //Write results to HTML
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;
        guessesSofarHTML.textContent = guessesSofar;

      }  
    };
