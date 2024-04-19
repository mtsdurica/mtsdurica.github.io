const navToggle = document.getElementById("nav-toggle-button");
const navContent = document.getElementById("nav-content");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navContent.classList.toggle("active");
});

const aboutNav = document.getElementById("about-href");
const aboutSection = document.getElementById("about-section");
const educationNav = document.getElementById("education-href");
const educationSection = document.getElementById("education-section");
const projectsNav = document.getElementById("projects-href");
const projectsSection = document.getElementById("projects-section");

aboutNav.addEventListener("click", () => {
    hasScrolled();
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
educationNav.addEventListener("click", () => {
    hasScrolled();
    educationSection.scrollIntoView({ behavior: "smooth" });
});
projectsNav.addEventListener("click", () => {
    hasScrolled();
    projectsSection.scrollIntoView({ behavior: "smooth" });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event) {
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 50);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) { return; }


    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}
