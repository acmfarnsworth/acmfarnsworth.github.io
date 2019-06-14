// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//onlick/input - run program to see if number is even or odd using % 
//If ODD output all the odd interges between 1 and number.
//Else alert user number is even and to enter another number. 
//Output: if true output sum. 

function numberGuessGame() {
	
//when they click the button it starts the function and creates a message that alerts the user as to what to do. It then allows the user to enter their guess. 
	let message =
        "I'm thinking of a number between 1 and 100.\n" +
        "Try to guess it!\n" +
        "Please enter an integer between 1 and 100.";
//uses the JS math function to create a random number for the user to guess    
	let answer = 38;
	//grabs their "guess" and creates a variable from it
    let guess;
	//counter variable that will count the attempts. 
		let counter = 0;
//post test loop which will go through until number is guessed. Will add up and end as soon as user guesses number. 
    do {
				counter ++;
        guess = parseInt(prompt(message));
			
        if (guess < answer) {
            message = guess +
            " is too low. Please enter another number.";
        }
        else if (guess > answer) {
            message = guess +
            " is too high. Please enter another number.";
        }
    } while (guess != answer);
	
		//Updates the message once the user has guessed the number.
    message = guess + " is correct! It only took you " + counter + " attempts to guess it! Great job!";
    
	//Displays the message.
	document.getElementById('answer').innerHTML = message;
	
}