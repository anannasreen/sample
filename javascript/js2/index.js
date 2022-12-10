// let selectedColors = ['red' , 'blue']
// selectedColors[2] = 'green';
// console.log(selectedColors);
// console.log(selectedColors[1])

// function greet(name , lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }
// greet('John','Smith' );
// greet('Mary','Angela'); 

// function square(number) {
//     return number * number;
// }

// console.log(square(2))

// var myStr = "<a href=\"hhtp://www.example.com\" target=\"_blank\">Link</a>";
// var ourStr = "I come first. ";
// ourStr += "I come second.";
// console.log(ourStr)

// var ourName = "freeCodeCamp"
// var ourStr = "Hello, our name is " + ourName + ", how are you?";
// console.log(ourStr)
// var myName = "Anan";
// var myStr = "My name is " + myName + " and I am well!"
// console.log(myStr)

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + myAdverb
//     return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// function minusSeven(num){
//     return num - 7;
// }
// console.log(minusSeven(10));

// function nextInline(arr, item) {
//     arr.push(item);
//     return item;
// }
// var testArr = [1,2,3,4,5];
// console.log("Before: " + JSON.stringify(tastArr));
// console.log(nextInline(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// var changed = 0;
// function change(num) {
//     return (num + 5) / 3;
// }
// changed = change(10);
// var processed = 0;
// function processArg(num) {
//     return (num + 3) / 5;
// }
// processed = processArg(7);
// console.log(processed)

function nextInline(arr, item) {
    arr.push(item);
    return item;
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInline(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
