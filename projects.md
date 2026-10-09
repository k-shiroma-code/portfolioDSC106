---
title: Projects
layout: default
permalink: /projects/
---

<style>
.projects-container {
  --accent: #a78bfa;
  --accent-soft: #c4b5fd;
  --surface: #0a0a0a;
  --surface-elevated: #141414;
  --surface-border: #222;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --text-muted: #666;
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--text-primary);
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.projects-container h1,
.projects-container h2,
.projects-container h3 {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
}

/* ═══ ELECTRICITY GRID BACKGROUND ═══ */
.grid-dots {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(circle, rgba(167, 139, 250, 0.15) 1px, transparent 1px);
  background-size: 48px 48px;
}

.grid-lines {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  background-image:
    linear-gradient(rgba(167, 139, 250, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(167, 139, 250, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
}

.grid-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

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
    transparent 0%, transparent 30%,
    rgba(167, 139, 250, 0.4) 45%,
    rgba(196, 181, 253, 0.7) 50%,
    rgba(167, 139, 250, 0.4) 55%,
    transparent 70%, transparent 100%
  );
  background-size: 200% 100%;
}

.pulse-v {
  width: 2px;
  top: 0;
  height: 100%;
  background: linear-gradient(180deg,
    transparent 0%, transparent 30%,
    rgba(167, 139, 250, 0.4) 45%,
    rgba(196, 181, 253, 0.7) 50%,
    rgba(167, 139, 250, 0.4) 55%,
    transparent 70%, transparent 100%
  );
  background-size: 100% 200%;
}

.pulse-h.fire { opacity: 1; animation: pulseSlideH 1.8s ease-out forwards; }
.pulse-v.fire { opacity: 1; animation: pulseSlideV 1.8s ease-out forwards; }

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

.grid-node {
  position: fixed;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--accent);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
}

.grid-node.flash { animation: nodeFlash 1.2s ease-out forwards; }

@keyframes nodeFlash {
  0% { opacity: 0; transform: scale(0.5); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
  20% { opacity: 1; transform: scale(2); box-shadow: 0 0 16px 6px rgba(167, 139, 250, 0.4); }
  100% { opacity: 0; transform: scale(0.5); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
}

/* ═══ PAGE HEADER ═══ */
.page-header {
  text-align: center;
  padding: 48px 0 24px;
  margin-bottom: 12px;
}

.page-header h1 {
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.page-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-top: 12px;
}

/* ═══ TIMELINE NAVIGATION ═══ */
.timeline-wrap {
  position: relative;
  margin: 32px 0 16px;
}

.timeline-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 0 4px;
}

.timeline-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  font-weight: 600;
}

.timeline-buttons {
  display: flex;
  gap: 8px;
}

.tl-btn {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--surface-border);
  background: var(--surface-elevated);
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.tl-btn:hover:not(:disabled) {
  border-color: var(--accent);
  color: var(--accent);
}

.tl-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.timeline-track {
  position: relative;
  padding: 24px 0 16px;
}

/* horizontal time spine */
.timeline-track::before {
  content: '';
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    rgba(167, 139, 250, 0.3) 8%,
    rgba(167, 139, 250, 0.3) 92%,
    transparent 100%
  );
}

.timeline-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0 4px 16px;
  scrollbar-width: thin;
  scrollbar-color: var(--accent) transparent;
}

.timeline-scroll::-webkit-scrollbar { height: 6px; }
.timeline-scroll::-webkit-scrollbar-track { background: transparent; }
.timeline-scroll::-webkit-scrollbar-thumb {
  background: var(--surface-border);
  border-radius: 3px;
}
.timeline-scroll::-webkit-scrollbar-thumb:hover { background: var(--accent); }

.tl-card {
  flex: 0 0 200px;
  background: var(--surface-elevated);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  text-align: left;
  font-family: inherit;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 140px;
}

