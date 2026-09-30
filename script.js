const intro = document.getElementById("intro");
const envelopeScreen = document.getElementById("envelopeScreen");
const invitationScreen = document.getElementById("invitationScreen");
const moon = document.getElementById("moon");
const envelope = document.getElementById("envelope");
const replayButton = document.getElementById("replayButton");
const tapHint = document.getElementById("tapHint");
const stars = document.getElementById("stars");

let moonReady = false;
let envelopeOpened = false;

// Create background stars
function createStars() {
  stars.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    star.style.opacity = 0.2 + Math.random() * 0.8;
    stars.appendChild(star);
  }
}

// Start moon animation
function startIntro() {
  intro.classList.remove("hidden");
  envelopeScreen.classList.add("hidden");
  invitationScreen.classList.add("hidden");

  moon.classList.remove("fly", "ready");
  moonReady = false;
  envelopeOpened = false;
  envelope.classList.remove("open");
  tapHint.textContent = "The night holds a beautiful secret…";

  void moon.offsetWidth;
  moon.classList.add("fly");

  setTimeout(() => {
    moon.classList.add("ready");
    moonReady = true;
    tapHint.textContent = "Tap the glowing moon to continue";
  }, 3300);
}

// Move to envelope
function openEnvelopeScreen() {
  if (!moonReady) return;

  intro.classList.add("hidden");
  envelopeScreen.classList.remove("hidden");
}

// Open envelope, then reveal invitation
function openEnvelope() {
  if (envelopeOpened) return;

  envelopeOpened = true;
  envelope.classList.add("open");

  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    invitationScreen.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 1300);
}

// Click and keyboard support for moon
moon.addEventListener("click", openEnvelopeScreen);

moon.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openEnvelopeScreen();
  }
});

envelope.addEventListener("click", openEnvelope);
replayButton.addEventListener("click", startIntro);

createStars();
startIntro();