const fragen = [
  // Alte Fragen
  { frage: "Wer wurde 2021 Bundeskanzler von Deutschland?", antwort: "olaf scholz", hint: "Er ist SPD-Politiker und war vorher Vizekanzler." },
  { frage: "Wie heißt der KI-Chatbot von OpenAI, der 2022 weltweit bekannt wurde?", antwort: "chatgpt", hint: "Die Abkürzung steht für 'Chat Generative Pre-trained Transformer'." },
  { frage: "Welches weltweite Ereignis prägte das Jahr 2020 besonders?", antwort: "corona-pandemie", hint: "Es begann in Wuhan, China und führte zu weltweiten Lockdowns." },
  { frage: "Welches Land wurde 2022 von Russland angegriffen?", antwort: "ukraine", hint: "Das Land liegt zwischen Polen und Russland." },
  { frage: "Wie viele Bundesländer hat Deutschland?", antwort: "16", hint: "Bayern, Baden-Württemberg, NRW... zähle sie alle!" },
  { frage: "Wie heißt das Apple Mixed-Reality-Headset, das 2024 erschien?", antwort: "vision pro", hint: "Es kombiniert VR und AR und kostet über 3000€." },
  { frage: "Wie nennt man das neue Twitter seit 2023?", antwort: "x", hint: "Ein einzelner Buchstabe des Alphabets." },
  { frage: "Wer war US-Präsident im Jahr 2024?", antwort: "joe biden", hint: "Er war Obamas Vizepräsident und wurde 2020 gewählt." },
  { frage: "Welches Land gewann die Fußball-WM 2022?", antwort: "argentinien", hint: "Das Land von Lionel Messi in Südamerika." },
  { frage: "Wie viele Planeten hat unser Sonnensystem?", antwort: "8", hint: "Pluto zählt seit 2006 nicht mehr als Planet." },
  { frage: "Wie heißt die Jugendbewegung gegen Klimawandel?", antwort: "fridays for future", hint: "Greta Thunberg startete diese Bewegung." },
  { frage: "Wie viele Sterne hat die Flagge der Europäischen Union?", antwort: "12", hint: "Die Anzahl ändert sich nicht, egal wie viele Länder beitreten." },
  { frage: "Wie heißt der CEO von Tesla?", antwort: "elon musk", hint: "Er besitzt auch Twitter/X und SpaceX." },
  { frage: "Wie viele Sekunden hat eine Minute?", antwort: "60" },
  { frage: "Welcher Mindestlohn gilt in Deutschland seit Januar 2025 (Euro pro Stunde)?", antwort: "12,82", hint: "Er stieg um 41 Cent gegenüber 2024." },
  { frage: "Wie heißt die KI-Verordnung, die ab 2025 in der EU gilt?", antwort: "ai act", hint: "Ein englischer Begriff für ein europäisches Gesetz." },
  { frage: "Wie heißt die Popikone von 'Break My Soul'?", antwort: "beyoncé", hint: "Sie war früher in der Gruppe Destiny's Child." },
  { frage: "Wie heißt das bekannteste Videoportal weltweit?", antwort: "youtube", hint: "Es gehört zu Google und hat ein rotes Logo." },
  { frage: "Wie viele Kontinente gibt es auf der Erde?", antwort: "7", hint: "Afrika, Asien, Europa, Nordamerika, Südamerika, Australien und..." },
  { frage: "Welches Land gilt 2025 als das glücklichste der Welt?", antwort: "finnland", hint: "Ein nordisches Land mit vielen Seen." },

  // Neue Fragen 2025
  { frage: "Welche Partei gewann bei der Bundestagswahl 2025?", antwort: "cdu/csu", hint: "Die Unionsparteien mit Friedrich Merz." },
  { frage: "Wer ist seit 2025 Bundeskanzler von Deutschland?", antwort: "friedrich merz", hint: "CDU-Politiker und ehemaliger Blackrock-Manager." },
  { frage: "Welche Partei erreichte bei der Bundestagswahl 2025 erstmals über 20 Prozent?", antwort: "afd", hint: "Eine rechtspopulistische Partei." },
  { frage: "Welches Land übernahm 2025 die EU-Ratspräsidentschaft?", antwort: "polen", hint: "Östlicher EU-Nachbar Deutschlands." },
  { frage: "Welche beiden Länder traten 2025 dem Schengen-Raum bei?", antwort: "rumänien und bulgarien", hint: "Beide liegen auf der Balkanhalbinsel am Schwarzen Meer." },
  { frage: "Wie hoch ist der Mindestlohn in Deutschland seit Januar 2025?", antwort: "12,82 euro", hint: "Mehr als 12 Euro, aber weniger als 13 Euro pro Stunde." },
  { frage: "Wie viel kostet das Deutschlandticket seit 2025?", antwort: "58 euro", hint: "Es ist 9 Euro teurer als 2024." },
  { frage: "Wie heißt die neue Patientenakte, die 2025 eingeführt wurde?", antwort: "epa", hint: "Abkürzung für 'Elektronische Patientenakte'." },
  { frage: "Welche Füllungen dürfen Zahnärzte seit 2025 nicht mehr verwenden?", antwort: "amalgam", hint: "Eine Quecksilber-haltige Legierung." },
  { frage: "Wie viele Euro kostet das Briefporto seit 2025?", antwort: "0,95 euro", hint: "Fünf Cent weniger als ein Euro." },
  { frage: "Welche Technologie ist laut Gartner der wichtigste Trend 2025?", antwort: "agentic ai", hint: "KI-Systeme, die eigenständig handeln können." },
  { frage: "Welche Smartphone-Funktion wird 2025 Standard?", antwort: "usb-c", hint: "Ein einheitlicher Ladeanschluss für alle Geräte in der EU." },
  { frage: "Wie heißt das Jahr 2025 laut UN-Generalversammlung?", antwort: "internationales jahr der quantenwissenschaft", hint: "Es dreht sich um Physik auf allerkleinster Ebene." },
  { frage: "Welche Art von Computing wird 2025 wichtiger?", antwort: "quantum computing", hint: "Computer, die mit Qubits statt Bits rechnen." },
  { frage: "Welche Realitätstechnologie wird 2025 mainstream?", antwort: "virtual reality", hint: "Mit VR-Brille in digitale Welten eintauchen." },
  { frage: "Wo findet 2025 die Handball-WM der Männer statt?", antwort: "kroatien dänemark norwegen", hint: "Drei Länder gemeinsam: eines am Mittelmeer, eines in Skandinavien, eines zwischen beiden." },
  { frage: "Welches Land gewann den Eurovision Song Contest 2025?", antwort: "österreich", hint: "Deutschlands südlicher Nachbar." },
  { frage: "Wo findet das Champions League Finale 2025 statt?", antwort: "münchen", hint: "Bayerische Landeshauptstadt." },
  { frage: "Welche Fußball-EM findet 2025 statt?", antwort: "frauen-em", hint: "Nicht die Männer, sondern..." },
  { frage: "Wo findet die Frauen-EM 2025 statt?", antwort: "schweiz", hint: "Bergland zwischen Deutschland, Frankreich und Italien." },
  { frage: "Welche deutsche Künstlerin ist für den Preis für Popkultur 2025 nominiert?", antwort: "shirin david", hint: "Rapperin mit libanesischen Wurzeln." },
  { frage: "Welche Band ist für den Preis für Popkultur 2025 nominiert?", antwort: "deichkind", hint: "Hamburger Elektro-Hip-Hop-Gruppe." },
  { frage: "Wann findet das Pop-Kultur Festival 2025 statt?", antwort: "august", hint: "Sommermonat zwischen Juli und September." },
  { frage: "Welcher Rapper tritt beim Super Bowl 2025 auf?", antwort: "kendrick lamar", hint: "Pulitzer-Preisträger aus Compton." },
  { frage: "Welche Art von Pillen kommen 2025 gegen Übergewicht?", antwort: "orforfilpron", hint: "Ein neues Medikament von Lilly." },
  { frage: "Welche Technologie hilft Gelähmten 2025?", antwort: "brain-computer-interface", hint: "Direkte Verbindung zwischen Gehirn und Computer." },
  { frage: "Welches Wissenschaftsjahr ist 2025?", antwort: "zukunftsenergie", hint: "Es geht um nachhaltige Energieformen." },
  { frage: "Welche Medizin-Schnittstelle wird 2025 wichtig?", antwort: "hirn-computer-schnittstelle", hint: "Deutsche Übersetzung von 'Brain-Computer-Interface'." },
  { frage: "Welcher Preis steigt 2025 von 45 auf 55 Euro?", antwort: "co2-preis", hint: "Preis für Kohlendioxid-Emissionen." },
  { frage: "Welche Umweltmaßnahme wird 2025 verstärkt?", antwort: "klimaschutz", hint: "Schutz vor globaler Erwärmung." },
  { frage: "Welche Energieform wird 2025 wichtiger?", antwort: "solarenergie", hint: "Energie von der Sonne." },
  { frage: "Welcher Tag wird 2025 als Klimatag gefeiert?", antwort: "22. april", hint: "Earth Day - Tag der Erde." },
  { frage: "Wer ist seit Januar 2025 US-Präsident?", antwort: "donald trump", hint: "Er war schon mal von 2017-2021 Präsident." },
  { frage: "Welche Stadt war 2025 Kulturhauptstadt Europas?", antwort: "chemnitz", hint: "Stadt in Sachsen, früher Karl-Marx-Stadt." },
  { frage: "Welches Land führte 2025 die gleichgeschlechtliche Ehe ein?", antwort: "thailand", hint: "Land des Lächelns in Südostasien." },
  { frage: "Welche Waffenruhe trat 2025 in Kraft?", antwort: "hamas israel", hint: "Konflikt im Nahen Osten." },
  { frage: "Welche digitale Rechnung wird 2025 Pflicht?", antwort: "e-rechnung", hint: "Elektronische statt Papier-Rechnungen." },
  { frage: "Welche Grenze steigt für Kleinunternehmer 2025?", antwort: "100000 euro", hint: "Umsatzgrenze für die Kleinunternehmerregelung." },
  { frage: "Welche Patientenakte wird 2025 Standard?", antwort: "elektronische patientenakte", hint: "Digitale Gesundheitsdaten statt Papierakten." },
  { frage: "Welche Fotos müssen 2025 digital vorliegen?", antwort: "passbilder", hint: "Bilder für den Personalausweis." },
  { frage: "Welche Steuer wird 2025 reformiert?", antwort: "grundsteuer", hint: "Steuer auf Immobilien und Grundstücke." }
];

