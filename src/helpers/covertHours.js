function convertToHours (hours) {
  const [start, end] = hours
  const hstart = new Date(`1/1/1990  ${start}`)
  const hend = new Date(`1/1/1990  ${end}`)
  const minutes = (hend - hstart) / 1000 / 60
  return [hstart, hend, minutes]
}

module.exports = { convertToHours }
