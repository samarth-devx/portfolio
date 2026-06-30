// script.js
(function() {
    'use strict';

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('is-open');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    navMenu.classList.remove('is-open');
                }
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 20,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Banner pause on hover
    const banner = document.querySelector('.banner');
    const track = document.querySelector('.banner__track');
    if (banner && track) {
        banner.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
        banner.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');
    }

})();