class CaseMD1 extends CaseMM1 {
    constructor(mu, lambda) {
        super(mu, lambda);
    }

    getL() {
        return this.getLq() + this.getRho();
    }

    getLq() {
        return this.getRho() * this.getRho() / 2 / this.getP0();
    }

    getW() {
        return this.getWq() + 1 / this.mu;
    }

    getWq() {
        return this.getLq() / this.lambda;
    }

}
