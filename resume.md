---
title: Resume
layout: default
permalink: /resume/
---

<style>
/* ═══ RESUME PAGE (Lab 2, Step 5) ═══ */
.resume-container {
  --accent: #a78bfa;
  --accent-soft: #c4b5fd;
  --accent-dim: rgba(167, 139, 250, 0.08);
  --surface-elevated: #141414;
  --surface-border: #222;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --text-muted: #666;
  max-width: 860px;
  margin: 0 auto;
  color: var(--text-primary);
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
}

/* Header */
.resume-header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 0 28px;
  border-bottom: 1px solid var(--surface-border);
  margin-bottom: 12px;
}

.resume-header h1 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 8px;
}

.resume-tagline {
  color: var(--accent-soft);
  font-size: 1.05rem;
  margin: 0;
}

.resume-contact {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
  font-size: 0.9rem;
}

.resume-contact a {
  color: var(--text-secondary);
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.resume-contact a:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--accent);
  color: #0a0a0a;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 8px;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.2s ease;
}

.download-btn:hover {
  background: var(--accent-soft);
  transform: translateY(-2px);
}

/* Sections: label column on the left, content on the right */
.resume-section {
  display: grid;
  grid-template-columns: 11rem 1fr;
  gap: 24px;
  padding: 36px 0;
  border-bottom: 1px solid var(--surface-border);
}

.resume-section:last-child {
  border-bottom: none;
}

.resume-section > h2 {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--accent);
  text-align: left;
}

/* Entries with a timeline rail */
.entries {
  position: relative;
  padding-left: 22px;
  border-left: 1px solid var(--surface-border);
}

.entry {
  position: relative;
  margin-bottom: 28px;
}

.entry:last-child {
  margin-bottom: 0;
}

.entry::before {
  content: '';
  position: absolute;
  left: -28px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #0a0a0a;
  border: 2px solid var(--accent);
  transition: background 0.2s ease, box-shadow 0.2s ease;
}

.entry:hover::before {
  background: var(--accent);
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.5);
}

.entry header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 2px 16px;
}

.entry h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
}

