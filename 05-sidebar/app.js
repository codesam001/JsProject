const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {

//   if (sidebar.classList.contains("show-sidebar")) {
//     sidebar.classList.remove("show-sidebar");
//   } else {
//     sidebar.classList.add("show-sidebar");
//   }
  sidebar.classList.toggle("show-sidebar");  //this is to open sidebar
});

//this is to close sidebar 
closeBtn.addEventListener("click", function () {     // closeBtn isliye kiya kyuki isko click karke close karna hai 
  sidebar.classList.remove("show-sidebar");          //sidebar isliye kiya kyuki wha se hat jayega jab me closeBtn per click karuga 
});






















