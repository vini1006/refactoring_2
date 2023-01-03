//Testing 할떄 용의하게 하기 위해 래퍼로 감쌈.
const Clock = require('../../common/Clock');

/**
 * 예시: 유효범위를 벗어나는 변수가 없을 때
 */

function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  //미해결 채무(outstanding)를 계산한다.
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  //마감일(dueDate)을 기록한다.
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  console.log(` 고객명: ${invoice.customer}`);
  console.log(` 채무액: ${outstanding}`);
  console.log(` 마감일: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
  console.log('***** 고객 채무 ******');
}