const FRAGEN_ANZAHL_DEFAULT = 15;
let FRAGEN_ANZAHL = 15;
let fragenPool = [];
let aktuelleFrage = 0;
let score = 0;
let userAnswers = []; // Track user answers for review
let hintsEnabled = true;
let hintUsed = false;

const setupScreen = document.getElementById('setupScreen');
const quizDiv = document.getElementById('quiz');
const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedbackDiv = document.getElementById('feedback');
const progressDiv = document.getElementById('progress');
const resultDiv = document.getElementById('result');
const hintContainer = document.getElementById('hintContainer');
const hintButton = document.getElementById('hintButton');
const hintText = document.getElementById('hintText');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeQuiz() {
  // Show setup screen initially
  setupScreen.classList.remove('hidden');
  quizDiv.classList.add('hidden');
  resultDiv.classList.add('hidden');
  
  // Setup event listeners
  document.getElementById('startQuiz').onclick = startQuizWithSettings;
}

function startQuizWithSettings() {
  // Get user preferences
  FRAGEN_ANZAHL = parseInt(document.getElementById('questionCount').value);
  hintsEnabled = document.getElementById('hintsEnabled').checked;
  
  // Hide setup screen and start quiz
  setupScreen.classList.add('hidden');
  startQuiz();
}

