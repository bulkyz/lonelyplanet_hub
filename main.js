// de tab menu knoppen
var navButtons = Array.from(document.querySelectorAll(".tab"));

// listener als je op knop klikt
for (navButton of navButtons) {
  navButton.addEventListener("click", navClickHandler);
}

// adding audio files
let firstAudio = new Audio("./assets/sounds/tropical.mp3");
let secondAudio = new Audio("./assets/sounds/downtown.mp3");
let thirdAudio = new Audio("./assets/sounds/forest.mp3");

// listener voor pagina I zodat de audio op pauze gaat
// document.getElementById("screenI").addEventListener("click", pauseAudio() { thirdAudio.pause(); });

// maakt de knop waar je op klikt actief
function navClickHandler(event) {
  for (navButton of navButtons) {
    navButton.classList.remove("active");
  }
  this.classList.add("active");
}

function startJourney() {
  console.log("Journey started");
  window.location.href = '#screenF'
  firstAudio.volume = 0.1;
  firstAudio.play();
}

function playAudio (screenName) {
  if (screenName === screenG) {
    console.log("now playing option 2 (screen g)");
    firstAudio.pause();
    secondAudio.volume = 0.1;
    secondAudio.play();
  }

  if (screenName === screenH) {
    console.log("now playing option 3 (screen h)");
    secondAudio.pause();
    thirdAudio.volume = 0.1;
    thirdAudio.play();
  }

  if (screenName === screenI) {
    thirdAudio.pause();
  }
}