.tl-card:hover {
  border-color: var(--accent-soft);
  transform: translateY(-3px);
}

.tl-card.active {
  border-color: var(--accent);
  background: linear-gradient(135deg, rgba(167, 139, 250, 0.08), rgba(167, 139, 250, 0.02));
  box-shadow: 0 0 0 1px var(--accent), 0 8px 24px rgba(167, 139, 250, 0.15);
}

.tl-card.active::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 12px 4px rgba(167, 139, 250, 0.5);
}

.tl-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 8px;
  margin-bottom: 4px;
}

.tl-date {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-soft);
  font-weight: 600;
}

.tl-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.tl-blurb {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.4;
  margin: 0;
}

/* ═══ DETAIL PANELS ═══ */
.project-card {
  background: var(--surface-elevated);
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  padding: 40px;
  margin: 32px 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: none;
}

.project-card.is-visible {
  display: block;
  animation: fadeUp 0.4s ease;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
}

.project-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-primary);
}

.project-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, var(--accent), var(--accent-soft));
  color: #0a0a0a;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 6px 14px;
  border-radius: 20px;
}

.project-description {
  color: var(--text-primary);
  font-size: 1.05rem;
  margin-bottom: 28px;
  max-width: 720px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tech-tag {
  background: rgba(167, 139, 250, 0.1);
  border: 1px solid rgba(167, 139, 250, 0.3);
  color: var(--accent-soft);
  font-size: 0.8rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 10px 20px;
  border: 1px solid var(--surface-border);
  border-radius: 8px;
  transition: all 0.2s ease;
}

.project-link:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #0a0a0a;
}

.project-link.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #0a0a0a;
}

.project-link.primary:hover {
  background: var(--accent-soft);
  border-color: var(--accent-soft);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  margin: 28px 0;
}

.stat-item {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--accent);
  display: block;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

.model-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.9rem;
}

.model-table th {
  text-align: left;
  padding: 12px 16px;
  border-bottom: 2px solid var(--accent);
  color: var(--text-muted);
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
}

.model-table td {
  padding: 14px 16px;
  border-bottom: 1px solid var(--surface-border);
  color: var(--text-primary);
}

.model-table tr:hover td { background: rgba(255,255,255,0.02); }

.highlight-value {
  color: #22c55e;
  font-weight: 600;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 28px;
}

.media-item {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--surface-border);
}

.media-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.4s ease;
}

.media-item:hover img { transform: scale(1.02); }

.video-container {
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--surface-border);
  background: #000;
}

.video-container video,
.video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-layout-split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.section-header {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.service-list li {
  color: var(--text-primary);
  font-size: 0.9rem;
  padding: 8px 0;
  border-bottom: 1px solid var(--surface-border);
}

.service-list li strong {
  color: var(--accent-soft);
  font-weight: 400;
}

.tableau-container {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--surface-border);
  aspect-ratio: 16/9;
}

.tableau-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.contribution-note {
  color: var(--text-primary);
  font-size: 0.9rem;
  margin-top: 20px;
  font-style: italic;
}

/* Keyboard hint */
.kbd-hint {
  text-align: center;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 8px;
  letter-spacing: 0.05em;
}

.kbd-hint kbd {
  display: inline-block;
  padding: 2px 8px;
  background: var(--surface-elevated);
  border: 1px solid var(--surface-border);
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.72rem;
  margin: 0 2px;
  color: var(--accent-soft);
}

