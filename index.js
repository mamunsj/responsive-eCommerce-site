let userBtn = document.getElementById('user-btn');
let userCart = document.querySelector('.login-form')

let shoppingCart = document.querySelector(".shopping-cart");
let cartBtn = document.getElementById("cart-btn");

let searchElem = document.querySelector('.search-box');
let searchBtn = document.getElementById('src-btn');

let menuBtn = document.getElementById('menu-btn');
let navBar = document.querySelector(".navbar");


window.onscroll = () => {
   searchElem.classList.remove("active");
   shoppingCart.classList.remove("active");
   userCart.classList.remove("active");
   navBar.classList.remove('active')
}
menuBtn.addEventListener('click', () =>{
navBar.classList.toggle('active')
 searchElem.classList.remove("active");
 shoppingCart.classList.remove("active");
 userCart.classList.remove("active");
})


searchBtn.addEventListener('click', ()=>{
    searchElem.classList.toggle('active')
    shoppingCart.classList.remove('active')
    userCart.classList.remove('active')
       navBar.classList.remove("active");
})

cartBtn.addEventListener("click", () => {
  userCart.classList.remove("active");
  shoppingCart.classList.toggle("active");
  searchElem.classList.remove("active")
     navBar.classList.remove("active");

});


userBtn.addEventListener("click", () => {
  userCart.classList.toggle("active");
  searchElem.classList.remove("active");
  shoppingCart.classList.remove('active')
     navBar.classList.remove("active");
});


 var swiper = new Swiper(".products-slider", {
   loop: true,
   spaceBetween: 20,
   autoplay:{
      delay:5600,
      disableOnInteraction: false
   },
   counteredSlides:true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });



 var swiper = new Swiper(".review-slider", {
   loop: true,
   spaceBetween: 20,
   autoplay: {
     delay: 5600,
     disableOnInteraction: false,
   },
   counteredSlides: true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });