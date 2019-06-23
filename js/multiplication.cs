// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date; 

function showTable() {
	let number = parseInt(document.getElementById("number").value);
	let timeTable = "";

	for (let i = 1; i <= 12; i++) {
		timeTable += number + "x" + i + "=" + number * i + "<br>";
	}

	document.getElementById("answer").innerHTML = timeTable;
}