const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let intervalId;

function updateDisplay() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 10);

  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
  startTime = new Date().getTime() - (startTime ? startTime : 0);
  intervalId = setInterval(updateDisplay, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  display.textContent = '00:00:00';
  startButton.disabled = false;
  stopButton.disabled = true;
});

// Initial setup
resetButton.click();
