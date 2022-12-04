// let count = 5*7
// console.log(count) 

let myAge = 21
let humanDogRatio = 7
let myDogAge = myAge * humanDogRatio
console.log(myDogAge)

let num = 2
num = num + 1
console.log(num)

let bonusPoint = 50
console.log(bonusPoint) 

bonusPoint = bonusPoint + 50
console.log(bonusPoint)

bonusPoint = bonusPoint - 25
console.log(bonusPoint)

bonusPoint = bonusPoint + 70
console.log(bonusPoint)
 
let count = 0
function increment() {
    count = count + 1
    console.log(count)
    document.getElementById("count-el").innerText=count 
}