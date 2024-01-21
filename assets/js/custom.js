
// JavaScript for Navbar Toggle and Active Navigation Item
const navToggler = document.querySelector(".nav-toggler");
   navToggler.addEventListener("click", navToggle);

   function navToggle() {
      navToggler.classList.toggle("active");
      const nav = document.querySelector(".nav");
      nav.classList.toggle("open");
      if (nav.classList.contains("open")) {
         nav.style.maxHeight = nav.scrollHeight + "px";
      } else {
         nav.removeAttribute("style");
      }
   }
// JavaScript to make the navbar sticky

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

window.addEventListener("scroll", () => {
   if (window.scrollY > headerHeight) {
      header.classList.add("sticky");
   } else {
      header.classList.remove("sticky");
   }
});