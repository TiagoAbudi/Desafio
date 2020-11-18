window.addEventListener('load', () => {
  iniciaCampos();
  setaCorComABarra();
});

var rangeVermelho, rangeVerde, rangeAzul;

var campoVermelho, campoVerde, campoAzul;
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
  quadradoDaCor = document.querySelector('div');
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
  quadradoDaCor.style.backgroudColor = `rgb(${r},${g},${b})`;
  campoVermelho.value = r;
  campoVerde.value = g;
  campoAzul.value = b;
}