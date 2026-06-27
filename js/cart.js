const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `
        <div class="empty-cart">
            <h2>Your Cart Is Empty</h2>
            <p>Add some fresh farm products first.</p>
        </div>
    `;

    cartTotal.textContent = "₹0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const price = parseInt(item.price.replace(/\D/g, ""));

    total += price * item.quantity;

    cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>
                <button onclick="decreaseQuantity(${index})"> - </button>
                <span class="qty">${item.quantity} </span>               
                <button onclick="increaseQuantity(${index})"> + </button>
                </p>
            </div>
            <button
            class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>
        </div>
        `;
  });

  cartTotal.textContent = "₹" + total;
}

const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is empty!", "error");
    return;
  }

  // go to checkout page instead of deleting cart
  window.location.href = "./checkout.html";
});

function removeItem(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function increaseQuantity(index) {
  cart[index].quantity++;

  localStorage.setItem("cart", JSON.stringify(cart));

  displayCart();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
  }
}

displayCart();
