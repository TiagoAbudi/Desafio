window.addEventListener('load', () => {
  iniciaCampos();
  setaCorComABarra();
});

var rangeVermelho = null;
var rangeVerde = null;
var rangeAzul = null;

var campoVermelho = null;
var campoVerde = null;
var campoAzul = null;

var corVermelho = null;
var corVerde = null;
var corAzul = null;

var quadradoDaCor;

var r = '0';
var g = '0';
var b = '0';

function iniciaCampos() {
  rangeVermelho = document.querySelector('#rangeVermelho');
  rangeVerde = document.querySelector('#rangeVerde');
  rangeAzul = document.querySelector('#rangeAzul');
  campoVermelho = document.querySelector('#campoVermelho');
  campoVerde = document.querySelector('#campoVerde');
  campoAzul = document.querySelector('#campoAzul');
  corVermelho = document.querySelector('#corVermelho');
  corVerde = document.querySelector('#corVerde');
  corAzul = document.querySelector('#corAzul');
  quadradoDaCor = document.querySelector('#quadradoDaCor');
}

function setaCorComABarra() {
  rangeVermelho.addEventListener('change', mudancaNaBarra);
  rangeVerde.addEventListener('change', mudancaNaBarra);
  rangeAzul.addEventListener('change', mudancaNaBarra);
}

function mudancaNaBarra(event) {
  const value = event.target.value;
  const id = event.target.id;
  switch (id) {
    case 'rangeVermelho':
      r = value;
      break;
    case 'rangeVerde':
      g = value;
      break;
    case 'rangeAzul':
      b = value;
      break;
  }
  alteraCor();
}

function alteraCor() {
  quadradoDaCor.style.backgroundColor = `rgb(${r},${g},${b})`;
  corVermelho.style.color = `rgb(${r}, 0, 0)`;
  corVerde.style.color = `rgb(0, ${g}, 0)`;
  corAzul.style.color = `rgb(0, 0, ${b})`;
  campoVermelho.value = r;
  campoVerde.value = g;
  campoAzul.value = b;
}
