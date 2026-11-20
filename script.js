const questions = [
  {
    id: "n1", topic: "Number & Numeration", symbol: "№",
    prompt: "Evaluate: −8 + 15 − 4.",
    options: ["3", "7", "11", "−3"], answer: 0,
    explanation: "Work from left to right: −8 + 15 = 7, then 7 − 4 = 3."
  },
  {
    id: "n2", topic: "Number & Numeration", symbol: "№",
    prompt: "Write 0.00072 in standard form.",
    options: ["7.2 × 10⁻⁴", "72 × 10⁻⁴", "7.2 × 10⁴", "0.72 × 10⁻³"], answer: 0,
    explanation: "Move the decimal point 4 places to the right to get 7.2, so the power is −4: 0.00072 = 7.2 × 10⁻⁴."
  },
  {
    id: "n3", topic: "Number & Numeration", symbol: "№",
    prompt: "Convert 1011₂ to a base ten number.",
    options: ["9", "10", "11", "13"], answer: 2,
    explanation: "1011₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰) = 8 + 2 + 1 = 11."
  },
  {
    id: "f1", topic: "Fractions & Percentages", symbol: "½",
    prompt: "Calculate ¾ − ⅖.",
    options: ["7⁄20", "1⁄5", "2⁄7", "11⁄20"], answer: 0,
    explanation: "Use a common denominator of 20: ¾ = 15⁄20 and ⅖ = 8⁄20. Therefore, 15⁄20 − 8⁄20 = 7⁄20."
  },
  {
    id: "f2", topic: "Fractions & Percentages", symbol: "%",
    prompt: "A school bag costs ₦8,000. What is its price after a 15% discount?",
    options: ["₦6,800", "₦7,200", "₦6,500", "₦1,200"], answer: 0,
    explanation: "15% of ₦8,000 is ₦1,200. Subtract the discount: ₦8,000 − ₦1,200 = ₦6,800."
  },
  {
    id: "f3", topic: "Fractions & Percentages", symbol: "%",
    prompt: "A learner scores 36 marks out of 45. What percentage is this?",
    options: ["75%", "80%", "85%", "90%"], answer: 1,
    explanation: "(36 ÷ 45) × 100% = 80%."
  },
  {
    id: "a1", topic: "Algebra", symbol: "x",
    prompt: "Solve 3x + 7 = 25.",
    options: ["6", "8", "9", "4"], answer: 0,
    explanation: "Subtract 7 from both sides: 3x = 18. Divide by 3: x = 6."
  },
  {
    id: "a2", topic: "Algebra", symbol: "x",
    prompt: "Simplify 5a + 3b − 2a + 4b.",
    options: ["3a + 7b", "7a + 7b", "3a − b", "7ab"], answer: 0,
    explanation: "Collect like terms: 5a − 2a = 3a and 3b + 4b = 7b. The result is 3a + 7b."
  },
  {
    id: "a3", topic: "Algebra", symbol: "x",
    prompt: "Factorise x² + 7x + 12.",
    options: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x − 3)(x − 4)", "(x + 1)(x + 12)"], answer: 0,
    explanation: "Find two numbers with product 12 and sum 7: 3 and 4. So x² + 7x + 12 = (x + 3)(x + 4)."
  },
  {
    id: "g1", topic: "Geometry", symbol: "△",
    prompt: "Two angles in a triangle are 47° and 68°. Find the third angle.",
    options: ["65°", "75°", "55°", "115°"], answer: 0,
    explanation: "Angles in a triangle add up to 180°. The third angle is 180° − 47° − 68° = 65°."
  },
  {
    id: "g2", topic: "Geometry", symbol: "△",
    prompt: "What is the sum of the interior angles of a hexagon?",
    options: ["540°", "600°", "720°", "900°"], answer: 2,
    explanation: "The sum is (n − 2) × 180°. For a hexagon, (6 − 2) × 180° = 720°."
  },
  {
    id: "g3", topic: "Geometry", symbol: "△",
    prompt: "A straight line is divided into two angles. One angle is 128°. Find the other.",
    options: ["42°", "52°", "62°", "128°"], answer: 1,
    explanation: "Angles on a straight line add to 180°. The other angle is 180° − 128° = 52°."
  },
  {
    id: "m1", topic: "Measurement & Mensuration", symbol: "▱",
    prompt: "Find the area of a rectangle with length 12 cm and width 7 cm.",
    options: ["38 cm²", "84 cm²", "19 cm²", "168 cm²"], answer: 1,
    explanation: "Area of a rectangle = length × width = 12 × 7 = 84 cm²."
  },
  {
    id: "m2", topic: "Measurement & Mensuration", symbol: "▱",
    prompt: "A trapezium has parallel sides of 8 cm and 14 cm and a height of 5 cm. Find its area.",
    options: ["55 cm²", "110 cm²", "70 cm²", "35 cm²"], answer: 0,
    explanation: "Area = ½ × (sum of parallel sides) × height = ½ × (8 + 14) × 5 = 55 cm²."
  },
  {
    id: "m3", topic: "Measurement & Mensuration", symbol: "▱",
    prompt: "Find the volume of a cuboid measuring 8 cm by 4 cm by 3 cm.",
    options: ["96 cm³", "48 cm³", "120 cm³", "64 cm³"], answer: 0,
    explanation: "Volume of a cuboid = length × width × height = 8 × 4 × 3 = 96 cm³."
  },
  {
    id: "s1", topic: "Statistics & Probability", symbol: "◉",
    prompt: "Find the mean of 6, 8, 10 and 12.",
    options: ["8", "9", "10", "36"], answer: 1,
    explanation: "Add the values: 6 + 8 + 10 + 12 = 36. Divide by 4 values: 36 ÷ 4 = 9."
  },
  {
    id: "s2", topic: "Statistics & Probability", symbol: "◉",
    prompt: "A bag contains 4 green, 3 red and 5 blue counters. What is the probability of choosing a red counter?",
    options: ["¼", "⅓", "⅖", "¾"], answer: 0,
    explanation: "There are 12 counters altogether and 3 are red. Probability = 3⁄12 = ¼."
  },
  {
    id: "s3", topic: "Statistics & Probability", symbol: "◉",
    prompt: "Find the median of 3, 5, 6, 9 and 14.",
    options: ["5", "6", "7", "9"], answer: 1,
    explanation: "The values are already in order. With 5 values, the median is the middle (third) value: 6."
  },
  {
    id: "set1", topic: "Sets", symbol: "∩",
    prompt: "In a class of 30 learners, 18 study French, 14 study Music and 7 study both. How many study neither subject?",
    options: ["5", "7", "9", "11"], answer: 0,
    explanation: "At least one subject = 18 + 14 − 7 = 25. Neither = 30 − 25 = 5 learners."
  },
  {
    id: "set2", topic: "Sets", symbol: "∩",
    prompt: "If A = {2, 4, 6, 8} and B = {1, 2, 3, 4}, what is A ∩ B?",
    options: ["{2, 4}", "{1, 3}", "{2, 4, 6, 8}", "{1, 2, 3, 4, 6, 8}"], answer: 0,
    explanation: "The intersection contains elements common to both sets. These are 2 and 4."
  },
  {
    id: "c1", topic: "Graphs & Coordinates", symbol: "⌖",
    prompt: "Find the midpoint of the line segment joining (2, 1) and (8, 7).",
    options: ["(5, 4)", "(6, 6)", "(4, 5)", "(10, 8)"], answer: 0,
    explanation: "Midpoint = ((2 + 8) ÷ 2, (1 + 7) ÷ 2) = (5, 4)."
  },
  {
    id: "c2", topic: "Graphs & Coordinates", symbol: "⌖",
    prompt: "Find the gradient of the line joining (2, 3) and (6, 11).",
    options: ["2", "½", "4", "8"], answer: 0,
    explanation: "Gradient = change in y ÷ change in x = (11 − 3) ÷ (6 − 2) = 8 ÷ 4 = 2."
  },
  {
    id: "r1", topic: "Ratio & Proportion", symbol: ":",
    prompt: "The ratio of boys to girls in a club is 2:5. If there are 42 members, how many are girls?",
    options: ["12", "24", "30", "35"], answer: 2,
    explanation: "There are 2 + 5 = 7 equal parts. Each part is 42 ÷ 7 = 6, so girls = 5 × 6 = 30."
  },
  {
    id: "r2", topic: "Ratio & Proportion", symbol: ":",
    prompt: "A recipe uses 3 cups of flour for 4 loaves. How many cups are needed for 12 loaves?",
    options: ["9 cups", "12 cups", "16 cups", "36 cups"], answer: 0,
    explanation: "12 loaves is 3 times as many as 4 loaves, so multiply the flour by 3: 3 × 3 = 9 cups."
  },
  {
    id: "com1", topic: "Commercial Arithmetic", symbol: "₦",
    prompt: "Find the simple interest on ₦5,000 at 10% per year for 2 years.",
    options: ["₦500", "₦1,000", "₦1,500", "₦6,000"], answer: 1,
    explanation: "Simple interest = (principal × rate × time) ÷ 100 = (5,000 × 10 × 2) ÷ 100 = ₦1,000."
  },
  {
    id: "com2", topic: "Commercial Arithmetic", symbol: "₦",
    prompt: "A trader buys an item for ₦4,500 and sells it for ₦5,400. What is the profit?",
    options: ["₦900", "₦1,000", "₦4,500", "₦9,900"], answer: 0,
    explanation: "Profit = selling price − cost price = ₦5,400 − ₦4,500 = ₦900."
  }
];

