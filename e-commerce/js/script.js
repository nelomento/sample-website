// script.js
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
  
    // Sample product data
    const products = [
      { id: 1, name: 'Product 1', price: 20.99 },
      { id: 2, name: 'Product 2', price: 30.49 },
      { id: 3, name: 'Product 3', price: 15.99 },
      // Add more products as needed
    ];
  
    // Render products
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  
    // Function to simulate adding a product to the cart
    window.addToCart = function (productId) {
      const selectedProduct = products.find(product => product.id === productId);
      if (selectedProduct) {
        alert(`Added ${selectedProduct.name} to the cart!`);
      }
    };
  });
  