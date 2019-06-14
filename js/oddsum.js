// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//onlick/input - check to see number is greater that 0
//run program to see if number is even or odd using %
//If ODD , add all the odd interges between 1 and number.
//Output: the sum off odd integers from 1 to number user entered. 

function oddSum() {
	
//Input: grabs the number the user entered
	let number = document.getElementById('number').value;
	let sum = 0;
	
 //Gives the user an alert if they did not enter a number greater than 0
	if(number < 1){
		alert("Please write a number greater than zero.");
		return;
	}
 
	for(let i = 1; i <= number; i++){
		
  //checks to make sure number is odd. If it is it will add up all the numbers from 1 to number user entered. 
  if((i%2) != 0) {
			sum += i;
		}
		
	}
 //Output: Displays the answer to the sum of the numbers. 
document.getElementById('answer').innerHTML = sum;
	
}