const topics = [...new Set(questions.map((question) => question.topic))];
const topicSymbols = Object.fromEntries(questions.map((question) => [question.topic, question.symbol]));
const storageKey = "maths-made-easy-jss3";
const defaultState = { answers: {}, saved: [], streak: 0, lastPracticeDate: "" };
let state = loadState();
let activeView = "home";
let activeTopic = "all";
let searchTerm = "";
let visibleQuestions = [...questions];
let currentIndex = 0;
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
    return {
      ...defaultState,
      ...stored,
      answers: stored.answers && typeof stored.answers === "object" ? stored.answers : {},
      saved: Array.isArray(stored.saved) ? stored.saved : []
    };
  } catch (error) {
    console.warn("Could not load saved learning progress.", error);
    return { ...defaultState };
  }
}

function saveState() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save learning progress.", error);
    showToast("Progress could not be saved in this browser.");
  }
}

function updateStats() {
  const answeredIds = Object.keys(state.answers);
  const answered = answeredIds.length;
  const correct = answeredIds.filter((id) => state.answers[id].correct).length;
  $("#answeredStat").textContent = answered;
  $("#correctStat").innerHTML = `${answered ? Math.round((correct / answered) * 100) : 0}<span class="stat-percent">%</span>`;
  $("#topicStat").textContent = topics.length;
  $("#streakNumber").textContent = state.streak;
  $("#savedCount").textContent = state.saved.length;
  $("#progressAnswered").textContent = answered;
  $("#progressTotal").textContent = questions.length;
  $("#progressBar").style.width = `${Math.min(100, (answered / questions.length) * 100)}%`;
  $("#progressHint").textContent = answered === 0
    ? "Start with one question. You've got this."
    : answered === questions.length
      ? "Amazing work — you've answered every question!"
      : `${questions.length - answered} questions left in this practice set.`;
}

