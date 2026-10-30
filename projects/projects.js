// ===== Lab 4, Step 1.3: render the projects page from lib/projects.json =====
import { fetchJSON, renderProjects } from '../global.js';

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');

renderProjects(projects, projectsContainer, 'h2');

// ===== Lab 4, Step 1.6: project count in the page title =====
const projectsTitle = document.querySelector('.projects-title');
if (projectsTitle && projects) {
  projectsTitle.textContent = `${projects.length} Projects`;
}

// Clicking a grid card opens its detail panel in the timeline (if it has one)
projectsContainer?.querySelectorAll('article').forEach((article, i) => {
  const tlCard = projects[i]?.id && document.querySelector(`.tl-card[data-target="${projects[i].id}"]`);
  if (!tlCard) return;

  article.classList.add('has-details');
  article.addEventListener('click', () => {
    tlCard.click();
    document.querySelector('.timeline-wrap').scrollIntoView({ behavior: 'smooth' });
  });
});