function startQuiz() {
  fragenPool = shuffle([...fragen]).slice(0, FRAGEN_ANZAHL);
  aktuelleFrage = 0;
  score = 0;
  userAnswers = []; // Reset user answers
  resultDiv.classList.add('hidden');
  quizDiv.classList.remove('hidden');
  answerInput.value = '';
  feedbackDiv.textContent = '';
  hintContainer.classList.add('hidden');
  // Remove any continue button that might exist
  const continueBtn = document.getElementById('continue');
  if (continueBtn) continueBtn.remove();
  const reviewDiv = document.getElementById('reviewDiv');
  if (reviewDiv) reviewDiv.remove();
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
  
  // Reset hint state
  hintUsed = false;
  hintText.textContent = '';
  hintText.classList.add('hidden');
  
  // Show hint button if hints are enabled and hint exists
  if (hintsEnabled && frageObj.hint) {
    hintContainer.classList.remove('hidden');
    hintButton.style.display = 'block';
    hintButton.textContent = '💡 Tipp anzeigen';
    hintButton.disabled = false; // Make sure button is enabled
  } else {
    hintContainer.classList.add('hidden');
  }
}

function showHint() {
  if (!hintUsed && fragenPool[aktuelleFrage].hint) {
    hintText.textContent = fragenPool[aktuelleFrage].hint;
    hintText.classList.remove('hidden');
    hintButton.textContent = '💡 Tipp verwendet';
    hintButton.disabled = true;
    hintUsed = true;
  }
}

