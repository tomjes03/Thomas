// Smooth Scrolling Effect
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");

  for (const link of links) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  }
});

// Responsive Mobile Menu (Optional)
const menuToggle = document.createElement("button");
menuToggle.innerText = "☰ Menu";
menuToggle.style.position = "fixed";
menuToggle.style.top = "10px";
menuToggle.style.right = "10px";
menuToggle.style.background = "#333";
menuToggle.style.color = "#fff";
menuToggle.style.border = "none";
menuToggle.style.padding = "10px";
menuToggle.style.cursor = "pointer";
document.body.appendChild(menuToggle);

menuToggle.addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("active");
});
