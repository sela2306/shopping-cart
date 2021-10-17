const productsDiv = document.querySelector(".products");

//render array of products object
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
          <button type="button" class="btn btn-primary mt-2" onClick="addToCart(${product.id})">Add to cart</button>
          </div>
        </div>
        </div>
        </div>
        `;
    });
}

render();

let cart = [];
function addToCart(id) {
//  console.log(id);
if(cart.some((item) => item.id === id)) {
    alert("Product already in the cart!");
} else {
    const item = products.find((product) => product.id === id);
    // console.log(item);
    cart.push({
        ...item,
        numberOfUnits : 1
    });
    console.log("Cart Array..", cart);
}
    
}

