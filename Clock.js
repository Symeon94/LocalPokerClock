import {RUN_STATE_STOP, RUN_STATE_RUNNING, RUN_STATE_PAUSE} from "./RunState.js";

export default class Clock {
    constructor(duration) {
        this.observer = [];
        this.runState = RUN_STATE_STOP;
        this.timerInterval = null;
        this.currentLevel = 0;
        this.duration = duration
        this.remainingTime = this.duration
    }

    observedBy(listener) {
        this.observer.push(listener);
        listener.notifyChange(this.remainingTime, this.currentLevel, this.runState)
    }

    start() {
        if (this.runState !== RUN_STATE_RUNNING) {
            this.runState = RUN_STATE_RUNNING;
            this.timerInterval = setInterval(() => {
                if (this.remainingTime > 0) {
                    this.remainingTime--;
                    this.notifyObserver();
                } else {
                    this.next();
                }
            }, 1000);
            this.notifyObserver();
        }
    }

    pause() {
        if(this.runState === RUN_STATE_RUNNING) {
            this.runState = RUN_STATE_PAUSE;
            clearInterval(this.timerInterval);
            this.notifyObserver();
        }
    }

    reset() {
        this.runState = RUN_STATE_STOP;
        clearInterval(this.timerInterval);
        this.currentLevel = 0;
        this.remainingTime = this.duration;
        this.notifyObserver();
    }

    next() {
        this.pause();
        this.currentLevel++;
        this.remainingTime = this.duration;
        this.notifyObserver();
        this.start();
    }

    notifyObserver() {
        this.observer.forEach(o => o.notifyChange(this.remainingTime, this.currentLevel, this.runState));
    }

    updateClock(remainingTime, currentLevel, runState) {
        this.remainingTime = remainingTime;
        this.currentLevel = currentLevel;
        this.runState = RUN_STATE_STOP;
        if(runState !== RUN_STATE_STOP) {
            this.start();
        }
        if(runState === RUN_STATE_PAUSE) {
            this.pause();
        }
    }
}
