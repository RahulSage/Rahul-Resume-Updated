/* ═══════════════════════════════════════════════════════════════
   Netflix Resume  ·  script.js
   Reads CONFIG from config.js and renders every page.
   ═══════════════════════════════════════════════════════════════ */

/* ── Inline SVG icons (no external CDN needed) ────────────── */
var IC = {
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github:   '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
  email:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  phone:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.29h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  sun:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
  monitor:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
};

/* ── Theme management ─────────────────────────────────────── */
var THEME_KEY = 'rn-theme';
var THEMES    = ['auto', 'light', 'dark'];

function getTheme()   { return localStorage.getItem(THEME_KEY) || 'auto'; }
function saveTheme(t) { localStorage.setItem(THEME_KEY, t); }

function applyTheme(t) {
  var el = document.documentElement;
  if (t === 'auto') { el.removeAttribute('data-theme'); }
  else              { el.setAttribute('data-theme', t); }
  saveTheme(t);
  var btn = document.getElementById('themeBtn');
  if (!btn) return;
  var icons   = { auto: IC.monitor, light: IC.sun, dark: IC.moon };
  var labels  = { auto: 'Auto', light: 'Light', dark: 'Dark' };
  btn.innerHTML = (icons[t] || IC.monitor) + '<span>' + labels[t] + '</span>';
}

function cycleTheme() {
  var cur  = getTheme();
  var next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
  applyTheme(next);
}

/* ── Page detection ───────────────────────────────────────── */
function getPage() {
  var body = document.body;
  if (body.dataset.page) return body.dataset.page;
  var p = location.pathname.split('/').pop() || 'index.html';
  if (p.includes('experience')) return 'experience';
  if (p.includes('education'))  return 'education';
  if (p.includes('summary'))    return 'summary';
  return 'index';
}

/* ── Navigation ───────────────────────────────────────────── */
function renderNav(active) {
  var links = [
    { href: 'index.html',      id: 'index',      label: 'Home' },
    { href: 'summary.html',    id: 'summary',    label: 'Summary' },
    { href: 'experience.html', id: 'experience', label: 'Experience' },
    { href: 'education.html',  id: 'education',  label: 'Education &amp; Certs' },
  ];
  var navLinks = links.map(function(l) {
    return '<a href="' + l.href + '" class="menu-item' + (l.id === active ? ' active' : '') + '">' + l.label + '</a>';
  }).join('');

  return '<a href="index.html" class="nav-brand">' + CONFIG.shortName + '</a>' +
    '<nav class="nav-menu">' + navLinks + '</nav>' +
    '<button class="theme-btn" id="themeBtn" onclick="cycleTheme()" title="Toggle theme" aria-label="Toggle colour theme">' +
      IC.monitor + '<span>Auto</span>' +
    '</button>' +
    '<button class="nav-hamburger" id="hamburger" aria-label="Open navigation">' +
      '<span></span><span></span><span></span>' +
    '</button>';
}

function renderStickyBar() {
  return CONFIG.name + ' <span class="sticky-dot">·</span> ' +
    CONFIG.title + ' <span class="sticky-dot">·</span> ' +
    '<a href="mailto:' + CONFIG.contact.email + '">' + CONFIG.contact.email + '</a>';
}

function renderFooter() {
  return '<p>© 2025 <strong>' + CONFIG.name + '</strong> &nbsp;·&nbsp; ' +
    'Built with <span class="footer-heart">♥</span> &nbsp;·&nbsp; ' +
    '<a href="mailto:' + CONFIG.contact.email + '">' + CONFIG.contact.email + '</a></p>';
}

/* ── Social buttons ───────────────────────────────────────── */
function renderSocials() {
  return '<div class="social-icons">' +
    '<a href="' + CONFIG.contact.linkedin + '" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">' + IC.linkedin + '</a>' +
    '<a href="' + CONFIG.contact.github   + '" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">'   + IC.github   + '</a>' +
    '<a href="mailto:' + CONFIG.contact.email  + '" class="social-btn" aria-label="Email">'  + IC.email   + '</a>' +
  '</div>';
}

