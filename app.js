// ===== STATE DATA =====
const STATES_DATA = [
  { state: "Alabama", capital: "Montgomery", abbr: "AL" },
  { state: "Alaska", capital: "Juneau", abbr: "AK" },
  { state: "Arizona", capital: "Phoenix", abbr: "AZ" },
  { state: "Arkansas", capital: "Little Rock", abbr: "AR" },
  { state: "California", capital: "Sacramento", abbr: "CA" },
  { state: "Colorado", capital: "Denver", abbr: "CO" },
  { state: "Connecticut", capital: "Hartford", abbr: "CT" },
  { state: "Delaware", capital: "Dover", abbr: "DE" },
  { state: "Florida", capital: "Tallahassee", abbr: "FL" },
  { state: "Georgia", capital: "Atlanta", abbr: "GA" },
  { state: "Hawaii", capital: "Honolulu", abbr: "HI" },
  { state: "Idaho", capital: "Boise", abbr: "ID" },
  { state: "Illinois", capital: "Springfield", abbr: "IL" },
  { state: "Indiana", capital: "Indianapolis", abbr: "IN" },
  { state: "Iowa", capital: "Des Moines", abbr: "IA" },
  { state: "Kansas", capital: "Topeka", abbr: "KS" },
  { state: "Kentucky", capital: "Frankfort", abbr: "KY" },
  { state: "Louisiana", capital: "Baton Rouge", abbr: "LA" },
  { state: "Maine", capital: "Augusta", abbr: "ME" },
  { state: "Maryland", capital: "Annapolis", abbr: "MD" },
  { state: "Massachusetts", capital: "Boston", abbr: "MA" },
  { state: "Michigan", capital: "Lansing", abbr: "MI" },
  { state: "Minnesota", capital: "Saint Paul", abbr: "MN" },
  { state: "Mississippi", capital: "Jackson", abbr: "MS" },
  { state: "Missouri", capital: "Jefferson City", abbr: "MO" },
  { state: "Montana", capital: "Helena", abbr: "MT" },
  { state: "Nebraska", capital: "Lincoln", abbr: "NE" },
  { state: "Nevada", capital: "Carson City", abbr: "NV" },
  { state: "New Hampshire", capital: "Concord", abbr: "NH" },
  { state: "New Jersey", capital: "Trenton", abbr: "NJ" },
  { state: "New Mexico", capital: "Santa Fe", abbr: "NM" },
  { state: "New York", capital: "Albany", abbr: "NY" },
  { state: "North Carolina", capital: "Raleigh", abbr: "NC" },
  { state: "North Dakota", capital: "Bismarck", abbr: "ND" },
  { state: "Ohio", capital: "Columbus", abbr: "OH" },
  { state: "Oklahoma", capital: "Oklahoma City", abbr: "OK" },
  { state: "Oregon", capital: "Salem", abbr: "OR" },
  { state: "Pennsylvania", capital: "Harrisburg", abbr: "PA" },
  { state: "Rhode Island", capital: "Providence", abbr: "RI" },
  { state: "South Carolina", capital: "Columbia", abbr: "SC" },
  { state: "South Dakota", capital: "Pierre", abbr: "SD" },
  { state: "Tennessee", capital: "Nashville", abbr: "TN" },
  { state: "Texas", capital: "Austin", abbr: "TX" },
  { state: "Utah", capital: "Salt Lake City", abbr: "UT" },
  { state: "Vermont", capital: "Montpelier", abbr: "VT" },
  { state: "Virginia", capital: "Richmond", abbr: "VA" },
  { state: "Washington", capital: "Olympia", abbr: "WA" },
  { state: "West Virginia", capital: "Charleston", abbr: "WV" },
  { state: "Wisconsin", capital: "Madison", abbr: "WI" },
  { state: "Wyoming", capital: "Cheyenne", abbr: "WY" }
];

// ===== UTILITIES =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getStats() {
  return JSON.parse(localStorage.getItem('statesTrainer') || '{"quizScores":[],"missed":{},"matchTimes":[],"mapScores":[]}');
}
function saveStats(s) { localStorage.setItem('statesTrainer', JSON.stringify(s)); }

// ===== NAVIGATION =====
const navBtns = document.querySelectorAll('.nav-btn');
const modes = document.querySelectorAll('.mode');

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => b.classList.remove('active'));
    modes.forEach(m => m.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.mode).classList.add('active');
    if (btn.dataset.mode === 'scores') updateScoresUI();
  });
});

