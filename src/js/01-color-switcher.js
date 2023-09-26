function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
let series = null;

buttonStart.addEventListener("click", () => {
  if (!series) {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    series = setInterval(() => {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
    }, 1000);
  }
});

buttonStop.addEventListener("click", () => {
  if (series) {
    clearInterval(series);
    series = null;
    buttonStart.disabled = false;
    buttonStop.disabled = true;
  }
});
