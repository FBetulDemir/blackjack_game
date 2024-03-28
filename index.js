let player = {
    name: "Betul",
    chips: 145
}

let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = ""



let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $"+ player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()* 13) +1;
    return randomNumber;
    // defining the values for the cards 1, 11, 12, 13
    if (randomNumber > 10){
        return 10;
    }else if (randomNumber === 1){
        return 11;
    }else{
        return randomNumber
    }
}

//fuction starts the game
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    //cards.push(firstCard)
    //cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " - ";
    }

    sumEl.textContent = "Sum: " + sum;
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
    
    //cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1];
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let thirdCard = getRandomCard();
        
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame()
    }

}
