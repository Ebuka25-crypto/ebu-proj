function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("success").innerText =
    "Message sent successfully!";
  this.reset();
});