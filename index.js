/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
};

Person.prototype.eat = function(food){
  if(this.stomach.length < 10){
    this.stomach.push(food);
  }
};

Person.prototype.poop = function(){
  this.stomach = [];
};

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const dee = new Person('dee', 26);

console.log(dee.toString());
dee.eat('bagel with lox');
dee.eat('boiled egg');
dee.eat('apple with sunflower seed butter');
console.log(dee.stomach);
dee.poop();
console.log(dee.stomach);


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  return this.tank +=gallons;
}


Car.prototype.drive = function(distance){
  this.odometer += distance;
  this.tank -= distance / this.milesPerGallon;
  // const fuel = this.milesPerGallon * this.tank;
  // if(fuel === 0){
  //   this.odometer += distance;
  // }
  //  if(this.tank === 0){
  //    return `I ran out of fuel at ${this.odometer} miles!`
  //  }
  
}

const myCar = new Car('fusion', 31)
console.log(myCar)
myCar.fill(10);
console.log(myCar.tank)


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age)
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`
}

const daBaby = new Baby('Jonathan', '29 months', 'money')
console.log(Baby)
console.log(daBaby.stomach);
daBaby.eat('ice cream');
console.log(daBaby.stomach);
daBaby.poop();
console.log(daBaby.stomach);
console.log(daBaby.play())



/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window/Global Object Binding:
    'this' by default refers to the window if it has no context
  2. Implicit Binding: 
    'this' refers to what is left of the dot, when the function is invoked/called, but it only applies to objects with methods
  3. Explicit Binding:
      You directtly tell JavaScript what 'this' refers to by using .call, .apply. and .bind
  4. New Binding:
      When a constructor function is invoked using the new keyword, 'this' refers to the new object that is created by the constructor function
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
