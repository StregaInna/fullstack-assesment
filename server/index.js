const express = require('express')
const morgan = require('morgan')
const { restaurants, cuisines } = require('./db')

// const records = parse(restCSV, {
//     columns: true,
//     skip_empty_lines: true
//   })

function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/api/restaurant', (req, res) => res.send(restaurants))
  app.get('/api/cuisines', (req, res) => res.send(cuisines))
  

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server
