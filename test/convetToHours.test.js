const { convertToHours } = require('../src/helpers/utils')

describe('CONVERT TO HOUR', () => {
  test('Hour Invalid', () => {
    expect(convertToHours(['10:00', '26:00'])).toBe(false)
  })

  test('Hour Invalid', () => {
    expect(convertToHours(['560:00', '26:00'])).toBe(false)
  })

  test('Hour Invalid', () => {
    expect(convertToHours(['560:00', '10:00'])).toBe(false)
  })

  test('Hour Valid', () => {
    expect(convertToHours(['10:00', '05:00']).length).toBe(3)
  })
})
