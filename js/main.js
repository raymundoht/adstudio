/* ===================================
   ADSTUDIO — Main Script
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Initialize Lucide icons
    lucide.createIcons();

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
