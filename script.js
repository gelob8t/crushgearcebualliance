const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#navMenu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.reveal');
const reveal = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) item.classList.add('is-visible');
  });
};

window.addEventListener('scroll', reveal, { passive: true });
window.addEventListener('load', reveal);
reveal();
