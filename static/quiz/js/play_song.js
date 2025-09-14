// play_song.js

const audio = document.getElementById('song');
const timerEl = document.getElementById('timer');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const timeInput = document.getElementById('timeInput');
const progressBar = document.getElementById('progress');
const beep = document.getElementById('beep');
const form = document.getElementById('answerForm');

const maxTime = 20; // 20 seconds
let timer = 0;
let countdownInterval = null;
let timeoutId = null;

// Function to start the 20-second answer timer
function startAnswerTimer() {
    answerInput.disabled = false;
    submitBtn.disabled = false;
    audio.controls = false; // prevent replay

    // Update progress bar and timer every second
    countdownInterval = setInterval(() => {
        timer++;
        const remaining = maxTime - timer;
        timerEl.innerText = `Time: ${timer}s`;
        timeInput.value = timer;

        // Update progress bar
        const percentage = (remaining / maxTime) * 100;
        progressBar.style.width = `${percentage}%`;

        // Change color
        if (remaining > 10) {
            progressBar.style.background = "#4caf50";
            progressBar.classList.remove('blink');
        } else if (remaining > 5) {
            progressBar.style.background = "#ff9800";
            progressBar.classList.remove('blink');
        } else {
            progressBar.classList.add('blink');
            beep.play();
        }
    }, 1000);

    // Auto-submit after maxTime seconds
    timeoutId = setTimeout(() => {
        clearInterval(countdownInterval);
        answerInput.disabled = true;
        submitBtn.disabled = true;
        timerEl.innerText = "⏳ Time's up!";
        form.submit(); // Auto-submit as wrong answer
    }, maxTime * 1000);
}

// Start the timer only when user pauses the audio
audio.onpause = function() {
    if (!countdownInterval) {
        startAnswerTimer();
    }
};

// Stop timers if user submits manually
form.addEventListener('submit', () => {
    if (countdownInterval) clearInterval(countdownInterval);
    if (timeoutId) clearTimeout(timeoutId);
});
