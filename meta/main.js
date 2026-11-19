// ===== Lab 6: meta-analysis of this site's code =====
import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm';
// ===== Lab 8, Step 3.3: Scrollama drives the scrollytelling =====
import scrollama from 'https://cdn.jsdelivr.net/npm/scrollama@3.2.0/+esm';

// ===== Step 1.1: read the CSV, converting numbers and dates from strings =====
async function loadData() {
  const data = await d3.csv('loc.csv', (row) => ({
    ...row,
    line: Number(row.line),
    depth: Number(row.depth),
    length: Number(row.length),
    date: new Date(row.date + 'T00:00' + row.timezone),
    datetime: new Date(row.datetime),
  }));

  return data;
}

// ===== Step 1.2: one object per commit =====
function processCommits(data) {
  return d3
    .groups(data, (d) => d.commit)
    .map(([commit, lines]) => {
      let first = lines[0];
      let { author, date, time, timezone, datetime } = first;
      let ret = {
        id: commit,
        url: 'https://github.com/k-shiroma-code/portfolioDSC106/commit/' + commit,
        author,
        date,
        time,
        timezone,
        datetime,
        hourFrac: datetime.getHours() + datetime.getMinutes() / 60,
        totalLines: lines.length,
      };

      // Keep the raw lines, but hidden from console.log and loops
      Object.defineProperty(ret, 'lines', {
        value: lines,
        enumerable: false,
        writable: false,
        configurable: false,
      });

      return ret;
    })
    // Oldest first, so the scrollytelling story reads in order (Lab 8)
    .sort((a, b) => a.datetime - b.datetime);
}

// ===== Step 1.3: summary stats =====
function renderCommitInfo(data, commits) {
  const dl = d3.select('#stats').append('dl').attr('class', 'stats');
  const format = d3.format(',');

  dl.append('dt').html('Total <abbr title="Lines of code">LOC</abbr>');
  dl.append('dd').text(format(data.length));

  dl.append('dt').text('Total commits');
  dl.append('dd').text(format(commits.length));

  // Number of distinct values
  dl.append('dt').text('Files');
  dl.append('dd').text(d3.group(data, (d) => d.file).size);

  // Min/max value: the file with the most lines
  const fileLengths = d3.rollups(
    data,
    (v) => d3.max(v, (v) => v.line),
    (d) => d.file,
  );
  const [longestFile, longestFileLength] = d3.greatest(fileLengths, (d) => d[1]);
  dl.append('dt').text('Longest file');
  dl.append('dd').html(`${longestFile.split(/[\\/]/).pop()} <small>${format(longestFileLength)} lines</small>`);

  // Aggregate over the whole dataset
  dl.append('dt').text('Avg line length');
  dl.append('dd').html(`${d3.format('.1f')(d3.mean(data, (d) => d.length))} <small>chars</small>`);

  // Min/max value: when most lines were written
  const workByPeriod = d3.rollups(
    data,
    (v) => v.length,
    (d) => d.datetime.toLocaleString('en', { dayPeriod: 'short' }),
  );
  dl.append('dt').text('Most work done');
  dl.append('dd').text(d3.greatest(workByPeriod, (d) => d[1])?.[0]);

  const workByDay = d3.rollups(
    data,
    (v) => v.length,
    (d) => d.datetime.toLocaleString('en', { weekday: 'long' }),
  );
  dl.append('dt').text('Busiest day');
  dl.append('dd').text(d3.greatest(workByDay, (d) => d[1])?.[0]);
}

// ===== Step 3: tooltip =====
function renderTooltipContent(commit) {
  const link = document.getElementById('commit-link');
  const date = document.getElementById('commit-date');
  const time = document.getElementById('commit-clock');
  const author = document.getElementById('commit-author');
  const lines = document.getElementById('commit-lines');

  if (Object.keys(commit).length === 0) return;

  link.href = commit.url;
  link.textContent = commit.id;
  date.textContent = commit.datetime?.toLocaleString('en', { dateStyle: 'full' });
  time.textContent = commit.datetime?.toLocaleString('en', { timeStyle: 'short' });
  author.textContent = commit.author;
  lines.textContent = commit.totalLines;
}

