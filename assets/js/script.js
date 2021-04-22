// Logic for Password Generator -----------

// global variables
var buttonEl = document.getElementById("generateBtn")

var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
var lowerCaseArr = lowerCase.split("")
var upperCaseArr = lowerCase.toUpperCase().split("")
var number = "1234567890"
var numberArr = number.split("")
var special = "!()-.?[]_`~;:@#$%^&*+="
var specialArr = special.split("")
    // This list is defined by https://www.ibm.com/docs/en/baw/19.x?topic=security-characters-that-are-valid-user-ids-passwords, retrieved 20/04/2021

// functional definitons
function pSelection() {
    var choiceLength = prompt(`Please enter a desired length from 10 to 100`)
    while ((choiceLength < 10 || choiceLength > 100 || isNaN(choiceLength) === true)) {
        var choiceLength = prompt(`Please enter a desired length from 10 to 100`)
    }
    while (!choiceMajuscule && !choiceMiniscule && !choiceNumber && !choiceSpecial) {
        alert(`Please select at least one set of characters to generate your password from`)
        var choiceMiniscule = confirm(`Would you like your password to include lowercase letters?`)
        var choiceMajuscule = confirm(`Would you like your password to include uppercase letters?`)
        var choiceNumber = confirm(`Would you like your password to include numbers?`)
        var choiceSpecial = confirm(`Would you like your password to contain special characters?`)
    }

    var choiceComposition = [];
    if (choiceMiniscule == true) {
        choiceComposition = choiceComposition.concat(lowerCaseArr)
    }
    if (choiceMajuscule == true) {
        choiceComposition = choiceComposition.concat(upperCaseArr)
    }
    if (choiceNumber == true) {
        choiceComposition = choiceComposition.concat(numberArr)
    }
    if (choiceSpecial == true) {
        choiceComposition = choiceComposition.concat(specialArr)
    }

    var generatedPassword = ""
    for (i = 0; i < choiceLength; i++) {
        var generatedCharIndex = Math.floor(Math.random() * choiceComposition.length)
        var generatedChar = choiceComposition[generatedCharIndex]
        generatedPassword += generatedChar
    }

    var passEl = document.getElementById("generatedPassword")
    passEl.textContent = generatedPassword
}

// event listeners and invocations
buttonEl.addEventListener("click", pSelection)