function renderTopics() {
  $("#topicNav").innerHTML = topics.map((topic) => `
    <button class="topic-link" data-topic="${escapeHTML(topic)}">
      <span class="topic-symbol">${escapeHTML(topicSymbols[topic])}</span>
      ${escapeHTML(topic)}
      <span class="topic-num">${questions.filter((question) => question.topic === topic).length}</span>
    </button>
  `).join("");
  $("#topicGrid").innerHTML = topics.map((topic) => `
    <button class="topic-card" data-topic="${escapeHTML(topic)}">
      <span class="topic-card-head"><span class="topic-card-icon">${escapeHTML(topicSymbols[topic])}</span><span class="topic-arrow">↗</span></span>
      <strong>${escapeHTML(topic)}</strong>
      <small>${questions.filter((question) => question.topic === topic).length} practice questions</small>
    </button>
  `).join("");
  $("#topicFilter").innerHTML = `<option value="all">All topics</option>${topics.map((topic) =>
    `<option value="${escapeHTML(topic)}">${escapeHTML(topic)}</option>`
  ).join("")}`;
}

function setView(view) {
  activeView = view;
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active-view"));
  const target = $(`#${view}View`);
  if (target) target.classList.add("active-view");
  document.querySelectorAll(".nav-link").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  $("#breadcrumbCurrent").textContent = view === "home" ? "Overview" : view === "saved" ? "Saved questions" : "Practice questions";
  $("#sidebar").classList.remove("open");
  if (view === "saved") renderSaved();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setTopic(topic) {
  activeTopic = topic;
  $("#topicFilter").value = topic;
  $("#questionSearch").value = "";
  searchTerm = "";
  updateQuestionList();
  setView("practice");
}

function updateQuestionList() {
  const normalizedSearch = searchTerm.toLowerCase();
  visibleQuestions = questions.filter((question) => {
    const matchesTopic = activeTopic === "all" || question.topic === activeTopic;
    const matchesSearch = !normalizedSearch ||
      `${question.prompt} ${question.topic} ${question.options.join(" ")}`.toLowerCase().includes(normalizedSearch);
    return matchesTopic && matchesSearch;
  });
  currentIndex = Math.min(currentIndex, Math.max(0, visibleQuestions.length - 1));
  $("#questionCount").textContent = visibleQuestions.length
    ? `Showing ${visibleQuestions.length} ${visibleQuestions.length === 1 ? "question" : "questions"}`
    : "No questions found";
  renderQuestion();
}

function renderQuestion() {
  const question = visibleQuestions[currentIndex];
  if (!question) {
    $("#questionCard").innerHTML = `<div class="empty-state"><div class="empty-symbol">⌕</div><h3>No matching questions</h3><p>Try a different search or select another topic.</p><button class="button-green" id="clearFilters">Clear filters</button></div>`;
    $("#clearFilters").addEventListener("click", () => {
      activeTopic = "all";
      searchTerm = "";
      $("#questionSearch").value = "";
      $("#topicFilter").value = "all";
      updateQuestionList();
    });
    return;
  }

  const previousAnswer = state.answers[question.id];
  const saved = state.saved.includes(question.id);
  const letters = ["A", "B", "C", "D"];
  const options = question.options.map((option, index) => {
    let status = "";
    if (previousAnswer && index === question.answer) status = " correct";
    else if (previousAnswer && index === previousAnswer.selected) status = " incorrect";
    return `<button class="option-button${status}" data-option="${index}" ${previousAnswer ? "disabled" : ""}>
      <span class="option-letter">${letters[index]}</span><span>${escapeHTML(option)}</span>
    </button>`;
  }).join("");
  const feedbackClass = previousAnswer && !previousAnswer.correct ? " wrong" : "";
  const feedback = previousAnswer
    ? `<div class="answer-feedback visible${feedbackClass}"><strong>${previousAnswer.correct ? "That's correct! Well done." : `Not quite — the answer is ${letters[question.answer]}.`}</strong>${escapeHTML(question.explanation)}</div>`
    : `<div class="answer-feedback" id="answerFeedback"></div>`;
  $("#questionCard").innerHTML = `
    <div class="question-top">
      <span class="question-topic"><span class="question-topic-icon">${escapeHTML(question.symbol)}</span>${escapeHTML(question.topic)}</span>
      <button class="bookmark-button${saved ? " saved" : ""}" id="bookmarkButton" aria-label="${saved ? "Remove saved question" : "Save question"}">${saved ? "♥" : "♡"}</button>
    </div>
    <div class="question-number">QUESTION ${currentIndex + 1} <span>OF ${visibleQuestions.length}</span></div>
    <p class="question-text">${escapeHTML(question.prompt)}</p>
    <div class="options-list">${options}</div>
    ${feedback}
    <div class="question-actions">
      <button class="muted-action" id="previousQuestion" ${currentIndex === 0 ? "disabled" : ""}>← Previous</button>
      <button class="next-button" id="nextQuestion">${currentIndex === visibleQuestions.length - 1 ? "Finish set" : "Next question"} →</button>
    </div>`;
  $("#bookmarkButton").addEventListener("click", () => toggleSaved(question.id));
  document.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(question, Number(button.dataset.option)));
  });
  $("#previousQuestion").addEventListener("click", () => moveQuestion(-1));
  $("#nextQuestion").addEventListener("click", moveNext);
}

