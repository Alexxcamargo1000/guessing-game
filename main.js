//variables
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
const input = document.querySelector("input");
const buttonTry = document.querySelector("#BtnTry");
const buttonReset = document.querySelector("#BtnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

//events
buttonTry.addEventListener("click", handleTry);
buttonReset.addEventListener("click", handleReset);

//functions
function handleTry(e) {
  e.preventDefault();
  
  if (Number(input.value) === randomNumber) {
    toggleScreen();
    screen2.querySelector(
      "h1"
      ).innerHTML = `Você acertou em ${xAttempts} tentativa`;
    }
    input.value = "";
    xAttempts++;
  }
  
  function handleReset(e) {
    e.preventDefault();
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
    toggleScreen();
  }
  
  function toggleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
  }