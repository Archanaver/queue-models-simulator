class CaseME1 extends CaseMM1 {
    k;
    
    constructor(mu, lambda, k) {
        super(mu, lambda);
        this.k = k;
    }

    getL() {
        return this.lambda * this.getW();
    }

    getLq() {
        return this.getWq() * this.lambda;
    }

    getW() {
        return this.getWq() + 1 / this.mu;
    }

    getWq() {
        return (1 + this.k) * this.lambda / 2 / this.k / this.mu / (this.mu - this.lambda);
    }

}
