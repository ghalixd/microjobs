document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    });

    // Menu functionality
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.querySelector('.navbar');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            menuBtn.classList.toggle('fa-times');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!menuBtn.contains(event.target) && !navbar.contains(event.target)) {
                navbar.classList.remove('active');
                menuBtn.classList.remove('fa-times');
            }
        });
    }

    // Close menu when scrolling
    window.addEventListener('scroll', () => {
        if (navbar && menuBtn) {
            navbar.classList.remove('active');
            menuBtn.classList.remove('fa-times');
        }
    });
});
