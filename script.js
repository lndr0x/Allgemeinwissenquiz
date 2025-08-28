const fragen = [
  // Alte Fragen
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
  { frage: "Welches Land gilt 2025 als das glücklichste der Welt?", antwort: "finnland" },

  // Neue Fragen 2025
  { frage: "Welche Partei gewann bei der Bundestagswahl 2025?", antwort: "cdu/csu" },
  { frage: "Wer ist seit 2025 Bundeskanzler von Deutschland?", antwort: "friedrich merz" },
  { frage: "Welche Partei erreichte bei der Bundestagswahl 2025 erstmals über 20 Prozent?", antwort: "afd" },
  { frage: "Welches Land übernahm 2025 die EU-Ratspräsidentschaft?", antwort: "polen" },
  { frage: "Welche beiden Länder traten 2025 dem Schengen-Raum bei?", antwort: "rumänien und bulgarien" },
  { frage: "Wie hoch ist der Mindestlohn in Deutschland seit Januar 2025?", antwort: "12,82 euro" },
  { frage: "Wie viel kostet das Deutschlandticket seit 2025?", antwort: "58 euro" },
  { frage: "Wie heißt die neue Patientenakte, die 2025 eingeführt wurde?", antwort: "epa" },
  { frage: "Welche Füllungen dürfen Zahnärzte seit 2025 nicht mehr verwenden?", antwort: "amalgam" },
  { frage: "Wie viele Euro kostet das Briefporto seit 2025?", antwort: "0,95 euro" },
  { frage: "Welche Technologie ist laut Gartner der wichtigste Trend 2025?", antwort: "agentic ai" },
  { frage: "Welche Smartphone-Funktion wird 2025 Standard?", antwort: "usb-c" },
  { frage: "Wie heißt das Jahr 2025 laut UN-Generalversammlung?", antwort: "internationales jahr der quantenwissenschaft" },
  { frage: "Welche Art von Computing wird 2025 wichtiger?", antwort: "quantum computing" },
  { frage: "Welche Realitätstechnologie wird 2025 mainstream?", antwort: "virtual reality" },
  { frage: "Wo findet 2025 die Handball-WM der Männer statt?", antwort: "kroatien dänemark norwegen" },
  { frage: "Welches Land gewann den Eurovision Song Contest 2025?", antwort: "österreich" },
  { frage: "Wo findet das Champions League Finale 2025 statt?", antwort: "münchen" },
  { frage: "Welche Fußball-EM findet 2025 statt?", antwort: "frauen-em" },
  { frage: "Wo findet die Frauen-EM 2025 statt?", antwort: "schweiz" },
  { frage: "Welche deutsche Künstlerin ist für den Preis für Popkultur 2025 nominiert?", antwort: "shirin david" },
  { frage: "Welche Band ist für den Preis für Popkultur 2025 nominiert?", antwort: "deichkind" },
  { frage: "Wann findet das Pop-Kultur Festival 2025 statt?", antwort: "august" },
  { frage: "Welcher Rapper tritt beim Super Bowl 2025 auf?", antwort: "kendrick lamar" },
  { frage: "Welche Art von Pillen kommen 2025 gegen Übergewicht?", antwort: "orforfilpron" },
  { frage: "Welche Technologie hilft Gelähmten 2025?", antwort: "brain-computer-interface" },
  { frage: "Welches Wissenschaftsjahr ist 2025?", antwort: "zukunftsenergie" },
  { frage: "Welche Medizin-Schnittstelle wird 2025 wichtig?", antwort: "hirn-computer-schnittstelle" },
  { frage: "Welcher Preis steigt 2025 von 45 auf 55 Euro?", antwort: "co2-preis" },
  { frage: "Welche Umweltmaßnahme wird 2025 verstärkt?", antwort: "klimaschutz" },
  { frage: "Welche Energieform wird 2025 wichtiger?", antwort: "solarenergie" },
  { frage: "Welcher Tag wird 2025 als Klimatag gefeiert?", antwort: "22. april" },
  { frage: "Wer ist seit Januar 2025 US-Präsident?", antwort: "donald trump" },
  { frage: "Welche Stadt war 2025 Kulturhauptstadt Europas?", antwort: "chemnitz" },
  { frage: "Welches Land führte 2025 die gleichgeschlechtliche Ehe ein?", antwort: "thailand" },
  { frage: "Welche Waffenruhe trat 2025 in Kraft?", antwort: "hamas israel" },
  { frage: "Welche digitale Rechnung wird 2025 Pflicht?", antwort: "e-rechnung" },
  { frage: "Welche Grenze steigt für Kleinunternehmer 2025?", antwort: "100000 euro" },
  { frage: "Welche Patientenakte wird 2025 Standard?", antwort: "elektronische patientenakte" },
  { frage: "Welche Fotos müssen 2025 digital vorliegen?", antwort: "passbilder" },
  { frage: "Welche Steuer wird 2025 reformiert?", antwort: "grundsteuer" }
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
  starburstEffect();
}

