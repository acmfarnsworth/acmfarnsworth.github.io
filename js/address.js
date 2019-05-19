// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//js program 2
function getAddress() {
//input
let city = document.getElementById('city').value;
let state = document.getElementById('state').value;
let zip = document.getElementById('zipcode').value;
//processing
let address = city + ', ' + state + ' ' + zip;
//output
  document.getElementById('output').innerHTML = address;
}