//#region YEAR
var today = new Date();
document.querySelector("#year").textContent = today.getFullYear();
//#endregion

//#region NAVBAR ICON
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
//#endregion

//#region SCROLL
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");
let cardGroup = document.querySelector(".card-group");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });

      if (id === "about") {
        if (!cardGroup.classList.contains("active")) {
          setTimeout(() => {
            cardGroup.classList.add("active");
          }, 300);
        }
      } else {
        cardGroup.classList.remove("active");
      }
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});

//#endregion

//#region Scroll Reveal
ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 100,
});

/* ScrollReveal().reveal(".home-content, .about-content, .heading", {
  origin: "top",
}); */
//#endregion
