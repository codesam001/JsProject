const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {   
  const id = e.target.dataset.id;  // secont wali .id which means ki har content(button) ki diffrent id hai iska matlb jis button per click kare uska content show ho jaye 
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      //iska matcb yadhi me kese ot button per click karta hu to pahle wala paragraph hat jayega
    });
    e.target.classList.add("active");
    // hide other articles  ----   means jo matching id hoge wo he articles show hoga
    articles.forEach(function (article) {
     
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});






