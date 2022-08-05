const toppings = document.querySelectorAll(".topping");
const answerHolder = document.querySelector("#total");
console.log(answerHolder);

toppings.forEach((topping) => {
  topping.addEventListener("click", (e) => {
    console.log(topping.dataset);
  });
});

const ingredients=document.querySelectorAll(".order .topping");
ingredients.forEach((ingredient)=> {
  ingredient.addEventListener("click", ()=> {
    //ingredient.classList.add("hidden");
    ingredient.remove();
  })
})



/*
const tomatoNavButton=document.querySelector("#tomato");
console.log(tomatoNavButton);
const orderDiv = document.querySelector(".order");
tomatoNavButton.addEventListener("click", (e)=>{
  orderDiv.innerHTML +=
     '<div class="topping tomato" data-ingredient="tomato" data-price="0.30">Tomato</div>';
   });
*/
const navButtons = document.querySelectorAll("#nav .topping");
const orderDiv = document.querySelector(".order");
navButtons.forEach((navButton) => {
  navButton.addEventListener("click", ()=> {
    orderDiv.innerHTML += `<div class="topping ${navButton.dataset.ingredient}" data-ingredient=${navButton.dataset.ingredient} data-price=${navButton.dataset.price}>${navButton.dataset.ingredient.charAt(0).toUpperCase() + navButton.dataset.ingredient.slice(1)}</div>`;
  });
});

let numInCart=0;
const cartButton=document.querySelector("#cart");
const cartShow=document.querySelector("#Cart");
let allTotal=0;
cartButton.addEventListener("click", ()=> {
  numInCart+=1;
  cartShow.innerHTML= `Items in Cart: ${numInCart}`;
  let total=0;
  const ingredients=document.querySelectorAll(".order .topping");
  ingredients.forEach((ingredient)=> {
    total+=Number(ingredient.dataset.price);
  });
  allTotal+=total;
  answerHolder.innerHTML = `Total Cost: $${allTotal}`;
})

const checkoutButton=document.querySelector("#checkoutbutton");

checkoutButton.addEventListener("click", (e)=> {
  alert(`Your total cost is ${allTotal}. Please enter all your card information...`)
})
  


