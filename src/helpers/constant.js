const { convertToHours } = require('./utils')

const DAYS = {
  MO: 0,
  TU: 0,
  WE: 0,
  TH: 0,
  FR: 0,
  SA: 5,
  SU: 5
}

const SCHEDULES = ['00:00-09:00', '09:01-18:00', '18:01-24:00']

const PRICES = [25, 15, 20]

const NEW_SCHEDULES = SCHEDULES.map((value) =>
  convertToHours(value.split('-'))
)

module.exports = { DAYS, NEW_SCHEDULES, PRICES }
