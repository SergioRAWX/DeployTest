let intentoDeUsuario = 0;
let numeroDeUsuario = 0;
let numeroMaximo = 3;
let intentos = 1;
let numeroSecreto;
let numerosSorteados = [];

mensajesIniciales();

function asignarTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    numeroSecreto = Math.floor((Math.random()*numeroMaximo)+1);
    //console.log(numeroSecreto);

    if(numerosSorteados.length==numeroMaximo){
        asignarTexto('p', "Ya se sortearon todos los numeros posibles.");
        return;  
    }else{
        if(numerosSorteados.includes(numeroSecreto)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroSecreto);
            console.log(numerosSorteados);
            console.log(numeroSecreto);
            return numeroSecreto;
        }
    }
}

function mensajesIniciales(){
    asignarTexto('h1', "ADIVINA EL NUMERO");
    asignarTexto('p', `Inserta un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function clickButton(){
    intentoDeUsuario = parseInt(document.getElementById("datoUsuario").value);
    console.log(`Lectura > ${typeof(intentoDeUsuario)}  ${intentoDeUsuario}`);

    if(intentoDeUsuario==numeroSecreto){
        asignarTexto('p', `Felicidades, haz acertado en ${intentos} ${(intentos==1) ? "vez" : "veces"}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(intentoDeUsuario > numeroSecreto){
            asignarTexto('p', "El numero es menor.");
        }else{
            asignarTexto('p', "El numero es mayor.");
        }
    }

    intentos++;
    limpiarCaja();
    return;
}

function resetgame(){
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mensajesIniciales();
    limpiarCaja();
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#datoUsuario');
    valorCaja.value = '';
} 

/*function multiplicador(){
    numeroDeUsuario = parseInt(document.getElementById("datoUsuario").value);
    return console.log(numeroDeUsuario*2)
}*/



