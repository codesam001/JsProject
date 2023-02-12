(function() {
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let equal = document.querySelector('.btn-equal');


buttons.forEach(function(button){      // foreach because to check which button was pressed
button.addEventListener('click', function(e) {      //ager kohe button per click karta hai to
    let value = e.target.dataset.num;     //ager kohe kise button ko click karta hai to mai us button ko store karuga 
    screen.value += value;      //mai us button ko screen per dikhana chahata hu 
})
});

equal.addEventListener('click', function(e){
    if (screen.value === ''){
        screen.value = "Please Enter";
    } else {
        let answer = eval(screen.value);
        screen.value = answer;
    }
})
clear.addEventListener('click', function(e){
    screen.value = "";
})


})();































































