// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. 
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. 
// Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
    let max = arr[0]
    let min = arr[0]
    
    let count = 0
    
    do{
     if(arr[count]>max) max = arr[count]
     if(arr[count]<min) min = arr[count]
     count++
    }while(count < arr.length)
    
    return [min,max]
  }