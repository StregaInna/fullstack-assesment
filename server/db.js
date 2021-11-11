//this file serves as our mock database, extracting the raw data from the csv files and converting them into javaScript objects
const fs = require('fs')
const parse = require('csv-parse')
const parser = (arrayName) => parse({columns: true}, function (err, records) {
	arrayName.push(records)
})
const restaurants = []
fs.createReadStream(__dirname+'/csv/restaurants.csv').pipe(parser(restaurants))


const cuisines = []
fs.createReadStream(__dirname+'/csv/cuisines.csv').pipe(parser(cuisines))


module.exports = {restaurants, cuisines}
