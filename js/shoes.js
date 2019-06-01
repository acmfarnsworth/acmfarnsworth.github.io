// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//input - list of selections

//This this the function for which shoes to pick. The weather is calling
// the label for the options
function shoesToPick() {
  let weather = document.getElementById("weather").value;
  let shoes;
//This alerts the user if they do not selection and option.   
  if(weather == ""){
    alert("Please choose an option.");
    return;
  }
 //switch statement which goes through all the input options. So if the user picks hot they will get sandals as the output 
  switch (weather) {
      case "hot":
			shoes = "sandals";
			break;
		case "rain":
			shoes = "galoshes";
			break;
		case "snow":
			shoes = "boots";
			break;
		case "cool":
			shoes = "shoes";
			break;
     }
//This outputs what the user should wear for shoes
    document.getElementById('output').innerHTML = "You should wear " + shoes + ".";

}