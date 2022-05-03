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
        const lOverMToSOverFact = this.calculatePowerFactorialDivision(this.lOverM, this.s);
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
        const sPart = this.calculatePowerFactorialDivision(this.lOverM, this.s) * 1 / (1 - this.lOverM / this.s);
        let sum = 0;
        for (let n = 0; n <= this.s - 1; n++)
            sum += this.calculatePowerFactorialDivision(this.lOverM, n);
        sum += sPart;
        return 1 / sum;
    }

    getPn(n) {
        if(n <= this.s)
            return this.calculatePowerFactorialDivision(this.lOverM, n) * this.getP0()
        else
            return 
    }

    calculatePowerFactorialDivision(base, n) {
        if(n == 0)
            return 1;
        let result = base;
        for (let i = 2; i <= n; i++)
            result *= base / i;
        return result;
    }

}
