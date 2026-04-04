/* ================================================================
   VIETNAM 2026 – script.js
   ================================================================ */

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

// ===== ACTIVE NAV LINK =====
(function() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

// ===== COUNTDOWN DO PŘÍJEZDU =====
const countdownDisplay = document.getElementById('countdownDisplay');
if (countdownDisplay) {
  // Přílet Hanoj 6. dubna 2026 v 11:55 vietnamského času (UTC+7) = 04:55 UTC
  const TARGET = new Date('2026-04-06T04:55:00Z');

  function updateCountdown() {
    const now  = new Date();
    const diff = TARGET - now;

    if (diff <= 0) {
      countdownDisplay.innerHTML = '<span class="countdown-done">🇻🇳 Xin chào Việt Nam!</span>';
      return;
    }
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);

    countdownDisplay.innerHTML = `
      <div class="countdown-unit">
        <span class="countdown-num">${days}</span>
        <span class="countdown-label">dní</span>
      </div>
      <div class="countdown-unit">
        <span class="countdown-num">${String(hours).padStart(2,'0')}</span>
        <span class="countdown-label">hodin</span>
      </div>
      <div class="countdown-unit">
        <span class="countdown-num">${String(minutes).padStart(2,'0')}</span>
        <span class="countdown-label">minut</span>
      </div>
      <div class="countdown-unit">
        <span class="countdown-num">${String(seconds).padStart(2,'0')}</span>
        <span class="countdown-label">sekund</span>
      </div>
    `;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===== ANIMATE BUDGET BARS =====
function animateBars() {
  document.querySelectorAll('.budget-bar[data-width]').forEach(bar => {
    bar.style.width = bar.dataset.width + '%';
  });
}

if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animateBars(); obs.disconnect(); } });
  }, { threshold: 0.2 });
  const first = document.querySelector('.budget-section');
  if (first) obs.observe(first);
} else {
  animateBars();
}
