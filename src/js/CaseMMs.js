class CaseMMs extends QueueModel {
    lOverM;

    constructor(s, m, l) {
        super(s, m, l);
        this.lOverM = this.lambda / this.mu;
    }

    getL() {
        throw Error('Not implemented');
    }

    getLq() {
        throw Error('Not implemented');
    }

    getW() {
        throw Error('Not implemented');
    }

    getWq() {
        throw Error('Not implemented');
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

    calculatePowerFactorialDivision(base, n) {
        if(n == 0)
            return 1;
        let result = base;
        for (let i = 2; i <= n; i++)
            result *= base / i;
        return result;
    }

}
