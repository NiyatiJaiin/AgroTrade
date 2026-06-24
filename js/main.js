const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");
const logoutLink = document.getElementById("logoutLink");

if (localStorage.getItem("loggedIn") === "true") {
  loginLink.style.display = "none";
  signupLink.style.display = "none";
  logoutLink.style.display = "inline-block";
} else {
  logoutLink.style.display = "none";
}

logoutLink.addEventListener("click", function () {
  localStorage.removeItem("loggedIn");

  showToast("Logged Out Successfully", "success");

  setTimeout(() => {
  window.location.href = "../index.html";
}, 500);
});

const viewButtons = document.querySelectorAll(".view-btn");

viewButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.dataset.product;

    localStorage.setItem("selectedProduct", product);
  });
});
