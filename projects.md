---
title: Home
layout: default
permalink: /
---

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap');

.home-container {
  /* Colors come from _layouts/default.html so they follow the Lab 3 theme switch */
  --accent-dim: color-mix(in srgb, var(--accent) 8%, transparent);
  --surface-border-hover: color-mix(in srgb, var(--text-primary) 18%, var(--surface));
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-primary);
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 1;
}

.home-container h1, .home-container h2, .home-container h3 {
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1.3;
}

/* Hero Section */
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 0 16px;
}

.hero-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  margin-bottom: 0;
  width: 100%;
}

.hero-intro { text-align: left; }

.hero-content {
  max-width: 900px;
  text-align: center;
}

/* Profile Photo + Music */
.profile-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Profile Photo */

.hero-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--surface-border);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.hero-image:hover {
  border-color: var(--accent);
  transform: scale(1.03);
}

/* Hero Text */
.hero-greeting {
  color: var(--accent);
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 10px;
}

.hero-title {
  font-size: 2.6rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 6px 0;
  line-height: 1.15;
}

.hero-subtitle {
  font-size: 1.15rem;
  color: var(--text-secondary);
  margin-bottom: 0;
  font-weight: 400;
}

/* ═══ NARRATIVE JOURNEY ═══ */
.journey-section {
  margin: 0 0 60px;
}

.section-header {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: none;
  letter-spacing: -0.02em;
  margin-bottom: 32px;
  text-align: center;
}

.narrative {
  position: relative;
  padding-left: 28px;
}

.narrative::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--accent) 0%,
    var(--surface-border-hover) 40%,
    var(--surface-border-hover) 60%,
    var(--accent) 100%
  );
  border-radius: 2px;
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.8s ease;
}

.narrative.line-visible::before {
  transform: scaleY(1);
}

.narrative-block {
  position: relative;
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.narrative-block.visible {
  opacity: 1;
  transform: translateY(0);
}

.narrative-block:nth-child(2) { transition-delay: 0.1s; }
.narrative-block:nth-child(3) { transition-delay: 0.2s; }
.narrative-block:nth-child(4) { transition-delay: 0.3s; }

.narrative-block:last-child {
  margin-bottom: 0;
}

.narrative-block::before {
  content: '';
  position: absolute;
  left: -32px;
  top: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--accent);
  transition: background 0.3s ease, transform 0.4s ease, box-shadow 0.3s ease;
  transform: scale(0);
}

.narrative-block.visible::before {
  transform: scale(1);
}

.narrative-block:hover::before {
  background: var(--accent);
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.4);
}

.narrative-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 4px;
  display: block;
}

.narrative-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.narrative-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.narrative-text .highlight {
  color: var(--accent-soft);
  font-weight: 500;
}

.interest-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s ease 0.4s, transform 0.5s ease 0.4s;
}

.narrative-block.visible .interest-tags {
  opacity: 1;
  transform: translateY(0);
}

.interest-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-dim);
  border: 1px solid rgba(167, 139, 250, 0.15);
  padding: 5px 12px;
  border-radius: 6px;
  letter-spacing: 0.02em;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.interest-tag:hover {
  background: rgba(167, 139, 250, 0.14);
  border-color: rgba(167, 139, 250, 0.3);
}

/* ═══ ELECTRICITY GRID BACKGROUND ═══ */
.grid-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.grid-bg canvas {
  width: 100%;
  height: 100%;
}

