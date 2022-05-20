class CaseMMs extends QueueModel {
    lOverM;

    constructor(s, m, l) {
        super(s, m, l);
        this.setLOverM();
    }

    setLambda(lambda) {
        this.lambda = lambda;
        this.setLOverM();
    }

    setMu(mu) {
        this.mu = mu;
        this.setLOverM();
    }

    getL() {
        return this.getLq() + this.lOverM;
    }

    getLq() {
        const lOverMToSOverFact = this.calculatePowerFactorialDivision(this.lOverM, this.s, this.s);
        const rhoComplement = 1 - this.getRho();
        return this.getP0() * lOverMToSOverFact * this.getRho() / rhoComplement / rhoComplement;
    }

    getW() {
        return this.getWq() + (1/this.mu);
    }

    getWq() {
        return this.getLq() / this.lambda;
    }

    getP0() {
        const sPart = this.calculatePowerFactorialDivision(this.lOverM, this.s, this.s) * 1 / (1 - this.getRho());
        let sum = 0;
        for (let n = 0; n < this.s; n++)
            sum += this.calculatePowerFactorialDivision(this.lOverM, n, n);
        sum += sPart;
        return 1 / sum;
    }

    getPn(n) {
        if(n <= this.s)
            return this.calculatePowerFactorialDivision(this.lOverM, n, n) * this.getP0();
        else
            return this.calculatePowerFactorialDivision(this.lOverM, n, this.s) / Math.pow(this.s, n - this.s) * this.getP0();
    }

    setLOverM() {
        this.lOverM = this.lambda / this.mu;
    }

    calculatePowerFactorialDivision(base, exponent, factorialDivisor) {
        if(exponent > 0 && factorialDivisor > 0)
            return base / factorialDivisor * this.calculatePowerFactorialDivision(base, exponent-1, factorialDivisor-1);
        else if(exponent > 0)
            return base * this.calculatePowerFactorialDivision(base, exponent-1, 0);
        else if(factorialDivisor > 0)
            return this.calculatePowerFactorialDivision(base, 0, factorialDivisor-1) / factorialDivisor;
        else
            return 1;
    }

}
