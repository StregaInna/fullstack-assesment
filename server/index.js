const express = require('express')
const morgan = require('morgan')
const { restaurants, cuisines } = require('./db')
const fiveStar = require('./functions/filter')

function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/api/restaurant', async (req, res) => {
    res.send(await fiveStar(restaurants[0]))
  })
  app.get('/api/cuisines', async (req, res) => {
    res.send(cuisines)
  })
  

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server
