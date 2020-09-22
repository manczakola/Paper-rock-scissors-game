//Variables

const btnPapier = document.querySelector('.papier');
const btnKamien = document.querySelector('.kamien');
const btnNozyce = document.querySelector('.nozyce');
const round = document.querySelector('.round');
const square = document.querySelector('.square');
const squareTwo = document.querySelector('.squareTwo');
let runda = 1;
round.textContent = 'Runda: ' + runda;
const yourChoice = document.querySelector('.yourChoice');
const computerChoice = document.querySelector('computerChoice');
let myIndex = '';
const winner = document.querySelector('.winner');
let myResults = document.querySelector('.myResults');
let computerResults = document.querySelector('.computerResults');
let index = Math.floor(Math.random() * 3);
myResult = 0;
computerResult = 0;

computerResults.textContent = `Wynik komputera: ${computerResult}`;
myResults.textContent = `Twój wynik: ${myResult}`;




//Events

btnPapier.addEventListener('click', () => {
    myIndex = 0;
    index = Math.floor(Math.random() * 3);
    square.classList.remove('square');
    square.innerHTML =
        '<img src="papier.jpg" style = "width: 12vw; margin:0px; border:solid 1px black"></img>';

    squareTwo.innerHTML = "<div class='squareTwo'></div>";
    squareTwo.classList.add('squareTwo');
    window.setTimeout("indexFunction()", 200);

    round.textContent = 'Runda: ' + runda++;
    whoWin();
    computerResults.textContent = `Wynik komputera: ${computerResult}`;
    myResults.textContent = `Twój wynik: ${myResult}`;




});

btnKamien.addEventListener('click', () => {
    myIndex = 1;
    index = Math.floor(Math.random() * 3);
    square.classList.remove('square');
    square.innerHTML =
        '<img src="kamien.webp" style = "width: 12vw; margin:0px; border:solid 1px black"></img>';

    squareTwo.innerHTML = "<div class='squareTwo'></div>";
    squareTwo.classList.add('squareTwo');
    window.setTimeout("indexFunction()", 200);
    round.textContent = 'Runda: ' + runda++;
    whoWin();
    computerResults.textContent = `Wynik komputera: ${computerResult}`;
    myResults.textContent = `Twój wynik: ${myResult}`;





})

btnNozyce.addEventListener('click', () => {

    myIndex = 2;
    index = Math.floor(Math.random() * 3);
    square.classList.remove('square');
    square.innerHTML =
        '<img src="nozyce.jpg" style = "width: 12vw; margin:0px; border:solid 1px black"></img>';

    squareTwo.innerHTML = "<div class='squareTwo'></div>";
    squareTwo.classList.add('squareTwo');
    window.setTimeout("indexFunction()", 200);

    round.textContent = 'Runda: ' + runda++;
    whoWin();
    computerResults.textContent = `Wynik komputera: ${computerResult}`;
    myResults.textContent = `Twój wynik: ${myResult}`;




});

//Functions

const indexFunction = () => {

    console.log(index)
    if (index === 0) {
        squareTwo.classList.remove('squareTwo');
        squareTwo.innerHTML =
            '<img src="papier.jpg" style = "width: 12vw; margin:0px; border:solid 1px black"></img>';

    } else if (index === 1) {
        squareTwo.classList.remove('squareTwo');
        squareTwo.innerHTML =
            '<img src="kamien.webp" style = "width: 12vw; margin:0px; border:solid 1px black"></img>';

    } else if (index === 2) {
        squareTwo.classList.remove('squareTwo');
        squareTwo.innerHTML =
            '<img src="nozyce.jpg" style = "width: 12vw; margin:0px; border:solid 1px black"></img>';
    }
}

const whoWin = () => {
    if (myIndex === 0 && index === 0) {
        winner.textContent = 'Remis';
        myResult++;
        computerResult++;
    } else if (myIndex === 0 && index === 1) {
        winner.textContent = 'Wygrałeś!';
        myResult++;
    } else if (myIndex === 0 && index === 2) {
        winner.textContent = 'Komputer wygrał !';
        computerResult++;
    } else if (myIndex === 1 && index === 0) {
        winner.textContent = 'Komputer wygrał !';
        computerResult++;
    } else if (myIndex === 1 && index === 1) {
        winner.textContent = 'Remis';
        myResult++;
        computerResult++;
    } else if (myIndex === 1 && index === 2) {
        winner.textContent = 'Wygrałeś!';
        myResult++;
    } else if (myIndex === 2 && index === 0) {
        winner.textContent = 'Wygrałeś!';
        myResult++;
    } else if (myIndex === 2 && index === 1) {
        winner.textContent = 'Komputer wygrał !';
        computerResult++;
    } else if (myIndex === 2 && index === 2) {
        winner.textContent = 'Remis';
        computerResult++;
        myResult++;
    }
}