// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//setting the variables and starting the function for generating the math problem

let randomNumber1 = Math.floor(Math.random() * 100 + 1);
let randomNumber2 = Math.floor(Math.random() * 100 + 1);

document.getElementById("problem").innerHTML= randomNumber1 + "+" + randomNumber2;

	//this is the function to see if the answer is correct or not
function checkAnswer() {
	let answer = document.getElementById("answer").value;
	let feedback;

		let sum = randomNumber1 + randomNumber2;
		if (answer == sum) {
		 feedback = "Correct!";
		}
		else if (answer == "") {
			feedback = "Please enter an answer."
		}
		else {
		feedback = "Sorry, try again!"
		}

	//Output
		document.getElementById("output").innerHTML= feedback;
	
}
//fuction for allowing the page to reload for new problem. This way the user can still work on the problem until they get it right or they can create another problem to answer. 

function reload() {
	window.location.reload(true);
}
  