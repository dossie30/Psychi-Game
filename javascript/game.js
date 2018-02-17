

    // Grab DOM/HTML Elements and store in variables
    var userGuessHTML = document.getElementById('user-guess');
    var computerGuessHTML = document.getElementById('computer-guess');
    var winsHTML = document.getElementById('wins');
    var lossesHTML = document.getElementById('losses');
    var guessesLeftHTML = document.getElementById('guessesLeft'); 
    var guessesSofarHTML = document.getElementById('guessesSofar')

    // Create a variable array to hold possible computer choices (r,p,s)
    var choices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // Create variables for wins/losses/ties
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSofar = [];

    // Whenever a key is pressed, alert "pressed a button".
    document.onkeyup = function(event) {
      // Capture user's guess
      var userGuess = event.key.toLowerCase();

      // Generate a computer choice at random
      var computerGuess = choices[Math.floor(Math.random() * choices.length)];

      // Check user's guess against computer's choice with if/else statements
      if (userGuess === computerGuess) {
        // Let's run the rest of the game
          wins++;
          losses--;
          guessesLeft--;

       } else if (userGuess !== computerGuess ) {
          losses++;
          guessesLeft--;
          
        } 


        // Write results to HTML
        userGuessHTML.textContent = userGuess;
        computerGuessHTML.textContent = computerGuess;
        winsHTML.textContent = wins;
        lossesHTML.textContent = losses;
        guessesLeftHTML.textContent = guessesLeft;
        guessesSofarHTML.textContent = guessesSofar;

      };