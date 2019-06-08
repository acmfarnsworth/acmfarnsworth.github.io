// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//get subtotal amount from customer
//after getting subtotal we want to check if the ammount is greater or less than $50
//if YES check to see if date is TUE or WED
//if YES subtract 10% from customer subtotal
//add sale tax of 6% to subtotal whether on sale or not
//output total after tax to user/customer

function finalSale() {
  let subtotal = parseInt(document.getElementById('amount').value);
  let total;
  let discount;
  let dayOfWeek = new Date().getDay();
  document.getElementById("todayIs").innerHTML=dayOfWeek;
  
  if ((subtotal > 50) && (dayOfWeek == 2 || dayOfWeek == 3)) {
      total = subtotal * 0.9 * 1.06;
      discount = subtotal * 0.1
      document.getElementById("todayIs").innerHTML= "You get 10% your total today!";
  }
  else {
    total = subtotal * 1.06;
    discount = 0
    document.getElementById("todayIs").innerHTML= "Sorry no discount today. Discount days are Tuesdays and Wedensdays. Your total is below.";
  }
  
  document.getElementById("output").innerHTML= "Total (with tax): $" + total.toFixed(2);
  document.getElementById("discount").innerHTML= "Discount: $" + discount.toFixed(2);
}