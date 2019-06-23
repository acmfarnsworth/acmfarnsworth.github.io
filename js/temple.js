// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date; 

let table = document.getElementById('templeData');
let yr1 = parseInt(table.rows[1].cells[1].innerHTML);

//Processing

for (let i = 2; i < 7; i++) {
		if (parseInt(table.rows[i].cells[1].innerHTML) < yr1) {
			yr1 = parseInt(table.rows[i].cells[1].innerHTML);
			let oldTemple = (table.rows[i].cells[0].innerHTML);
			
			document.getElementById("output").innerHTML = oldTemple
		}		
	}