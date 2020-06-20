/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/

let fruits = ['mango', 'grape', 'lemon', 'cherry', 'pineapple', 'kiwi', 'banana'];
  
function spliceElement(someArr, index) {
 return someArr.splice(0,index)
}

console.log(spliceElement(fruits, 3));


