(function () {
    var nav = document.getElementById('site-nav');
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');

    if (!nav || !toggle || !menu) return;

    function setOpen(open) {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('is-open'));
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (window.innerWidth < 992) {
                setOpen(false);
            }
        });
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 992) {
            setOpen(false);
        }
    });
})();


document.addEventListener("DOMContentLoaded", function () {

    if (window.innerWidth < 768) {

        new Swiper(".trustSwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,

            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },

            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            }
        });

    }

});
