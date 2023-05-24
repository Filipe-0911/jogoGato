function setup() {
  createCanvas(700, 500);
  
}
function draw() {
  background(imagemEstrada);
  //mostraSetas();
  mostraAtor ();
  mostraCarros();
  movimentaAtor();
  movimentaCarro();
  voltaPosicaoInicialDoCarro ();
  verificaColisao ();
  incluiPontos ();
  marcaPonto();
  proxNivel();
  incluiNivel();
  resultadoJogo ();
}