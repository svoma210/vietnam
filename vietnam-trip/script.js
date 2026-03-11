/* ================================================
   Vietnam Trip – script.js
   ================================================ */

// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {

  // --- Mobilní navigace ---
  const toggle = document.querySelector('.menu-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? '✕' : '☰';
    });
    // Zavři menu po kliknutí na odkaz (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.textContent = '☰';
      });
    });
  }

  // --- Aktivní odkaz v navigaci ---
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // --- Odpočítávání do odletu ---
  const countdownEl = document.getElementById('countdown');
  if (countdownEl) {
    const departure = new Date('2025-04-06T11:55:00+07:00'); // přílet HAN
    function updateCountdown() {
      const now  = new Date();
      const diff = departure - now;
      if (diff <= 0) { countdownEl.textContent = '✈ Jsme ve Vietnamu!'; return; }
      const days  = Math.floor(diff / 864e5);
      const hours = Math.floor((diff % 864e5) / 36e5);
      const mins  = Math.floor((diff % 36e5)  / 6e4);
      countdownEl.textContent = `${days} dní ${hours} hod ${mins} min`;
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);
  }

  // --- Plynulé scrollování na kotvy ---
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
