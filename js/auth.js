// SIGNUP

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
      name: document.getElementById("signupName").value,

      email: document.getElementById("signupEmail").value,

      password: document.getElementById("signupPassword").value,
    };

    localStorage.setItem("user", JSON.stringify(user));

    showToast("Account Created Successfully!", "succes");

    window.location.href = "login.html";
  });
}

// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;

    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("loggedIn", "true");

      showToast("Login Successful", "success");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 500);
    } else {
      showToast("Invalid Email or Password", "error");
    }
  });
}
