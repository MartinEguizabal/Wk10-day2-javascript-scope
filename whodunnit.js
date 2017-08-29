var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Output will be 'My name is Keith'. Function has access to global variable 'name'.

 score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// Output will be 3. The global variable is changed by the local variable.

var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// Output: '0: Ducks 1: Dogs 2: Lions'. Local variable myAnimals overides globabl variable.

var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// Output: 'Suspects include: Jay, Val, Harvey, Rick' 'Suspect three is: Keith'. Local variable suspectThree changes variable for the method but not outside the method so console.log on line 46 prints 'Keith'.


var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// Output: 'Ace Ventura'. Method detectiveInfo changes name to Poirot and calls printname which returns name which prints the changed name Poirot.


var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// Output: 'the murderer is rick'. This is because innerFunction only reassigns the outerFunction variable not the global variable. And outerFunction asserts a new variable and does not change the globabl variable.

// Note that a variable within a method will look for the closest declared variable and change it. So in above it will change outerFunction variable. If outerFunction did not delcare a variable it would change the global variable. If there were no other variable it would simply declare a globabl variable.


var animal1 = "butterfly, ";
var animal2 = "lemon, ";
var animal3 = "rubber ducky, ";
var animal4 = "frakenstein, ";
var animal5 = "ant face";

var strangeAnimals = function(){
  animal2 = "orange, "

  var makeFruitsalad = function(){
    animal3 = "ducky, ";
    var animal2 = "grapfruit, ";
  }

  makeFruitsalad();
}

strangeAnimals();
console.log("your salad: " + animal1 + animal2 + animal3 + animal4 + animal5)