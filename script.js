document.addEventListener("DOMContentLoaded", () => {
  const cartList = document.getElementById("cart-list");
  const totalElement = document.getElementById("total");
  let total = 0;
  let checkoutBtn = null;

  // Function to update checkout button visibility
  function updateCheckoutVisibility() {
    if (cartList.children.length === 0 && checkoutBtn) {
      checkoutBtn.remove();
      checkoutBtn = null;
    }
  }

  // Select all Add to Cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Get product info
      const product = button.parentElement;
      const productName = product.querySelector("p").innerText;
      const productPrice = parseInt(product.querySelector("h3").innerText);

      // Create list item
      const li = document.createElement("li");
      li.textContent = `${productName} - ${productPrice} Pesos`;

      // Create remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.style.marginLeft = "10px";
      removeBtn.addEventListener("click", () => {
        cartList.removeChild(li);
        total -= productPrice;
        totalElement.innerText = total;
        updateCheckoutVisibility(); // hide checkout if cart empty
      });

      li.appendChild(removeBtn);
      cartList.appendChild(li);

      // Update total price
      total += productPrice;
      totalElement.innerText = total;

      // Show Checkout button if not already shown
      if (!checkoutBtn) {
        checkoutBtn = document.createElement("button");
        checkoutBtn.textContent = "Checkout";
        checkoutBtn.style.marginTop = "10px";
        checkoutBtn.addEventListener("click", () => {
          alert("Congratulations!");
        });
        document.querySelector(".cart").appendChild(checkoutBtn);
      }
    });
  });
});