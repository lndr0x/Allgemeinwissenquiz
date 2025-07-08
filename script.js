const fragen = [
  { frage: "Wer wurde 2021 Bundeskanzler von Deutschland?", antwort: "olaf scholz" },
  { frage: "Wie heißt der KI-Chatbot von OpenAI, der 2022 weltweit bekannt wurde?", antwort: "chatgpt" },
  { frage: "Welches weltweite Ereignis prägte das Jahr 2020 besonders?", antwort: "corona-pandemie" },
  { frage: "Welches Land wurde 2022 von Russland angegriffen?", antwort: "ukraine" },
  { frage: "Wie viele Bundesländer hat Deutschland?", antwort: "16" },
  { frage: "Wie heißt das Apple Mixed-Reality-Headset, das 2024 erschien?", antwort: "vision pro" },
  { frage: "Wie nennt man das neue Twitter seit 2023?", antwort: "x" },
  { frage: "Wer war US-Präsident im Jahr 2024?", antwort: "joe biden" },
  { frage: "Welches Land gewann die Fußball-WM 2022?", antwort: "argentinien" },
  { frage: "Wie viele Planeten hat unser Sonnensystem?", antwort: "8" },
  { frage: "Wie heißt die Jugendbewegung gegen Klimawandel?", antwort: "fridays for future" },
  { frage: "Wie viele Sterne hat die Flagge der Europäischen Union?", antwort: "12" },
  { frage: "Wie heißt der CEO von Tesla?", antwort: "elon musk" },
  { frage: "Wie viele Sekunden hat eine Minute?", antwort: "60" },
  { frage: "Welcher Mindestlohn gilt in Deutschland seit Januar 2025 (Euro pro Stunde)?", antwort: "12,82" },
  { frage: "Wie heißt die KI-Verordnung, die ab 2025 in der EU gilt?", antwort: "ai act" },
  { frage: "Wie heißt die Popikone von 'Break My Soul'?", antwort: "beyoncé" },
  { frage: "Wie heißt das bekannteste Videoportal weltweit?", antwort: "youtube" },
  { frage: "Wie viele Kontinente gibt es auf der Erde?", antwort: "7" },
  { frage: "Welches Land gilt 2025 als das glücklichste der Welt?", antwort: "finnland" }
];


const FRAGEN_ANZAHL = 15;
let fragenPool = [];
let aktuelleFrage = 0;
let score = 0;

const quizDiv = document.getElementById('quiz');
const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedbackDiv = document.getElementById('feedback');
const progressDiv = document.getElementById('progress');
const resultDiv = document.getElementById('result');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz() {
  fragenPool = shuffle([...fragen]).slice(0, FRAGEN_ANZAHL);
  aktuelleFrage = 0;
  score = 0;
  resultDiv.classList.add('hidden');
  quizDiv.classList.remove('hidden');
  answerInput.value = '';
  feedbackDiv.textContent = '';
  showFrage();
}

function showFrage() {
  if (aktuelleFrage >= FRAGEN_ANZAHL) {
    return auswertung();
  }
  const frageObj = fragenPool[aktuelleFrage];
  questionDiv.textContent = frageObj.frage;
  progressDiv.textContent = `Frage ${aktuelleFrage + 1} von ${FRAGEN_ANZAHL}`;
  answerInput.value = '';
  answerInput.focus();
  feedbackDiv.textContent = '';
}

function checkAntwort() {
  const userAntwort = answerInput.value.trim().toLowerCase();
  const richtigeAntwort = fragenPool[aktuelleFrage].antwort.toLowerCase();
  if (!userAntwort) {
    feedbackDiv.textContent = 'Bitte gib eine Antwort ein!';
    feedbackDiv.style.color = '#ffb300';
    feedbackDiv.classList.remove('animate-correct', 'animate-wrong');
    answerInput.classList.remove('glow-correct', 'glow-wrong');
    return;
  }
  if (userAntwort === richtigeAntwort) {
    feedbackDiv.innerHTML = '✅ <span style="color:#00e6d0">Richtig!</span>';
    feedbackDiv.style.color = '#00e6d0';
    feedbackDiv.classList.remove('animate-wrong');
    feedbackDiv.classList.add('animate-correct');
    answerInput.classList.remove('glow-wrong');
    answerInput.classList.add('glow-correct');
    score++;
  } else {
    feedbackDiv.innerHTML = `❌ <span style="color:#ff4c60">Falsch.</span> Die richtige Antwort war: <b>${fragenPool[aktuelleFrage].antwort}</b>`;
    feedbackDiv.style.color = '#ff4c60';
    feedbackDiv.classList.remove('animate-correct');
    feedbackDiv.classList.add('animate-wrong');
    answerInput.classList.remove('glow-correct');
    answerInput.classList.add('glow-wrong');
  }
  aktuelleFrage++;
  submitBtn.disabled = true;
  answerInput.disabled = true;
  setTimeout(() => {
    feedbackDiv.classList.remove('animate-correct', 'animate-wrong');
    answerInput.classList.remove('glow-correct', 'glow-wrong');
    submitBtn.disabled = false;
    answerInput.disabled = false;
    showFrage();
  }, 2700);
}

function auswertung() {
  quizDiv.classList.add('hidden');
  let feedback = '';
  if (score >= 12) {
    feedback = 'Stark! Du bist ein Wissensprofi.';
  } else if (score >= 7) {
    feedback = 'Solide Leistung. Da geht noch was!';
  } else {
    feedback = 'Uff... Du brauchst dringend Nachhilfe.';
  }
  resultDiv.innerHTML = `<div>Du hast <b>${score}</b> von <b>${FRAGEN_ANZAHL}</b> Fragen richtig.<br><br>${feedback}<br><br><button id="restart">Nochmal spielen</button></div>`;
  resultDiv.classList.remove('hidden');
  document.getElementById('restart').onclick = startQuiz;
  konfettiRegen();
}

function konfettiRegen() {
  const farben = ['#00e6d0', '#8f00ff', '#007cf0', '#ff4c60', '#ffb300', '#00ffb0', '#fff'];
  const konfettiAnzahl = 36;
  for (let i = 0; i < konfettiAnzahl; i++) {
    const konfetti = document.createElement('div');
    konfetti.className = 'confetti';
    konfetti.style.left = Math.random() * 98 + 'vw';
    konfetti.style.background = farben[Math.floor(Math.random() * farben.length)];
    konfetti.style.transform = `rotate(${Math.random()*360}deg)`;
    konfetti.style.width = 12 + Math.random()*10 + 'px';
    konfetti.style.height = 12 + Math.random()*10 + 'px';
    konfetti.style.opacity = 0.7 + Math.random()*0.3;
    konfetti.style.animationDelay = (Math.random()*0.7) + 's';
    document.body.appendChild(konfetti);
    setTimeout(() => konfetti.remove(), 2500);
  }
}

submitBtn.onclick = checkAntwort;
answerInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    checkAntwort();
  }
});

window.onload = startQuiz; 
