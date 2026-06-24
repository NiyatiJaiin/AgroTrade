const viewButtons = document.querySelectorAll(".view");

viewButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.dataset.product;

    localStorage.setItem(
      "selectedProduct",

      product,
    );
  });
});
