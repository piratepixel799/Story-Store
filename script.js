// Simple Cart Functionality
let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(`${productName} has been added to your cart.`);
  console.log("Current Cart:", cart);
}