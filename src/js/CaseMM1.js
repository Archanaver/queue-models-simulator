class CaseMM1 extends QueueModel {

    constructor(m, l) {
        super(1, m, l);
    }

    getL() {
        return this.lambda * this.getW();
    }

    getLq() {
        return this.getL() * this.lambda / this.mu;
    }

    getW() {
        return 1 / (this.mu - this.lambda);
    }

    getWq() {
        return this.getL() / this.mu;
    }

    getPn(n) {
        return this.getRho();
    }

    getP0() {
        return 1 - this.getRho();
    }

}
