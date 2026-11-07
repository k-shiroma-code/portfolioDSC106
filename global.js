// ===== Lab 3, Step 1 =====
console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

// ===== Lab 3, Step 3.1: automatic navigation menu =====
let pages = [
  { url: '', title: 'About Me' },
  { url: 'experience/', title: 'Experience' },
  { url: 'projects/', title: 'Projects' },
  { url: 'contact/', title: 'Contact' },
  { url: 'meta/', title: 'Meta' },
  { url: 'https://github.com/k-shiroma-code', title: 'GitHub' },
  { url: 'resume/', title: 'Resume', className: 'nav-button' },
];

// Site lives at https://k-shiroma-code.github.io/portfolioDSC106/
// `jekyll serve` also uses /portfolioDSC106/ locally (from baseurl in _config.yml)
const BASE_PATH = 'https://k-shiroma-code.github.io/portfolioDSC106/';
  location.hostname === 'localhost' || location.hostname === '127.0.0.1'
    ? '/portfolioDSC106/' // Local Jekyll server
    : '/portfolioDSC106/'; // GitHub Pages repo name

let nav = document.createElement('nav');
nav.className = 'main-navigation';
nav.setAttribute('aria-label', 'Main navigation');

// Put the nav in the header (keeps the site's design); fall back to the top of <body>
let headerContent = document.querySelector('.header-content');
if (headerContent) {
  headerContent.append(nav);
} else {
  document.body.prepend(nav);
}

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  url = !url.startsWith('http') ? BASE_PATH + url : url;

  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;
  if (p.className) {
    a.classList.add(p.className);
  }

  // ===== Step 3.2: highlight the current page =====
  a.classList.toggle(
    'current',
    a.host === location.host && a.pathname === location.pathname,
  );

  // ===== Step 3.2: open external links in a new tab =====
  if (a.host !== location.host) {
    a.target = '_blank';
    a.rel = 'noopener';
  }

  nav.append(a);
}

// ===== Lab 3, Step 4.2: dark mode switch =====
let isDarkOS = matchMedia('(prefers-color-scheme: dark)').matches;

document.body.insertAdjacentHTML(
  'afterbegin',
  `
  <label class="color-scheme">
    Theme:
    <select>
      <option value="light dark">Automatic (${isDarkOS ? 'Dark' : 'Light'})</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </label>`,
);

let select = document.querySelector('.color-scheme select');

// ===== Step 4.4: change the color scheme =====
function setColorScheme(colorScheme) {
  document.documentElement.style.setProperty('color-scheme', colorScheme);
  select.value = colorScheme;
}

// ===== Step 4.5: remember the user's choice =====
if ('colorScheme' in localStorage) {
  setColorScheme(localStorage.colorScheme);
}

select.addEventListener('input', function (event) {
  console.log('color scheme changed to', event.target.value);
  setColorScheme(event.target.value);
  localStorage.colorScheme = event.target.value;
});

// ===== Lab 4, Step 1.2: load JSON data from a file or API =====
export async function fetchJSON(url) {
  try {
    // Fetch the JSON file from the given URL
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching or parsing JSON data:', error);
  }
}

// ===== Lab 4, Step 1.4: render a list of projects into a container =====
export function renderProjects(projects, containerElement, headingLevel = 'h2') {
  if (!(containerElement instanceof Element)) {
    console.error('renderProjects: containerElement is not a valid DOM element');
    return;
  }

  // Only allow real heading tags (h1–h6); fall back to h2 otherwise
  if (!/^h[1-6]$/i.test(headingLevel)) {
    console.warn(`renderProjects: invalid heading level "${headingLevel}", using h2`);
    headingLevel = 'h2';
  }

  // Clear old content so re-rendering doesn't duplicate projects
  containerElement.innerHTML = '';

  if (!Array.isArray(projects) || projects.length === 0) {
    containerElement.innerHTML = '<p class="projects-empty">No projects found.</p>';
    return;
  }

  for (let project of projects) {
    const article = document.createElement('article');
    const title = project.title ?? 'Untitled project';
    const image = project.image || 'https://dsc106.com/labs/lab02/images/empty.svg';

    // Lab 5, Step 0.1: description + year share one grid cell, so they're wrapped in a <div>
    article.innerHTML = `
      <${headingLevel}>${title}</${headingLevel}>
      <img src="${image}" alt="${title}">
      <div>
        <p>${project.description ?? ''}</p>
        ${project.year ? `<p class="project-year">c. ${project.year}</p>` : ''}
        ${project.url ? `<a class="project-url" href="${project.url}" target="_blank" rel="noopener">View project ↗</a>` : ''}
      </div>
    `;
    containerElement.appendChild(article);
  }
}

// ===== Lab 4, Step 3.2: public profile data from the GitHub API =====
export async function fetchGitHubData(username) {
  return fetchJSON(`https://api.github.com/users/${username}`);
}
