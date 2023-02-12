// get only unique categories - hardest one
// iterate over categories return buttons 
// make sure to select buttons when they are available 


// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 40.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
 
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector('.btn-container')



//load item
window.addEventListener("DOMContentLoaded", function () {
displayMenuItems(menu)
displayMenuButtons();
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function (item){
    // console.log(item);
    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    // now we have to join it in one string because I want to place them in one section 
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu;
}



function displayMenuButtons(){
// Button start from here 
const categories = menu.reduce(
  function (values, item) {
  if (!values.includes(item.category)){  //if the item not in arrey than please add that specific value which you have in item  category 
    values.push(item.category);
  }
return values;  //if item category in already in my arrey than just  return the arrey 
},
["all"] 
);  //string of all ["all"] because I also have all button that refrence all items this is not my category so i have add it manually

// ye section isliye hai ki button show ho 
const categoryBtns = categories.map(function(category){
  return `<button 
  class="filter-btn" 
  type="button" 
  data-id="${category}">
  ${category}
  </button>`

}).join("");
container.innerHTML = categoryBtns;
const filterBtns = container.querySelectorAll('.filter-btn')



// filter ---- ye wala section isliye hai ki buttons per click karke kuch open ho 
filterBtns.forEach(function(btn){
  btn.addEventListener('click', function (e) {
const category = e.currentTarget.dataset.id;   //.id is from date-id data- to likhne he hai datasat me lekin id ke jaghe kuch v likh sakte ho
const menuCategory = menu.filter(function (menuItem){  //ye filer function sabko filter yni diffrenciate karne ke liye hai
  // console.log(menuItem.category)
  if(menuItem.category === category){  //jo ye first wali category likhe hai wo arrey (const menu) ke category hai 
    return menuItem
  }
})
// console.log(menuCategory)
if(category==='all'){   //ye category manu(arrey) wali nhi hai 
  displayMenuItems(menu)  //yadhi hamara category all ke equal hoo jata hai to hmko saare item display honge 
}
else{
  displayMenuItems(menuCategory)  //yadhi hamara category waha hai to too brackfast lunch ya shakes display hoga ynni jispay aap click karoge
}
  })
})

}