.entry .dates {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.78rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.entry .org {
  margin: 2px 0 8px;
  color: var(--accent-soft);
  font-size: 0.92rem;
}

.entry ul {
  margin: 0;
  padding-left: 18px;
}

.entry li {
  color: var(--text-secondary);
  font-size: 0.93rem;
  margin-bottom: 4px;
}

.entry li::marker {
  color: var(--accent);
}

/* Skills */
.skill-groups {
  display: grid;
  gap: 18px;
}

.skill-group h3 {
  margin: 0 0 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: left;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags li {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent-soft);
  background: var(--accent-dim);
  border: 1px solid rgba(167, 139, 250, 0.25);
  padding: 5px 12px;
  border-radius: 6px;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.tags li:hover {
  background: rgba(167, 139, 250, 0.16);
  border-color: var(--accent);
}

/* Small screens: stack section labels above content */
@media (max-width: 768px) {
  .resume-header h1 { font-size: 2.5rem; }
  .resume-section {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 28px 0;
  }
}
</style>

<div class="resume-container">

<header class="resume-header">
  <div>
    <h1>Kyle Shiroma</h1>
    <p class="resume-tagline">Data Science &amp; Mathematics @ UC San Diego</p>
    <ul class="resume-contact">
      <li><a href="mailto:ksshiroma@ucsd.edu">ksshiroma@ucsd.edu</a></li>
      <li><a href="https://linkedin.com/in/kshiroma" target="_blank" rel="noopener">LinkedIn</a></li>
      <li><a href="https://github.com/k-shiroma-code" target="_blank" rel="noopener">GitHub</a></li>
    </ul>
  </div>
  <a class="download-btn" href="{{ '/assets/pdf/Kyle_Shiroma_Resume_Spring26.pdf' | relative_url }}" target="_blank" rel="noopener">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
    Download PDF
  </a>
</header>

<section class="resume-section">
  <h2>Education</h2>
  <div class="entries">
    <article class="entry">
      <header>
        <h3>University of California, San Diego</h3>
        <span class="dates">[Expected <time datetime="2027">2027</time>]</span>
      </header>
      <p class="org">B.S. Data Science · Mathematics</p>
      <ul>
        <li>HDSI Lab 3.0 Fellow</li>
        <li>Consultant, Data Science Student Society (DS3)</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>Norco College</h3>
        <span class="dates">[<time datetime="2022">2022</time> – <time datetime="2024">2024</time>]</span>
      </header>
      <p class="org">CIS &amp; Mathematics transfer coursework</p>
      <ul>
        <li>CCCAA JUCO soccer student-athlete</li>
        <li>Associated Students of Norco College (ASNC)</li>
      </ul>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2>Experience</h2>
  <div class="entries">
    <article class="entry">
      <header>
        <h3>Data Science Intern</h3>
        <span class="dates">[Summer <time datetime="2026">2026</time>]</span>
      </header>
      <p class="org">Southern California Edison</p>
      <ul>
        <li>[What you worked on and the result]</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>Consultant, Energy Transitions</h3>
        <span class="dates"><time datetime="2026-01">Jan 2026</time> – Present</span>
      </header>
      <p class="org">Data Science Student Society (DS3) · UCSD Center for Energy Research</p>
      <ul>
        <li>Mentor a student consulting cohort building a global energy dashboard for the UCSD Center for Energy Research</li>
        <li>Visualize the tradeoff between EV adoption and oil import dependencies across countries to support energy policy research</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>HDSI Lab 3.0 Fellow</h3>
        <span class="dates">[Dates]</span>
      </header>
      <p class="org">Halıcıoğlu Data Science Institute, UC San Diego</p>
      <ul>
        <li>Build AI-driven, hands-on educational tools for K–12 outreach</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>Undergraduate Researcher</h3>
        <span class="dates"><time datetime="2024">2024</time></span>
      </header>
      <p class="org">CSU Fullerton REU · Advisor: Dr. Doina Bein</p>
      <ul>
        <li>Built predictive models for UEFA Euro 2024 match outcomes, combining Elo ratings with statistical features</li>
        <li>Trained and compared Decision Trees, Random Forests, and XGBoost using precision, recall, and F1-score</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>Mathematics &amp; Computer Science Tutor</h3>
        <span class="dates">[Dates]</span>
      </header>
      <p class="org">Learning Resources Center, Norco College</p>
      <ul>
        <li>Tutored students in mathematics and computer science coursework</li>
      </ul>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2>Awards</h2>
  <div class="entries">
    <article class="entry">
      <header>
        <h3>1st Place, Ai4Purpose Hackathon</h3>
        <span class="dates"><time datetime="2025">2025</time></span>
      </header>
      <p class="org">Pulsepanion</p>
      <ul>
        <li>AI healthcare tool that turns 18 months of patient data into insights for caregivers, using LLMs and an R Shiny dashboard</li>
      </ul>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2>Selected Projects</h2>
  <div class="entries">
    <article class="entry">
      <header>
        <h3>Grid Load Forecasting</h3>
        <span class="dates"><time datetime="2025">2025</time></span>
      </header>
      <ul>
        <li>Forecast 14-day electricity demand across 4 California utilities using ensemble models on 315,648 observations (2.26% MAPE)</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>EvoCharge</h3>
        <span class="dates"><time datetime="2025">2025</time></span>
      </header>
      <ul>
        <li>EV charging energy and cost predictor using 3,500 sessions and 16,455 California stations; designed the site in Figma and validated models</li>
      </ul>
    </article>

    <article class="entry">
      <header>
        <h3>Customer Segmentation</h3>
        <span class="dates"><time datetime="2024">2024</time></span>
      </header>
      <ul>
        <li>RFM analysis of 500K+ retail transactions, identifying 5 customer segments and optimizing marketing spend by 25%</li>
      </ul>
    </article>
  </div>
</section>

<section class="resume-section">
  <h2>Skills</h2>
  <div class="skill-groups">
    <div class="skill-group">
      <h3>Languages</h3>
      <ul class="tags">
        <li>Python</li>
        <li>R</li>
        <li>SQL</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
      </ul>
    </div>
    <div class="skill-group">
      <h3>Machine Learning</h3>
      <ul class="tags">
        <li>scikit-learn</li>
        <li>XGBoost</li>
        <li>Random Forests</li>
        <li>Regression</li>
        <li>SMOTE</li>
        <li>NLP / LLMs</li>
      </ul>
    </div>
    <div class="skill-group">
      <h3>Tools &amp; Frameworks</h3>
      <ul class="tags">
        <li>Tableau</li>
        <li>R Shiny</li>
        <li>Streamlit</li>
        <li>React</li>
        <li>FastAPI</li>
        <li>Figma</li>
        <li>Git</li>
      </ul>
    </div>
  </div>
</section>

</div>