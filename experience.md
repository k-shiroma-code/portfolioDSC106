---
title: Resume
layout: default
permalink: /resume/
---

<style>
/* ═══ RESUME PAGE (Lab 2, Step 5) — matches Experience page styling ═══ */
.resume-container {
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

.resume-container h1,
.resume-container h2,
.resume-container h3 {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;
}

/* ═══ ELECTRICITY GRID BACKGROUND ═══ */
.grid-dots {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 0;
  background-image: radial-gradient(circle, rgba(167, 139, 250, 0.15) 1px, transparent 1px);
  background-size: 48px 48px;
}

.grid-lines {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 0;
  background-image:
    linear-gradient(rgba(167, 139, 250, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(167, 139, 250, 0.06) 1px, transparent 1px);
  background-size: 48px 48px;
}

.grid-bg {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 0; overflow: hidden;
}

.pulse-h, .pulse-v { position: fixed; pointer-events: none; z-index: 0; opacity: 0; }

.pulse-h {
  height: 2px; left: 0; width: 100%;
  background: linear-gradient(90deg, transparent 0%, transparent 30%,
    rgba(167, 139, 250, 0.4) 45%, rgba(196, 181, 253, 0.7) 50%,
    rgba(167, 139, 250, 0.4) 55%, transparent 70%, transparent 100%);
  background-size: 200% 100%;
}

.pulse-v {
  width: 2px; top: 0; height: 100%;
  background: linear-gradient(180deg, transparent 0%, transparent 30%,
    rgba(167, 139, 250, 0.4) 45%, rgba(196, 181, 253, 0.7) 50%,
    rgba(167, 139, 250, 0.4) 55%, transparent 70%, transparent 100%);
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
  position: fixed; width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent); pointer-events: none; z-index: 0; opacity: 0;
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
  margin: 12px 0 0;
  text-align: center;
}

.resume-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 10px 20px;
  border: 1px solid var(--surface-border);
  border-radius: 8px;
  background: var(--surface-elevated);
  transition: all 0.2s ease;
}

.resume-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: #0a0a0a;
  text-decoration: none;
}

.resume-btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: #0a0a0a;
}

.resume-btn.primary:hover {
  background: var(--accent-soft);
  border-color: var(--accent-soft);
}

/* ═══ SECTIONS ═══ */
.resume-section {
  margin: 48px 0;
}

.section-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-muted);
  font-weight: 600;
  margin: 0 0 16px;
  padding-left: 4px;
  text-align: left;
}

/* Responsive card grid: 2 columns on wide screens, 1 on narrow */
.resume-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  gap: 16px;
}

.resume-stack {
  display: grid;
  gap: 16px;
}

/* ═══ CARDS (same look as Experience cards) ═══ */
.resume-card {
  background: var(--surface-elevated);
  border: 1px solid var(--surface-border);
  border-radius: 16px;
  padding: 28px 32px;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.resume-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.resume-card-header {
  margin-bottom: 12px;
}

.resume-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 6px;
  text-align: left;
}

.resume-meta {
  display: flex;
  align-items: center;
  gap: 8px 16px;
  flex-wrap: wrap;
}

.resume-role {
  color: var(--accent);
  font-weight: 500;
  font-size: 0.95rem;
}

.resume-date {
  color: var(--text-muted);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
}

.resume-date svg {
  width: 14px;
  height: 14px;
}

.resume-points {
  margin: 0;
  padding-left: 18px;
}

.resume-points li {
  color: var(--text-primary);
  font-size: 0.97rem;
  margin-bottom: 6px;
}

.resume-points li:last-child {
  margin-bottom: 0;
}

.resume-points li::marker {
  color: var(--accent);
}

/* Tech tags (same as Experience page) */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
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

/* Skills */
.skill-group + .skill-group {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--surface-border);
}

.skill-group h3 {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  text-align: left;
}

.skill-group .tech-stack {
  margin-top: 10px;
}

.see-all {
  display: inline-block;
  margin-top: 16px;
  padding-left: 4px;
  color: var(--accent-soft);
  font-weight: 500;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .grid-dots, .grid-lines, .grid-bg { display: none; }
  .page-header h1 { font-size: 2.5rem; }
  .resume-grid { grid-template-columns: 1fr; }
  .resume-card { padding: 22px; }
  .resume-title { font-size: 1.1rem; }
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
    setTimeout(function() {
      firePulse();
      scheduleNext();
    }, delay);
  }

  setTimeout(function() {
    firePulse();
    scheduleNext();
  }, 800);
})();
</script>

<div class="resume-container">

<div class="page-header">
  <h1>Resume</h1>
  <p>Data Science &amp; Mathematics @ UC San Diego</p>
  <div class="resume-actions">
    <a class="resume-btn primary" href="{{ '/assets/pdf/Kyle_Shiroma_Resume_Spring26.pdf' | relative_url }}" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      Download PDF
    </a>
    <a class="resume-btn" href="mailto:ksshiroma@ucsd.edu">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      Email
    </a>
    <a class="resume-btn" href="https://linkedin.com/in/kshiroma" target="_blank" rel="noopener">LinkedIn</a>
    <a class="resume-btn" href="https://github.com/k-shiroma-code" target="_blank" rel="noopener">GitHub</a>
  </div>
</div>

