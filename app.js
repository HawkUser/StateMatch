// ===== STATE DATA WITH REGIONS =====
const STATES_DATA = [
  { state: "Alabama", capital: "Montgomery", abbr: "AL", region: "southeast" },
  { state: "Alaska", capital: "Juneau", abbr: "AK", region: "west" },
  { state: "Arizona", capital: "Phoenix", abbr: "AZ", region: "southwest" },
  { state: "Arkansas", capital: "Little Rock", abbr: "AR", region: "southeast" },
  { state: "California", capital: "Sacramento", abbr: "CA", region: "west" },
  { state: "Colorado", capital: "Denver", abbr: "CO", region: "west" },
  { state: "Connecticut", capital: "Hartford", abbr: "CT", region: "northeast" },
  { state: "Delaware", capital: "Dover", abbr: "DE", region: "northeast" },
  { state: "Florida", capital: "Tallahassee", abbr: "FL", region: "southeast" },
  { state: "Georgia", capital: "Atlanta", abbr: "GA", region: "southeast" },
  { state: "Hawaii", capital: "Honolulu", abbr: "HI", region: "west" },
  { state: "Idaho", capital: "Boise", abbr: "ID", region: "west" },
  { state: "Illinois", capital: "Springfield", abbr: "IL", region: "midwest" },
  { state: "Indiana", capital: "Indianapolis", abbr: "IN", region: "midwest" },
  { state: "Iowa", capital: "Des Moines", abbr: "IA", region: "midwest" },
  { state: "Kansas", capital: "Topeka", abbr: "KS", region: "midwest" },
  { state: "Kentucky", capital: "Frankfort", abbr: "KY", region: "southeast" },
  { state: "Louisiana", capital: "Baton Rouge", abbr: "LA", region: "southeast" },
  { state: "Maine", capital: "Augusta", abbr: "ME", region: "northeast" },
  { state: "Maryland", capital: "Annapolis", abbr: "MD", region: "northeast" },
  { state: "Massachusetts", capital: "Boston", abbr: "MA", region: "northeast" },
  { state: "Michigan", capital: "Lansing", abbr: "MI", region: "midwest" },
  { state: "Minnesota", capital: "Saint Paul", abbr: "MN", region: "midwest" },
  { state: "Mississippi", capital: "Jackson", abbr: "MS", region: "southeast" },
  { state: "Missouri", capital: "Jefferson City", abbr: "MO", region: "midwest" },
  { state: "Montana", capital: "Helena", abbr: "MT", region: "west" },
  { state: "Nebraska", capital: "Lincoln", abbr: "NE", region: "midwest" },
  { state: "Nevada", capital: "Carson City", abbr: "NV", region: "west" },
  { state: "New Hampshire", capital: "Concord", abbr: "NH", region: "northeast" },
  { state: "New Jersey", capital: "Trenton", abbr: "NJ", region: "northeast" },
  { state: "New Mexico", capital: "Santa Fe", abbr: "NM", region: "southwest" },
  { state: "New York", capital: "Albany", abbr: "NY", region: "northeast" },
  { state: "North Carolina", capital: "Raleigh", abbr: "NC", region: "southeast" },
  { state: "North Dakota", capital: "Bismarck", abbr: "ND", region: "midwest" },
  { state: "Ohio", capital: "Columbus", abbr: "OH", region: "midwest" },
  { state: "Oklahoma", capital: "Oklahoma City", abbr: "OK", region: "southwest" },
  { state: "Oregon", capital: "Salem", abbr: "OR", region: "west" },
  { state: "Pennsylvania", capital: "Harrisburg", abbr: "PA", region: "northeast" },
  { state: "Rhode Island", capital: "Providence", abbr: "RI", region: "northeast" },
  { state: "South Carolina", capital: "Columbia", abbr: "SC", region: "southeast" },
  { state: "South Dakota", capital: "Pierre", abbr: "SD", region: "midwest" },
  { state: "Tennessee", capital: "Nashville", abbr: "TN", region: "southeast" },
  { state: "Texas", capital: "Austin", abbr: "TX", region: "southwest" },
  { state: "Utah", capital: "Salt Lake City", abbr: "UT", region: "west" },
  { state: "Vermont", capital: "Montpelier", abbr: "VT", region: "northeast" },
  { state: "Virginia", capital: "Richmond", abbr: "VA", region: "southeast" },
  { state: "Washington", capital: "Olympia", abbr: "WA", region: "west" },
  { state: "West Virginia", capital: "Charleston", abbr: "WV", region: "southeast" },
  { state: "Wisconsin", capital: "Madison", abbr: "WI", region: "midwest" },
  { state: "Wyoming", capital: "Cheyenne", abbr: "WY", region: "west" }
];

