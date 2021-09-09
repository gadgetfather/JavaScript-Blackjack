
// let player = {
//     name : "Akshay",
//     chips : 150
// }

let cards = []
var sum= 0;
let hasBlackJack = false;
var isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumIs = document.getElementById("sum-is")
let cardEl = document.getElementById("cards-el")
let test = document.querySelector("#test")




// let playerEl = document.getElementById("player-el")
// playerEl.textContent= player.name + ": $"+ player.chips


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber===1){
        return 11
    }
    else if (randomNumber ===11 || randomNumber ===12 || randomNumber ===13 ){
        return 10
    }
    else{
        return randomNumber

    }
    
    
}



function startGame(){
let firstCard = getRandomCard()
let secondCard = getRandomCard()
 cards = [firstCard,secondCard]
sum= firstCard + secondCard
 isAlive = true;
renderGame()
}


function renderGame(){
    sumIs.textContent= "Sum:"+ sum
    cardEl.textContent= "Cards:" 
    for(let i= 0 ; i< cards.length;i++){
        cardEl.textContent += cards[i] + " "
    }
    if (sum<=20){
        message="Do you want to draw a card?"
        
    
    }
    else if(sum===21){
        message=" BLACKJACK"
        hasBlackJack= true
    }
    else{
        message="You're out of the game"
        isAlive = false
    }
    messageEl.textContent= message
    
    
}
function newCard(){
    if (isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    

}

