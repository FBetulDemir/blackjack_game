let firstCard = 10;
let secondCard = 7;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

function getRandomCard(){
    return
}

//fuction starts the game
function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " - ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    //cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1];
}

function newCard(){
    let thirdCard = 5;
    cards.push(thirdCard);
    sum = firstCard + secondCard + thirdCard;
    renderGame()
}
