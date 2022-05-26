class QueueModel {
    cs;
    cw;
    _lambda;
    _mu;
    s;
    n;
    
    constructor(s, mu, lambda) {
        this.s = s;
        this.mu = mu;
        this.lambda = lambda;
    }

    get lambda() {
        return this._lambda;
    }

    set lambda(newLambda) {
        this._lambda = newLambda;
        if(newLambda >= this.mu)
            throw new Error('El valor de lambda debe ser menor que mu');
        if(newLambda < 1)
            throw new Error('Lambda debe ser mayor que 0');
    }

    get mu() {
        return this._mu;
    }

    set mu(newMu) {
        this._mu = newMu;
        if(this.lambda >= newMu)
            throw new Error('El valor de lambda debe ser menor que mu');
        if(newMu < 1)
            throw new Error('Mu debe ser mayor que 0');
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

    getP0() {
        throw Error('Not implemented');
    }

    getRho() {
        return this.lambda / this.mu / this.s;
    }

    getPn(n) {
        throw Error('Not implemented');
    }

    getCost(){
        return this.getLq() * this.cw + this.s * this.cs;
    }

}
