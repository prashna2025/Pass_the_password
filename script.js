const resultEL = document.getElementById('result')
const lengthEL = document.getElementById('length')
const uppercaseEL = document.getElementById('uppercase')
const lowercaseEL = document.getElementById('lowercase')
const numberEL = document.getElementById('number')
const symbolEL = document.getElementById('symbol')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')


const randomFunc= {
    lower : getRandomLowercase,
    upper : getRandomUppercase,
    number : getRandomNumbers,
    symbol : getRandomSymbols
}

generateEL.addEventListener('click', () => {
    const length = +lengthEL.value
    const hasLower = lowercaseEL.checked
    const hasUpper = uppercaseEL.checked;
    const hasNumber = numberEL.checked;
    const hasSymbol = symbolEL.checked;



    resultEL.innerText = generatePassword(hasLower , hasUpper, hasNumber, hasSymbol , length)

})

function generatePassword(lower,upper,number,symbol, length){
    let generatedPassword = ''
    
    let typeCount = lower + upper + number +symbol

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter((item)=>{
        return Object.values(item)[0]
    })



    if(typeCount===0){
        return "";

    }

    for(let i=0; i<length ; i+=typeCount){
        typesArr.forEach((type)=>{
            const keyFromRandomFun = Object.keys(type)[0]
            generatedPassword += randomFunc[keyFromRandomFun]()
        })
    }

    const finalPassword = generatedPassword.slice(0 ,length)

    return finalPassword

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