const REGIONS = {
  northeast: { name: "Northeast", emoji: "🏙️" },
  southeast: { name: "Southeast", emoji: "🌴" },
  midwest: { name: "Midwest", emoji: "🌾" },
  southwest: { name: "Southwest", emoji: "🌵" },
  west: { name: "West", emoji: "🏔️" }
};

// 14-day study plan
const STUDY_PLAN = [
  { day: 1, region: "northeast", title: "Learn Northeast States", tasks: ["Study Northeast flashcards (11 states)", "Take a 10-question quiz on Northeast", "Play matching game with Northeast states"] },
  { day: 2, region: "northeast", title: "Practice Northeast", tasks: ["Type-answer quiz on Northeast capitals", "Map quiz: find Northeast states", "Review any missed states"] },
  { day: 3, region: "southeast", title: "Learn Southeast States", tasks: ["Study Southeast flashcards (12 states)", "Take a 10-question quiz on Southeast", "Play matching game with Southeast states"] },
  { day: 4, region: "southeast", title: "Practice Southeast", tasks: ["Type-answer quiz on Southeast capitals", "Map quiz: find Southeast states", "Mixed quiz: Northeast + Southeast"] },
  { day: 5, region: "midwest", title: "Learn Midwest States", tasks: ["Study Midwest flashcards (12 states)", "Take a 10-question quiz on Midwest", "Play matching game with Midwest states"] },
  { day: 6, region: "midwest", title: "Practice Midwest", tasks: ["Type-answer quiz on Midwest capitals", "Map quiz: find Midwest states", "Mixed quiz: all learned regions"] },
  { day: 7, region: "southwest", title: "Learn Southwest + Review", tasks: ["Study Southwest flashcards (4 states)", "Quiz on Southwest states", "Full review quiz on all states so far"] },
  { day: 8, region: "west", title: "Learn West States", tasks: ["Study West flashcards (11 states)", "Take a 10-question quiz on West", "Play matching game with West states"] },
  { day: 9, region: "west", title: "Practice West", tasks: ["Type-answer quiz on West capitals", "Map quiz: find West states", "Review weak states from scores"] },
  { day: 10, region: "all", title: "Full Review Day", tasks: ["25-question mixed quiz (all regions)", "Type-answer quiz on weak states", "Map quiz: all 50 states"] },
  { day: 11, region: "all", title: "Speed Challenge", tasks: ["Match game: 10 pairs (beat your time!)", "50-question speed quiz", "Type all 50 capitals"] },
  { day: 12, region: "all", title: "Abbreviation Focus", tasks: ["Quiz: State → Abbreviation (all 50)", "Quiz: Abbreviation → State (all 50)", "Review any missed abbreviations"] },
  { day: 13, region: "all", title: "Final Practice", tasks: ["Full 50-question mixed quiz", "Map quiz: all 50 states", "Type-answer: all 50 capitals"] },
  { day: 14, region: "all", title: "Exam Day Prep! 🎯", tasks: ["Take the full 50-question quiz (aim for 100%!)", "Map quiz: all 50 (aim for 100%!)", "Celebrate your progress! 🎉"] }
];

