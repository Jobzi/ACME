const { readFileText } = require('./src/service/readfile')
const { validateString } = require('./src/helpers/utils')
const { calculatePayment } = require('./src/controller/calculatePayment')

const Main = async () => {
  const workers = await readFileText('file.txt')
  workers.forEach(worker => {
    console.log('====================================================')
    const stringValue = worker
    const [name, days] = stringValue.split('=')
    if (validateString(worker)) {
      const paid = calculatePayment(days)
      console.log(`The amount to pay ${name} is: ${paid} USD`)
    } else {
      console.log(
        `The data entry of ${name} is incorrect. Check the format.\nFormat: NAME=DDHH:MM-HH:MM,DDHH:MM-HH:MM`
      )
    }
  })
}

// Run function @Main
Main()
