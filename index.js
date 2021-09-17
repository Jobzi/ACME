const { readFileText } = require('./src/service/readfile')

// eslint-disable-next-line no-unused-vars
const DAYS = {
  MO: 0,
  TU: 0,
  WE: 0,
  TH: 0,
  FR: 0,
  SA: 5,
  SU: 5
}

// eslint-disable-next-line no-unused-vars
const SCHEDULES = ['00:01 - 09:00', '09:01 - 18:00', '09:01 - 18:00']

/**
Lunes - Viernes
    00:01 - 09:00           25 USD
    09:01 - 18:00           15 USD
    18:01 - 00:00           20 USD

Sábado y Domingo
    00:01 - 09:00           30 USD
    09:01 - 18:00           20 USD
    18:01 - 00:00           25 USD
*/
const Main = async () => {
  const workers = await readFileText('file.txt')
  console.log(workers)
  // const ASTRID = 'ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00'
  const RENE = 'RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00'
  const stringValue = RENE
  const [name, days] = stringValue.split('=')
  console.log('HOLA SOY:', name)
  console.log(splitSchedule(days))
}

const splitSchedule = (args) => {
  const works = args.split(',')
  const scheduleMap = works.map((day) => {
    const object = {}
    const prefix = day.substring(0, 2)
    const schude = day.slice(2)
    const hours = schude.split('-')
    object[prefix] = convertToHours(hours)
    return object
  })
  return scheduleMap
}

const convertToHours = (hours) => {
  const [start, end] = hours
  const hstart = new Date(`1/1/1990  ${start}`)
  const hend = new Date(`1/1/1990  ${end}`)
  const minutes = (hend - hstart) / 1000 / 60
  return [hstart, hend, minutes]
}

Main()
