const productsDiv = document.querySelector(".products");
const cartItemsDiv = document.querySelector(".cart-items");

//render array of "products" object from "products.js"
function render(){
    products.forEach((product) => {
        productsDiv.innerHTML += `
        <div class="row p-4">
        <div class="card me-4" style="width: 18rem;">
        <img src="${product.imgSrc}" class="card-img-top mt-2" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text"><small>$${product.price}</small></p>
          <div class="add-to-cart">
          <button type="button" class="btn mt-2" onClick="addToCart(${product.id})">Add to cart</button>
          </div>
        </div>
        </div>
        </div>
        `;
    });
}

render();

//add to the cart
let cart = [];
function addToCart(id) {
 console.log(id);
if(cart.some((item) => item.id === id)) {
    alert("Product already in the cart!");
} else {
    const item = products.find((product) => product.id === id);
    // console.log(item);
    cart.push(item);      
  
    // console.log("Cart Array..", cart);
}

 updateCart();
}

//updating the cart section
function updateCart() {
    renderCartItems();
}

//rendering the cart section with selected items
function renderCartItems() {
    cartItemsDiv.innerHTML = "";
    cart.forEach((item) => {
        cartItemsDiv.innerHTML += `
            <div class="cart-item">
            <div class="item-info">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
            <div class="units">
                <div class="number">${item.quantity}</div>
            </div>
            </div>
        `;
    });

}