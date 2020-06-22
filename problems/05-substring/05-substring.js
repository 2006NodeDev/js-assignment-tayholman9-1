/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    //get data type and return string
  if(typeof(someStr) === 'string' && typeof(startIndex) === 'number' && Number.isInteger(endIndex))

    //makes sure input falls within the index of the string
      if (startIndex <= someStr.length && endIndex <= someStr.length && startIndex >= 0 && startIndex <= endIndex)
          return someStr.substring(startIndex, endIndex)
      throw new Error("Input Out Of Bounds Error")
}


console.log(substring('watermelon',3, 8));

console.log(substring('watermelon', 0, 4));

//output error out of bounds
/*console.log(substring('watermelon',0,11));*/

