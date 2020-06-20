/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let personOL = {name: "Taylor", Age:23};
console.log(personOL);

//constructor
let personConstructor = new Object();
personConstructor.name = "Taylor";
personConstructor.age = 23;
console.log(personConstructor);


//es6
class es6Person{
 constructor(name, age){
 this.name=name;
 this.age=age;
}

 }
let person = new es6Person('Taylor', 23)
console.log(person);






