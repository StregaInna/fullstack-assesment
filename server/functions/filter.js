

function fiveStar(array){
    let fiveStarArray = array.filter(object => object.customer_rating === "5")
    return fiveStarArray
}

function cuisineFilter(cuisines, cuisine){
    console.log(cuisine)
    let filteredCuisines = []
    for(let i = 0; i < cuisines.length; i++){
        console.log(cuisines[i])
        if (cuisines[i].name.toLowerCase().indexOf(cuisine.toLowerCase())){
            filteredCuisines.push(cuisines[1].id)
        }
    }
    return filteredCuisines
}


function restaurantFilter(restaurants, specs, cuisines){
    console.dir(specs)
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
        let cuisineMatchs = cuisineFilter(cuisines, specs.cuisine)
        return filteredByPrice.filter(restaurant => cuisineMatchs.includes(restaurant.cuisine_id))
    } else {return filteredByPrice}
}

module.exports = {fiveStar, restaurantFilter}
