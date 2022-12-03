const { PerformanceCalculator } = require('./PerformanceCalculator');

module.exports = class ComedyCalculator extends PerformanceCalculator {
    constructor(...args) {
        super(...args);
    }

    get amount() {
        let result = 30000;
        if (this.performance.audience > 30) {
            result += 1000 + 500 * (this.performance.audience - 20);
        }

        return result;
    }

    get volumeCredits() {
        return super.volumeCredits + Math.floor(this.performance.audience / 5);
    }
};
