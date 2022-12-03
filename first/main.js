const { statement, htmlStatement } = require('./statementFN-refactor');

const invoice = require('./invoices.json');
const plays = require('./plays.json');

console.log(htmlStatement(invoice[0], plays));
