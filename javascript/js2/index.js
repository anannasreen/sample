let selectedColors = ['red' , 'blue']
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[1])

function greet(name , lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}
greet('John','Smith' );
greet('Mary','Angela'); 

function square(number) {
    return number * number;
}

console.log(square(2))

// var myStr = "<a href=\"hhtp://www.example.com\" target=\"_blank\">Link</a>";
// var ourStr = "I come first. ";
// ourStr += "I come second.";
// console.log(ourStr)

var ourName = "freeCodeCamp"
var ourStr = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr)
var myName = "Anan";
var myStr = "My name is " + myName + " and I am well!"
console.log(myStr)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + myAdverb
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly")); 