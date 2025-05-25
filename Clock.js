export default class Clock {
    constructor(duration) {
        this.observer = [];
        this.isRunning = false;
        this.timerInterval = null;
        this.currentLevel = 0;
        this.duration = duration
        this.remainingTime = this.duration
    }

    observedBy(listener) {
        this.observer.push(listener);
        listener.notifyChange(this.remainingTime, this.currentLevel)
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.timerInterval = setInterval(() => {
                if (this.remainingTime > 0) {
                    this.remainingTime--;
                    this.notifyChange();
                } else {
                    this.next();
                }
            }, 1000);
            this.notifyChange();
        }
    }

    pause() {
        this.isRunning = false;
        clearInterval(this.timerInterval);
    }

    reset() {
        this.pause();
        this.currentLevel = 0;
        this.remainingTime = this.duration;
        this.notifyChange();
    }

    next() {
        this.pause();
        this.currentLevel++;
        this.remainingTime = this.duration;
        this.notifyChange();
        this.start();
    }

    notifyChange() {
        this.observer.forEach(o => o.notifyChange(this.remainingTime, this.currentLevel));
    }

    updateClock(remainingTime, currentLevel) {
        this.remainingTime = remainingTime;
        this.currentLevel = currentLevel;
    }
}
