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
  { url: 'https://github.com/k-shiroma-code', title: 'GitHub' },
  { url: 'resume/', title: 'Resume', className: 'nav-button' },
];

// Site lives at https://k-shiroma-code.github.io/portfolioDSC106/
// `jekyll serve` also uses /portfolioDSC106/ locally (from baseurl in _config.yml)
const BASE_PATH =
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