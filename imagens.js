//imagens do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
//sons do jogo
let trilhaSom;
let pontosSom;
let colidiuSom;
let trilhaNivel3;
//setas mobile
let setaCima;
let setaBaixo;
let setaDireita;
let setaEsquerda;



//funcoes para carregar as imagens

function preload() {
  imagemEstrada = loadImage("img/estrada.png");
  //imagemAtor = loadImage("img/gato.png");
  imagemAtor = loadImage("img/imagemGato.png");
  imagemCarro1 = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  imagemCarro4 = loadImage("img/carro-1.png");
  imagemCarro5 = loadImage("img/carro-2.png");
  imagemCarro6 = loadImage("img/carro-3.png");

  //carregamento sons do jogo
  trilhaSom = loadSound("sons/trilha.mp3");
  pontosSom = loadSound("sons/pontos.wav");
  colidiuSom = loadSound("sons/colidiu.mp3");
  trilhaNivel3 = loadSound("sons/Movie-2.mp3");

  //carregamento setas mobile
  setaCima = loadImage('img/setaCima.png')
  setaBaixo = loadImage('img/setaBaixo.png')
  setaEsquerda = loadImage('img/setaEsquerda.png')
  setaDireita = loadImage('img/setaDireita.png')

  imagensCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
}