/* Responsive */
@media (max-width: 768px) {
  .grid-dots, .grid-lines, .grid-bg { display: none; }

  .project-layout-split { grid-template-columns: 1fr; }

  .project-card {
    padding: 24px;
    margin: 24px 0;
  }

  .project-title { font-size: 1.35rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .media-grid { grid-template-columns: 1fr; }
  .page-header h1 { font-size: 2rem; }
  .service-list { grid-template-columns: 1fr; }

  .tl-card { flex: 0 0 170px; min-height: 130px; }
  .kbd-hint { display: none; }
}
/* ═══ ALL PROJECTS GRID (Lab 2, Step 4) ═══ */
.overview-title {
  font-size: 1.5rem;
  margin: 56px 0 20px;
  text-align: center;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  gap: 1em;
}

.projects article {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  gap: 0.5em;
  padding: 20px;
  background: var(--surface-elevated);
  border: 1px solid var(--surface-border);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.projects article:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
}

.projects h2 {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.2;
  text-align: left;
  color: var(--text-primary);
}

.projects .proj-meta {
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent-soft);
  font-weight: 600;
}

.projects p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
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
    requestAnimationFrame(function() { el.classList.add('fire'); });

    var nodeCount = Math.random() > 0.5 ? 2 : 1;
    for (var i = 0; i < nodeCount; i++) {
      (function(idx) {
        setTimeout(function() {
          var node = document.createElement('div');
          node.className = 'grid-node';
          if (isHorizontal) {
            node.style.top = (parseInt(el.style.top) - 3) + 'px';
            var randCol = Math.floor(Math.random() * (window.innerWidth / GRID)) * GRID;
            node.style.left = (randCol - 3) + 'px';
          } else {
            node.style.left = (parseInt(el.style.left) - 3) + 'px';
            var randRow = Math.floor(Math.random() * (window.innerHeight / GRID)) * GRID;
            node.style.top = (randRow - 3) + 'px';
          }
          gridBg.appendChild(node);
          requestAnimationFrame(function() { node.classList.add('flash'); });
          setTimeout(function() { node.remove(); }, 1400);
        }, 300 + idx * 400);
      })(i);
    }

    setTimeout(function() { el.remove(); }, 2000);
  }

  function scheduleNext() {
    var delay = 2000 + Math.random() * 4000;
    setTimeout(function() { firePulse(); scheduleNext(); }, delay);
  }

  setTimeout(function() { firePulse(); scheduleNext(); }, 800);
})();
</script>

<div class="projects-container">

<div class="page-header">
  <h1>Projects</h1>
  <p>Machine learning, data analytics & full-stack development</p>
</div>

<!-- ═══ TIMELINE NAV ═══ -->
<div class="timeline-wrap">
  <div class="timeline-controls">
    <span class="timeline-label">Timeline · Newest First</span>
    <div class="timeline-buttons">
      <button class="tl-btn" id="tlPrev" aria-label="Previous project">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="tl-btn" id="tlNext" aria-label="Next project">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  </div>

  <div class="timeline-track">
    <div class="timeline-scroll" id="tlScroll">
      <button class="tl-card" data-target="proj-energy-ds3">
        <div class="tl-icon">⚡</div>
        <div class="tl-date">Jan 2026 — Present</div>
        <div class="tl-title">Global Energy Dashboard</div>
        <p class="tl-blurb">EV adoption vs. oil import dependencies across countries.</p>
      </button>

      <button class="tl-card" data-target="proj-grid-load">
        <div class="tl-icon">🔌</div>
        <div class="tl-date">2025</div>
        <div class="tl-title">Grid Load Forecasting</div>
        <p class="tl-blurb">14-day CA electricity demand prediction across 4 utilities.</p>
      </button>

      <button class="tl-card" data-target="proj-evocharge">
        <div class="tl-icon">🔋</div>
        <div class="tl-date">2025</div>
        <div class="tl-title">EvoCharge</div>
        <p class="tl-blurb">EV charging energy & cost predictor for California.</p>
      </button>

      <button class="tl-card" data-target="proj-pulsepanion">
        <div class="tl-icon">🏆</div>
        <div class="tl-date">2025 · Ai4Purpose</div>
        <div class="tl-title">Pulsepanion</div>
        <p class="tl-blurb">1st place AI healthcare tool analyzing 18 months of patient data.</p>
      </button>

      <button class="tl-card" data-target="proj-segmentation">
        <div class="tl-icon">📊</div>
        <div class="tl-date">2024</div>
        <div class="tl-title">Customer Segmentation</div>
        <p class="tl-blurb">RFM analysis on 500K+ retail transactions; 5 segments uncovered.</p>
      </button>

      <button class="tl-card" data-target="proj-heart">
        <div class="tl-icon">❤️</div>
        <div class="tl-date">2024</div>
        <div class="tl-title">Heart Disease Prediction</div>
        <p class="tl-blurb">ML pipeline with SMOTE for +20% minority-class recall.</p>
      </button>

      <button class="tl-card" data-target="proj-uefa">
        <div class="tl-icon">⚽</div>
        <div class="tl-date">2024 · CSUF REU</div>
        <div class="tl-title">UEFA Euro 2024 Analytics</div>
        <p class="tl-blurb">Match outcome prediction with ELO ratings + XGBoost.</p>
      </button>
    </div>
  </div>

  <div class="kbd-hint">
    Navigate with <kbd>←</kbd> <kbd>→</kbd> arrow keys
  </div>
