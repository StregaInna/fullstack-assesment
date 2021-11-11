const express = require('express')
const morgan = require('morgan')
const { restaurants, cuisines } = require('./db')

//for tests
const {fiveStar, restaurantFilter } = require('./functions/filter')
const { specsOne, specsTwo} = require("./functions/filterTestSpecs")



function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.get('/api/restaurants/five_star', async (req, res) => {
    res.send(await fiveStar(restaurants[0]))
  })

  app.get('/api/restaurants/specsOne', async (req, res) => {
    res.send(await restaurantFilter(restaurants[0], specsOne, cuisines[0]))
  })

  app.get('/api/restaurants/specsTwo', async (req, res) => {
    res.send(await restaurantFilter(restaurants[0], specsTwo, cuisines[0]))
  })
  app.get('/api/cuisines', async (req, res) => {
    res.send(cuisines)
  })
  

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server
