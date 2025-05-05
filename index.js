const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
const navLinks = document.querySelectorAll("nav a");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
});

closeMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMobileMenu();
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileMenu();
  });
});

document.addEventListener("click", (event) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(event.target) &&
    !burgerBtn.contains(event.target)
  ) {
    toggleMobileMenu();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

const projectsTitles = document.querySelectorAll(".title");

projectsTitles.forEach((title) => {
  title.addEventListener("click", () => {
    window.open(title.getAttribute("data-link"), "_blank");
  });
});
