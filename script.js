let answers = ["Answer1", "Answer2", "Answer3"];
let digits = ["Digit1", "Digit2", "Digit3"];

function handleSubmit() {
    const input = document.getElementById("userInput")
    const text = input.value;
    if (text.trim() === "") return;
    input.value = "";
    input.focus();

    const ind = answers.indexOf(text);
    document.getElementById("output").textContent = ind >= 0 ? digits[ind] : "Try Again.";
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleSubmit();
  }
});