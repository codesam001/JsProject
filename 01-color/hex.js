const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//  ye number and alphabate is liye  likhe hai taki inko mila ke ek automatically ek haxcolor ban jaye #f15025   

const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener("click", function() {
let hexColor = "#";  // taki color ke first me # lag jaaye 
for (let i = 0; i < 6; i++) {   // why 6 because we have 6  value over there and each and every time we will get random value
  hexColor += hex[getRandomNumber()];
}
console.log(hexColor);


color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
return Math.floor(Math.random() * hex.length);
}



