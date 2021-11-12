const { restaurants, cuisines } = require('./db')

const mergeSort = require('./functions/priorityMergeSort')
const priorities = require('./functions/priotities')

const {fiveStar, restaurantFilter } = require('./functions/filter')

function listGenerator(specs, length){
    const unsorted = restaurantFilter(restaurants[0], specs, cuisines[0])
    const unabridged = mergeSort(unsorted, priorities)
    return unabridged.slice(0,length)
}


module.exports = { listGenerator }