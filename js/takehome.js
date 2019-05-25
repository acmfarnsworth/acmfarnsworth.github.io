// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//js program 2

function getAfterTax() {
//INPUT: get hours worked, get hourly payrate

  //PROCESS: compute hours worked, hourly payrate * 15%
  let h = parseFloat(document.getElementById('hours').value);
  let pr = parseFloat(document.getElementById('payrate').value);

  let pay = "$" + (h * pr) * .85;
  
  //Output employee’s after tax pay.
  document.getElementById('output').innerHTML= pay;
}