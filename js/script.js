// script.js — Netflix Resume Interactivity

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll progress bar ─────────────────────────────────── */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const doc = document.documentElement;
      const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      progressBar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ── Sticky header (index page only) ────────────────────── */
  const sticky = document.getElementById('stickyHeader');
  const hero   = document.querySelector('.hero');
  if (sticky && hero) {
    const check = () => {
      if (window.scrollY > (hero.offsetHeight || 400) - 60) {
        sticky.classList.add('show');
      } else {
        sticky.classList.remove('show');
      }
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
  }

  /* ── Typewriter animation ────────────────────────────────── */
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const words = typeEl.dataset.words ? typeEl.dataset.words.split('|') : [];
    if (words.length) {
      let wi = 0, ci = 0, deleting = false;
      const cursor = document.createElement('span');
      cursor.className = 'typewriter-cursor';
      typeEl.after(cursor);

      const tick = () => {
        const word = words[wi];
        if (deleting) {
          typeEl.textContent = word.substring(0, --ci);
          if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
          setTimeout(tick, 60);
        } else {
          typeEl.textContent = word.substring(0, ++ci);
          if (ci === word.length) {
            deleting = true;
            setTimeout(tick, 1800);
          } else {
            setTimeout(tick, 100);
          }
        }
      };
      setTimeout(tick, 600);
    }
  }

  /* ── Animated stat counters ──────────────────────────────── */
  document.querySelectorAll('.stat-num[data-target]').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const isFloat = el.dataset.target.includes('.');
    const suffix  = el.dataset.suffix || '';
    let current = 0;
    const duration = 1200;
    const steps = 40;
    const step = target / steps;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        observer.disconnect();
        const interval = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
          if (current >= target) clearInterval(interval);
        }, duration / steps);
      }
    }, { threshold: 0.4 });
    observer.observe(el);
  });

  /* ── Timeline card expand / collapse ────────────────────── */
  document.querySelectorAll('.timeline-card').forEach(card => {
    const header = card.querySelector('.timeline-header');
    const hint   = card.querySelector('.expand-hint');
    if (!header) return;

    // Open first card by default on experience page
    if (card.dataset.openDefault === 'true') card.classList.add('open');

    [header, hint].forEach(el => {
      if (!el) return;
      el.addEventListener('click', () => {
        const wasOpen = card.classList.contains('open');
        // Close all others
        document.querySelectorAll('.timeline-card').forEach(c => c.classList.remove('open'));
        if (!wasOpen) card.classList.add('open');
      });
    });
  });

  /* ── 3-D tilt on .netflix-card and .exp-card ─────────────── */
  document.querySelectorAll('.netflix-card, .exp-card, .cert-badge').forEach(card => {
    card.style.transformStyle = 'preserve-3d';
    card.style.perspective = '600px';

    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top  + r.height / 2;
      const rx = ((e.clientY - cy) / r.height) * -8;
      const ry = ((e.clientX - cx) / r.width) * 8;
      card.style.transform = `translateY(-5px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ── Fade-in on scroll ───────────────────────────────────── */
  const fadeEls = document.querySelectorAll(
    '.exp-card, .netflix-card, .cert-badge, .timeline-item, .summary-card, .edu-page-card, .cert-grid .cert-badge'
  );
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    fadeObserver.observe(el);
  });

  /* ── Skills filter (index page) ──────────────────────────── */
  const filterBtns = document.querySelectorAll('.skill-filter-btn');
  const allTags    = document.querySelectorAll('.tag[data-cat]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      allTags.forEach(tag => {
        if (cat === 'all' || tag.dataset.cat === cat) {
          tag.style.opacity = '1';
          tag.style.transform = 'scale(1)';
        } else {
          tag.style.opacity = '0.2';
          tag.style.transform = 'scale(0.92)';
        }
      });
    });
  });

  /* ── Active nav link highlight ───────────────────────────── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu-item').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
