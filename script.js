let answers = ["PUZZLE", "712731214", "OPEN SESAME"];
let digits = ["5", "7", "4"];

function handleSubmit() {
    const input = document.getElementById("userInput");
    const text = input.value.toUpperCase();
    if (text.trim() === "") return;
    input.value = "";
    input.focus();

    const ind = answers.indexOf(text);
    if (ind >= 0){
        const pos = indToPos(ind);
        document.getElementById("output").textContent = "Correct!\nThe " + pos + " digit is: " + digits[ind];
    }
    else {
        document.getElementById("output").textContent = "Try Again.";
    }
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleSubmit();
  }
});

function indToPos(ind){
    switch (ind){
        case 0: 
            return "first";
        case 1:
            return "second";
        case 2:
            return "third";
    }
    return "";
}