function starburstEffect() {
  const anzahlPartikel = 150;
  const container = document.body;
  for (let i = 0; i < anzahlPartikel; i++) {
    const partikel = document.createElement('div');
    partikel.className = 'starburst-particle';
    partikel.style.position = 'fixed';
    partikel.style.left = '50%';
    partikel.style.top = '50%';
    const size = Math.random() * 3 + 1;
    partikel.style.width = `${size}px`;
    partikel.style.height = `${size}px`;
    partikel.style.background = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
    partikel.style.borderRadius = '50%';
    partikel.style.pointerEvents = 'none';
    partikel.style.zIndex = '100';

    const angle = Math.random() * 360 * (Math.PI / 180);
    const distance = Math.random() * 300 + 50;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    partikel.style.transform = 'translate(-50%, -50%) scale(0)';
    partikel.style.opacity = 0;

    container.appendChild(partikel);

    setTimeout(() => {
      partikel.style.transition = 'transform 1.2s cubic-bezier(0.1, 0.7, 0.3, 1), opacity 1.2s ease-out';
      partikel.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`;
      partikel.style.opacity = 1;
    }, 10);

    setTimeout(() => {
      partikel.style.transform = `translate(calc(-50% + ${x * 1.2}px), calc(-50% + ${y * 1.2}px)) scale(0)`;
      partikel.style.opacity = 0;
    }, 800);

    setTimeout(() => {
      partikel.remove();
    }, 1800);
  }
}

submitBtn.onclick = checkAntwort;
answerInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    checkAntwort();
  }
});

// ===== STARFIELD BACKGROUND =====
const starfield = () => {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  const numStars = 400; // Anzahl der Sterne
  const mouseRadius = 120; // Interaktionsradius der Maus

  let mouse = {
    x: undefined,
    y: undefined
  };

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const init = () => {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        speedX: (Math.random() - 0.5) * 0.1, // Langsameres Schweben
        speedY: (Math.random() - 0.5) * 0.1,
        density: (Math.random() * 20) + 5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})` // Subtilere Helligkeit
      });
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      let dx = mouse.x - star.x;
      let dy = mouse.y - star.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      // Sterne von der Maus wegstoßen
      if (distance < mouseRadius && mouse.x !== undefined) {
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (mouseRadius - distance) / mouseRadius;
        let directionX = forceDirectionX * force * star.density;
        let directionY = forceDirectionY * force * star.density;

        star.x -= directionX * 0.05; // Sanftere Reaktion
        star.y -= directionY * 0.05;
      }

      // Zurück zur Basisposition schweben
      star.x += star.speedX + (star.baseX - star.x) * 0.002;
      star.y += star.speedY + (star.baseY - star.y) * 0.002;

      // Randbehandlung (einfaches Umkehren)
      if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
      if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
  });

  window.addEventListener('resize', () => {
    resize();
    init();
  });

  resize();
  init();
  animate();
};

window.addEventListener('DOMContentLoaded', () => {
  startQuiz();
  starfield();
});
