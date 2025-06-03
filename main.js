// TEDx Leadcity University - Open Mic Event Scripts

document.addEventListener('DOMContentLoaded', function () {
    // Mobile Menu
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Countdown Timer
    const countDownDate = new Date("June 12, 2025 16:30:00").getTime();
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    if (daysEl && hoursEl && minutesEl && secondsEl) {
        setInterval(function () {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            daysEl.innerHTML = days > 0 ? days : 0;
            hoursEl.innerHTML = hours > 0 ? hours : 0;
            minutesEl.innerHTML = minutes > 0 ? minutes : 0;
            secondsEl.innerHTML = seconds > 0 ? seconds : 0;
        }, 1000);
    }

    // FAQ Toggle
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon i');
            answer.classList.toggle('hidden');
            if (answer.classList.contains('hidden')) {
                icon.classList.remove('ri-subtract-line');
                icon.classList.add('ri-add-line');
            } else {
                icon.classList.remove('ri-add-line');
                icon.classList.add('ri-subtract-line');
            }
        });
    });

    // Newsletter Checkbox
    const newsletterCheckbox = document.getElementById('newsletter');
    const newsletterCheck = document.querySelector('.newsletter-check');
    if (newsletterCheckbox && newsletterCheck) {
        newsletterCheckbox.addEventListener('change', function () {
            if (this.checked) {
                newsletterCheck.classList.remove('hidden');
            } else {
                newsletterCheck.classList.add('hidden');
            }
        });
    }

    // Registration Form
    const registrationForm = document.getElementById('registrationForm');
    const registrationSuccess = document.getElementById('registrationSuccess');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    if (registrationForm && registrationSuccess && closeSuccessModal) {
        registrationForm.addEventListener('submit', function (e) {
            e.preventDefault();
            registrationSuccess.classList.remove('hidden');
            registrationForm.reset();
            if (newsletterCheck) newsletterCheck.classList.add('hidden');
        });
        closeSuccessModal.addEventListener('click', function () {
            registrationSuccess.classList.add('hidden');
        });
    }

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