</div>

<!-- ═══ DETAIL PANELS ═══ -->

<!-- 1. Global Energy Dashboard -->
<article class="project-card" id="proj-energy-ds3">
  <div class="project-header">
    <h2 class="project-title">Global Energy Transitions Dashboard</h2>
    <span class="project-badge">📍 UCSD Center for Energy Research</span>
  </div>

  <p class="project-description">
    Developed as a consultant through the Data Science Student Society (DS3) at UC San Diego, this interactive global energy dashboard visualizes the strategic tradeoff between rising electric vehicle adoption and oil import dependencies across countries. Built for the UCSD Center for Energy Research to support policy research and energy transition analysis.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">JavaScript</span>
    <span class="tech-tag">HTML/CSS</span>
    <span class="tech-tag">Data Visualization</span>
    <span class="tech-tag">Energy Analytics</span>
    <span class="tech-tag">DS3 Consulting</span>
  </div>

  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">Global</span>
      <span class="stat-label">Coverage</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">EV</span>
      <span class="stat-label">Sales Trends</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">Oil</span>
      <span class="stat-label">Import Dependencies</span>
    </div>
  </div>

  <p class="contribution-note">
    Role: Consultant — Energy Transitions · Data Science Student Society (DS3) @ UC San Diego · Jan 2026 – Present
  </p>

  <div class="project-links">
    <a href="https://k-shiroma-code.github.io/Energy-Dashboard-DS3/index.html" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Live Dashboard
    </a>
    <a href="https://github.com/k-shiroma-code/Energy-Dashboard-DS3?tab=readme-ov-file" target="_blank" rel="noopener" class="project-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      GitHub
    </a>
  </div>
</article>

<!-- 2. Grid Load Forecasting -->
<article class="project-card" id="proj-grid-load">
  <div class="project-header">
    <h2 class="project-title">Grid Load Forecasting Dashboard</h2>
  </div>

  <p class="project-description">
    A full-stack web application featuring global weather data and California grid load forecasting using machine learning. The dashboard predicts 14-day electricity demand across 4 California service areas using ensemble models trained on 315,648 observations.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">React</span>
    <span class="tech-tag">Astro</span>
    <span class="tech-tag">FastAPI</span>
    <span class="tech-tag">Python</span>
    <span class="tech-tag">scikit-learn</span>
    <span class="tech-tag">Recharts</span>
    <span class="tech-tag">OpenWeather API</span>
  </div>

  <div class="project-layout-split">
    <div>
      <h3 class="section-header">Model Performance</h3>
      <table class="model-table">
        <thead>
          <tr>
            <th>Model</th>
            <th>MAE</th>
            <th>MAPE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gradient Boosting</td>
            <td class="highlight-value">573 MW</td>
            <td class="highlight-value">2.26%</td>
          </tr>
          <tr>
            <td>Random Forest</td>
            <td>577 MW</td>
            <td>2.29%</td>
          </tr>
          <tr>
            <td>Ridge + Weather</td>
            <td>840 MW</td>
            <td>3.41%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3 class="section-header">Service Areas</h3>
      <ul class="service-list">
        <li><strong>SCE</strong> — Southern California (15M people)</li>
        <li><strong>PG&E</strong> — Northern & Central CA (16M people)</li>
        <li><strong>SDG&E</strong> — San Diego Area (3.7M people)</li>
        <li><strong>VEA</strong> — Nevada/CA Border (45K people)</li>
      </ul>
    </div>
  </div>

  <div class="project-links">
    <a href="https://github.com/k-shiroma-code/Weather-API-Project" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      View on GitHub
    </a>
  </div>
