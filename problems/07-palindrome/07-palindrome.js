/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
 let reverseStr = someStr.split("").reverse().join("")
 if(someStr==reverseStr){
  return true;
 }else{
  return false;
 }
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('palindrome'));
console.log(isPalindrome('anna'));


