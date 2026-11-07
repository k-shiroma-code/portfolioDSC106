// ===== Lab 4, Step 1.3: render the projects page from lib/projects.json =====
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';
import { fetchJSON, renderProjects } from '../global.js';

const projects = (await fetchJSON('../lib/projects.json')) ?? [];
const projectsContainer = document.querySelector('.projects');

// ===== Lab 4, Step 1.6: project count in the page title =====
const projectsTitle = document.querySelector('.projects-title');
if (projectsTitle) {
  projectsTitle.textContent = `${projects.length} Projects`;
}

function renderProjectList(projectsGiven) {
  renderProjects(projectsGiven, projectsContainer, 'h2');

  // Clicking a grid card opens its detail panel in the timeline (if it has one)
  projectsContainer?.querySelectorAll('article').forEach((article, i) => {
    const id = projectsGiven[i]?.id;
    const tlCard = id && document.querySelector(`.tl-card[data-target="${id}"]`);
    if (!tlCard) return;

    article.classList.add('has-details');
    article.addEventListener('click', (event) => {
      if (event.target.closest('a')) return; // let "View project" links just open
      tlCard.click();
      document.querySelector('.timeline-wrap').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ===== Lab 5: pie chart of projects per year =====
// Both filters live here as state, so a search and a selected year always combine
// (Step 5.4 fix). The selection is stored as the year label rather than the wedge
// index, because indices shift when the search changes which years are in the pie.
let query = '';
let selectedYear = null;

const arcGenerator = d3.arc().innerRadius(0).outerRadius(50);
const sliceGenerator = d3.pie().value((d) => d.value).sort(null);
// Colors are keyed by year, so each year keeps its color as the data is filtered
const colors = d3.scaleOrdinal(d3.schemeTableau10);

function matchesQuery(project) {
  let values = Object.values(project).join('\n').toLowerCase();
  return values.includes(query.toLowerCase());
}

function toggleYear(year) {
  selectedYear = selectedYear === year ? null : year;
  updatePage();
}

// Wedges and legend items can be selected with a click, or with Enter/Space when focused
function makeSelectable(selection, d) {
  selection
    .attr('data-year', d.label)
    .attr('tabindex', 0)
    .attr('role', 'button')
    .attr('aria-pressed', d.label === selectedYear)
    .on('click', () => toggleYear(d.label))
    .on('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleYear(d.label);
      }
    });
}

function renderPieChart(projectsGiven) {
  // Keep keyboard focus on the same year across the re-render
  let focused = document.activeElement?.closest?.('#projects-pie-plot path, .legend li');
  let focusedYear = focused?.dataset.year;
  let focusedTag = focused?.tagName.toLowerCase();

  let rolledData = d3.rollups(
    projectsGiven,
    (v) => v.length,
    (d) => d.year,
  );
  let data = rolledData
    .map(([year, count]) => ({ value: count, label: year }))
    .sort((a, b) => d3.descending(a.label, b.label));
  let arcData = sliceGenerator(data);

  let svg = d3.select('#projects-pie-plot');
  let legend = d3.select('.legend');
  svg.selectAll('path').remove();
  legend.selectAll('li').remove();

  arcData.forEach((arc) => {
    let d = arc.data;
    svg
      .append('path')
      .attr('d', arcGenerator(arc))
      .attr('fill', colors(d.label))
      .attr('aria-label', `${d.label}: ${d.value} project${d.value === 1 ? '' : 's'}`)
      .classed('selected', d.label === selectedYear)
      .call(makeSelectable, d)
      .append('title')
      .text(`${d.label}: ${d.value} project${d.value === 1 ? '' : 's'}`);
  });

  data.forEach((d) => {
    legend
      .append('li')
      .attr('class', 'legend-item')
      .classed('selected', d.label === selectedYear)
      .attr('style', `--color:${colors(d.label)}`)
      .html(`<span class="swatch"></span> ${d.label} <em>(${d.value})</em>`)
      .call(makeSelectable, d);
  });

  if (data.length === 0) {
    legend.append('li').attr('class', 'legend-empty').text('No matching projects');
  }

  if (focusedYear) {
    let selector = focusedTag === 'path' ? '#projects-pie-plot path' : '.legend li';
    document.querySelector(`${selector}[data-year="${focusedYear}"]`)?.focus();
  }
}

function updatePage() {
  let searchedProjects = projects.filter(matchesQuery);
  let visibleProjects =
    selectedYear === null
      ? searchedProjects
      : searchedProjects.filter((project) => project.year === selectedYear);

  renderProjectList(visibleProjects);
  // The pie shows every year that matches the search, so other years stay clickable
  renderPieChart(searchedProjects);
}

// ===== Lab 5, Step 4: search =====
let searchInput = document.querySelector('.searchBar');
searchInput?.addEventListener('input', (event) => {
  query = event.target.value;
  updatePage();
});

updatePage();
