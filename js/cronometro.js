let minutos = 0;
let segundos = 0;
let milisegundos = 0;

const minutosHTML = document.getElementById("minutos");
const segundosHTML = document.getElementById("segundos");
const milisegundosHTML = document.getElementById("milisegundos");

const botonIniciar = document.getElementById("botonIniciar")
const botonPausar = document.getElementById("botonPausar")
const botonReiniciar = document.getElementById("botonReiniciar")

let cronometro;

botonIniciar.addEventListener("click",() => {cronometro = setInterval(actualizarCronometro, 10); botonIniciar.classList.add("disabled")})
botonPausar.addEventListener("click",() => {clearInterval(cronometro); botonIniciar.classList.remove("disabled")})
botonReiniciar.addEventListener("click",resetearCronometro)


function actualizarCronometro() 
{
    milisegundos++;

    if (milisegundos >= 100) {
        segundos++;
        milisegundos = 0;
    }
    if (segundos >= 60) {
        minutos++;
        segundos = 0;
    }

    milisegundosHTML.innerText = milisegundos.toString().padStart(2, '0');
    segundosHTML.innerText = segundos.toString().padStart(2, '0');
    minutosHTML.innerText = minutos.toString().padStart(2, '0');
}

function resetearCronometro()
{
    botonIniciar.classList.remove("disabled")
    clearInterval(cronometro)

    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    milisegundosHTML.innerText = milisegundos.toString().padStart(2, '0');
    segundosHTML.innerText = segundos.toString().padStart(2, '0');
    minutosHTML.innerText = minutos.toString().padStart(2, '0');
}

