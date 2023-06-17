// getting the html elements

let decrement = document.getElementById("decreBtn");
let increment = document.getElementById("increBtn");
let reset = document.getElementById("resetBtn");
let displayResult = document.getElementById("displayResult");

// for decrement button click

decrement.addEventListener("click", () => {

    // Changing string into number.
  const value = Number(displayResult.innerText);
  if (value > 0) {
    displayResult.innerText = value - 1;
  } 
  else {
    alert("Negative value not allowed");
  }
});

// // for increment button click

increment.addEventListener("click", () => {
  const value = Number(displayResult.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayResult.innerText = value + 1;
  }
});

// for reset button click

reset.addEventListener("click", () => {
  displayResult.innerText = 0;
});

