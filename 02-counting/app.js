//set initial count 
let count = 0;
//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// console.log(btns)



btns.forEach(function (btn) {    //forEach will give you value  one by one 
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;  //classList Property return css property of element 
      if (styles.contains("decrease")) {  //ydi kohe dicrease per click kare to  1 number minus kar dena 
        count--;
      } else if (styles.contains("increase")) {   //ydi kohe increase per click kare to  1 number add kar dena 
        count++;
      } else {
        count = 0;   
      } 
  
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
      value.textContent = count;
    });
  });
  









  