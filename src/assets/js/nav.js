// Navigation menu functionality

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu || !navOverlay) {
        return; // Exit if elements don't exist
    }

    // Toggle navigation menu
    function toggleNav() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        navOverlay.classList.toggle('active');

        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    // Close navigation menu
    function closeNav() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Event listeners
    navToggle.addEventListener('click', toggleNav);
    navOverlay.addEventListener('click', closeNav);

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Add a small delay for better UX
            setTimeout(closeNav, 200);
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeNav();
        }
    });

    // Prevent clicks inside menu from closing it
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});
