const minInput = document.querySelector("#min-input");
const maxInput = document.querySelector("#max-input");
const randNumGenBtn = document.querySelector("#random-number-gen-button");
const randNumDisplay = document.querySelector("#random-number-display");
const guessInput = document.querySelector("#guess-input");
const guessBtn = document.querySelector("#guess-button");
const guessHelper = document.querySelector("#guess-helper");
const resultsTable = document.querySelector(".results-table");

// ----------Generate Random Number---------- //
randNumGenBtn.addEventListener("click", () => {
    randNumGenerator(minInput, maxInput);
    randNumDisplay.innerHTML = "?";
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
