const products = {
  mango: {
    name: "Alphonso Mangoes",
    price: "₹120/kg",
    image: "../images/newProduct1.jpg",
    description:
      "Freshly harvested Alphonso Mangoes sourced directly from trusted farmers. Naturally ripened, juicy and rich in flavor.",
  },

  honey: {
    name: "Organic Honey",
    price: "₹250",
    image: "../images/honey.jpg",
    description:
      "Pure organic honey collected naturally from trusted bee farms. Rich in nutrients and completely chemical-free.",
  },

  rice: {
    name: "Basmati Rice",
    price: "₹180/kg",
    image: "../images/rice.jpg",
    description:
      "Premium quality long grain basmati rice with rich aroma and authentic taste.",
  },

  tomato: {
    name: "Fresh Tomatoes",
    price: "₹40/kg",
    image: "../images/tomatoes.jpg",
    description:
      "Farm fresh juicy tomatoes delivered directly from local farmers. Perfect for daily cooking.",
  },

  apple: {
    name: "Red Apples",
    price: "₹180/kg",
    image: "../images/newProduct2.jpg",
    description:
      "Fresh and crispy Red Apples packed with natural sweetness and essential nutrients. Sourced directly from trusted orchards for maximum freshness.",
  },

  carrot: {
    name: "Fresh Carrots",
    price: "₹35/kg",
    image: "../images/newProduct3.jpg",
    description:
      "Farm-fresh carrots rich in vitamins, antioxidants, and natural flavor. Perfect for salads, juices, and everyday cooking.",
  },

  spinach: {
    name: "Organic Spinach",
    price: "₹25/bunch",
    image: "../images/newProduct4.jpg",
    description:
      "Fresh organic spinach grown without harmful chemicals. Rich in iron, vitamins, and minerals to support a healthy lifestyle.",
  },

  peas: {
    name: "Green Peas",
    price: "₹60/kg",
    image: "../images/peas.jpg",
    description:
      "Tender and naturally sweet green peas harvested at peak freshness. Ideal for curries, pulao, soups, and healthy meals.",
  },

  onion: {
    name: "Fresh Onions",
    price: "₹40/kg",
    image: "../images/onion.jpg",
    description:
      "Premium quality onions with excellent flavor and freshness. A kitchen essential for enhancing the taste of every dish.",
  },

  potato: {
    name: "Farm Fresh Potatoes",
    price: "₹30/kg",
    image: "../images/potatoes.jpg",
    description:
      "Carefully selected farm-fresh potatoes with smooth texture and great taste. Perfect for frying, boiling, roasting, and daily cooking.",
  },

  almond: {
    name: "Premium Almonds",
    price: "₹650/kg",
    image: "../images/almonds.jpg",
    description:
      "Crunchy and nutritious almonds packed with protein, healthy fats, and essential nutrients. Ideal for snacking and healthy diets.",
  },

  banana: {
    name: "Fresh Bananas",
    price: "₹50/dozen",
    image: "../images/banana.jpg",
    description:
      "Naturally ripened bananas rich in potassium and energy. Freshly sourced from farms and perfect for a healthy daily snack.",
  },
};

/* LOAD PRODUCT */

const selectedProduct = localStorage.getItem("selectedProduct");

if (selectedProduct && products[selectedProduct]) {
  const product = products[selectedProduct];

  document.getElementById("productName").textContent = product.name;

  document.getElementById("productPrice").textContent = product.price;

  document.getElementById("productDescription").textContent =
    product.description;

  console.log(product.image);
  document.getElementById("productImage").src = product.image;
}

/* QUANTITY */

const plusBtn = document.getElementById("plus");

const minusBtn = document.getElementById("minus");

const quantity = document.getElementById("quantity");

let count = 1;

plusBtn.addEventListener("click", () => {
  count++;

  quantity.textContent = count;
});

minusBtn.addEventListener("click", () => {
  if (count > 1) {
    count--;

    quantity.textContent = count;
  }
});

/* RELATED PRODUCTS */

const viewButtons = document.querySelectorAll(".view");

viewButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.dataset.product;

    localStorage.setItem("selectedProduct", product);
  });
});

/* ADD TO CART */

const addToCartBtn = document.getElementById("addToCart");

addToCartBtn.addEventListener("click", () => {
  const product = {
    name: document.getElementById("productName").textContent,

    price: document.getElementById("productPrice").textContent,

    image: document.getElementById("productImage").src,

    quantity: count,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find((item) => item.name === product.name);

  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("Product Added To Cart!", "success");
});
