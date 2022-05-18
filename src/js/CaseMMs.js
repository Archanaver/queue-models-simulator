class CaseMMs extends QueueModel {
    lOverM;

    constructor(s, m, l) {
        super(s, m, l);
        this.lOverM = this.lambda / this.mu;
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

    getRho() {
        return this.lOverM / this.s;
    }

    getP0() {
        const sPart = this.calculatePowerFactorialDivision(this.lOverM, this.s, this.s) * 1 / (1 - this.lOverM / this.s);
        let sum = 0;
        for (let n = 0; n <= this.s - 1; n++)
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
