const generateNumbersButton = document.getElementById("generate-numbers-button");
const numbersContainer = document.getElementById("numbers");

generateNumbersButton.addEventListener("click", function() {
  numbersContainer.innerHTML = "";
  
  let numbers = [];
  while (numbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  
  numbers.sort(function(a, b) { return a - b });
  
  for (let i = 0; i < 6; i++) {
    let numberElement = document.createElement("div");
    numberElement.classList.add("number");
    numberElement.innerHTML = numbers[i];
    numbersContainer.appendChild(numberElement);
  }
});
