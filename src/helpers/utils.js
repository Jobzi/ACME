function convertToHours (hours) {
  let isValid = true
  const [start, end] = hours
  const hstart = new Date(`1/1/1990  ${start}`)
  const hend = new Date(`1/1/1990  ${end}`)
  if (isNaN(hstart) || isNaN(hend)) {
    isValid = false
    // console.warn('Error with Date')
  }
  const minutes = (hend - hstart) / 1000 / 60
  return isValid ? [hstart, hend, minutes] : isValid
}

function validateString (worker) {
  const REGEX = /[\w]+[=]([A-Z]{2}\d{2}[:]\d{2}[-]\d{2}[:]\d{2}[,]?)+/gi
  return REGEX.test(worker)
}

module.exports = { convertToHours, validateString }
