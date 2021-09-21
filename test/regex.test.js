const { validateString } = require('../src/helpers/utils')
const { REGEX } = require('./helpers')

describe('Regex Validation Of', () => {
  test('1', () => {
    expect(validateString(REGEX[1])).toBe(true)
  })

  test('2', () => {
    expect(validateString(REGEX[2])).toBe(true)
  })

  test('3', () => {
    expect(validateString(REGEX[3])).toBe(true)
  })

  test('4', () => {
    expect(validateString(REGEX[4])).toBe(false)
  })

  test('5', () => {
    expect(validateString(REGEX[5])).toBe(false)
  })

  test('6', () => {
    expect(validateString(REGEX[6])).toBe(true)
  })

  test('7', () => {
    expect(validateString(REGEX[7])).toBe(false)
  })

  test('8', () => {
    expect(validateString(REGEX[8])).toBe(false)
  })

  test('9', () => {
    expect(validateString(REGEX[9])).toBe(false)
  })

  test('10', () => {
    expect(validateString(REGEX[10])).toBe(false)
  })
})
