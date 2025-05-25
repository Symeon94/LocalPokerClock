export default class BlindSystem {
    constructor(blinds) {
        this.blinds = blinds;
    }

    get(level) {
        if(level < this.blinds.length) {
            return this.blinds[level];
        }
        level -= this.blinds.length - 1;
        let delta = this.blinds[this.blinds.length - 1] - this.blinds[this.blinds.length - 2];
        return this.blinds[this.blinds.length - 1] + level * delta;
    }
}