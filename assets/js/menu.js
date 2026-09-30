
    document.addEventListener('DOMContentLoaded', function () {
        const nav = document.querySelector('nav');
        const navbarContainer = document.querySelector('.navbar-container');

        window.addEventListener('scroll', function () {
            if (window.scrollY > 40) {
                nav.classList.add('scrolled');
                navbarContainer.classList.add('is-fixed');
            } else {
                nav.classList.remove('scrolled');
                navbarContainer.classList.remove('is-fixed');
            }
        });
    });