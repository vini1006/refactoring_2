const { PerformanceCalculator } = require('./PerformanceCalculator');

module.exports = class TragedyCalculator extends PerformanceCalculator {
    constructor(...args) {
        super(...args);
    }

    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }

        return result;
    }
};
