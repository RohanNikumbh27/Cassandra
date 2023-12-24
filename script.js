const sidebar1 = document.querySelector('.sidebar1');
const sidebar2 = document.querySelector('.sidebar2');
const menuImg = document.querySelector('.menu-img');

let cart = 0;
function addtocart(){
  
  cart = cart + 1;
  let cartv = document.querySelector('.cart').innerHTML = cart;
}
let sidebarOpen = false;

menuImg.addEventListener('click', () => {
  if (sidebarOpen) {
    // Close sidebars
    sidebar1.style.left = '-100%';
    setTimeout(() => {
      sidebar2.style.left = '-100%';
      sidebarOpen = false;
    }, 50);
  } else {
    // Open sidebars in sequence
    sidebar2.style.left = '0';
    setTimeout(() => {
      sidebar1.style.left = '0';
      sidebarOpen = true;
    }, 100);
  }
});
