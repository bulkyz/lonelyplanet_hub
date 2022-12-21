// de menu knoppen
var navButtons = Array.from(document.querySelectorAll(".tab"));

// listener als je op knop klikt
for (navButton of navButtons) {
  navButton.addEventListener("click", navClickHandler);
}

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
}