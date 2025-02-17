// Sample product data (or fetch from a server/API)
// (data.js could contain this)
const products = [
    { id: 1, name: "Product 1", price: 20, image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: 30, image: "images/product2.jpg" },
    // ... more products
];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartLink = document.getElementById('cart-link');
const cartSection = document.getElementById('cart');
let cart = []; // Initialize an empty cart

function displayProducts() {
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        displayCartItems();
    }
}

function updateCartCount() {
    document.getElementById("cart-count").textContent = cart.length;
}

function displayCartItems() {
  cartItems.innerHTML = ''; // Clear existing items

  cart.forEach(item => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(cartItemDiv);
  });
}



cartLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    cartSection.style.display = (cartSection.style.display === 'none') ? 'block' : 'none';
});

displayProducts(); // Initial product display
updateCartCount(); // Update initial cart count