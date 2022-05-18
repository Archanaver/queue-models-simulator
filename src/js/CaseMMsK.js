class CaseMMsK extends CaseMMs {
    k;

    constructor(s, m, l, k) {
        super(s, m, l);
        this.k = k;
    }

    getL() {
        return this.getLambdaE() * this.getW();
    }

    getLq() {
        return super.getLq() * (1 - this.rhoToKSDiff() - (this.k-this.s) * this.rhoToKSDiff() * (1 - this.getRho()));
    }

    getW() {
        return this.getWq() + 1 / this.mu;
    }

    getWq() {
        return this.getLq() / this.getLambdaE();
    }

    rhoToKSDiff() {
        return Math.pow(this.getRho(), this.k - this.s)
    }

    getP0() {
        let sPart = 0;
        for(let n = this.s + 1; n <= this.k; n++)
            sPart += Math.pow(this.getRho(), n - this.s);
        sPart *= this.calculatePowerFactorialDivision(this.lOverM, this.s, this.s);
        let sum = 0;
        for (let n = 0; n <= this.s; n++)
            sum += this.calculatePowerFactorialDivision(this.lOverM, n, n);
        sum += sPart;
        return 1 / sum;
    }

    getPn(n) {
        if(n > this.k)
            return 0;
        return super.getPn(n);
    }

    getLambdaE() {
        return this.lambda * (1 - this.getPn(this.k));
    }

}