/* ── Hero ─────────────────────────────────────────────────── */
function renderHero() {
  var stats = CONFIG.stats.map(function(s) {
    return '<div class="stat-chip">' +
      '<span class="stat-num" data-target="' + s.value + '" data-suffix="' + s.suffix + '">' + s.value + s.suffix + '</span>' +
      '<span class="stat-label">' + s.label + '</span>' +
    '</div>';
  }).join('');

  return '<section class="hero">' +
    '<div class="hero-bg"></div>' +
    '<div class="hero-content">' +
      '<div class="avatar-ring">' +
        '<img src="' + CONFIG.avatar + '" class="avatar-photo" alt="' + CONFIG.name + '" ' +
          'onerror="this.style.display=\'none\'">' +
      '</div>' +
      '<div class="hero-text">' +
        '<h1>' + CONFIG.name.toUpperCase() + '<span class="h1-accent">.</span></h1>' +
        '<div class="hero-subtitle">' +
          CONFIG.title + ' &nbsp;·&nbsp; <em id="typewriter"></em><span class="tw-cursor"></span>' +
        '</div>' +
        '<div class="hero-contacts">' +
          '<a href="tel:' + CONFIG.contact.phone.replace(/\s/g,'') + '">' + IC.phone + CONFIG.contact.phone + '</a>' +
          '<span class="hc-sep">|</span>' +
          '<a href="mailto:' + CONFIG.contact.email + '">' + IC.email + CONFIG.contact.email + '</a>' +
          '<span class="hc-sep">|</span>' +
          '<a href="' + CONFIG.contact.linkedin + '" target="_blank" rel="noopener">' + IC.linkedin + 'LinkedIn</a>' +
          '<span class="hc-sep">|</span>' +
          '<a href="' + CONFIG.contact.github + '" target="_blank" rel="noopener">' + IC.github + 'GitHub</a>' +
        '</div>' +
        renderSocials() +
        '<div class="stats-row">' + stats + '</div>' +
      '</div>' +
    '</div>' +
  '</section>';
}

/* ── Certs ────────────────────────────────────────────────── */
function renderCerts() {
  return '<div class="cert-grid">' +
    CONFIG.certifications.map(function(c) {
      return '<div class="card cert-badge fade-in" style="position:relative;overflow:hidden;">' +
        '<div class="shine"></div>' +
        '<div class="cert-icon">' + c.icon + '</div>' +
        '<div class="cert-info">' +
          '<div class="cert-name">Salesforce ' + c.name + '</div>' +
          '<div class="cert-date">' + c.date + '</div>' +
        '</div>' +
        (c.isNew ? '<span class="cert-new-pill">New</span>' : '') +
      '</div>';
    }).join('') +
  '</div>';
}

