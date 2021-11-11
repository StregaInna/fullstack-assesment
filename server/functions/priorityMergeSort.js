// For the sake of trying to always write modular, reusable code, I have written this as a general "prioritized" merge sort.
//  The function at the bottom takes an array of objects to be sorted and another array of objects that lists properties to be sorted by in order of priority and which diection we wont to sort by for those properties.
// I wrote this by taking a mergesort that I previously for a school project and added a for loop into the comparison stage of algorithm.
//  This for loop iterates through the priorities list until it finds a property where one side is greater or less than the other.
//  It then checks whether we want a greater or lesser value for this property and pushes the item accordingly

function split (array) {
    const center = Math.floor(array.length / 2)
    const left = array.slice(0, center)
    const right = array.slice(center)
    return [left, right]
  }
  
  function merge (left, right, priorities) {
    const merged = []
    let leftIdx = 0
    let rightIdx = 0
    while (leftIdx < left.length || rightIdx < right.length){
        console.log(leftIdx)
        if (leftIdx === left.length) {
            merged.push(right[rightIdx])
            rightIdx++;
        } else if (rightIdx === right.length) {
            merged.push(left[leftIdx])
            leftIdx++;
        }else {
            for (let i =0; i < priorities.length; i++){
                if (parseInt(left[leftIdx][priorities[i].value]) < parseInt(right[rightIdx][priorities[i].value])){
                    if (priorities[i].direction === "<"){
                        merged.push(left[leftIdx])
                        leftIdx++
                    }else {
                        merged.push(right[rightIdx])
                        rightIdx++;
                    }
                    i = priorities.length
                } else if (parseInt(left[leftIdx][priorities[i].value]) > parseInt(right[rightIdx][priorities[i].value])){
                    if (priorities[i].direction === "<"){
                        merged.push(right[rightIdx])
                        rightIdx++;
                    }else {
                        merged.push(left[leftIdx])
                        leftIdx++
                    }
                    i = priorities.length
                } else if (i===priorities.length){ //if we arrive at the end of our priorities list and all values have been equal, we will arbitrarily select the left value to push into the next position of the merged array
                    merged.push(left[leftIdx])
                    leftIdx++
                }
            }
        }
    }
    return merged
}
  
  function mergeSort (array, priorities) {
    if (array.length < 2) return array // base case
    const [left, right] = split(array)
    const mergedLeft = mergeSort(left, priorities)
    const mergedRight = mergeSort(right, priorities)
    return merge(mergedLeft, mergedRight, priorities) // merge sorted!
  }
  
  module.exports = mergeSort