// ===== STUDY MODE =====
let studyCards = [...STATES_DATA];
let cardIndex = 0;

function updateFlashcard() {
  const card = studyCards[cardIndex];
  document.getElementById('flash-state').textContent = `${card.state} (${card.abbr})`;
  document.getElementById('flash-capital').textContent = card.capital;
  document.getElementById('card-counter').textContent = `${cardIndex + 1} / ${studyCards.length}`;
  document.getElementById('flashcard').classList.remove('flipped');
}

function renderStudyList(filter = '') {
  const list = document.getElementById('study-list');
  const filtered = STATES_DATA.filter(s =>
    s.state.toLowerCase().includes(filter.toLowerCase()) ||
    s.capital.toLowerCase().includes(filter.toLowerCase())
  );
  list.innerHTML = filtered.map(s =>
    `<div class="study-item"><span class="state">${s.state} <small>(${s.abbr})</small></span><span class="capital">${s.capital}</span></div>`
  ).join('');
}

document.getElementById('flashcard').addEventListener('click', () => {
  document.getElementById('flashcard').classList.toggle('flipped');
});
document.getElementById('prev-card').addEventListener('click', () => {
  cardIndex = (cardIndex - 1 + studyCards.length) % studyCards.length;
  updateFlashcard();
});
document.getElementById('next-card').addEventListener('click', () => {
  cardIndex = (cardIndex + 1) % studyCards.length;
  updateFlashcard();
});
document.getElementById('shuffle-btn').addEventListener('click', () => {
  studyCards = shuffle(studyCards);
  cardIndex = 0;
  updateFlashcard();
});
document.getElementById('search').addEventListener('input', e => renderStudyList(e.target.value));

updateFlashcard();
renderStudyList();

// ===== QUIZ MODE =====
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswers = [];

document.getElementById('start-quiz').addEventListener('click', startQuiz);
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('retry-quiz').addEventListener('click', () => {
  document.getElementById('quiz-results').hidden = true;
  document.getElementById('quiz-setup').hidden = false;
});

function startQuiz() {
  const count = parseInt(document.getElementById('quiz-count').value);
  const type = document.getElementById('quiz-type').value;
  quizQuestions = shuffle(STATES_DATA).slice(0, count).map(s => {
    const askCapital = type === 'capital' || (type === 'mixed' && Math.random() > 0.5);
    return { ...s, askCapital };
  });
  quizIndex = 0;
  quizScore = 0;
  quizAnswers = [];
  document.getElementById('quiz-setup').hidden = true;
  document.getElementById('quiz-active').hidden = false;
  document.getElementById('quiz-results').hidden = true;
  showQuestion();
}

function showQuestion() {
  const q = quizQuestions[quizIndex];
  const total = quizQuestions.length;
  document.getElementById('progress-fill').style.width = `${(quizIndex / total) * 100}%`;
  document.getElementById('quiz-counter').textContent = `${quizIndex + 1} / ${total}`;
  document.getElementById('quiz-score').textContent = `Score: ${quizScore}`;
  document.getElementById('quiz-feedback').hidden = true;
  document.getElementById('next-question').hidden = true;

  if (q.askCapital) {
    document.getElementById('quiz-question').textContent = `What is the capital of ${q.state} (${q.abbr})?`;
  } else {
    document.getElementById('quiz-question').textContent = `${q.capital} is the capital of which state?`;
  }

  const correct = q.askCapital ? q.capital : q.state;
  const pool = STATES_DATA.map(s => q.askCapital ? s.capital : s.state).filter(v => v !== correct);
  const options = shuffle([correct, ...shuffle(pool).slice(0, 3)]);

  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = options.map(o =>
    `<button class="quiz-option" data-answer="${o}">${o}</button>`
  ).join('');

  optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswer(btn, correct, q));
  });
}

function handleAnswer(btn, correct, q) {
  const all = document.querySelectorAll('.quiz-option');
  all.forEach(b => b.classList.add('disabled'));

  const feedback = document.getElementById('quiz-feedback');
  feedback.hidden = false;

  const isCorrect = btn.dataset.answer === correct;
  if (isCorrect) {
    btn.classList.add('correct');
    feedback.className = 'quiz-feedback correct';
    feedback.textContent = '✅ Correct!';
    quizScore++;
  } else {
    btn.classList.add('wrong');
    feedback.className = 'quiz-feedback wrong';
    feedback.textContent = `❌ Wrong! The answer is ${correct}`;
    all.forEach(b => { if (b.dataset.answer === correct) b.classList.add('correct'); });
    const stats = getStats();
    stats.missed[q.state] = (stats.missed[q.state] || 0) + 1;
    saveStats(stats);
  }

  quizAnswers.push({ state: q.state, capital: q.capital, abbr: q.abbr, correct: isCorrect });
  document.getElementById('next-question').hidden = false;
}

