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
    document.getElementById("count-el").innerText = count
}
function save() {
    console.log(count)
}

let Name = "Anan"
let greeting = "Hi, my name is"
let myGreeting = greeting + " " + Name
console.log(myGreeting)

let welcomeEl = document.getElementById("welcome-el")
let name2 = "Anan Nasreen"
let greeting2 = "Welcome back "
welcomeEl.innerText = greeting2 + name2

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Something went wrong, please try again later"
}

let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum == 21) {
    console.log("Woohoo! You've got Blackjack!")
} else if (sum > 21) {
    console.log("You're out of the game!")
}
let thirdCard = 10
let fourthCard = 2
let cards = [thirdCard, fourthCard]
let result = thirdCard + fourthCard
let hasBlackJack = false
let isAlive = true

let message = ""
let messageEl = document.getElementById("message-el")
console.log(message)

let resultEl = document.querySelector("#result-el")

let cardEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    resultEl.textContent = "Sum: " + result
    if (result <= 20) {
        message = "Do you want to draw a new card?"
    } else if (result === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}
function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 6
    result += card
    renderGame()
}

for ( let count = 1; count < 11; count += 1 ) {
    console.log(count)
}