function normalizeAnswer(answer) {
  return answer.trim().toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^\w\s-]/g, '') // Remove punctuation except hyphens
    .replace(/\s+/g, ' '); // Normalize whitespace
}

function checkAntwort() {
  const userAntwort = normalizeAnswer(answerInput.value);
  const richtigeAntwort = normalizeAnswer(fragenPool[aktuelleFrage].antwort);
  const originalUserInput = answerInput.value.trim();
  
  if (!userAntwort) {
    feedbackDiv.textContent = 'Bitte gib eine Antwort ein!';
    feedbackDiv.style.color = '#ffb300';
    feedbackDiv.classList.remove('animate-correct', 'animate-wrong');
    answerInput.classList.remove('glow-correct', 'glow-wrong');
    return;
  }
  
  // Check for exact match first
  let isCorrect = userAntwort === richtigeAntwort;
  
  // If not exact, try some common variations
  if (!isCorrect) {
    const variations = [
      richtigeAntwort.replace(/\s+/g, ''), // Remove spaces
      richtigeAntwort.replace(/-/g, ' '), // Replace hyphens with spaces
      richtigeAntwort.replace(/\s+/g, '-'), // Replace spaces with hyphens
      richtigeAntwort.split(' ')[0], // First word only
      richtigeAntwort.split(' ').slice(-1)[0], // Last word only
    ];
    
    isCorrect = variations.some(variation => userAntwort === variation || userAntwort.includes(variation) || variation.includes(userAntwort));
  }
  
  // Store the answer for review
  userAnswers.push({
    question: fragenPool[aktuelleFrage].frage,
    userAnswer: originalUserInput,
    correctAnswer: fragenPool[aktuelleFrage].antwort,
    isCorrect: isCorrect
  });
  
  if (isCorrect) {
    feedbackDiv.innerHTML = '✅ <span style="color:#00e6d0">Richtig! Gut gemacht!</span>';
    feedbackDiv.style.color = '#00e6d0';
    feedbackDiv.classList.remove('animate-wrong');
    feedbackDiv.classList.add('animate-correct');
    answerInput.classList.remove('glow-wrong');
    answerInput.classList.add('glow-correct');
    score++;
  } else {
    feedbackDiv.innerHTML = `❌ <span style="color:#ff4c60">Das war leider nicht richtig.</span> Die richtige Antwort war: <b>${fragenPool[aktuelleFrage].antwort}</b>`;
    feedbackDiv.style.color = '#ff4c60';
    feedbackDiv.classList.remove('animate-correct');
    feedbackDiv.classList.add('animate-wrong');
    answerInput.classList.remove('glow-correct');
    answerInput.classList.add('glow-wrong');
  }
  
  aktuelleFrage++;
  submitBtn.disabled = true;
  answerInput.disabled = true;
  
  // Add continue button for user control
  setTimeout(() => {
    showContinueButton();
  }, 1000);
}

function showContinueButton() {
  const continueBtn = document.createElement('button');
  continueBtn.id = 'continue';
  continueBtn.textContent = 'Weiter →';
  continueBtn.className = 'continue-button';
  continueBtn.onclick = continueToNext;
  
  // Insert after feedback
  feedbackDiv.parentNode.insertBefore(continueBtn, feedbackDiv.nextSibling);
  continueBtn.focus(); // Focus for accessibility
}

function continueToNext() {
  const continueBtn = document.getElementById('continue');
  if (continueBtn) {
    continueBtn.remove();
  }
  
  feedbackDiv.classList.remove('animate-correct', 'animate-wrong');
  answerInput.classList.remove('glow-correct', 'glow-wrong');
  submitBtn.disabled = false;
  answerInput.disabled = false;
  showFrage();
}

