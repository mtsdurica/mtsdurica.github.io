// xduric06
$(document).ready(() => {
    $("#nav-toggle-button").click(() => {
        $("#nav-toggle-button").toggleClass("active");
        $("#nav-content").toggleClass("active");
    });

    $("#about-href").click(() => {
        hasScrolled();
        $("#about-section").get(0).scrollIntoView({ behavior: "smooth" });
        $("#nav-toggle-button").toggleClass("active");
        $("#nav-content").toggleClass("active");
    });

    $("#education-href").click(() => {
        hasScrolled();
        $("#education-section").get(0).scrollIntoView({ behavior: "smooth" });
        $("#nav-toggle-button").toggleClass("active");
        $("#nav-content").toggleClass("active");
    });

    $("#projects-href").click(() => {
        hasScrolled();
        $("#projects-section").get(0).scrollIntoView({ behavior: "smooth" });
        $("#nav-toggle-button").toggleClass("active");
        $("#nav-content").toggleClass("active");
    });

    // Hide header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;

    $(window).scroll(function() {
        didScroll = true;
    });

    setInterval(() => {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 50);

    const hasScrolled = () => {
        const st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) { return; }

        // If you scrolled down and are past the navbar, add class .nav-up.
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
});
