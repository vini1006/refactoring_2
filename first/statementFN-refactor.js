const { createStatementData } = require('./createStatementData');

const usd = (aNumber) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd',
        minimumFractionDigits: 2,
    }).format(aNumber / 100);

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;
    for (const perf of data.performances) {
        const { play, audience, amount } = perf;
        //청구 내역 출력
        result += `  ${play.name}: ${usd(amount)} (${audience})석\n`;
    }

    result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
    result += `총액: ${usd(data.totalAmount)}\n`;
    return result;
}

function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
    result += '<table>\n';
    result += '<tr><th>연극</th><th>좌석수</th><th>금액</th></tr>\n';
    for (const perf of data.performances) {
        const { play, audience, amount } = perf;
        //청구 내역 출력
        result += `
            <tr>
                <td>${play.name}</td><td>${audience}</td><td>(${audience})석</td>
            </tr>\n
        `;
    }
    result += '</table>\n';

    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}점</em></p>\n`;
    result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
    return result;
}

module.exports = { statement, htmlStatement };
