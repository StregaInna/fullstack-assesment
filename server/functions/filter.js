function fiveStar(array){
    let fiveStarArray = array.filter(object => object.customer_rating === "5")
    return fiveStarArray
}

module.exports = fiveStar
