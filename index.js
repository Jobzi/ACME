const { convertToHours } = require('./src/helpers/covertHours')
const { DAYS, NEW_SCHEDULES, PRICES } = require('./src/helpers/constant')
// const { readFileText } = require('./src/service/readfile')

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

// const TRABAJADOR = 'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
const TRABAJADOR = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
// const TRABAJADOR = 'JANINA=MO1:00-3:00,TH14:00-20:00,SA10:00-22:00'

const Main = async () => {
  // const workers = await readFileText('file.txt')
  const stringValue = TRABAJADOR
  const [name, days] = stringValue.split('=')
  calculatePayment(splitSchedule(days))
  console.log(`The amount to pay ${name} is: 85 USD`)
}

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

function calculatePayment (schudeleOfWorker) {
  let total = 0
  schudeleOfWorker.forEach((day) => {
    const [whoDay, shechude] = day
    console.log(whoDay, shechude)
    total += calculatePaymentForHour(shechude, whoDay)
  })
  console.log(total)
  return total
}

function calculatePaymentForHour (shechude, day) {
  let paid = 0
  const init = inRange(shechude[0])
  const finish = inRange(shechude[1])
  if (init === finish) {
    console.log('mismos horarios', PRICES[init], DAYS[day])
    const result = (shechude[1] - shechude[0]) / 1000 / 60
    paid = (result / 60) * (PRICES[init] + DAYS[day])
    console.log(paid)
  }
  /*
    TODO: importart!!!!!
    FALTA EL METHODO PARA LOS DIRENTES HORARIOS
  */
  return paid
}

function inRange (hour) {
  const [firt, second, third] = NEW_SCHEDULES
  if (hour >= firt[0] && hour <= firt[1]) {
    console.log('primer rango')
    return 0
  }
  if (hour >= second[0] && hour <= second[1]) {
    console.log('segundo rango')
    return 1
  }
  if (hour >= third[0] && hour <= third[1]) {
    console.log('tercero rango')
    return 2
  }
}

Main()
