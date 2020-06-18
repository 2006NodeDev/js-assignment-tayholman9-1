/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */

let numArray = [12, 6, 22, 17, 1, 21, 8, 13]

function bubbleSort(arr) {
 for(let i =0; i< arr.length; i++){
  for(let j = 0; j < arr.length; j++){
   if(arr[j]>arr[j+1]){
    let temp = numArray[j];
    arr[j] = arr[j+1];
    arr[j+1] = temp;
   }
  }
 }
 return arr;
}
console.log(bubbleSort(numArray));

