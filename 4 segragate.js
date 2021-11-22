/*Segregate positive and negative integers using merge sort
Given an array of positive and negative integers, segregate them without changing the relative order of elements.
The output should contain all positive numbers follow negative numbers while maintaining the same relative ordering.*/

function merge(left, right){
  let sortedArray = [];
  while(left.length && right.length){
    if(left[0] < 0){
      sortedArray.push(left.shift());
    }
    else if(right[0] < 0){
      sortedArray.push(right.shift());
    }
    else {
      return [...sortedArray, ...left, ...right];
    }  
  }
  return [...sortedArray, ...left, ...right];  
}

function mergeSort(arr) {
  debugger
  const half = arr.length / 2;
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.splice(0, half);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([9, -3, 5, -2, -8, -6, 1, 3]))