/* Static dot grid via CSS as base layer */
.grid-dots {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(circle, rgba(167, 139, 250, 0.15) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Grid lines - very faint */
.grid-lines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(167, 139, 250, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(167, 139, 250, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
}

/* Electric pulse lines */
.pulse-h, .pulse-v {
  position: fixed;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
}

.pulse-h {
  height: 2px;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg,
    transparent 0%,
    transparent 30%,
    rgba(167, 139, 250, 0.4) 45%,
    rgba(196, 181, 253, 0.7) 50%,
    rgba(167, 139, 250, 0.4) 55%,
    transparent 70%,
    transparent 100%
  );
  background-size: 200% 100%;
}

.pulse-v {
  width: 2px;
  top: 0;
  height: 100%;
  background: linear-gradient(180deg,
    transparent 0%,
    transparent 30%,
    rgba(167, 139, 250, 0.4) 45%,
    rgba(196, 181, 253, 0.7) 50%,
    rgba(167, 139, 250, 0.4) 55%,
    transparent 70%,
    transparent 100%
  );
  background-size: 100% 200%;
}

.pulse-h.fire {
  opacity: 1;
  animation: pulseSlideH 1.8s ease-out forwards;
}

.pulse-v.fire {
  opacity: 1;
  animation: pulseSlideV 1.8s ease-out forwards;
}

@keyframes pulseSlideH {
  0% { background-position: -100% 0; opacity: 1; }
  80% { opacity: 0.4; }
  100% { background-position: 200% 0; opacity: 0; }
}

@keyframes pulseSlideV {
  0% { background-position: 0 -100%; opacity: 1; }
  80% { opacity: 0.4; }
  100% { background-position: 0 200%; opacity: 0; }
}

/* Node flashes at intersections */
.grid-node {
  position: fixed;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
}

.grid-node.flash {
  animation: nodeFlash 1.2s ease-out forwards;
}

@keyframes nodeFlash {
  0% { opacity: 0; transform: scale(0.5); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
  20% { opacity: 1; transform: scale(2); box-shadow: 0 0 16px 6px rgba(167, 139, 250, 0.4); }
  100% { opacity: 0; transform: scale(0.5); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
}

/* Responsive */
@media (max-width: 768px) {
  .home-container { padding: 0 20px; }
  .hero-section { padding: 36px 0 28px; }
  .grid-dots, .grid-lines, .grid-bg { display: none; }
  .hero-top { flex-direction: column; gap: 24px; }
  .hero-intro { text-align: center; }
  .hero-title { font-size: 2rem; }
  .hero-subtitle { font-size: 1.05rem; }
  .hero-image { width: 160px; height: 160px; }
  .narrative { padding-left: 24px; }
  .narrative-block::before { left: -28px; }
}
</style>

<div class="grid-dots"></div>
<div class="grid-lines"></div>
<div class="grid-bg" id="gridBg"></div>

<script>
(function() {
  var gridBg = document.getElementById('gridBg');
  var GRID = 48;

  function firePulse() {
    var isHorizontal = Math.random() > 0.5;
    var el = document.createElement('div');

    if (isHorizontal) {
      el.className = 'pulse-h';
      var row = Math.floor(Math.random() * (window.innerHeight / GRID)) * GRID;
      el.style.top = row + 'px';
    } else {
      el.className = 'pulse-v';
      var col = Math.floor(Math.random() * (window.innerWidth / GRID)) * GRID;
      el.style.left = col + 'px';
    }

    gridBg.appendChild(el);

    requestAnimationFrame(function() {
      el.classList.add('fire');
    });

    // Spawn 1-2 node flashes along the pulse
    var nodeCount = Math.random() > 0.5 ? 2 : 1;
    for (var i = 0; i < nodeCount; i++) {
      (function(idx) {
        setTimeout(function() {
          var node = document.createElement('div');
          node.className = 'grid-node';
          if (isHorizontal) {
            node.style.top = (parseInt(el.style.top) - 2) + 'px';
            var randCol = Math.floor(Math.random() * (window.innerWidth / GRID)) * GRID;
            node.style.left = (randCol - 2) + 'px';
          } else {
            node.style.left = (parseInt(el.style.left) - 2) + 'px';
            var randRow = Math.floor(Math.random() * (window.innerHeight / GRID)) * GRID;
            node.style.top = (randRow - 2) + 'px';
          }
          gridBg.appendChild(node);
          requestAnimationFrame(function() { node.classList.add('flash'); });
          setTimeout(function() { node.remove(); }, 1400);
        }, 300 + idx * 400);
      })(i);
    }

    setTimeout(function() { el.remove(); }, 2000);
  }

  // Fire pulses at random intervals
  function scheduleNext() {
    var delay = 2000 + Math.random() * 4000;
    setTimeout(function() {
      firePulse();
      scheduleNext();
    }, delay);
  }

  // Start after a short delay
  setTimeout(function() {
    firePulse();
    scheduleNext();
  }, 800);
})();
</script>

<div class="home-container">

<section class="hero-section">
  <div class="hero-top">
    <div class="profile-container">
      <img
        src="{{ site.baseurl }}/assets/img/IMG_9510.jpg"
        alt="Kyle Shiroma"
        class="hero-image"
        id="profilePic"
      >
    </div>
    <div class="hero-intro">
      <p class="hero-greeting">Welcome</p>
      <h1 class="hero-title">Kyle Shiroma</h1>
      <p class="hero-subtitle">Data Science @ UC San Diego</p>
    </div>
  </div>

</section>

<section class="journey-section">
  <h2 class="section-header">Background</h2>
  <div class="narrative">

<div class="narrative-block">
  <span class="narrative-tag">Foundations</span>
  <p class="narrative-text">
    Began at <strong>Norco College</strong>, balancing CIS and Math transfer coursework with the demands of <span class="highlight">CCCAA JUCO soccer</span>. Elevated student success as a Mathematics and Computer Science Tutor at the Learning Resources Center and contributed to campus leadership via the Associated Students of Norco College (ASNC).
  </p>
</div>

<div class="narrative-block">
  <span class="narrative-tag">Research & Analytics</span>
  <p class="narrative-text">
    Conducted data science research at <strong>CSU Fullerton</strong> under Dr. Doina Bein, engineering a predictive <span class="highlight">UEFA Euro model</span> using Elo ratings and Random Forests to bridge sports domain knowledge with machine learning. Beyond sports analytics, I developed a collaborative healthcare hackathon platform designed to synthesize complex patient data into intuitive summaries for non-technical caregivers.
  </p>
</div>

<div class="narrative-block">
  <span class="narrative-tag">Current Focus</span>
  <p class="narrative-text">
    Now at <strong>UC San Diego</strong> pursuing Data Science and Mathematics. As an <strong>HDSI Lab 3.0 Fellow</strong>, I build AI-driven, hands-on educational tools for K–12 outreach. Concurrently, I mentor a student consulting cohort directing global energy dashboarding for the UCSD Center for Energy Research via <strong>DS3</strong>, ahead of joining <strong>Southern California Edison</strong> as a Summer Data Science Intern.
  </p>
  <div class="interest-tags">
    <span class="interest-tag">Sports Analytics</span>
    <span class="interest-tag">Energy Systems</span>
  </div>
</div>


  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  var narrative = document.querySelector('.narrative');
  var blocks = document.querySelectorAll('.narrative-block');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('narrative')) {
          entry.target.classList.add('line-visible');
        }
        if (entry.target.classList.contains('narrative-block')) {
          entry.target.classList.add('visible');
        }
      }
    });
  }, { threshold: 0.15 });

  if (narrative) observer.observe(narrative);
  blocks.forEach(function(block) { observer.observe(block); });
});
</script>

</div>