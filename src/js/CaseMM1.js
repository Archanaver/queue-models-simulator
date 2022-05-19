class CaseMM1 extends QueueModel {
    n;

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

    getP0() {
        return 1 - this.getRho();
    }

}