const BADGES = [
  { id: "first_quiz", name: "🎯 First Quiz", desc: "Complete your first quiz" },
  { id: "perfect_10", name: "💯 Perfect 10", desc: "Score 100% on a 10-question quiz" },
  { id: "northeast_master", name: "🏙️ Northeast Pro", desc: "Score 90%+ on Northeast quiz" },
  { id: "southeast_master", name: "🌴 Southeast Pro", desc: "Score 90%+ on Southeast quiz" },
  { id: "midwest_master", name: "🌾 Midwest Pro", desc: "Score 90%+ on Midwest quiz" },
  { id: "southwest_master", name: "🌵 Southwest Pro", desc: "Score 90%+ on Southwest quiz" },
  { id: "west_master", name: "🏔️ West Pro", desc: "Score 90%+ on West quiz" },
  { id: "speed_demon", name: "⚡ Speed Demon", desc: "Match 10 pairs in under 30 seconds" },
  { id: "type_master", name: "✍️ Type Master", desc: "Score 90%+ on typing quiz" },
  { id: "map_expert", name: "🗺️ Map Expert", desc: "Score 90%+ on map quiz" },
  { id: "streak_3", name: "🔥 3-Day Streak", desc: "Practice 3 days in a row" },
  { id: "streak_7", name: "🔥 Week Warrior", desc: "Practice 7 days in a row" },
  { id: "streak_14", name: "🏆 2-Week Champion", desc: "Practice 14 days in a row" },
  { id: "all_50", name: "🇺🇸 All 50!", desc: "Score 100% on a 50-question quiz" }
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
  const defaults = { quizScores: [], missed: {}, matchTimes: [], mapScores: [], badges: [], streak: 0, lastActive: null, dayActivities: {}, planStart: null, mastered: {} };
  const saved = JSON.parse(localStorage.getItem('statesTrainer') || '{}');
  return { ...defaults, ...saved };
}
function saveStats(s) { localStorage.setItem('statesTrainer', JSON.stringify(s)); }

function getStatesForRegion(region) {
  if (region === 'all') return [...STATES_DATA];
  if (region === 'weak') {
    const stats = getStats();
    const missed = stats.missed || {};
    const weakStates = Object.keys(missed).sort((a, b) => missed[b] - missed[a]).slice(0, 15);
    if (weakStates.length === 0) return [...STATES_DATA];
    return STATES_DATA.filter(s => weakStates.includes(s.state));
  }
  return STATES_DATA.filter(s => s.region === region);
}

function todayStr() { return new Date().toISOString().split('T')[0]; }

function updateStreak() {
  const stats = getStats();
  const today = todayStr();
  if (stats.lastActive === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().split('T')[0];

  if (stats.lastActive === yStr) {
    stats.streak = (stats.streak || 0) + 1;
  } else if (stats.lastActive !== today) {
    stats.streak = 1;
  }
  stats.lastActive = today;
  saveStats(stats);
  checkBadge('streak_3', stats.streak >= 3);
  checkBadge('streak_7', stats.streak >= 7);
  checkBadge('streak_14', stats.streak >= 14);
}

function recordActivity() {
  updateStreak();
  const stats = getStats();
  const today = todayStr();
  stats.dayActivities[today] = (stats.dayActivities[today] || 0) + 1;
  saveStats(stats);
  updateDailyDisplay();
}

function updateDailyDisplay() {
  const stats = getStats();
  document.getElementById('streak-display').textContent = `🔥 ${stats.streak || 0} day streak`;
  const todayCount = stats.dayActivities[todayStr()] || 0;
  document.getElementById('daily-progress').textContent = `${todayCount}/3`;
}

function checkBadge(id, condition) {
  if (!condition) return;
  const stats = getStats();
  if (!stats.badges.includes(id)) {
    stats.badges.push(id);
    saveStats(stats);
  }
}

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
    if (btn.dataset.mode === 'plan') updatePlanUI();
  });
});

