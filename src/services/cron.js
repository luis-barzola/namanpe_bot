const CronJob = require('cron').CronJob
const buscarFiguritas = require('./buscar_figuritas')

const init = () => {
  console.log('Before job instantiation')
  const job = new CronJob('0 */1 * * * *', () => {
    console.log(new Date())
    buscarFiguritas.init()
  })
  console.log('After job instantiation')
  job.start()
}

module.exports = { init }