<section class="resume-section">
  <h2 class="section-label">Education</h2>
  <div class="resume-grid">
    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">University of California, San Diego</h3>
        <div class="resume-meta">
          <span class="resume-role">B.S. Data Science · Mathematics</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            2025 – Present
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>HDSI 3.0 Lab Undergraduate Research Fellow</li>
        <li>Consultant, Data Science Student Society (DS3)</li>
      </ul>
    </article>

    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">Norco College</h3>
        <div class="resume-meta">
          <span class="resume-role">CIS &amp; Mathematics Transfer</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Transferred 2025
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>CCCAA JUCO soccer student-athlete</li>
        <li>Associated Students of Norco College (ASNC)</li>
        <li>Peer Tutor, Learning Resources Center (CRLA certified)</li>
      </ul>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-label">Experience</h2>
  <div class="resume-stack">
    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">Southern California Edison (SCE)</h3>
        <div class="resume-meta">
          <span class="resume-role">Incoming Intern – System Planning &amp; Engineering</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Summer 2026
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>Supporting grid planning and engineering analysis for a utility serving ~15 million people across Southern California</li>
      </ul>
      <div class="tech-stack">
        <span class="tech-tag">Power BI</span>
        <span class="tech-tag">SQL</span>
        <span class="tech-tag">Python</span>
        <span class="tech-tag">Grid Planning</span>
      </div>
    </article>

    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">Data Science Student Society (DS3)</h3>
        <div class="resume-meta">
          <span class="resume-role">Consultant – Energy Transitions</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Jan 2026 – Present
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>Mentor a student consulting cohort building a global energy dashboard for the UCSD Center for Energy Research</li>
        <li>Visualize the tradeoff between EV adoption and oil import dependencies to support energy policy research</li>
      </ul>
      <div class="tech-stack">
        <span class="tech-tag">JavaScript</span>
        <span class="tech-tag">Data Visualization</span>
        <span class="tech-tag">Energy Analytics</span>
      </div>
    </article>

    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">UC San Diego HDSI 3.0 Lab</h3>
        <div class="resume-meta">
          <span class="resume-role">Undergraduate Research Fellow</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            2025 – Present
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>Build K–12 educational engagement projects at the intersection of AI, engineering, and art</li>
        <li>Combine data science, robotics, and creative technologies in hands-on builds</li>
      </ul>
      <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">OpenCV</span>
        <span class="tech-tag">LLMs</span>
        <span class="tech-tag">Arduino</span>
        <span class="tech-tag">Raspberry Pi</span>
        <span class="tech-tag">React</span>
      </div>
    </article>

    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">CIC Summer Research Program · CSU Fullerton</h3>
        <div class="resume-meta">
          <span class="resume-role">Data Science Intern</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            May – July 2024
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>Engineered Elo-based ratings from European football match records under Dr. Doina Bein</li>
        <li>Built Logistic Regression and XGBoost models to predict UEFA Euro 2024 outcomes (61% accuracy)</li>
        <li>Handled class imbalance with SMOTE and undersampling for a 20% recall improvement</li>
      </ul>
      <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">XGBoost</span>
        <span class="tech-tag">SMOTE</span>
        <span class="tech-tag">Logistic Regression</span>
      </div>
    </article>

    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">Norco College Learning Resources Center</h3>
        <div class="resume-meta">
          <span class="resume-role">Peer Tutor</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            Jan 2023 – June 2025
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>Tutored 100+ students in Calculus, Statistics, and C++</li>
        <li>Guided students step by step through problem-solving to build conceptual understanding</li>
      </ul>
      <div class="tech-stack">
        <span class="tech-tag">Calculus</span>
        <span class="tech-tag">Statistics</span>
        <span class="tech-tag">C++</span>
        <span class="tech-tag">CRLA Certified</span>
      </div>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-label">Awards</h2>
  <div class="resume-stack">
    <article class="resume-card">
      <div class="resume-card-header">
        <h3 class="resume-title">Ai4Purpose Hackathon</h3>
        <div class="resume-meta">
          <span class="resume-role">1st Place – Pulsepanion</span>
          <span class="resume-date">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            2025
          </span>
        </div>
      </div>
      <ul class="resume-points">
        <li>AI healthcare tool that turns 18 months of patient data into actionable insights for caregivers</li>
      </ul>
      <div class="tech-stack">
        <span class="tech-tag">R Shiny</span>
        <span class="tech-tag">OpenAI API</span>
        <span class="tech-tag">NLP</span>
      </div>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2 class="section-label">Skills</h2>
  <div class="resume-card">
    <div class="skill-group">
      <h3>Languages</h3>
      <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">R</span>
        <span class="tech-tag">SQL</span>
        <span class="tech-tag">C++</span>
        <span class="tech-tag">JavaScript</span>
        <span class="tech-tag">HTML/CSS</span>
      </div>
    </div>
    <div class="skill-group">
      <h3>Machine Learning</h3>
      <div class="tech-stack">
        <span class="tech-tag">scikit-learn</span>
        <span class="tech-tag">XGBoost</span>
        <span class="tech-tag">Random Forests</span>
        <span class="tech-tag">Logistic Regression</span>
        <span class="tech-tag">SMOTE</span>
        <span class="tech-tag">LLMs / NLP</span>
        <span class="tech-tag">OpenCV</span>
      </div>
    </div>
    <div class="skill-group">
      <h3>Tools &amp; Frameworks</h3>
      <div class="tech-stack">
        <span class="tech-tag">Power BI</span>
        <span class="tech-tag">Tableau</span>
        <span class="tech-tag">R Shiny</span>
        <span class="tech-tag">Streamlit</span>
        <span class="tech-tag">React</span>
        <span class="tech-tag">Astro</span>
        <span class="tech-tag">FastAPI</span>
        <span class="tech-tag">Figma</span>
        <span class="tech-tag">Git</span>
      </div>
    </div>
  </div>
  <a class="see-all" href="{{ '/projects/' | relative_url }}">See my projects →</a>
</section>

</div>