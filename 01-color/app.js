const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    //get random number between 0-4 (counting will start with 0  because of arrey) because I have 3 color remember the color is in array to counting will start with  0, 1,2,3..... 
  const randomNumber = getRandomNumber(); // it will generate random color
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];  //ye select karega ki kaha per color chage karna hai jese is case mai background color chage karna hai
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}



//Math.floor what it will do 2.9=2, 6.66=6,0.6=0, -2.1=-3, -6.99=7 thats what Math.floor do
















