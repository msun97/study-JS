const toggleButton = document.getElementById('toggleButton');
toggleButton.textContent = 'Toggle';

function toggleToggleButton() {
  toggleButton.textContent = toggleButton.textContent === 'Toggle'? 'Untoggle' : 'Toggle';
}

// Timer variables
let timerId = null;
let timerInterval = 1000; // 1 second

function startTimer() {
  timerId = setInterval(() => {
    document.getElementById('timer').textContent = new Date().toLocaleTimeString();
  }, timerInterval);
}

function stopTimer() {
  clearInterval(timerId);
}

function clearTimer() {
  stopTimer();
  document.getElementById('timer').textContent = '';
}

let counter = 0;
    
function incrementCounter() {
  counter++;
  document.getElementById('counter').textContent = counter;
}

function decrementCounter() {
  counter--;
  document.getElementById('counter').textContent = counter;
}

// Change background color
function changeBackground() {
  const colorInput = document.getElementById('colorInput');
  document.body.style.backgroundColor = colorInput.value;
}

// Greeting message
function sayHello() {
  const greeting = document.getElementById('greeting');
  greeting.textContent = 'Hello, World!';
}