/* ── INDEX PAGE ───────────────────────────────────────────── */
function renderIndex(root) {
  var expCards = CONFIG.experience.map(function(e) {
    var bullets = e.bullets.map(function(b) {
      return '<li>' + b + '</li>';
    }).join('');
    return '<div class="card exp-card fade-in" style="position:relative;overflow:hidden;">' +
      '<div class="shine"></div>' +
      '<div class="exp-date-text">' + IC.calendar + e.start + ' – ' + e.end + '</div>' +
      '<div class="exp-company">' + e.company + '</div>' +
      '<div class="exp-role-text">' + e.role + '</div>' +
      '<ul class="exp-bullets">' + bullets + '</ul>' +
    '</div>';
  }).join('');

  var skillsHTML = CONFIG.skills.map(function(sk) {
    var tags = sk.items.map(function(item) {
      return '<span class="tag tag-' + sk.type + '">' + item + '</span>';
    }).join('');
    return '<div>' +
      '<div class="skill-group-label">' + sk.icon + ' ' + sk.label + '</div>' +
      '<div class="tags">' + tags + '</div>' +
    '</div>';
  }).join('');

  var eduCard = CONFIG.education.map(function(e) {
    return '<div class="card edu-inline fade-in">' +
      '<div class="edu-icon-box">🎓</div>' +
      '<div>' +
        '<h3>' + e.degree + '</h3>' +
        '<p>' + e.institution + ' &nbsp;·&nbsp; Graduated ' + e.year + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  root.innerHTML =
    '<div class="sticky-bar" id="stickyBar"></div>' +
    renderHero() +
    '<main class="content-wrap">' +

      '<h2 class="section-title">Professional Summary</h2>' +
      '<div class="card summary-card fade-in"><p>' + CONFIG.summary + '</p></div>' +

      '<h2 class="section-title">Experience <span class="sec-badge">' + CONFIG.experience.length + ' roles · 6+ yrs</span></h2>' +
      '<div class="exp-grid">' + expCards + '</div>' +

      '<h2 class="section-title">Technical Skills</h2>' +
      '<div class="skills-stack">' + skillsHTML + '</div>' +

      '<h2 class="section-title">Certifications <span class="sec-badge">' + CONFIG.certifications.length + ' active</span></h2>' +
      renderCerts() +

      '<h2 class="section-title">Education</h2>' +
      eduCard +

    '</main>' +
    '<div class="footer-glow"></div>';
}

/* ── EXPERIENCE PAGE ──────────────────────────────────────── */
function renderExperience(root) {
  var items = CONFIG.experience.map(function(e, i) {
    var bullets = e.bullets.map(function(b) { return '<li>' + b + '</li>'; }).join('');
    var logoId  = 'logo-' + i;
    var fbId    = 'fb-' + i;
    return '<div class="tl-item">' +
      '<div class="card tl-card fade-in' + (i === 0 ? ' open' : '') + '" style="position:relative;overflow:hidden;">' +
        '<div class="shine"></div>' +
        '<div class="tl-header">' +
          '<img id="' + logoId + '" src="' + e.logo + '" alt="' + e.company + '" class="company-logo" ' +
            'onerror="document.getElementById(\'' + logoId + '\').style.display=\'none\';' +
                     'document.getElementById(\'' + fbId   + '\').style.display=\'flex\'">' +
          '<div id="' + fbId + '" class="company-logo-fallback" aria-hidden="true">' + e.company[0] + '</div>' +
          '<div class="tl-meta">' +
            '<h3>' + e.company + '</h3>' +
            '<div class="tl-role-text">' + e.role + '</div>' +
            '<div class="tl-date-loc">' + IC.location + e.location + '&nbsp;&nbsp;' + IC.calendar + e.start + ' – ' + e.end + (e.duration ? ' &nbsp;·&nbsp; ' + e.duration : '') + '</div>' +
          '</div>' +
          '<span class="tl-badge ' + (e.current ? 'current' : 'past') + '">' + (e.current ? 'Current' : e.duration) + '</span>' +
        '</div>' +
        '<div class="tl-expand-row"><span>Details</span><span class="expand-arrow">▼</span></div>' +
        '<div class="tl-body"><ul>' + bullets + '</ul></div>' +
      '</div>' +
    '</div>';
  }).join('');

  root.innerHTML =
    '<div class="page-content">' +
      '<h1 class="page-hero-title">Experience</h1>' +
      '<div class="timeline">' + items + '</div>' +
    '</div>' +
    '<div class="footer-glow"></div>';
}

/* ── EDUCATION PAGE ───────────────────────────────────────── */
function renderEducation(root) {
  var eduCards = CONFIG.education.map(function(e, i) {
    var imgId = 'edu-img-' + i;
    return '<div class="card edu-page-card fade-in" style="overflow:hidden;">' +
      '<img id="' + imgId + '" src="' + e.image + '" alt="' + e.institution + '" class="edu-page-img" ' +
        'onerror="document.getElementById(\'' + imgId + '\').style.display=\'none\'">' +
      '<div class="edu-page-body">' +
        '<h3>' + e.degree + '</h3>' +
        '<p>' + e.institution + ' &nbsp;·&nbsp; Graduated ' + e.year + '</p>' +
        (e.description ? '<p style="margin-top:8px;font-size:0.78rem;">' + e.description + '</p>' : '') +
      '</div>' +
    '</div>';
  }).join('');

  root.innerHTML =
    '<div class="page-content">' +
      '<h1 class="page-hero-title">Education &amp; Certifications</h1>' +

      '<h2 class="section-title">Education</h2>' +
      '<div class="edu-page-grid" style="margin-bottom:48px;">' + eduCards + '</div>' +

      '<h2 class="section-title">Salesforce Certifications <span class="sec-badge">' + CONFIG.certifications.length + ' active</span></h2>' +
      renderCerts() +

      '<div class="card cert-info-card fade-in" style="margin-top:32px;">' +
        '<p>All <strong>' + CONFIG.certifications.length + ' certifications</strong> are active and maintained on Trailhead. ' +
        'The AI Associate and AI Specialist credentials (earned Dec 2024 – Jan 2025) demonstrate expertise in ' +
        'Einstein AI, Generative AI features, prompt engineering within Salesforce, and responsible AI principles.</p>' +
      '</div>' +
    '</div>' +
    '<div class="footer-glow"></div>';
}

/* ── SUMMARY PAGE ─────────────────────────────────────────── */
function renderSummary(root) {
  var stats = CONFIG.stats.map(function(s) {
    return '<div class="stat-chip">' +
      '<span class="stat-num" data-target="' + s.value + '" data-suffix="' + s.suffix + '">' + s.value + s.suffix + '</span>' +
      '<span class="stat-label">' + s.label + '</span>' +
    '</div>';
  }).join('') +
  '<div class="stat-chip"><span class="stat-num">100K+</span><span class="stat-label">Records</span></div>';

  var featCards = CONFIG.summaryCards.map(function(c, i) {
    var imgId = 'sfc-img-' + i;
    return '<div class="card summary-feature-card fade-in">' +
      '<img id="' + imgId + '" src="' + c.image + '" alt="' + c.title + '" class="sfc-img" ' +
        'onerror="document.getElementById(\'' + imgId + '\').style.display=\'none\'">' +
      '<div class="sfc-body">' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.body + '</p>' +
      '</div>' +
    '</div>';
  }).join('');

  var achCards = CONFIG.achievements.map(function(a) {
    return '<div class="card ach-card fade-in">' +
      '<div class="ach-value">' + a.value + '</div>' +
      '<div class="ach-label">' + a.label + '</div>' +
    '</div>';
  }).join('');

  root.innerHTML =
    '<div class="page-content">' +
      '<h1 class="page-hero-title">Summary</h1>' +
      '<div class="stats-row" style="margin-bottom:40px;">' + stats + '</div>' +

      '<h2 class="section-title">Profile Overview</h2>' +
      '<div class="summary-feature-grid">' + featCards + '</div>' +

      '<h2 class="section-title">Key Achievements</h2>' +
      '<div class="achievement-grid">' + achCards + '</div>' +
    '</div>' +
    '<div class="footer-glow"></div>';
}

/* ── Typewriter ───────────────────────────────────────────── */
function startTypewriter() {
  var el = document.getElementById('typewriter');
  if (!el || !CONFIG.roles || !CONFIG.roles.length) return;
  var words = CONFIG.roles, wi = 0, ci = 0, del = false;
  function tick() {
    var word = words[wi];
    if (del) {
      el.textContent = word.substring(0, --ci);
      if (ci === 0) { del = false; wi = (wi + 1) % words.length; }
      setTimeout(tick, 55);
    } else {
      el.textContent = word.substring(0, ++ci);
      if (ci === word.length) { del = true; setTimeout(tick, 1900); }
      else { setTimeout(tick, 95); }
    }
  }
  setTimeout(tick, 700);
}

/* ── Stat counters ────────────────────────────────────────── */
function startCounters() {
  document.querySelectorAll('.stat-num[data-target]').forEach(function(el) {
    var target  = parseFloat(el.dataset.target);
    var suffix  = el.dataset.suffix || '';
    var current = 0;
    var step    = target / 38;
    var io = new IntersectionObserver(function(entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      var iv = setInterval(function() {
        current = Math.min(current + step, target);
        el.textContent = Math.round(current) + suffix;
        if (current >= target) clearInterval(iv);
      }, 32);
    }, { threshold: 0.4 });
    io.observe(el);
  });
}

/* ── Fade-in on scroll ────────────────────────────────────── */
function startFadeIn() {
  var els = document.querySelectorAll('.fade-in');
  var io  = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  els.forEach(function(el, i) {
    el.style.transitionDelay = Math.min(i * 0.06, 0.6) + 's';
    io.observe(el);
  });
}

/* ── Sticky bar (index page) ──────────────────────────────── */
function initStickyBar() {
  var bar  = document.getElementById('stickyBar');
  var hero = document.querySelector('.hero');
  if (!bar || !hero) return;
  bar.innerHTML = renderStickyBar();
  function check() {
    bar.classList.toggle('show', window.scrollY > hero.offsetHeight - 60);
  }
  check();
  window.addEventListener('scroll', check, { passive: true });
}

/* ── Scroll progress bar ──────────────────────────────────── */
function initScrollProgress() {
  var bar = document.getElementById('scroll-progress');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    var doc = document.documentElement;
    var pct = (doc.scrollTop / Math.max(doc.scrollHeight - doc.clientHeight, 1)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

/* ── Timeline card expand / collapse ──────────────────────── */
function initTimeline() {
  document.querySelectorAll('.tl-card').forEach(function(card) {
    var header = card.querySelector('.tl-header');
    var hint   = card.querySelector('.tl-expand-row');
    function toggle() {
      var wasOpen = card.classList.contains('open');
      document.querySelectorAll('.tl-card').forEach(function(c) { c.classList.remove('open'); });
      if (!wasOpen) card.classList.add('open');
    }
    if (header) header.addEventListener('click', toggle);
    if (hint)   hint.addEventListener('click', toggle);
  });
}

/* ── Mobile hamburger ─────────────────────────────────────── */
function initHamburger() {
  var btn  = document.getElementById('hamburger');
  var menu = document.querySelector('.nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function() {
    var open = menu.style.display === 'flex';
    menu.style.cssText = open
      ? ''
      : 'display:flex;flex-direction:column;position:fixed;top:60px;left:0;right:0;background:var(--surface);border-bottom:1px solid var(--border);padding:12px 18px;gap:4px;z-index:480;';
  });
  document.addEventListener('click', function(e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.cssText = '';
    }
  });
}

/* ── 3-D card tilt ────────────────────────────────────────── */
function initTilt() {
  document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var r  = card.getBoundingClientRect();
      var rx = ((e.clientY - r.top  - r.height/2) / r.height) * -7;
      var ry = ((e.clientX - r.left - r.width /2) / r.width ) *  7;
      card.style.transform = 'translateY(-5px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' + ry.toFixed(2) + 'deg)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });
}

/* ── Bootstrap ────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  applyTheme(getTheme());

  /* Render nav */
  var page = getPage();
  var nav  = document.getElementById('site-nav');
  if (nav) nav.innerHTML = renderNav(page);

  /* Render page content */
  var main = document.getElementById('page-main');
  if (main) {
    if (page === 'index')      renderIndex(main);
    if (page === 'experience') renderExperience(main);
    if (page === 'education')  renderEducation(main);
    if (page === 'summary')    renderSummary(main);
  }

  /* Render footer */
  var footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = renderFooter();

  /* Re-apply theme so themeBtn gets correct icon */
  applyTheme(getTheme());

  /* Interactions */
  initScrollProgress();
  initStickyBar();
  startTypewriter();
  startCounters();
  startFadeIn();
  initTimeline();
  initHamburger();
  setTimeout(initTilt, 100);

  /* document title */
  document.title = CONFIG.name + ' — ' + CONFIG.title;
  var pageLabels = { index:'Home', experience:'Experience', education:'Education & Certs', summary:'Summary' };
  if (page !== 'index') document.title = CONFIG.name + ' · ' + (pageLabels[page] || page);
});
