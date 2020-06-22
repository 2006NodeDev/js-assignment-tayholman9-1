/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
 //for..in executes once for each property
 for(variable in someObj){
  console.log(`${variable}: ${someObj[variable]}`)
}
}

function wine(nameOfWine, Varietal,color, countryOfOrigin,alcoholPercentage){
  this.nameOfWine = nameOfWine
  this.Varietal= Varietal
  this.color = color
  this.countryOfOrigin = countryOfOrigin
  this.alcoholPercentage = alcoholPercentage

}

let Sterling = new wine("Sterling", "Meritage", "red", "United States", 13)

objectProperties(Sterling)