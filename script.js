const resultEL = document.getElementById('result')
const lengthEL = document.getElementById('length')
const uppercaseEL = document.getElementById('uppercase')
const lowercaseEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')


const randomFunc = {
    lower: getRandomLowercase,
    upper: getRandomUppercase,
    number: getRandomNumbers,
    symbols: getRandomSymbols
}

generateEL.addEventListener('click', () => {
    const length = +lengthEL.Value
    const hasLower = lowercaseEL.checked
    const hasUpper = uppercaseEL.checked;
    const hasNumer = numbersEL.checked;
    const hasSymbol = symbolsEL.checked;



    resultEL.innerText = generatePassword(hasLower , hasUpper, hasNumber, hasSymbol , length)

})

function generatePassword(lower,upper,number,symbol, length){
    let generatePassword = ''
    
    let typeCount = lower + upper + number +symbol

    console.log(typeCount)
}

//To generate lowercase letters you have to between 97 to 122 char-code
function getRandomLowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)

}

//To generate uppercase letters you have to between 65  to 90 char-code
function getRandomUppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)

}

//To generate Numbers you have to between 48 to 57 char-code
function getRandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}

function getRandomSymbols() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";

    return symbols[Math.floor(Math.random() * symbols.length)]
}



