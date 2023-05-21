let xCarros = [800, 800, 800, 800, 800, 800];
let yCarros = [63, 130, 198, 278, 340, 410];
let velocidadeCarros = [0, 0, 0, 0, 0, 0];
//let velocidadeCarros = [6, 1.7, 2.3, 3.5, 2.8, 2];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarros() {
    for (let i = 0; i < imagensCarros.length; i++) {
        image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);        
    }
}

function movimentaCarro() {

    for (let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro() {

    for (let i= 0; i < xCarros.length; i++) {
        if (passouTodaATela(xCarros[i])) {
            xCarros[i] = 800;
        }
    }
}

function passouTodaATela (xCarros) {
    return xCarros < -50;
}

function nivel2 () {
    velocidadeCarros = [6, 2, 4, 9, 2.8, 7];
}

function nivel3 () {
    velocidadeCarros = [7, 5, 4, 3, 9, 7];
    trilhaSom.loop(0, 1, 0.0);
    trilhaNivel3.loop(0, 1, 0.4);
}