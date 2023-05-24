// variaveis ator
let xAtor = 60;
let yAtor = 460;
let colisao = false;
let meusPontos = 2;
let gameOverMSG = `GAME OVER!!!! TENTE DE NOVO!!! 
PARA TENTAR NOVAMENTE PRESSIONE F5`;
let winGame = `VOCÊ GANHOU!!! 
PARA TENTAR NOVAMENTE PRESSIONE F5`;
let meuNivel = 1;

//document.querySelector('.jogo').addEventListener('click', iniciar())




function mostraAtor() {

  image(imagemAtor, xAtor, yAtor, 30, 30);

}

// function mostraSetas() {
//   image(setaCima, 580, 400, 30, 30);
//   image(setaBaixo, 580, 460, 30, 30);
//   image(setaDireita, 620, 430, 30, 30);
//   image(setaEsquerda, 540, 430, 30, 30);
// }

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
  //hit = collideRectRect(200, 200, 100, 150, mouseX, mouseY, 50, 75);
  for (let i = 0; i < imagensCarros.length; i++) {
    colisao = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 30, 30)
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
  } else if (meuNivel >= 2 && meusPontos > 4) {
    meuNivel++;
    meusPontos = 2;
    if (meuNivel === 3) {
      nivel3();
    }
  }
}

function resultadoJogo() {
  if (meusPontos == 0) {
    exibirMensagem(gameOverMSG);
    console.log('perdeu');
    noLoop();
    
    
  } else if (meuNivel == 4 && meusPontos == 2) {
    exibirMensagem(winGame);
    console.log('ganhou');
    noLoop();
    
  }
}
function exibirMensagem(mensagem) {
  velocidadeCarros = [0, 0, 0, 0, 0, 0];
  trilhaSom.loop(0, 1, 0.0);
  trilhaNivel3.loop(0, 1, 0.0);
  fill(255, 0, 0);
  text(mensagem, 350, 180);
  textSize(50);
}
