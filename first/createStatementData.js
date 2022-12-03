const { PerformanceCalculator } = require('./PerformanceCalculator');

function createStatementData(invoice, plays) {
    const statementData = {
        customer: invoice.customer,
        performances: invoice.performances.map(enrichPerformance),
    };

    statementData.totalAmount = getTotalAmount(statementData);
    statementData.totalVolumeCredits = getTotalVolumeCredits(statementData);

    return statementData;

    function enrichPerformance(aPerformance) {
        const calculator = PerformanceCalculator.createPerformanceCalculator(aPerformance, playFor(aPerformance));
        const result = {
            ...aPerformance,
            play: calculator.play,
            volumeCredits: calculator.volumeCredits,
            amount: amountFor(aPerformance),
        };

        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function amountFor(aPerformance) {
        return PerformanceCalculator.createPerformanceCalculator(aPerformance, playFor(aPerformance)).amount;
    }

    function getTotalVolumeCredits(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0);
    }

    function getTotalAmount(data) {
        return data.performances.reduce((total, p) => total + p.volumeCredits, 0);
    }
}

module.exports = { createStatementData };
