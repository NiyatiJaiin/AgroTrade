const searchIcon = document.getElementById("searchIcon");
const searchModal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchSubmit");

// OPEN SEARCH MODAL
searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchModal.classList.add("active");
  searchInput.focus();
});

// CLOSE MODAL WHEN CLICKING OUTSIDE
searchModal.addEventListener("click", (e) => {
  if (e.target === searchModal) {
    searchModal.classList.remove("active");
  }
});

// SEARCH FUNCTION
function searchProduct() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) return;

  // match query with your product keys
  const productKeys = ["mango", "honey", "rice", "tomato", "apple", "carrot", "spinach", "peas", "onion", "potato", "almond", "banana"];

  const matchedProduct = productKeys.find(key =>
    key.toLowerCase() === query
  );

  if (matchedProduct) {
    localStorage.setItem("selectedProduct", matchedProduct);
    window.location.href = "/html/product.html";
  } else {
    showToast("Product not found","error");
  }
}

// BUTTON CLICK
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchProduct();
});

// ENTER KEY SEARCH
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchProduct();
  }
});