function nextQuestion() {
  quizIndex++;
  if (quizIndex >= quizQuestions.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
}

function finishQuiz() {
  document.getElementById('quiz-active').hidden = true;
  document.getElementById('quiz-results').hidden = false;
  const pct = Math.round((quizScore / quizQuestions.length) * 100);
  document.getElementById('results-percent').textContent = `${pct}%`;
  document.getElementById('results-circle').style.borderColor =
    pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';

  const msgs = pct === 100 ? '🎉 Perfect score!' : pct >= 80 ? '👏 Great job!' : pct >= 50 ? '📚 Keep studying!' : '💪 Don\'t give up!';
  document.getElementById('results-text').textContent = `${quizScore}/${quizQuestions.length} correct — ${msgs}`;

  document.getElementById('results-details').innerHTML = quizAnswers.map(a =>
    `<div class="result-item ${a.correct ? 'correct' : 'wrong'}">${a.correct ? '✅' : '❌'} ${a.state} (${a.abbr}) → ${a.capital}</div>`
  ).join('');

  const stats = getStats();
  stats.quizScores.push(pct);
  saveStats(stats);
}

// ===== MATCH MODE =====
let matchSelected = null;
let matchPairs = 0;
let matchTotal = 0;
let matchTimer = null;
let matchSeconds = 0;
let matchErrors = 0;

document.getElementById('start-match').addEventListener('click', startMatch);
document.getElementById('retry-match').addEventListener('click', () => {
  document.getElementById('match-results').hidden = true;
  document.getElementById('match-setup').hidden = false;
});

function startMatch() {
  const count = parseInt(document.getElementById('match-count').value);
  matchTotal = count;
  matchPairs = 0;
  matchSeconds = 0;
  matchSelected = null;
  matchErrors = 0;

  const items = shuffle(STATES_DATA).slice(0, count);
  const statesCol = document.getElementById('match-states');
  const capsCol = document.getElementById('match-capitals');

  const shuffledStates = shuffle(items);
  const shuffledCaps = shuffle(items);

  statesCol.innerHTML = shuffledStates.map(s =>
    `<div class="match-item" data-type="state" data-state="${s.state}">${s.state}</div>`
  ).join('');
  capsCol.innerHTML = shuffledCaps.map(s =>
    `<div class="match-item" data-type="capital" data-state="${s.state}">${s.capital}</div>`
  ).join('');

  document.querySelectorAll('.match-item').forEach(el => {
    el.addEventListener('click', () => handleMatchClick(el));
  });

  document.getElementById('match-setup').hidden = true;
  document.getElementById('match-active').hidden = false;
  document.getElementById('match-results').hidden = true;
  document.getElementById('match-pairs').textContent = `Pairs: 0 / ${count}`;

  clearInterval(matchTimer);
  matchTimer = setInterval(() => {
    matchSeconds++;
    document.getElementById('match-timer').textContent = `⏱ ${matchSeconds}s`;
  }, 1000);
}

function handleMatchClick(el) {
  if (el.classList.contains('matched')) return;

  if (!matchSelected) {
    matchSelected = el;
    el.classList.add('selected');
  } else {
    if (matchSelected === el) {
      el.classList.remove('selected');
      matchSelected = null;
      return;
    }
    if (matchSelected.dataset.type === el.dataset.type) {
      matchSelected.classList.remove('selected');
      matchSelected = el;
      el.classList.add('selected');
      return;
    }

    const state1 = matchSelected.dataset.state;
    const state2 = el.dataset.state;

    if (state1 === state2) {
      matchSelected.classList.remove('selected');
      matchSelected.classList.add('matched');
      el.classList.add('matched');
      matchPairs++;
      document.getElementById('match-pairs').textContent = `Pairs: ${matchPairs} / ${matchTotal}`;
      if (matchPairs === matchTotal) finishMatch();
    } else {
      matchErrors++;
      document.getElementById('match-errors').textContent = `❌ Errors: ${matchErrors}`;
      el.classList.add('wrong-flash');
      matchSelected.classList.add('wrong-flash');
      const prev = matchSelected;
      setTimeout(() => {
        prev.classList.remove('selected', 'wrong-flash');
        el.classList.remove('wrong-flash');
      }, 500);
    }
    matchSelected = null;
  }
}

function finishMatch() {
  clearInterval(matchTimer);
  document.getElementById('match-active').hidden = true;
  document.getElementById('match-results').hidden = false;
  document.getElementById('match-time-result').textContent = `You matched all ${matchTotal} pairs in ${matchSeconds} seconds with ${matchErrors} error${matchErrors !== 1 ? 's' : ''}!`;
  const stats = getStats();
  stats.matchTimes.push(matchSeconds);
  saveStats(stats);
}

// ===== SCORES =====
function updateScoresUI() {
  const stats = getStats();
  const q = stats.quizScores || [];
  document.getElementById('total-quizzes').textContent = q.length;
  document.getElementById('avg-score').textContent = q.length ? Math.round(q.reduce((a, b) => a + b, 0) / q.length) + '%' : '0%';
  document.getElementById('best-score').textContent = q.length ? Math.max(...q) + '%' : '0%';
  const mt = stats.matchTimes || [];
  document.getElementById('best-match').textContent = mt.length ? Math.min(...mt) + 's' : '--';

  const missed = stats.missed || {};
  const sorted = Object.entries(missed).sort((a, b) => b[1] - a[1]).slice(0, 10);
  const el = document.getElementById('missed-states');
  if (sorted.length === 0) {
    el.innerHTML = '<p class="empty">Take a quiz to see your weak spots!</p>';
  } else {
    el.innerHTML = sorted.map(([state, count]) =>
      `<div class="missed-item"><span>${state}</span><span class="count">missed ${count}x</span></div>`
    ).join('');
  }
}

document.getElementById('clear-stats').addEventListener('click', () => {
  if (confirm('Clear all progress? This cannot be undone.')) {
    localStorage.removeItem('statesTrainer');
    updateScoresUI();
  }
});

// ===== MAP QUIZ MODE (D3 + TopoJSON) =====
// FIPS code to state abbreviation mapping
const FIPS_TO_ABBR = {
  "01":"AL","02":"AK","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT","10":"DE",
  "11":"DC","12":"FL","13":"GA","15":"HI","16":"ID","17":"IL","18":"IN","19":"IA",
  "20":"KS","21":"KY","22":"LA","23":"ME","24":"MD","25":"MA","26":"MI","27":"MN",
  "28":"MS","29":"MO","30":"MT","31":"NE","32":"NV","33":"NH","34":"NJ","35":"NM",
  "36":"NY","37":"NC","38":"ND","39":"OH","40":"OK","41":"OR","42":"PA","44":"RI",
  "45":"SC","46":"SD","47":"TN","48":"TX","49":"UT","50":"VT","51":"VA","53":"WA",
  "54":"WV","55":"WI","56":"WY"
};

let mapQuestions = [];
let mapIndex = 0;
let mapScore = 0;
let mapLocked = false;
let usTopoData = null;

document.getElementById('start-map').addEventListener('click', startMapQuiz);
document.getElementById('retry-map').addEventListener('click', () => {
  document.getElementById('map-results').hidden = true;
  document.getElementById('map-setup').hidden = false;
});

async function loadMapData() {
  if (usTopoData) return usTopoData;
  const resp = await fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json');
  usTopoData = await resp.json();
  return usTopoData;
}

function buildMap(topoData) {
  const svg = d3.select('#us-map');
  svg.selectAll('*').remove();
  svg.attr('viewBox', '0 0 960 600');

  const projection = d3.geoAlbersUsa().scale(1280).translate([480, 300]);
  const path = d3.geoPath().projection(projection);

  const states = topojson.feature(topoData, topoData.objects.states).features;

  // Draw state paths
  svg.selectAll('path.state')
    .data(states)
    .enter()
    .append('path')
    .attr('class', 'state')
    .attr('d', path)
    .attr('data-abbr', d => FIPS_TO_ABBR[d.id] || '')
    .attr('id', d => `state-${FIPS_TO_ABBR[d.id] || d.id}`)
    .attr('aria-label', d => {
      const abbr = FIPS_TO_ABBR[d.id];
      const s = STATES_DATA.find(st => st.abbr === abbr);
      return s ? s.state : '';
    })
    .on('click', function(event, d) {
      const abbr = FIPS_TO_ABBR[d.id];
      if (abbr) handleMapClick(abbr);
    });

  // Draw state borders
  svg.append('path')
    .datum(topojson.mesh(topoData, topoData.objects.states, (a, b) => a !== b))
    .attr('fill', 'none')
    .attr('stroke', '#0f172a')
    .attr('stroke-width', '1.2')
    .attr('pointer-events', 'none')
    .attr('d', path);

  // Add abbreviation labels at centroids
  svg.selectAll('text.state-label')
    .data(states.filter(d => {
      const abbr = FIPS_TO_ABBR[d.id];
      return abbr && abbr !== 'DC';
    }))
    .enter()
    .append('text')
    .attr('class', 'state-label')
    .attr('x', d => {
      const centroid = path.centroid(d);
      return centroid[0];
    })
    .attr('y', d => {
      const centroid = path.centroid(d);
      return centroid[1];
    })
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'central')
    .attr('fill', '#cbd5e1')
    .attr('font-size', '10')
    .attr('font-weight', '600')
    .attr('pointer-events', 'none')
    .attr('font-family', 'sans-serif')
    .text(d => FIPS_TO_ABBR[d.id] || '');
}

