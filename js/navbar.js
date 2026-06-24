const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");

if (hamburger && navlist) {
  hamburger.addEventListener("click", function (e) {
    e.preventDefault();

    navlist.classList.toggle("active");

    console.log(navlist.className);
  });
}
