// Logic for Password Generator -----------

// global variables
var buttonEl = document.getElementById("generateBtn")

// functional definitons
function pGenerate() {
    var choiceLength = prompt(`Please enter a desired length from 10 to 100`)
    var choiceMiniscule = prompt(`Would you like your password to include lowercase letters?`)
    var choiceMajuscule = prompt(`Would you like your password to include uppercase letters?`)
    var choiceNumber = prompt(`Would you like your password to include numbers?`)
    var choiceSpecial = prompt(`Would you like your password to contain special characters?`)
    console.log(`Length`,choiceLength, `Lower`,choiceMiniscule,`Upper`,choiceMajuscule,`Numbers`,choiceNumber,`Special`,choiceSpecial)
    // console.log(`Length`,choiceLength)
    // console.log(`Lower`,choiceMiniscule)
    // console.log(`Upper`,choiceMajuscule)
    // console.log(`Numbers`,choiceNumber)
    // console.log(`Special`,choiceSpecial)
}

// event listeners and invocations
buttonEl.addEventListener("click",pGenerate)

//  var generatePassword