function chooseAnswer(question, selected) {
  if (state.answers[question.id]) return;
  const correct = selected === question.answer;
  state.answers[question.id] = { selected, correct };
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastPracticeDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    state.streak = state.lastPracticeDate === yesterday ? state.streak + 1 : 1;
    state.lastPracticeDate = today;
  }
  saveState();
  updateStats();
  renderQuestion();
}

function moveQuestion(amount) {
  currentIndex = Math.max(0, Math.min(visibleQuestions.length - 1, currentIndex + amount));
  renderQuestion();
}

function moveNext() {
  if (currentIndex < visibleQuestions.length - 1) {
    moveQuestion(1);
    return;
  }
  showToast("Practice set complete — nice work!");
  setView("home");
}

function toggleSaved(id) {
  if (state.saved.includes(id)) {
    state.saved = state.saved.filter((savedId) => savedId !== id);
    showToast("Removed from saved questions");
  } else {
    state.saved.push(id);
    showToast("Question saved for later");
  }
  saveState();
  updateStats();
  renderQuestion();
  if (activeView === "saved") renderSaved();
}

function renderSaved() {
  const savedQuestions = state.saved.map((id) => questions.find((question) => question.id === id)).filter(Boolean);
  if (!savedQuestions.length) {
    $("#savedList").innerHTML = `<div class="empty-state"><div class="empty-symbol">♡</div><h3>Your saved list is empty</h3><p>Tap the heart on any question to keep it here for later.</p><button class="button-green" id="browseQuestions">Browse questions</button></div>`;
    $("#browseQuestions").addEventListener("click", () => setView("practice"));
    return;
  }
  $("#savedList").innerHTML = savedQuestions.map((question) => `
    <article class="saved-item">
      <div class="saved-meta">${escapeHTML(topicSymbols[question.topic])} &nbsp; ${escapeHTML(question.topic)}</div>
      <p>${escapeHTML(question.prompt)}</p>
      <button data-open-question="${question.id}">Practise this question →</button>
    </article>
  `).join("");
  document.querySelectorAll("[data-open-question]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTopic = "all";
      searchTerm = "";
      $("#topicFilter").value = "all";
      $("#questionSearch").value = "";
      visibleQuestions = [...questions];
      currentIndex = visibleQuestions.findIndex((question) => question.id === button.dataset.openQuestion);
      setView("practice");
      renderQuestion();
    });
  });
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function shuffleQuestions() {
  for (let index = visibleQuestions.length - 1; index > 0; index--) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [visibleQuestions[index], visibleQuestions[swapIndex]] = [visibleQuestions[swapIndex], visibleQuestions[index]];
  }
  currentIndex = 0;
  renderQuestion();
  showToast("Questions shuffled");
}

document.querySelectorAll("[data-view]").forEach((button) => button.addEventListener("click", () => {
  if (button.dataset.view === "practice") {
    activeTopic = "all";
    searchTerm = "";
    $("#questionSearch").value = "";
    $("#topicFilter").value = "all";
    currentIndex = 0;
    updateQuestionList();
  }
  setView(button.dataset.view);
}));

document.addEventListener("click", (event) => {
  const topicButton = event.target.closest("[data-topic]");
  if (topicButton) setTopic(topicButton.dataset.topic);
});

$("#startQuiz").addEventListener("click", () => {
  activeTopic = "all";
  searchTerm = "";
  $("#questionSearch").value = "";
  $("#topicFilter").value = "all";
  currentIndex = 0;
  updateQuestionList();
  setView("practice");
});
$("#topicFilter").addEventListener("change", (event) => {
  activeTopic = event.target.value;
  currentIndex = 0;
  updateQuestionList();
});
$("#questionSearch").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  currentIndex = 0;
  updateQuestionList();
});
$("#shuffleButton").addEventListener("click", shuffleQuestions);
$("#mobileMenu").addEventListener("click", () => $("#sidebar").classList.toggle("open"));

renderTopics();
updateStats();
updateQuestionList();
