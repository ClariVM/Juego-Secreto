let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMax = 10

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    document.getElementById("reiniciar").removeAttribute("disabled")

    if (numeroDeUsuario === numeroSecreto) {
        asignarTexto("p", `Acertaste en ${intentos} ${(intentos ==1) ? "intento" : "intentos"}  `)        
    }else{
        if(numeroDeUsuario >numeroSecreto){
            asignarTexto("p", "El número secreto es menor")
        }else{
            asignarTexto("p", "El número secreto es mayor")
        }
        intentos++
        limpiarCaja();
    }
}
function condicionesIniciales(){
    asignarTexto('h1', 'Juego del número secreto');
    asignarTexto('p', `Indica un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMax)+1;

    if(listaNumerosSorteados.length == numeroMax){
            asignarTexto('p', 'Ya se sortearon todos los números posibles');
        }else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
} 
}
function reiniciarJuego(){
    limpiarCaja()
    condicionesIniciales()
    document.getElementById("reiniciar").setAttribute("disabled",true)
}

condicionesIniciales()






