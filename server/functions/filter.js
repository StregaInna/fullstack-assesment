function fiveStar(array){
    let fiveStarArray = array.filter(object => object.customer_rating === "5")
    return fiveStarArray
}

function getCuisineId (cuisine, cuisines){
    for (let i = 0; i < cuisines; i++){
        if (cuisines[i].name.toLowerCase().indexOf(cuisine.toLowerCase())>=0){
            return cuisines[i].id
        }
    }
    return "0"
}

function restaurantFilter(restaurants, specs, cuisines){

    let filteredByName
    if(specs.name.length>0){
        filteredByName = restaurants.filter(restaurant => restaurant.name.toLowerCase().indexOf(specs.name.toLowerCase())>=0)
    } else {filteredByName = restaurants}

    let filteredByRating
    if(specs.customer_rating.length>0){
        filteredByRating = filteredByName.filter(restaurant => parseInt(restaurant.customer_rating) >= parseInt(specs.customer_rating))
    } else {filteredByRating = filteredByName}

    let filteredByDistance
    if(specs.distance.length>0){
        filteredByDistance = filteredByRating.filter(restaurant => parseInt(restaurant.distance) <= parseInt(specs.distance))
    } else {filteredByDistance = filteredByRating}

    let filteredByPrice
    if(specs.price.length>0){
        filteredByPrice = filteredByDistance.filter(restaurant => parseInt(restaurant.distance) <= parseInt(specs.distance))
    } else {filteredByPrice = filteredByDistance}

    if (specs.cuisine.length>0){
        let cuisine_id = getCuisineId(specs.cuisine, cuisines)
        return filteredByPrice.filter(restaurant => restaurant.cuisine_id === cuisine_id)
    } else {return filteredByPrice}
}

module.exports = fiveStar