async function startMapQuiz() {
  const count = parseInt(document.getElementById('map-count').value);
  // Filter out DC since it's not in our STATES_DATA
  mapQuestions = shuffle(STATES_DATA).slice(0, count);
  mapIndex = 0;
  mapScore = 0;
  mapLocked = false;

  document.getElementById('map-setup').hidden = true;
  document.getElementById('map-active').hidden = false;
  document.getElementById('map-results').hidden = true;

  try {
    const topoData = await loadMapData();
    buildMap(topoData);
    showMapQuestion();
  } catch (err) {
    document.getElementById('map-active').innerHTML =
      '<p style="text-align:center;padding:40px;color:var(--danger);">Failed to load map data. Please check your internet connection and try again.</p>';
  }
}

function showMapQuestion() {
  const q = mapQuestions[mapIndex];
  document.getElementById('map-target-state').textContent = q.state;
  document.getElementById('map-counter').textContent = `${mapIndex + 1} / ${mapQuestions.length}`;
  document.getElementById('map-score').textContent = `Score: ${mapScore}`;
  document.getElementById('map-feedback').hidden = true;
  mapLocked = false;

  // Reset all state colors
  d3.selectAll('#us-map path.state')
    .classed('correct-state', false)
    .classed('wrong-state', false)
    .classed('highlight-state', false);
}

