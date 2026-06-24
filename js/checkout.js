const cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryItems = document.getElementById("summaryItems");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

// SHOW CART ITEMS
cart.forEach((item) => {
  const div = document.createElement("div");

  const price = parseInt(item.price.replace(/[^\d]/g, ""));
  total += price * item.quantity;

  div.innerHTML = `
    <div style="display:flex; gap:10px; align-items:center;">
      
      <img src="${item.image}" width="60" height="60" style="object-fit:cover; border-radius:8px;">

      <div>
        <p><b>${item.name}</b></p>
        <p>Qty: ${item.quantity}</p>
        <p>${item.price}</p>
      </div>

    </div>
  `;

  summaryItems.appendChild(div);
});

totalAmount.innerText = "Total: ₹" + total;

// PLACE ORDER
document.getElementById("placeOrder").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !address || !phone) {
    showToast("Please fill all details", "error");
    return;
  }

  const order = {
    customer: { name, address, phone },
    items: cart,
    total: total,
    date: new Date().toLocaleString(),
  };

  localStorage.setItem("order", JSON.stringify(order));

  // CLEAR CART
  localStorage.removeItem("cart");

  showToast("Order Placed Successfully!", "success");

  window.location.href = "./order-success.html";
});