// ===== PLAN MODE =====
function getPlanDay() {
  const stats = getStats();
  if (!stats.planStart) {
    stats.planStart = todayStr();
    saveStats(stats);
  }
  const start = new Date(stats.planStart);
  const now = new Date(todayStr());
  const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return Math.min(Math.max(diff + 1, 1), 14);
}

function updatePlanUI() {
  const day = getPlanDay();
  const plan = STUDY_PLAN[day - 1];
  const stats = getStats();

  document.getElementById('plan-day').textContent = day;
  const masteredCount = Object.keys(stats.mastered || {}).length;
  document.getElementById('plan-mastered').textContent = masteredCount;
  document.getElementById('plan-region').textContent = plan.region === 'all' ? 'All' : REGIONS[plan.region]?.name || plan.region;

  // Today's tasks
  const todayEl = document.getElementById('plan-today');
  const todayActivities = stats.dayActivities[todayStr()] || 0;
  todayEl.innerHTML = `
    <h3>Day ${day}: ${plan.title}</h3>
    ${plan.tasks.map((task, i) => `
      <div class="plan-task ${i < todayActivities ? 'done' : ''}">
        <span class="plan-task-check">${i < todayActivities ? '✅' : '⬜'}</span>
        <span class="plan-task-text">${task}</span>
      </div>
    `).join('')}
  `;

  // Calendar
  const calEl = document.getElementById('plan-calendar');
  calEl.innerHTML = STUDY_PLAN.map((p, i) => {
    const dayNum = i + 1;
    const isCompleted = dayNum < day || (stats.dayActivities && Object.keys(stats.dayActivities).length > i);
    const isCurrent = dayNum === day;
    return `<div class="plan-day ${isCurrent ? 'current' : ''} ${dayNum < day ? 'completed' : ''}">
      <span class="day-num">${dayNum}</span>
      <span>${REGIONS[p.region]?.emoji || '🇺🇸'}</span>
    </div>`;
  }).join('');

  // Badges
  const badgesEl = document.getElementById('badges-grid');
  badgesEl.innerHTML = BADGES.map(b =>
    `<div class="badge ${stats.badges.includes(b.id) ? 'earned' : ''}" title="${b.desc}">${b.name}</div>`
  ).join('');
}

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

function renderStudyList() {
  const filter = document.getElementById('search').value;
  const region = document.getElementById('region-filter').value;
  let filtered = getStatesForRegion(region);
  if (filter) {
    filtered = filtered.filter(s =>
      s.state.toLowerCase().includes(filter.toLowerCase()) ||
      s.capital.toLowerCase().includes(filter.toLowerCase()) ||
      s.abbr.toLowerCase().includes(filter.toLowerCase())
    );
  }
  document.getElementById('study-list').innerHTML = filtered.map(s =>
    `<div class="study-item"><span class="state">${s.state} <small>(${s.abbr})</small></span><span class="capital">${s.capital}</span></div>`
  ).join('');
}

