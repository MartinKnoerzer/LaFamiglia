// La Famiglia – Vereinsrestaurant
// Main JavaScript

document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile navigation toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('open');
            const isOpen = navLinks.classList.contains('open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navLinks.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML = '&#9776;';
            });
        });
    }

    // --- Active nav link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-links a');

    function setActiveLink() {
        const scrollY = window.scrollY + 80;
        sections.forEach(function (section) {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                links.forEach(function (link) {
                    link.style.color = '';
                    link.style.borderBottomColor = '';
                });
                const active = document.querySelector('.nav-links a[href="#' + id + '"]');
                if (active) {
                    active.style.color = 'var(--color-primary)';
                    active.style.borderBottomColor = 'var(--color-primary)';
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveLink, { passive: true });

    // --- Reservation form: set minimum date to today ---
    const datumInput = document.getElementById('datum');
    if (datumInput) {
        const today = new Date().toISOString().split('T')[0];
        datumInput.setAttribute('min', today);
    }

    // --- Reservation form submission feedback ---
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = reservationForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = '✓ Anfrage gesendet!';
            btn.disabled = true;
            btn.style.backgroundColor = '#2d7a2d';
            btn.style.borderColor = '#2d7a2d';
            setTimeout(function () {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
                btn.style.borderColor = '';
                reservationForm.reset();
            }, 3000);
        });
    }

});
