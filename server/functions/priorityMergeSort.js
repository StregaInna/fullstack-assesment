// For the sake of trying to always write modular, reusable code, I have written this as a general "prioritized" merge sort.
//  The function at the bottom takes an array of objects to be sorted and another array of objects that lists properties to be sorted by.
//  The prioity list is in order of priority and the objects include not only "value" (what we are sorting by) but also
//    a "diection" we want to sort in for those properties.
// I wrote this by taking a mergesort that I previously built for a school project and adding a for-loop into the comparison stage of algorithm.
//  This for-loop iterates through the priorities list until it finds a property where one side is greater or less than the other.
//  It then checks whether we want a greater or lesser value for this property and pushes the item accordingly.
// The original merge sort was broken into 3 funtions. If I have time at some point I would like to look into breaking the "merge" function up further to aid readability of the code.

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

        // console.log(leftIdx, rightIdx) //this is still here incase I need it for further debugging

        //step one is to check if we have already gotten through one of the arrays to be merged
        if (leftIdx === left.length) {
            merged.push(right[rightIdx])
            rightIdx++;
        } else if (rightIdx === right.length) {
            merged.push(left[leftIdx])
            leftIdx++;
        }else {

            //when both arrays still have items, we itterate through the priorities to find the first one for which they differ
            for (let i =0; i < priorities.length; i++){
                if (parseInt(left[leftIdx][priorities[i].value]) < parseInt(right[rightIdx][priorities[i].value])){
                    if (priorities[i].direction === "<"){
                        merged.push(left[leftIdx])
                        leftIdx++
                    }else {
                        merged.push(right[rightIdx])
                        rightIdx++;
                    }
                    i = priorities.length //this was originaly a "break" command, but I was worried that might look confusingly like it was breaking the outer while loop
                } else if (parseInt(left[leftIdx][priorities[i].value]) > parseInt(right[rightIdx][priorities[i].value])){
                    if (priorities[i].direction === "<"){
                        merged.push(right[rightIdx])
                        rightIdx++;
                    }else {
                        merged.push(left[leftIdx])
                        leftIdx++
                    }
                    i = priorities.length //this was  also originally a "break command"
                } else if (i===priorities.length-1){ 
                    //if we arrive at the end of our priorities list and all values have been equal, we will arbitrarily select the left value to push into the next position of the merged array
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
