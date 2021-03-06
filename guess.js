var num = Math.floor(Math.random()*1000 +1);
var guess = document.querySelector("#guessField");
var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector("#lastResultDisp");
var lowOrHi = document.querySelector(".lowOrHi");
var submit = document.querySelector(".guessSubmit");
var allGuess = document.querySelector("#allGuess");
var aal = [];
var reset = document.querySelector(".reset");
var count = 0;

submit.addEventListener("click", function () {
    count++;
    aal.push(Number(guess.value));
    guesses.classList.remove("hide");
    if(count<=15){
        allGuess.textContent = aal;
        checkGuess();
    }
    else {
        lastResult.textContent = "You ran out of turns!";
        lowOrHi.classList.add("hide");
    }
    guess.value = '';
});

function checkGuess () 
{
    
    latest = aal.length - 1;
    if(aal[latest] === num) 
    {
        lastResult.textContent = "Congratulations! You got it right!";
        guess.disabled = true;
        lowOrHi.classList.add("hide");
        reset.classList.remove("hide");
        submit.classList.add("hide");
    }
    else if(aal[latest] < num)
        {
            lowOrHi.textContent = "Too low!"
            lastResult.textContent = "Wrong!";
        }
    else if(aal[latest] > num)
        {
            lowOrHi.textContent = "Too High";
            lastResult.textContent = "Wrong!";
        }
}

//linked Enter key to submit button
guess.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        submit.click();
    }
});