</article>

<!-- 3. EvoCharge -->
<article class="project-card" id="proj-evocharge">
  <div class="project-header">
    <h2 class="project-title">EvoCharge</h2>
  </div>

  <p class="project-description">
    A machine-learning dashboard that predicts electric vehicle charging energy usage and cost across California. The system uses real-time Lasso regression powered by 3,500 charging sessions, 16,455 statewide stations, and county-level electricity rates.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">Streamlit</span>
    <span class="tech-tag">Lasso Regression</span>
    <span class="tech-tag">Figma</span>
    <span class="tech-tag">Data Visualization</span>
  </div>

  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">3,500</span>
      <span class="stat-label">Charging Sessions</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">16,455</span>
      <span class="stat-label">CA Stations</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">58</span>
      <span class="stat-label">County Rates</span>
    </div>
  </div>

  <p class="contribution-note">
    My contributions: Website design in Figma, model testing and validation
  </p>

  <div class="project-links">
    <a href="https://evocharge.streamlit.app" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      Live App
    </a>
    <a href="https://github.com/anirudh9280/EvoCharge" target="_blank" rel="noopener" class="project-link">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      GitHub
    </a>
  </div>
</article>

<!-- 4. Pulsepanion -->
<article class="project-card" id="proj-pulsepanion">
  <div class="project-header">
    <h2 class="project-title">Pulsepanion</h2>
    <span class="project-badge">🏆 1st Place — 2025 Ai4Purpose Hackathon</span>
  </div>

  <p class="project-description">
    An award-winning AI healthcare tool that analyzes eighteen months of patient data to generate actionable insights for caregivers. It applies natural language processing with large language models via the OpenAI API and presents results in an interactive R Shiny dashboard with PDF export functionality.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">R Shiny</span>
    <span class="tech-tag">OpenAI API</span>
    <span class="tech-tag">NLP</span>
    <span class="tech-tag">Healthcare Analytics</span>
    <span class="tech-tag">PDF Export</span>
  </div>

  <div class="media-grid">
    <div class="media-item">
      <img src="{{ site.baseurl }}/assets/img/Pulsepantion.jpg" alt="Pulsepanion Dashboard">
    </div>
    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/tEJoXKLzVH4"
        title="Pulsepanion Demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </div>

  <div class="project-links">
    <a href="https://github.com/k-shiroma-code/NCHacks-Pulsepanion" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      View on GitHub
    </a>
  </div>
</article>

<!-- 5. Customer Segmentation -->
<article class="project-card" id="proj-segmentation">
  <div class="project-header">
    <h2 class="project-title">Customer Segmentation Analytics</h2>
  </div>

  <p class="project-description">
    A comprehensive analysis of over 500,000 retail transactions to uncover behavioral patterns in customer activity. Using RFM (Recency, Frequency, Monetary) analysis, the study identified five distinct customer segments, revealed seasonal purchasing trends, and optimized marketing spend allocation by 25%.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">SQL</span>
    <span class="tech-tag">Tableau</span>
    <span class="tech-tag">Python</span>
    <span class="tech-tag">RFM Analysis</span>
    <span class="tech-tag">Data Visualization</span>
  </div>

  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">500K+</span>
      <span class="stat-label">Transactions</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">5</span>
      <span class="stat-label">Segments</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">25%</span>
      <span class="stat-label">Spend Optimization</span>
    </div>
  </div>

  <div class="tableau-container">
    <iframe
      src="https://public.tableau.com/views/Customer_Segmentation_Overview_Github/Dashboard1?:showVizHome=no&:embed=true">
    </iframe>
  </div>

  <div class="project-links">
    <a href="https://github.com/k-shiroma-code/Customer-Segmentation-with-RFM-Analysis" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      View on GitHub
    </a>
  </div>
