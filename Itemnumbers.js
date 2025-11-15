// ======= CART COUNTER FUNCTIONALITY =======
const cartCounter = document.getElementById("cartCounter");

function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalQty > 240) totalQty = 240; // max 24
  if (totalQty === 0) {
    cartCounter.style.display = "none";
  } else {
    cartCounter.style.display = "inline-block";
    cartCounter.textContent = totalQty;
  }
}

// ✅ Call this whenever the page loads
updateCartCounter();

// ✅ Update counter whenever a product is added to cart
addBtn.addEventListener("click", () => {
  // existing add to cart code here ...

  // after saving cart to localStorage:
  localStorage.setItem("cart", JSON.stringify(cart));

  // update counter
  updateCartCounter();
});
