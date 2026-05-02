/* ===================================
   ADSTUDIO — Main Script
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide icons
    lucide.createIcons();

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-menu-link');

    function toggleMenu() {
        const isOpen = mobileMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('hamburger-active', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
        // Re-initialize icons inside mobile menu when opening
        if (isOpen) lucide.createIcons();
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburgerBtn.classList.remove('hamburger-active');
            document.body.classList.remove('menu-open');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            hamburgerBtn.classList.remove('hamburger-active');
            document.body.classList.remove('menu-open');
        }
    });

    // Clone video marquee rows for seamless infinite loop
    document.getElementById('row1b').innerHTML = document.getElementById('row1a').innerHTML;
    document.getElementById('row2b').innerHTML = document.getElementById('row2a').innerHTML;

    // Clone logo marquee rows
    document.getElementById('logoRow1b').innerHTML = document.getElementById('logoRow1a').innerHTML;
    document.getElementById('logoRow2b').innerHTML = document.getElementById('logoRow2a').innerHTML;

    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});
