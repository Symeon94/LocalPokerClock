const currentDisplay = document.getElementById('blind-current');
const nextDisplay = document.getElementById('blind-next');
const timerDisplay = document.getElementById('timer');

export default class ClockDisplay {
    constructor(blinds) {
        this.blinds = blinds;
    }

    notifyChange(remainingTime, currentLevel) {
        this.displayBlind(currentDisplay, currentLevel);
        this.displayBlind(nextDisplay, currentLevel + 1);
        const minutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
        const seconds = (remainingTime % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${minutes}:${seconds}`;
    }

    displayBlind(display, level) {
        const current = this.blinds.get(level);
        display.textContent = `${current} / ${current * 2}`;
    }
}