</article>

<!-- 6. Heart Disease -->
<article class="project-card" id="proj-heart">
  <div class="project-header">
    <h2 class="project-title">Heart Disease Prediction Pipeline</h2>
  </div>

  <p class="project-description">
    A machine learning pipeline that predicts cardiovascular risk using the UCI Heart Disease dataset. By addressing class imbalance with SMOTE and applying logistic regression, it achieved a 20% improvement in minority-class recall. The pipeline is designed for production deployment in healthcare analytics contexts.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">scikit-learn</span>
    <span class="tech-tag">SMOTE</span>
    <span class="tech-tag">Logistic Regression</span>
    <span class="tech-tag">Healthcare ML</span>
  </div>

  <div class="stats-grid">
    <div class="stat-item">
      <span class="stat-value">+20%</span>
      <span class="stat-label">Recall Improvement</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">SMOTE</span>
      <span class="stat-label">Class Balancing</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">UCI</span>
      <span class="stat-label">Dataset Source</span>
    </div>
  </div>

  <div class="media-grid">
    <div class="media-item">
      <img src="{{ site.baseurl }}/assets/img/IMG_1668.jpg" alt="Model Performance Metrics">
    </div>
    <div class="media-item">
      <img src="{{ site.baseurl }}/assets/img/Feature_Importance.jpg" alt="Feature Importance Analysis">
    </div>
  </div>

  <div class="project-links">
    <a href="https://github.com/k-shiroma-code/Heart-Disease-ML-Project" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      View on GitHub
    </a>
  </div>
</article>

<!-- 7. UEFA Euro 2024 -->
<article class="project-card" id="proj-uefa">
  <div class="project-header">
    <h2 class="project-title">UEFA Euro 2024 Sports Analytics</h2>
  </div>

  <p class="project-description">
    A sports analytics project developing predictive models for UEFA Euro 2024 match outcomes by combining ELO-based ratings with traditional statistical features. Models such as Decision Trees, Random Forests, and XGBoost were trained and evaluated using precision, recall, and F1-score to identify the most effective approach.
  </p>

  <div class="tech-stack">
    <span class="tech-tag">Python</span>
    <span class="tech-tag">XGBoost</span>
    <span class="tech-tag">Random Forest</span>
    <span class="tech-tag">ELO Ratings</span>
    <span class="tech-tag">Sports Analytics</span>
  </div>

  <div class="media-grid">
    <div class="media-item">
      <img src="{{ site.baseurl }}/assets/img/IMG_1670.jpg" alt="UEFA Euro 2024 Prediction Visualization 1">
    </div>
    <div class="media-item">
      <img src="{{ site.baseurl }}/assets/img/IMG_1671.jpg" alt="UEFA Euro 2024 Prediction Visualization 2">
    </div>
  </div>

  <div class="project-links">
    <a href="https://github.com/k-shiroma-code/CSUF-REU-Football-Analytics" target="_blank" rel="noopener" class="project-link primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      View on GitHub
    </a>
  </div>
</article>

