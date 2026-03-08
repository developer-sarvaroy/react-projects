let randomNumber = Math.floor(Math.random() * 100) + 1

function checkGuess(){

let guess =
document.getElementById("guessInput").value

let result =
document.getElementById("result")

if(guess == randomNumber){

result.innerText = "🎉 To'g'ri topding!"

}

else if(guess < randomNumber){

result.innerText = "📉 Juda kichik"

}

else{

result.innerText = "📈 Juda katta"

}

}