function auswertung() {
  quizDiv.classList.add('hidden');
  let feedback = '';
  const percentage = Math.round((score / FRAGEN_ANZAHL) * 100);
  
  if (score >= Math.ceil(FRAGEN_ANZAHL * 0.8)) {
    feedback = '🏆 Ausgezeichnet! Du bist ein echter Wissensprofi!';
  } else if (score >= Math.ceil(FRAGEN_ANZAHL * 0.6)) {
    feedback = '⭐ Sehr gut! Du kennst dich richtig gut aus!';
  } else if (score >= Math.ceil(FRAGEN_ANZAHL * 0.4)) {
    feedback = '👍 Gute Leistung! Du bist auf einem guten Weg!';
  } else if (score >= Math.ceil(FRAGEN_ANZAHL * 0.2)) {
    feedback = '📚 Nicht schlecht! Mit etwas mehr Übung wird\'s noch besser!';
  } else {
    feedback = '💪 Jeder fängt mal klein an! Versuch\'s gerne nochmal!';
  }
  
  resultDiv.innerHTML = `
    <div>
      <div style="font-size: 2rem; margin-bottom: 20px;">🧠</div>
      <div>Du hast <b>${score}</b> von <b>${FRAGEN_ANZAHL}</b> Fragen richtig beantwortet!</div>
      <div style="font-size: 1.2rem; margin: 10px 0; color: #4fd1c5;">Das sind ${percentage}%</div>
      <div style="margin: 20px 0;">${feedback}</div>
      <div style="margin-top: 30px;">
        <button id="restart">🔄 Nochmal versuchen</button>
        <button id="review" style="margin-left: 15px;">📋 Antworten ansehen</button>
      </div>
      <div style="margin-top: 15px;">
        <button id="backToSetup" style="background: linear-gradient(90deg, #666 0%, #888 100%);">⚙️ Einstellungen ändern</button>
      </div>
    </div>`;
  resultDiv.classList.remove('hidden');
  document.getElementById('restart').onclick = startQuiz;
  document.getElementById('review').onclick = showReview;
  document.getElementById('backToSetup').onclick = backToSetup;
  konfettiRegen();
}

function backToSetup() {
  resultDiv.classList.add('hidden');
  setupScreen.classList.remove('hidden');
  // Clear any review screen
  const reviewDiv = document.getElementById('reviewDiv');
  if (reviewDiv) reviewDiv.remove();
}

function showReview() {
  resultDiv.classList.add('hidden');
  
  const reviewDiv = document.createElement('div');
  reviewDiv.id = 'reviewDiv';
  reviewDiv.innerHTML = `
    <div style="text-align: center; margin-bottom: 30px;">
      <h2 style="color: #a3cef1; margin-bottom: 10px;">📋 Antworten im Überblick</h2>
      <div style="color: #4fd1c5;">Richtig: ${score} | Falsch: ${FRAGEN_ANZAHL - score}</div>
    </div>
    <div id="reviewList"></div>
    <div style="text-align: center; margin-top: 30px;">
      <button id="backToResult">← Zurück zum Ergebnis</button>
      <button id="restartFromReview" style="margin-left: 15px;">🔄 Neues Quiz starten</button>
    </div>
  `;
  
  document.querySelector('.quiz-container').appendChild(reviewDiv);
  
  const reviewList = document.getElementById('reviewList');
  userAnswers.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'review-item';
    itemDiv.innerHTML = `
      <div class="review-question">
        <strong>${index + 1}. ${item.question}</strong>
      </div>
      <div class="review-answers">
        <div class="user-answer ${item.isCorrect ? 'correct' : 'incorrect'}">
          ${item.isCorrect ? '✅' : '❌'} Deine Antwort: "${item.userAnswer || '(keine Antwort)'}"
        </div>
        ${!item.isCorrect ? `<div class="correct-answer">✓ Richtige Antwort: "${item.correctAnswer}"</div>` : ''}
      </div>
    `;
    reviewList.appendChild(itemDiv);
  });
  
  document.getElementById('backToResult').onclick = () => {
    reviewDiv.remove();
    resultDiv.classList.remove('hidden');
  };
  
  document.getElementById('restartFromReview').onclick = () => {
    reviewDiv.remove();
    startQuiz();
  };
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
hintButton.onclick = showHint;

answerInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    if (!submitBtn.disabled) {
      checkAntwort();
    }
  }
});

// Add keyboard support for continue button
document.addEventListener('keydown', function(e) {
  const continueBtn = document.getElementById('continue');
  if (continueBtn && (e.key === 'Enter' || e.key === ' ')) {
    e.preventDefault();
    continueToNext();
  }
});

window.onload = initializeQuiz;
