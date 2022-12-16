const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');


function lampOn () {
    if ( !lampQuebrada () ){
    lamp.src = './imagens/ligada.jpg';
    }
}

function lampOff () {
    if ( !lampQuebrada () ){
    lamp.src = './imagens/desligada.jpg';
    }
}

function lampQuebra () {
    lamp.src = './imagens/quebrada.jpg';
}

function lampQuebrada () {
    return lamp.src.indexOf ('quebrada') > -1 
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampQuebra);