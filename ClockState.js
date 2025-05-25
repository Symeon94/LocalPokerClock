export default class ClockState {
    constructor(clockSetter) {
        this.clockSetter = clockSetter;
    }

    notifyChange(remainingTime, currentLevel, runState) {
        const state = {
            currentLevel,
            remainingTime,
            runState,
            lastUpdate: Date.now()
        };
        localStorage.setItem('pokerClockState', JSON.stringify(state));
    }

    load() {
        const saved = localStorage.getItem('pokerClockState');
        if (saved) {
            const state = JSON.parse(saved);
            this.clockSetter.updateClock(state.remainingTime, state.currentLevel, state.runState);
        }
    }
}