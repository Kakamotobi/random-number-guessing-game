const minInput = document.querySelector("#min-input");
const maxInput = document.querySelector("#max-input");
const randNumGenBtn = document.querySelector("#random-number-gen-button");
const randNumDisplay = document.querySelector("#random-number-display");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-button");
const guessHelper = document.querySelector("#guess-helper");
const resultsTable = document.querySelector(".results-table");
let randNum;
let attempts = 0;
let round = 0;

// ----------Generate Random Number---------- //
randNumGenBtn.addEventListener("click", () => {
    randNumGenerator(minInput, maxInput);
    randNumDisplay.innerHTML = "?";
    guessHelper.classList.remove("correct");
    guessHelper.classList.remove("incorrect");
    guessHelper.innerText = "Good Luck!";
});

// ----------Guess---------- //
guessBtn.addEventListener("click", () => {
    attempts++;
    if (parseInt(guessInput.value) === randNum) {
        randNumDisplay.innerText = randNum;
        round++;
        recordResult();
        guessInput.value = "";
        guessHelper.innerText = `Congrats! It took you ${attempts} ${guessPlurality(
            attempts
        )}!`;
        guessHelper.classList.remove("incorrect");
        guessHelper.classList.add("correct");
        attempts = 0;
    } else if (parseInt(guessInput.value) < parseInt(minInput.value)) {
        incorrect(`Your minimum is set to ${minInput.value}!`);
    } else if (parseInt(guessInput.value) > parseInt(maxInput.value)) {
        incorrect(`Your maximum is set to ${maxInput.value}!`);
    } else if (parseInt(guessInput.value) > randNum) {
        incorrect("Too High! Enter a new guess!");
    } else if (parseInt(guessInput.value) < randNum) {
        incorrect("Too Low! Enter a new guess!");
    }
});

// ----------Functions---------- //
// -----Random Number Generator----- //
function randNumGenerator(minInput, maxInput) {
    randNum = Math.floor(
        parseInt(minInput.value) +
            parseInt(Math.random() * (maxInput.value - minInput.value + 1))
    );
    return randNum;
}
// -----Incorrect----- //
function incorrect(helperMsg) {
    guessHelper.classList.add("incorrect");
    guessHelper.innerText = `${helperMsg}`;
}
// -----Guess Plurality----- //
function guessPlurality(attempts) {
    if (attempts > 1) {
        return "guesses";
    } else {
        return "guess";
    }
}
// -----Results Table----- //
function recordResult() {
    const tableRow = document.createElement("tr");
    const tableRoundNum = document.createElement("td");
    const tableAnswer = document.createElement("td");
    const tableGuesses = document.createElement("td");
    resultsTable.append(tableRow);
    tableRow.append(tableRoundNum, tableAnswer, tableGuesses);
    tableRoundNum.append(round);
    tableAnswer.append(
        `${randNumDisplay.innerText} (${minInput.value} - ${maxInput.value})`
    );
    tableGuesses.append(`${attempts} ${guessPlurality(attempts)}`);
}
