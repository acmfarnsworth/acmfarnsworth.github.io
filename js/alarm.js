// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//onlick - check to see what day it is. 
//If weekday, can not sleep in
//Else if weekend or holiday, YES can sleep in
//Output: State whether or not user can sleep in today. 

let dayOfWeek = new Date().getDay();
let month = today.getMonth()+1;
let mydate = today.getDate();

function sleepIn() {
	let result = "error";

if ((month == 1 && mydate == 1) || (month == 7 && mydate == 4) ||  (month == 12 && mydate == 25) || (dayOfWeek == 0 || dayOfWeek == 6)){
	result = "You get to sleep in!";
}
else {
	result = "Boo! Time to get up!";
}
document.getElementById("answer").innerHTML = result;
}