function updateTooltipVisibility(isVisible) {
  const tooltip = document.getElementById('commit-tooltip');
  tooltip.hidden = !isVisible;
}

function updateTooltipPosition(event) {
  const tooltip = document.getElementById('commit-tooltip');
  const offset = 14;
  // Flip to the other side of the cursor near the right/bottom edge of the window
  let x = event.clientX + offset;
  let y = event.clientY + offset;
  if (x + tooltip.offsetWidth > window.innerWidth) x = event.clientX - offset - tooltip.offsetWidth;
  if (y + tooltip.offsetHeight > window.innerHeight) y = event.clientY - offset - tooltip.offsetHeight;
  tooltip.style.left = `${Math.max(0, x)}px`;
  tooltip.style.top = `${Math.max(0, y)}px`;
}

// ===== Step 2: scatterplot of commit time vs. date =====
// Global so the brush handlers can map commits to chart coordinates (Step 5.4)
let xScale;
let yScale;
let rScale;

const width = 1000;
const height = 600;
const margin = { top: 10, right: 10, bottom: 30, left: 40 };
const usableArea = {
  top: margin.top,
  right: width - margin.right,
  bottom: height - margin.bottom,
  left: margin.left,
  width: width - margin.left - margin.right,
  height: height - margin.top - margin.bottom,
};

