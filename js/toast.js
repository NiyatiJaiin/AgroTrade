function showToast(message, type = "success") {
  let toast = document.getElementById("toast");

  // auto-create if missing (IMPORTANT FIX)
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;

  toast.className = "toast";
  void toast.offsetWidth;

  toast.classList.add("show", type);

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}