const COOKIE_NAME = "pokerClockState";

// TODO Save information
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
        //localStorage.setItem(COOKIE_NAME, JSON.stringify(state));
        //document.cookie = JSON.stringify(state);
    }

    load() {
        //const saved = localStorage.getItem(COOKIE_NAME);
        /*const saved = document.cookie;
        if (saved) {
            const state = JSON.parse(saved);
            console.log("Load: " + JSON.stringify(state));
            this.clockSetter.updateClock(state.remainingTime, state.currentLevel, state.runState);
        }*/
    }
}