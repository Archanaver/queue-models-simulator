class CaseMG1 extends QueueModel {
    sigma;

    constructor(mu, lambda, sigma) {
        super(1, mu, lambda);
        this.sigma = sigma;    
    }

    getL() {
        return this.getRho() + this.getLq();
    }

    getLq() {
        return (this.lambda * this.lambda * this.sigma * this.sigma + this.getRho() * this.getRho()) / 2 / (1 - this.getRho());
    }

    getW() {
        return this.getWq() + 1 / this.mu;
    }

    getWq() {
        return this.getLq() / this.lambda;
    }

    getP0() {
        return 1 - this.getRho();
    }

    getCost(){
        return this.getLq() * this.cw + this.s * this.cs;
    }

}
