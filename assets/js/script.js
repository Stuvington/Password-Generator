// Logic for Password Generator -----------

// global variables

var buttonEl = document.getElementById("generateBtn")
// var miniscule = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
// var majuscule = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
// var numbers = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
// var specials = [`~`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `_`, `+`, `=`, `<`, `,`, `>`, `.`, `?`, `/`, `:`, `;`, `"`, `'`, `{`, `[`, `}`, `]`, `|`, `=`, "`"]
//compare specials to special2Arr for handling specials.
// const countMiniscule = 26
// const countMajuscule = 26
// const countNumbers = 10
// const countSpecials = 32
var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
var lowerCaseArr = lowerCase.split("")
var upperCaseArr = lowerCase.toUpperCase().split("")
var number = "1234567890"
var numberArr = number.split("")
var special = "!()-.?[]_`~;:@#$%^&*+="
var specialArr = special.split("")
// This list is defined by https://www.ibm.com/docs/en/baw/19.x?topic=security-characters-that-are-valid-user-ids-passwords, retrieved 20/04/2021
// var specialArr = special.split("").concat('"').concat('\'')
var bool = true;
// var pChoice = {
//     miniscule: choiceMiniscule,
//     majuscule: choiceMajuscule,
//     numbers: choiceNumbers,
//     special: choiceSpecial
// }


// functional definitons
function pSelection() {
    var choiceLength = prompt(`Please enter a desired length from 10 to 100`)
    // if ((choiceLength<10 || choiceLength>100)) {
    //     var choiceLength = prompt(`Please enter a desired length from 10 to 100`)
    // }
    // can't figure out how to do this yet.
    var choiceMiniscule = confirm(`Would you like your password to include lowercase letters?`)
    var choiceMajuscule = confirm(`Would you like your password to include uppercase letters?`)
    var choiceNumber = confirm(`Would you like your password to include numbers?`)
    var choiceSpecial = confirm(`Would you like your password to contain special characters?`)
    console.log(`Length`, choiceLength, `Lower`, choiceMiniscule, `Upper`, choiceMajuscule, `Numbers`, choiceNumber, `Special`, choiceSpecial)
    // console.log(`Length`,choiceLength)
    // console.log(`Lower`,choiceMiniscule)
    // console.log(`Upper`,choiceMajuscule)
    // console.log(`Numbers`,choiceNumber)
    // console.log(`Special`,choiceSpecial)
    var choiceComposition = [];
    console.log("Composition of Choice Begun")
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
    console.log(choiceComposition)
    console.log("Generation Begun")
    var generatedPassword = ("")
    var generatedFinal = ("")
        for (i = 0; i < choiceLength; i++) {
        var generatedChar = Math.floor(Math.random() * choiceComposition.length)
        var generatedPassword = choiceComposition[generatedChar]
        var generatedFinal = generatedFinal.concat(generatedPassword)
    }
    console.log(generatedFinal)
    var passEl = document.getElementById("generatedFinal")

    passEl.textContent = generatedFinal

    // terminating flush of array, doesn't actually work
    // isn't actually needed when it's defined inside this function and not globally.
    // var choiceComposition = [];
}



// function pComposition() {
//     console.log("Composition of Choice Begun")
//     miniscule.length

//     var list = []
//     if (bool) {
//         list = list.concat(lowerCaseArr);
//         list = list.concat(upperCaseArr);

//     }

//     console.log(list)
// }

//compose sets of if for results of f(pSelection in this area. Don't use bool, use the vars within pSelection.

// function pGeneration() {
//     console.log("Generation Begun")

//     for (i = 0; i < composedLength; i++) {
//         generatedPassword
//     }

//     // for (i = 0; i<obj.list.length; i++){
//     //     example+= "a"
//     //     example+= Math.floor(Math.random() *choiceLength)
//     // }
//     // console.log(example)



// event listeners and invocations
buttonEl.addEventListener("click", pSelection)

//       var generatePassword



//     // Timers and intervals // ---------------------------------------
//     var count = 5;
//     var interval = setInterval(function () {
//         count--;
//         console.log(Math.floor(count / 60) + ":" + (count % 60))

//         if (count <= 0) {
//             clearInterval(interval)
//             console.log("ding!")
//         }
//     }, 1000)

// // console.log(Date.now())