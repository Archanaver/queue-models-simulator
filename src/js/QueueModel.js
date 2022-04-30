class QueueModel {
    lambda;
    mu;
    s;

    constructor(s, mu, lambda) {
        this.s = s;
        this.mu = mu;
        this.lambda = lambda;
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

}
