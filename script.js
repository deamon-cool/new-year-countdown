const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountDown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    console.log(currentTime);
    console.log(newYearTime);
    console.log(diff);
}

updateCountDown();