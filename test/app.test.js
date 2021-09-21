const { calculatePayment } = require('../src/controller/calculatePayment')
const { SALARY } = require('./helpers')

describe('Salary Of', () => {
  test('RENE', () => {
    expect(calculatePayment(SALARY.rene)).toBe(215)
  })

  test('ASTRID', () => {
    expect(calculatePayment(SALARY.astrid)).toBe(85)
  })

  test('Jipson', () => {
    expect(calculatePayment(SALARY.jipson)).toBe(170)
  })

  test('Yair', () => {
    expect(calculatePayment(SALARY.yair)).toBe(80)
  })
})
