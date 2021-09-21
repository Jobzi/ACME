const { convertToHours } = require('../helpers/utils')
const { DAYS, NEW_SCHEDULES, PRICES } = require('../helpers/constant')
/*
Lunes - Viernes             PAID
    00:01 - 09:00           25 USD
    09:01 - 18:00           15 USD
    18:01 - 00:00           20 USD

Sábado y Domingo
    00:01 - 09:00           30 USD
    09:01 - 18:00           20 USD
    18:01 - 00:00           25 USD
*/

// return [...,["MO",["HH:MM-HH:MM"]]]
function splitSchedule (args) {
  const works = args.split(',')
  const scheduleArray = works.map((day) => {
    const prefix = day.substring(0, 2)
    const schude = day.slice(2)
    const hours = schude.split('-')
    return [prefix, convertToHours(hours)]
  })
  return scheduleArray
}

function calculatePayment (days) {
  const schudeleOfWorker = splitSchedule(days)
  let total = 0
  schudeleOfWorker.forEach((day) => {
    const [whoDay, shechude] = day
    if (shechude !== false) {
      total += calculatePaymentForHour(shechude, whoDay)
    }
  })
  return total
}

function calculatePaymentForHour (shechude, day) {
  let paid = 0
  const init = inRange(shechude[0])
  const finish = inRange(shechude[1])
  if (init === finish) {
    const result = (shechude[1] - shechude[0]) / 1000 / 60 / 60
    paid = result * (PRICES[init] + DAYS[day])
  } else if (finish - init === 1) {
    const hourOne = (NEW_SCHEDULES[init][1] - shechude[0]) / 1000 / 60 / 60
    const one = Math.round(hourOne) * (PRICES[init] + DAYS[day])
    const hourTwo = (shechude[1] - NEW_SCHEDULES[finish][0]) / 1000 / 60 / 60
    const two = Math.round(hourTwo) * (PRICES[finish] + DAYS[day])
    paid = one + two
  } else if (finish - init === 2) {
    const hourOne = (NEW_SCHEDULES[init][1] - shechude[0]) / 1000 / 60 / 60
    const one = Math.round(hourOne) * (PRICES[init] + DAYS[day])
    const hourTwo = (shechude[1] - NEW_SCHEDULES[finish][0]) / 1000 / 60 / 60
    const two = Math.round(hourTwo) * (PRICES[finish] + DAYS[day])
    const hourThree = 9 * (PRICES[init + 1] + DAYS[day])
    paid = one + two + hourThree
  } else {
    console.error('NO  EXISTE NINGUN HORARIO')
    paid = 0
  }
  return paid
}

function inRange (hour) {
  const [firt, second, third] = NEW_SCHEDULES
  if (hour >= firt[0] && hour <= firt[1]) {
    return 0
  }
  if (hour >= second[0] && hour <= second[1]) {
    return 1
  }
  if (hour >= third[0] && hour <= third[1]) {
    return 2
  }
}

module.exports = { splitSchedule, calculatePayment }
