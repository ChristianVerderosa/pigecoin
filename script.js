// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

// Copy contract address
function copyAddress(button, targetId) {
  const address = document.getElementById(targetId).textContent.trim();
  navigator.clipboard.writeText(address).then(() => {
    const original = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    setTimeout(() => {
      button.textContent = original;
      button.classList.remove('copied');
    }, 1800);
  });
}

document.getElementById('caCopy').addEventListener('click', (e) => {
  copyAddress(e.currentTarget, 'caAddress');
});

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', (e) => {
    copyAddress(e.currentTarget, e.currentTarget.dataset.copyTarget);
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Nav shadow on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 6px 20px rgba(59, 42, 24, 0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
