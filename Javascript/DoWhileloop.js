function basicDoWhileLoop() {
    let i = 1;
    do {
      console.log(i);
      i++;
    } while (i <= 5);
  }

  basicDoWhileLoop();


  
  function validatePassword() {
    let password;
    do {
      password = prompt("Enter a password (at least 7 characters):");
    } while (password.length < 7);
    return password;
  }
  
  console.log(validatePassword());

  function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;
  
    do {
      guess = parseInt(prompt("Guess a number between 1 and 10:"));
      attempts++;
      if (guess !== randomNumber) {
        console.log("Incorrect. Try again.");
      }
    } while (guess !== randomNumber);
  
    console.log("Congratulations! You guessed the number in " + attempts + " attempts.");
  }
  
  guessNumber();