function handleMapClick(abbr) {
  if (mapLocked) return;
  mapLocked = true;

  const q = mapQuestions[mapIndex];
  const feedback = document.getElementById('map-feedback');
  feedback.hidden = false;

  const clickedPath = d3.select(`#state-${abbr}`);
  const correctPath = d3.select(`#state-${q.abbr}`);

  if (abbr === q.abbr) {
    clickedPath.classed('correct-state', true);
    feedback.className = 'map-feedback correct';
    feedback.textContent = `✅ Correct! That's ${q.state}!`;
    mapScore++;
  } else {
    clickedPath.classed('wrong-state', true);
    correctPath.classed('highlight-state', true);
    const clickedState = STATES_DATA.find(s => s.abbr === abbr);
    feedback.className = 'map-feedback wrong';
    feedback.textContent = `❌ That's ${clickedState ? clickedState.state : abbr}. ${q.state} is highlighted in yellow.`;

    const stats = getStats();
    stats.missed[q.state] = (stats.missed[q.state] || 0) + 1;
    saveStats(stats);
  }

  document.getElementById('map-score').textContent = `Score: ${mapScore}`;

  setTimeout(() => {
    mapIndex++;
    if (mapIndex >= mapQuestions.length) {
      finishMapQuiz();
    } else {
      showMapQuestion();
    }
  }, 1800);
}

function finishMapQuiz() {
  document.getElementById('map-active').hidden = true;
  document.getElementById('map-results').hidden = false;
  const pct = Math.round((mapScore / mapQuestions.length) * 100);
  document.getElementById('map-results-percent').textContent = `${pct}%`;
  document.getElementById('map-results-circle').style.borderColor =
    pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';

  const msgs = pct === 100 ? '🎉 Perfect! You know your geography!' : pct >= 80 ? '👏 Great map skills!' : pct >= 50 ? '🗺️ Keep exploring!' : '💪 Practice makes perfect!';
  document.getElementById('map-results-text').textContent = `${mapScore}/${mapQuestions.length} correct — ${msgs}`;

  const stats = getStats();
  stats.mapScores = stats.mapScores || [];
  stats.mapScores.push(pct);
  saveStats(stats);
}
