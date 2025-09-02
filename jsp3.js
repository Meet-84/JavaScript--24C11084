const input = document.getElementById("ip");
const turn = document.getElementById("tu");
const score = document.getElementById("sc");
const hint = document.getElementById("hi");
let rnumber;
let count;
let points;

function startgame() {
    rnumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    points = 100;
    turn.innerText = count;
    score.innerText = points.toFixed(2);
    hint.innerText = "";
    input.value = "";
    input.disabled = false;
    document.getElementById("submit").disabled = false;
    console.log("Random number (for testing):", rnumber);
    alert("Game start");
}

function deinput() {
    const val = input.value.trim();
    const iv = parseInt(val, 10);

    if (isNaN(iv) || iv < 1 || iv > 100) {
        hint.innerText = "Enter a valid number (1-100).";
        return;
    }

    count++;
    turn.innerText = count;

    if (iv > rnumber) {
        hint.innerText = "Hint: Number is too big.";
    } else if (iv < rnumber) {
        hint.innerText = "Hint: Number is too small.";
    } else {
        hint.innerText = `Hint: Correct!! It's ${rnumber}`;
        alert("Congratulations! You guessed the number.");
        input.disabled = true;
        document.getElementById("submit").disabled = true;
    }

    points = 100 / count;
    score.innerText = points.toFixed(2);
    input.value = "";
}
