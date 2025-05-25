export default class ClockState {
    constructor(clockSetter) {
        this.clockSetter = clockSetter;
    }

    notifyChange(remainingTime, currentLevel) {
        const state = {
            currentLevel,
            remainingTime,
            lastUpdate: Date.now()
        };
        console.log(state);
        localStorage.setItem('pokerClockState', JSON.stringify(state));
    }

    load() {
        const saved = localStorage.getItem('pokerClockState');
        if (saved) {
            const state = JSON.parse(saved);
            this.clockSetter.updateClock(state.remainingTime, state.currentLevel);
        }
    }
}