function resetStudyCards() {
  const region = document.getElementById('region-filter').value;
  studyCards = getStatesForRegion(region);
  cardIndex = 0;
  updateFlashcard();
  renderStudyList();
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
document.getElementById('search').addEventListener('input', renderStudyList);
document.getElementById('region-filter').addEventListener('change', resetStudyCards);

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
  const region = document.getElementById('quiz-region').value;
  let pool = getStatesForRegion(region);

  quizQuestions = shuffle(pool).slice(0, Math.min(count, pool.length)).map(s => {
    let qType;
    if (type === 'mixed') {
      const r = Math.random();
      qType = r < 0.25 ? 'capital' : r < 0.5 ? 'state' : r < 0.75 ? 'abbr' : 'abbrFromState';
    } else {
      qType = type;
    }
    return { ...s, qType };
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

  if (q.qType === 'capital') {
    document.getElementById('quiz-question').textContent = `What is the capital of ${q.state} (${q.abbr})?`;
  } else if (q.qType === 'state') {
    document.getElementById('quiz-question').textContent = `${q.capital} is the capital of which state?`;
  } else if (q.qType === 'abbr') {
    document.getElementById('quiz-question').textContent = `What state has the abbreviation "${q.abbr}"?`;
  } else {
    document.getElementById('quiz-question').textContent = `What is the abbreviation for ${q.state}?`;
  }

  let correct, pool;
  if (q.qType === 'abbrFromState') {
    correct = q.abbr;
    pool = STATES_DATA.map(s => s.abbr).filter(v => v !== correct);
  } else if (q.qType === 'capital') {
    correct = q.capital;
    pool = STATES_DATA.map(s => s.capital).filter(v => v !== correct);
  } else {
    correct = q.state;
    pool = STATES_DATA.map(s => s.state).filter(v => v !== correct);
  }

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
    // Mark as mastered if answered correctly
    const stats = getStats();
    stats.mastered[q.state] = true;
    saveStats(stats);
  } else {
    btn.classList.add('wrong');
    feedback.className = 'quiz-feedback wrong';
    feedback.textContent = `❌ Wrong! The answer is ${correct}`;
    all.forEach(b => { if (b.dataset.answer === correct) b.classList.add('correct'); });
    const stats = getStats();
    stats.missed[q.state] = (stats.missed[q.state] || 0) + 1;
    delete stats.mastered[q.state];
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
  recordActivity();

  // Check badges
  checkBadge('first_quiz', true);
  if (pct === 100 && quizQuestions.length >= 10) checkBadge('perfect_10', true);
  if (pct === 100 && quizQuestions.length === 50) checkBadge('all_50', true);

  const region = document.getElementById('quiz-region').value;
  if (pct >= 90 && region !== 'all' && region !== 'weak') {
    checkBadge(`${region}_master`, true);
  }
}

// ===== TYPE MODE =====
let typeQuestions = [];
let typeIndex = 0;
let typeScore = 0;
let typeAnswers = [];
let typeHintUsed = false;

document.getElementById('start-type').addEventListener('click', startType);
document.getElementById('type-submit').addEventListener('click', submitType);
document.getElementById('type-hint').addEventListener('click', giveHint);
document.getElementById('type-next').addEventListener('click', nextType);
document.getElementById('type-answer').addEventListener('keydown', e => {
  if (e.key === 'Enter') submitType();
});
document.getElementById('retry-type').addEventListener('click', () => {
  document.getElementById('type-results').hidden = true;
  document.getElementById('type-setup').hidden = false;
});

function startType() {
  const count = parseInt(document.getElementById('type-count').value);
  const region = document.getElementById('type-region').value;
  const direction = document.getElementById('type-direction').value;
  let pool = getStatesForRegion(region);

  typeQuestions = shuffle(pool).slice(0, Math.min(count, pool.length)).map(s => ({ ...s, direction }));
  typeIndex = 0;
  typeScore = 0;
  typeAnswers = [];

  document.getElementById('type-setup').hidden = true;
  document.getElementById('type-active').hidden = false;
  document.getElementById('type-results').hidden = true;
  showTypeQuestion();
}

function showTypeQuestion() {
  const q = typeQuestions[typeIndex];
  const total = typeQuestions.length;
  document.getElementById('type-progress-fill').style.width = `${(typeIndex / total) * 100}%`;
  document.getElementById('type-counter').textContent = `${typeIndex + 1} / ${total}`;
  document.getElementById('type-score').textContent = `Score: ${typeScore}`;
  document.getElementById('type-feedback').hidden = true;
  document.getElementById('type-next').hidden = true;
  document.getElementById('type-answer').value = '';
  document.getElementById('type-answer').disabled = false;
  document.getElementById('type-submit').hidden = false;
  document.getElementById('type-hint').hidden = false;
  typeHintUsed = false;

  if (q.direction === 'capital') {
    document.getElementById('type-question').textContent = `What is the capital of ${q.state} (${q.abbr})?`;
  } else {
    document.getElementById('type-question').textContent = `${q.capital} is the capital of which state?`;
  }

  document.getElementById('type-answer').focus();
}

function giveHint() {
  const q = typeQuestions[typeIndex];
  const answer = q.direction === 'capital' ? q.capital : q.state;
  const input = document.getElementById('type-answer');
  const currentLen = input.value.length;
  // Reveal next letter
  if (currentLen < answer.length) {
    input.value = answer.substring(0, currentLen + 1);
  }
  typeHintUsed = true;
}

function submitType() {
  const q = typeQuestions[typeIndex];
  const answer = q.direction === 'capital' ? q.capital : q.state;
  const userAnswer = document.getElementById('type-answer').value.trim();

  const feedback = document.getElementById('type-feedback');
  feedback.hidden = false;
  document.getElementById('type-answer').disabled = true;
  document.getElementById('type-submit').hidden = true;
  document.getElementById('type-hint').hidden = true;

  const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase();

  if (isCorrect) {
    feedback.className = 'quiz-feedback correct';
    feedback.textContent = typeHintUsed ? `✅ Correct! (hint used)` : '✅ Correct!';
    typeScore++;
    const stats = getStats();
    stats.mastered[q.state] = true;
    saveStats(stats);
  } else {
    feedback.className = 'quiz-feedback wrong';
    feedback.textContent = `❌ Wrong! The answer is: ${answer}`;
    const stats = getStats();
    stats.missed[q.state] = (stats.missed[q.state] || 0) + 1;
    delete stats.mastered[q.state];
    saveStats(stats);
  }

  typeAnswers.push({ state: q.state, capital: q.capital, abbr: q.abbr, correct: isCorrect, userAnswer });
  document.getElementById('type-next').hidden = false;
}

function nextType() {
  typeIndex++;
  if (typeIndex >= typeQuestions.length) {
    finishType();
  } else {
    showTypeQuestion();
  }
}

function finishType() {
  document.getElementById('type-active').hidden = true;
  document.getElementById('type-results').hidden = false;
  const pct = Math.round((typeScore / typeQuestions.length) * 100);
  document.getElementById('type-results-percent').textContent = `${pct}%`;
  document.getElementById('type-results-circle').style.borderColor =
    pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';

  const msgs = pct === 100 ? '🎉 Perfect recall!' : pct >= 80 ? '👏 Strong memory!' : pct >= 50 ? '📝 Keep practicing!' : '💪 You\'ll get there!';
  document.getElementById('type-results-text').textContent = `${typeScore}/${typeQuestions.length} correct — ${msgs}`;

  document.getElementById('type-results-details').innerHTML = typeAnswers.map(a =>
    `<div class="result-item ${a.correct ? 'correct' : 'wrong'}">${a.correct ? '✅' : '❌'} ${a.state} (${a.abbr}) → ${a.capital}${!a.correct ? ` (you typed: "${a.userAnswer}")` : ''}</div>`
  ).join('');

  const stats = getStats();
  stats.quizScores.push(pct);
  saveStats(stats);
  recordActivity();

  checkBadge('first_quiz', true);
  if (pct >= 90) checkBadge('type_master', true);
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
  const region = document.getElementById('match-region').value;
  let pool = getStatesForRegion(region);

  matchTotal = Math.min(count, pool.length);
  matchPairs = 0;
  matchSeconds = 0;
  matchSelected = null;
  matchErrors = 0;

  const items = shuffle(pool).slice(0, matchTotal);
  const statesCol = document.getElementById('match-states');
  const capsCol = document.getElementById('match-capitals');

  statesCol.innerHTML = shuffle(items).map(s =>
    `<div class="match-item" data-type="state" data-state="${s.state}">${s.state}</div>`
  ).join('');
  capsCol.innerHTML = shuffle(items).map(s =>
    `<div class="match-item" data-type="capital" data-state="${s.state}">${s.capital}</div>`
  ).join('');

  document.querySelectorAll('.match-item').forEach(el => {
    el.addEventListener('click', () => handleMatchClick(el));
  });

  document.getElementById('match-setup').hidden = true;
  document.getElementById('match-active').hidden = false;
  document.getElementById('match-results').hidden = true;
  document.getElementById('match-pairs').textContent = `Pairs: 0 / ${matchTotal}`;
  document.getElementById('match-errors').textContent = `❌ Errors: 0`;

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
  recordActivity();

  if (matchTotal >= 10 && matchSeconds <= 30) checkBadge('speed_demon', true);
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

  // Region mastery
  const regionEl = document.getElementById('region-mastery');
  regionEl.innerHTML = Object.entries(REGIONS).map(([key, r]) => {
    const regionStates = STATES_DATA.filter(s => s.region === key);
    const masteredCount = regionStates.filter(s => stats.mastered && stats.mastered[s.state]).length;
    const pct = Math.round((masteredCount / regionStates.length) * 100);
    return `<div class="region-card">
      <div class="region-name">${r.emoji} ${r.name}</div>
      <div class="region-bar"><div class="region-bar-fill" style="width:${pct}%"></div></div>
      <div class="region-pct">${masteredCount}/${regionStates.length} (${pct}%)</div>
    </div>`;
  }).join('');
}

document.getElementById('clear-stats').addEventListener('click', () => {
  if (confirm('Clear all progress? This cannot be undone.')) {
    localStorage.removeItem('statesTrainer');
    updateScoresUI();
    updateDailyDisplay();
  }
});

// ===== MAP QUIZ MODE (D3 + TopoJSON) =====
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

  svg.selectAll('path.state')
    .data(states)
    .enter()
    .append('path')
    .attr('class', 'state')
    .attr('d', path)
    .attr('data-abbr', d => FIPS_TO_ABBR[d.id] || '')
    .attr('id', d => `state-${FIPS_TO_ABBR[d.id] || d.id}`)
    .on('click', function(event, d) {
      const abbr = FIPS_TO_ABBR[d.id];
      if (abbr) handleMapClick(abbr);
    });

  svg.append('path')
    .datum(topojson.mesh(topoData, topoData.objects.states, (a, b) => a !== b))
    .attr('fill', 'none')
    .attr('stroke', '#0f172a')
    .attr('stroke-width', '1.2')
    .attr('pointer-events', 'none')
    .attr('d', path);

  svg.selectAll('text.state-label')
    .data(states.filter(d => FIPS_TO_ABBR[d.id] && FIPS_TO_ABBR[d.id] !== 'DC'))
    .enter()
    .append('text')
    .attr('class', 'state-label')
    .attr('x', d => path.centroid(d)[0])
    .attr('y', d => path.centroid(d)[1])
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
      '<p style="text-align:center;padding:40px;color:var(--danger);">Failed to load map data. Check your internet connection.</p>';
  }
}

function showMapQuestion() {
  const q = mapQuestions[mapIndex];
  document.getElementById('map-target-state').textContent = q.state;
  document.getElementById('map-counter').textContent = `${mapIndex + 1} / ${mapQuestions.length}`;
  document.getElementById('map-score').textContent = `Score: ${mapScore}`;
  document.getElementById('map-feedback').hidden = true;
  mapLocked = false;

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
  recordActivity();

  if (pct >= 90) checkBadge('map_expert', true);
}

// ===== INIT =====
updateDailyDisplay();
updatePlanUI();
