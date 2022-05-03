class CaseMMsK extends CaseMMs {
    k;

    constructor(s, m, l, k) {
        super(s, m, l);
        this.k = k;
    }

    getL() {
        throw Error('Not implemented');
    }

    getLq() {
        return super.getLq() * (1 - this.rhoToKSDiff() - (this.k-this.s) * this.rhoToKSDiff() * (1 - this.getRho()));
    }

    getW() {
        return this.getLq / getLambdaE();
    }

    getWq() {
        throw Error('Not implemented');
    }

    rhoToKSDiff() {
        return Math.pow(this.getRho(), this.k - this.s)
    }

    getP0() {
        let sPart = 0;
        for(let n = this.s + 1; n <= this.k; n++)
            sPart += Math.pow(this.getRho(), n - this.s);
        sPart *= this.calculatePowerFactorialDivision(this.lOverM, this.s);
        let sum = 0;
        for (let n = 0; n <= this.s; n++)
            sum += this.calculatePowerFactorialDivision(this.lOverM, n);
        sum += sPart;
        return 1 / sum;
    }

    getPn(n) {
        if(n > k)
            return 0;
        if(n <= this.s)
            return 
    }

    getLambdaE() {

    }

}
