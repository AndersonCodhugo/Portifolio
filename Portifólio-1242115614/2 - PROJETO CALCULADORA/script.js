const Tela = document.getElementById('display')

function numOne(){
    document.getElementById('display').innerHTML += "1"
}

function numTwo(){
    document.getElementById('display').innerHTML += "2"
}

function numThree(){
    document.getElementById('display').innerHTML += "3"
}
function numFour(){
    document.getElementById('display').innerHTML += "4"
}

function numFive(){
    document.getElementById('display').innerHTML += "5"
}

function numSix(){
    document.getElementById('display').innerHTML += "6"
}
function numSeven(){
    document.getElementById('display').innerHTML += "7"
}

function numEight(){
    document.getElementById('display').innerHTML += "8"
}

function numNine(){
    document.getElementById('display').innerHTML += "9"
}

function numZero(){
    document.getElementById('display').innerHTML += "0"
}

function clear1(){
    document.getElementById('display').innerHTML = ""
}
function clear2(){
    document.getElementById('display').innerHTML = "0"
}

function plus(){
    document.getElementById('display').innerHTML += "+"
}

function less(){
    document.getElementById('display').innerHTML += "-"
}

function multi(){
    document.getElementById('display').innerHTML += "*"
}

function divide(){
    document.getElementById('display').innerHTML += "/"
}

function decimal(){
    document.getElementById('display').innerHTML += "."
}



function resultado() {
    const expressao = document.getElementById('display').innerHTML;

        const resultado = eval(expressao);

        document.getElementById('display').innerHTML = resultado;
}

function back() {
    const display = document.getElementById('display');
    display.innerHTML = display.innerHTML.slice(0, -1);
}
