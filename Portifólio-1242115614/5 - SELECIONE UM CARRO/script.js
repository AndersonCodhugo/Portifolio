const redBut = document.getElementById('vermelho');
const whiteBut = document.getElementById('branco');
const redCar = document.getElementById('red');
const whiteCar = document.getElementById('white');
const nav = document.querySelector('nav');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const body = document.querySelector('body');
const resetar = document.getElementById('resetar');
const result = document.getElementById('result');

redCar.style.cursor = 'pointer';
whiteCar.style.cursor = 'pointer';


resetar.style.display = 'block';
resetar.style.backgroundColor = 'blue';
resetar.addEventListener('click', () => {
    location.reload();
});


redBut.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    h1.style.color = 'yellow';
    p.style.color = 'yellow';
    result.style.color = 'yellow';
    document.getElementById("result").innerHTML = "Vermelho";
});

whiteBut.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    h1.style.color = 'black';
    p.style.color = 'black';
    result.style.color = 'black';
    document.getElementById("result").innerHTML = "Branco";
});

redCar.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
    h1.style.color = 'yellow';
    p.style.color = 'yellow';
    result.style.color = 'yellow';
    document.getElementById("result").innerHTML = "Vermelho";
});

whiteCar.addEventListener('click', () => {
    document.body.style.backgroundColor = 'white';
    h1.style.color = 'black';
    p.style.color = 'black';
    result.style.color = 'black';
    document.getElementById("result").innerHTML = "Branco";
});

    