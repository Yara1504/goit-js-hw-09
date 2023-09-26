import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker = document.getElementById("datetime-picker");
const startButton = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');

let saveDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: (selectedDates) => {
    saveDate = flatpickr.parseDate(selectedDates[0], "Y-m-d H:i");
    if (saveDate <= new Date()) {
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      resetTimer();
    }
  },
};

flatpickr(dateTimePicker, options);

function addZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

function resetTimer() {
  clearInterval(intervalId);
  updateTimer();
  intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const currentDate = new Date();
  const timeDifference = saveDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(intervalId);
    day.textContent = "00";
    hour.textContent = "00";
    minute.textContent = "00";
    second.textContent = "00";
    startButton.disabled = true;
  } else {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    day.textContent = addZero(days);
    hour.textContent = addZero(hours);
    minute.textContent = addZero(minutes);
    second.textContent = addZero(seconds);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.addEventListener("click", () => {
  resetTimer();
});