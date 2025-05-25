export default class BlindSystem {
    constructor(blinds) {
        this.blinds = blinds;
    }

    get(level) {
        if(level < this.blinds.length) {
            return this.blinds[level];
        }
        level -= this.blinds.length - 1;
        let current = this.blinds[this.blinds.length - 1];
        let delta = this.blinds[this.blinds.length - 1] - this.blinds[this.blinds.length - 2];
        while(level > 0) {
            current += delta;
            level--;
        }
        return current;
    }
}