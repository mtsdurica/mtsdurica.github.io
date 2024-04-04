const navToggle = document.getElementById("nav-toggle-button");
const navContent = document.getElementById("nav-content");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navContent.classList.toggle("active");
})