<!-- ═══ ALL PROJECTS GRID (Lab 2, Step 4) ═══ -->
<section class="projects-overview">
<h2 class="overview-title">All Projects</h2>
<div class="projects">
<article>
<h2>Global Energy Dashboard</h2>
<p class="proj-meta">⚡ Jan 2026 — Present</p>
<p>Interactive dashboard on EV adoption vs. oil import dependencies, built for the UCSD Center for Energy Research.</p>
</article>
<article>
<h2>Grid Load Forecasting</h2>
<p class="proj-meta">🔌 2025</p>
<p>14-day California electricity demand forecasts across 4 utilities, with 2.26% MAPE.</p>
</article>
<article>
<h2>EvoCharge</h2>
<p class="proj-meta">🔋 2025</p>
<p>EV charging energy and cost predictor using 16,455 California stations.</p>
</article>
<article>
<h2>Pulsepanion</h2>
<p class="proj-meta">🏆 2025 · Ai4Purpose</p>
<p>1st place AI healthcare tool turning 18 months of patient data into caregiver insights.</p>
</article>
<article>
<h2>Customer Segmentation</h2>
<p class="proj-meta">📊 2024</p>
<p>RFM analysis on 500K+ retail transactions, uncovering 5 customer segments.</p>
</article>
<article>
<h2>Heart Disease Prediction</h2>
<p class="proj-meta">❤️ 2024</p>
<p>ML pipeline using SMOTE for a 20% boost in minority-class recall.</p>
</article>
<article>
<h2>UEFA Euro 2024 Analytics</h2>
<p class="proj-meta">⚽ 2024 · CSUF REU</p>
<p>Match outcome prediction combining ELO ratings with XGBoost and Random Forests.</p>
</article>
</div>
</section>

</div>

<!-- ═══ TIMELINE NAV LOGIC ═══ -->
<script>
(function() {
  var cards = Array.prototype.slice.call(document.querySelectorAll('.tl-card'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.project-card'));
  var scroller = document.getElementById('tlScroll');
  var prevBtn = document.getElementById('tlPrev');
  var nextBtn = document.getElementById('tlNext');
  var current = 0;

  function activate(idx) {
    if (idx < 0) idx = 0;
    if (idx >= cards.length) idx = cards.length - 1;
    current = idx;

    cards.forEach(function(c, i) {
      c.classList.toggle('active', i === idx);
    });

    var targetId = cards[idx].getAttribute('data-target');
    panels.forEach(function(p) {
      p.classList.toggle('is-visible', p.id === targetId);
    });

    // scroll the active card into view within the strip
    var card = cards[idx];
    var cardLeft = card.offsetLeft;
    var cardRight = cardLeft + card.offsetWidth;
    var viewLeft = scroller.scrollLeft;
    var viewRight = viewLeft + scroller.clientWidth;

    if (cardLeft < viewLeft + 20) {
      scroller.scrollTo({ left: cardLeft - 20, behavior: 'smooth' });
    } else if (cardRight > viewRight - 20) {
      scroller.scrollTo({ left: cardRight - scroller.clientWidth + 20, behavior: 'smooth' });
    }

    prevBtn.disabled = (idx === 0);
    nextBtn.disabled = (idx === cards.length - 1);
  }

  cards.forEach(function(card, i) {
    card.addEventListener('click', function() { activate(i); });
  });

  prevBtn.addEventListener('click', function() { activate(current - 1); });
  nextBtn.addEventListener('click', function() { activate(current + 1); });

  document.addEventListener('keydown', function(e) {
    // ignore if typing in an input
    var tag = (e.target.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      activate(current + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      activate(current - 1);
    }
  });

  // initial state — show newest (index 0)
  activate(0);
})();
</script>

<!-- ═══ GRID CARD → TIMELINE ═══ -->
<script>
document.querySelectorAll('.projects article').forEach(function(card, i) {
  card.addEventListener('click', function() {
    var tlCards = document.querySelectorAll('.tl-card');
    if (tlCards[i]) {
      tlCards[i].click();
      document.querySelector('.timeline-wrap').scrollIntoView({ behavior: 'smooth' });
    }
  });
});
</script>