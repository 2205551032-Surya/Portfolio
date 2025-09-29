// Theme toggle
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const root = document.documentElement;
if (prefersLight) root.classList.add('light');

const themeToggle = document.querySelector('#themeToggle');
themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
});

// Mobile menu
const mobileToggle = document.querySelector('#mobileToggle');
const nav = document.querySelector('#nav');

mobileToggle?.addEventListener('click', () => {
  nav.classList.toggle('show'); // tinggal tambahin/ilangin class
});

// Footer year
document.querySelector('#year').textContent = new Date().getFullYear();

// Contact form demo
document.querySelector('#contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  console.log('Contact Form:', data);
  alert('Thanks! Your message has been logged to console for this demo.');
  e.currentTarget.reset();
});

