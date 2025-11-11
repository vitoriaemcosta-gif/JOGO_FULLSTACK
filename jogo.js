var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

function imagem(url, x, y) {
  var img = new Image();
  img.src = url;
  img.onload = function () {
    ctx.drawImage(img, x, y, 200, 240);
  };
  return img;
}

// Chamando a função para cada imagem com sua posição
var caixa_vermelho = imagem('imagens/4.png', 50, 250);
var caixa_azul = imagem('imagens/1.png', 155, 222);
var caixa_amarelo = imagem('imagens/3.png', 270, 161);
var caixa_verde = imagem('imagens/2.png', 385, 130);




function imagem2(url, x, y) {
  var img2 = new Image();
  img2.src = url;
  img2.onload = function () {
    ctx.drawImage(img2, x, y, 590, 500);
  };
  return img2;
}

// Chamando a função para cada imagem com sua posição
var esteira = imagem2('imagens/esteira1.png', 190, 212);