// Draws everything that doesn't depend on the time filter, once
function renderScatterPlot(data, commits) {
  const svg = d3
    .select('#chart')
    .append('svg')
    .attr('viewBox', `0 0 ${width} ${height}`)
    .style('overflow', 'visible');

  xScale = d3
    .scaleTime()
    .domain(d3.extent(commits, (d) => d.datetime))
    .range([usableArea.left, usableArea.right])
    .nice();

  yScale = d3.scaleLinear().domain([0, 24]).range([usableArea.bottom, usableArea.top]);

  // Step 4: dot area ∝ lines edited. Based on ALL commits so a dot keeps its size while filtering.
  const [minLines, maxLines] = d3.extent(commits, (d) => d.totalLines);
  rScale = d3.scaleSqrt().domain([minLines, maxLines]).range([2, 30]);

  // Step 2.3: gridlines go first so they sit behind everything; bluer at night, orange by day
  const timeColor = d3
    .scaleLinear()
    .domain([0, 6, 12, 18, 24])
    .range(['#4e79a7', '#7aa6d6', '#f28e2c', '#e8743b', '#4e79a7']);

  const gridlines = svg
    .append('g')
    .attr('class', 'gridlines')
    .attr('transform', `translate(${usableArea.left}, 0)`);

  gridlines.call(d3.axisLeft(yScale).tickFormat('').tickSize(-usableArea.width));
  gridlines.selectAll('.tick line').attr('stroke', (d) => timeColor(d));

  svg.append('g').attr('class', 'dots');

  // Step 2.2: axes, drawn after the dots
  svg
    .append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${usableArea.bottom})`)
    .call(d3.axisBottom(xScale));

  svg
    .append('g')
    .attr('class', 'y-axis')
    .attr('transform', `translate(${usableArea.left}, 0)`)
    .call(d3.axisLeft(yScale).tickFormat((d) => String(d % 24).padStart(2, '0') + ':00'));

  createBrushSelector(svg);
  updateScatterPlot(commits);
}

// ===== Lab 8, Step 1.2: update the existing chart instead of redrawing it =====
function updateScatterPlot(filteredCommits) {
  const svg = d3.select('#chart svg');
  if (filteredCommits.length === 0) return;

  // Zoom the x axis to the commits shown so far
  let [start, end] = d3.extent(filteredCommits, (d) => d.datetime);
  if (+start === +end) {
    // A single commit has no range to show, so pad by a day on each side
    start = d3.timeDay.offset(start, -1);
    end = d3.timeDay.offset(end, 1);
  }
  xScale.domain([start, end]).nice();
  svg.select('g.x-axis').transition().duration(300).call(d3.axisBottom(xScale));

  // Big dots first so small ones stay hoverable
  const sortedCommits = d3.sort(filteredCommits, (d) => -d.totalLines);

  svg
    .select('g.dots')
    .selectAll('circle')
    // Step 1.3: key by commit id so existing circles are reused, not recreated
    .data(sortedCommits, (d) => d.id)
    .join('circle')
    // Set as styles (not attributes) so the CSS transitions animate them (Step 1.4)
    .style('cx', (d) => `${xScale(d.datetime)}px`)
    .style('cy', (d) => `${yScale(d.hourFrac)}px`)
    .style('--r', (d) => rScale(d.totalLines))
    .on('mouseenter', (event, commit) => {
      renderTooltipContent(commit);
      updateTooltipVisibility(true);
      updateTooltipPosition(event);
    })
    .on('mousemove', (event) => updateTooltipPosition(event))
    .on('mouseleave', () => updateTooltipVisibility(false))
    .order();

  // Keep a brush selection in sync with the commits now on screen
  refreshSelection(d3.brushSelection(svg.node()));
}

// ===== Step 5: brushing =====
function createBrushSelector(svg) {
  svg.call(d3.brush().on('start brush end', (event) => refreshSelection(event.selection)));

  // The brush overlay catches all mouse events; move the dots (and later elements) above it
  svg.selectAll('.dots, .overlay ~ *').raise();
}

function refreshSelection(selection) {
  d3.selectAll('#chart circle').classed('selected', (d) => isCommitSelected(selection, d));
  renderSelectionCount(selection);
  renderLanguageBreakdown(selection);
}

function isCommitSelected(selection, commit) {
  if (!selection) {
    return false;
  }
  const [x0, x1] = selection.map((d) => d[0]);
  const [y0, y1] = selection.map((d) => d[1]);
  const x = xScale(commit.datetime);
  const y = yScale(commit.hourFrac);
  return x >= x0 && x <= x1 && y >= y0 && y <= y1;
}

function selectedCommitsFor(selection) {
  return selection ? filteredCommits.filter((d) => isCommitSelected(selection, d)) : [];
}

function renderSelectionCount(selection) {
  const selectedCommits = selectedCommitsFor(selection);

  const countElement = document.querySelector('#selection-count');
  countElement.textContent = `${selectedCommits.length || 'No'} commit${
    selectedCommits.length === 1 ? '' : 's'
  } selected`;

  return selectedCommits;
}

function renderLanguageBreakdown(selection) {
  const selectedCommits = selectedCommitsFor(selection);
  const container = document.getElementById('language-breakdown');

  if (selectedCommits.length === 0) {
    container.innerHTML = '';
    return;
  }
  const lines = selectedCommits.flatMap((d) => d.lines);

  // Count lines per language
  const breakdown = d3.rollup(
    lines,
    (v) => v.length,
    (d) => d.type,
  );

  container.innerHTML = '';

  for (const [language, count] of breakdown) {
    const proportion = count / lines.length;
    const formatted = d3.format('.1~%')(proportion);

    container.innerHTML += `
      <dt>${language}</dt>
      <dd>${count} lines <small>(${formatted})</small></dd>
    `;
  }
}

// ===== Lab 8, Step 2: unit visualization — one dot per line, grouped by file =====
let colors;

function renderFileLegend(data) {
  // Fixed domain so each file type keeps its color while files appear and disappear
  const types = d3.sort(new Set(data.map((d) => d.type)));
  colors = d3.scaleOrdinal(d3.schemeTableau10).domain(types);

  d3.select('#file-legend')
    .selectAll('li')
    .data(types)
    .join('li')
    .style('--color', (d) => colors(d))
    .text((d) => d);
}

function updateFileDisplay(filteredCommits) {
  const lines = filteredCommits.flatMap((d) => d.lines);

  // Step 2.3: biggest file first
  const files = d3
    .groups(lines, (d) => d.file)
    .map(([name, lines]) => ({ name, lines, type: lines[0].type }))
    .sort((a, b) => b.lines.length - a.lines.length);

  const filesContainer = d3
    .select('#files')
    .selectAll('div')
    .data(files, (d) => d.name)
    .join((enter) =>
      enter.append('div').call((div) => {
        div.append('dt').call((dt) => {
          dt.append('code');
          dt.append('small');
        });
        div.append('dd');
      }),
    )
    .order();

  filesContainer.select('dt > code').text((d) => d.name);
  filesContainer.select('dt > small').text((d) => `${d3.format(',')(d.lines.length)} lines`);

  // Step 2.2 + 2.4: one dot per line, colored by technology
  filesContainer
    .select('dd')
    .selectAll('div')
    .data((d) => d.lines)
    .join('div')
    .attr('class', 'loc')
    .style('--color', (d) => colors(d.type));
}

// ===== Lab 8, Step 3.2: one paragraph of story per commit =====
function renderStory(commits) {
  const format = d3.format(',');

  d3.select('#scatter-story')
    .selectAll('.step')
    .data(commits)
    .join('div')
    .attr('class', 'step')
    .html((d, i) => {
      const fileCount = d3.rollups(d.lines, (v) => v.length, (l) => l.file).length;
      const when = d.datetime.toLocaleString('en', { dateStyle: 'full', timeStyle: 'short' });
      return `
        <p class="step-date">${when}</p>
        <p>
          ${i === 0 ? 'I made my <a href="' + d.url + '" target="_blank" rel="noopener">first commit</a>' : 'I made <a href="' + d.url + '" target="_blank" rel="noopener">another commit</a>'}.
          ${format(d.totalLines)} of its lines ${d.totalLines === 1 ? 'is' : 'are'} still on the site today, across
          ${fileCount} file${fileCount === 1 ? '' : 's'}.
        </p>
      `;
    });
}

// ===== Lab 8, Step 1.1–1.2: one shared "show commits up to" time =====
let data = await loadData();
let commits = processCommits(data);
let filteredCommits = commits;

const timeScale = d3
  .scaleTime()
  .domain(d3.extent(commits, (d) => d.datetime))
  .range([0, 100]);

const slider = document.getElementById('commit-progress');
const commitTimeLabel = document.getElementById('commit-time');

function setCommitMaxTime(commitMaxTime) {
  filteredCommits = commits.filter((d) => d.datetime <= commitMaxTime);

  slider.value = timeScale(commitMaxTime);
  commitTimeLabel.dateTime = commitMaxTime.toISOString();
  commitTimeLabel.textContent = commitMaxTime.toLocaleString('en', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  updateScatterPlot(filteredCommits);
  updateFileDisplay(filteredCommits);
}

function onTimeSliderChange() {
  setCommitMaxTime(timeScale.invert(Number(slider.value)));
}

renderCommitInfo(data, commits);
renderFileLegend(data);
renderScatterPlot(data, commits);
renderStory(commits);

slider.addEventListener('input', onTimeSliderChange);
setCommitMaxTime(timeScale.domain()[1]);

// ===== Lab 8, Step 3.3: scrolling to a commit's paragraph shows the site up to that commit =====
const scroller = scrollama();
scroller
  .setup({
    container: '#scrolly-1',
    step: '#scrolly-1 .step',
  })
  .onStepEnter((response) => {
    d3.selectAll('#scatter-story .step').classed('is-active', (d, i) => i === response.index);
    setCommitMaxTime(response.element.__data__.datetime);
  });

window.addEventListener('resize', () => scroller.resize());
