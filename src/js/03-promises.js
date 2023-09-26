import { Report } from 'notiflix/build/notiflix-report-aio';

const form = document.querySelector(".form");
form.addEventListener("submit", function (sub) {
  sub.preventDefault();

  const delay = parseInt(document.querySelector("input[name='delay']").value);
  const step = parseInt(document.querySelector("input[name='step']").value);
  const amount = parseInt(document.querySelector("input[name='amount']").value);

  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        Report.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Report.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}