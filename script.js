// Simple Learn More button
function learnMore() {
  alert("We organize mentorship and training programs for youth, parents, and children!");
}

// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for contacting Community Character Builders!");
  this.reset();
});
// HAMBURGER MENU TOGGLE
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.querySelector("ul").classList.toggle("show");
});
