let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
    if (numeroDeUsuario===numeroSecreto)  {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = '';
    
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //si ya sorteamos todos los numeros.
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else {
    //Si el numero generado esta incluido en la lista.
    if(listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else{
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Genenrar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshanilitar el boton de Nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}


condicionesIniciales();
