"use strict";

// Selecting elements
const toDisplay = document.getElementById("complete");
const generate = document.querySelector(".generate");
const passLengthInput = document.getElementById("length");
const lowers = document.getElementById("lowers");
const uppers = document.getElementById("uppers");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

// Data to include in the password
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numberChars = "0123456789".split("");
const symbolChars = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?".split("");

// Function to generate password
function generator() {
  // Combine arrays into a single string
  let complete_pass = "";

  if (lowers.checked) {
    complete_pass += lowercaseChars.join("");
  }
  if (uppers.checked) {
    complete_pass += uppercaseChars.join("");
  }
  if (numbers.checked) {
    complete_pass += numberChars.join("");
  }
  if (symbols.checked) {
    complete_pass += symbolChars.join("");
  }

  let generatedPassword = "";

  // Logic for generation
  const passLength = parseInt(passLengthInput.value);

  if (passLength < 0) {
    // Convert negative length to positive
    const positiveLength = passLength * -1;

    // Generate password for positive length
    for (let i = 0; i < positiveLength; i++) {
      generatedPassword += complete_pass.charAt(
        Math.floor(Math.random() * complete_pass.length)
      );
    }
  } else {
    // Generate password for non-negative length
    for (let i = 0; i < passLength; i++) {
      generatedPassword += complete_pass.charAt(
        Math.floor(Math.random() * complete_pass.length)
      );
    }
  }

  // Display the generated password
  toDisplay.value = generatedPassword;
}

// Add event listener to the generate button
generate.addEventListener("click", generator);
