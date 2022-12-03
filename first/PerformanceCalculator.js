const TragedyCalculator = require('./TragedyCalculator');
const ComedyCalculator = require('./ComedyCalculator');

class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    #errors = {
        USE_SUB_CLASS: 'YOU SHOULD USE SUBCLASS',
    };

    get volumeCredits() {
        let result = 0;
        result += Math.max(this.performance.audience - 30, 0);

        return result;
    }

    get amount() {
        throw new Error(this.#errors.USE_SUB_CLASS);
    }

    static createPerformanceCalculator(aPerformance, aPlay) {
        switch (aPlay.type) {
            case 'tragedy':
                return new TragedyCalculator(aPerformance, aPlay);
            case 'comedy':
                return new ComedyCalculator(aPerformance, aPlay);
            default:
                throw new Error(`알 수 없는 장르: ${aPlay.type}`);
        }
    }
}

module.exports = { PerformanceCalculator };
