// Get Current Date
let today = new Date(); // new Date object
// now concatenate formatted output
let date = (today.getMonth()+1) + " / " +  today.getDate() + " / " + today.getFullYear();
document.getElementById('currentdate').innerHTML = date;

//js program 1
function addName() {
//input
let name = document.getElementById('fristname').value;
//processing
let scripture = 'And it came to pass that I, <span class="highlight">' + name + '</span>, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them. Nephi 1 3:7';
  
 //Original
 //let scripture = "And it came to pass that I, " + name + ", said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them. Nephi 1 3:7";
//output
  document.getElementById('output').innerHTML = scripture;
}