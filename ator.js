// variaveis ator
let xAtor = 60;
let yAtor = 460;
let colisao = false;
let meusPontos = 2;
let gameOverMSG = 'GAME OVER!!!! TENTE DE NOVO!!! PRESSIONE F5';
let winGame = "VOCÊ GANHOU!!! PRESSIONE F5";
let meuNivel = 1;

document.querySelector('.jogo').addEventListener('click', iniciar())

function mostraAtor() {

  image(imagemAtor, xAtor, yAtor, 40, 40);

}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMoverY()) {
      yAtor += 3;
    }
  }


  if (keyIsDown(RIGHT_ARROW)) {
    if (xAtor <= 668) {
      xAtor += 3;

    } else {
      console.log(xAtor)
      return

    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (xAtor >= 1) {
      xAtor -= 3;
    } else {
      console.log(xAtor)
      return
    }
  }
}

function verificaColisao() {
  //hit = collideRectCircle(x1, y1, width, heigth, X2, Y2, raio);
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao) {
      colidiu();
    }
  }
}

function colidiu() {
  voltaAtorParaPosicaoInicial();
  if (meusPontos > 0) {
    meusPontos -= 1;
    colidiuSom.play();
    console.log("colidiu")
  }
}

function incluiPontos() {
  fill(255, 240, 0);
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 3, 28);

}

function marcaPonto() {
  if (yAtor < 15) {
    meusPontos += 1;
    voltaAtorParaPosicaoInicial();
    pontosSom.play();
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 466;
  xAtor = 60;
}

function gameOver() {
  if (meusPontos == 0) {
    fill(255, 0, 0);
    text(gameOverMSG, 350, 180);
    textSize(50);
    velocidadeCarros = [0, 0, 0, 0, 0, 0];
    trilhaSom.loop(0, 1, 0.0);
    trilhaNivel3.loop(0, 1, 0.0);
    objeto.reload(forcedReload); 
  }
}

function podeSeMoverY() {
  return yAtor < 466;

}

function podeSeMoverX() {
  if (xAtor >= 1) {
    return
  }
  if (xAtor <= 700) {
    return
  }
}

function iniciar() {
  velocidadeCarros = [6, 2, 4, 3.5, 5, 3];
  xCarros = [800, 800, 800, 800, 800, 800];
  trilhaSom.loop(0, 1, 0.2);
  meusPontos = 2;
  
}

function incluiNivel() {
  fill(255, 0, 0);
  textAlign(CENTER);
  textSize(25);
  text(meuNivel, width / 1.3, 28);

}

function proxNivel() {
  if (meusPontos > 4 && meuNivel < 2) {
    nivel2();
    meuNivel++;
    meusPontos = 2;
    proxNivel2 ();
  } 
}

function proxNivel2 () {
  if (meuNivel >= 2 && meusPontos > 4) {
    meuNivel +=1;
    meusPontos = 2;
    if(meuNivel === 3){
      nivel3();     
    }  
  } 
  
}

function venceuGame() {
  if (meuNivel > 3) {
    velocidadeCarros = [0, 0, 0, 0, 0, 0];
    trilhaNivel3.loop(0, 1, 0.0);
    yAtor = 460;
    fill(255, 0, 0);
    text(winGame, 350, 250);
    textSize(50);
    objeto.reload(forcedReload); 
  } 
}
// ARRUMAR MENSAGEM DE winGame
 
