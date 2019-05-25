// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//js program 1 
function getVolume() {
//INPUT: get height of the cylinder(h) and the radius (r)

  //PROCESS: compute the volume of a cylinder using v=2h
  let r = parseFloat(document.getElementById('radius').value);
  let h = parseFloat(document.getElementById('height').value);

  //processing V=πr2h
  let volume = Math.PI*Math.pow(r,2) * h / 61.024;
  
  //Output Volume of Cylinder
  document.getElementById('output').innerHTML= volume.toFixed(2);
}