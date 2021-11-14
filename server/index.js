const express = require('express')
const morgan = require('morgan')

const { listGenerator } = require('./listGenerator')

//for tests
const { specsOne, specsTwo} = require('./functions/filterTestSpecs')
const { fiveStar } =  require('./functions/filter')

function server() {
  const app = express()
  const port = process.env.PORT || 5000

  app.use(morgan('dev'))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.put('/api/restaurants', async (req, res, next) => {
    try{
      console.dir(req.body)
      let data = await listGenerator(req.body.specs, req.body.numberOfResults)
      res.send(data)
    }catch (error){
      next(error)
    }
  })

//these are some routes I built for testing the backend
  // app.get('/api/restaurants/five_star', async (req, res, next) => {
  //   try{
  //     let list = await fiveStar(restaurants[0])
  //     res.send(await mergeSort(list, priorities) )
  //   }  catch (error){
  //     next(error)
  //   }
  // })
  // app.get('/api/restaurants/specsOne', async (req, res) => {
  //   res.send(await restaurantFilter(restaurants[0], specsOne, cuisines[0]))
  // })

  // app.get('/api/restaurants/specsTwo', async (req, res) => {
  //   res.send(await restaurantFilter(restaurants[0], specsTwo, cuisines[0]))
  // })
  // app.get('/api/cuisines', async (req, res) => {
  //   res.send(cuisines)
  // })
  

  app.start = app.listen.bind(app, port, () => console.log(`Listening on port ${port}`))

  return app
}

if (require.main === module) server().start()

module.exports = server
