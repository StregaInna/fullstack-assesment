//I set this up as an object to be passed into the sorting function instead of hard coding it there 
// so that in theory the project could be expanded to let the user select the priorities on the front-end 
// without having to refactor that function. 

module.exports = priorities = [
    {value: "distance", direction: "<"},
    {value: "customer_rating", direction:">"},
    {value: "price", direction:"<"}
]

 
