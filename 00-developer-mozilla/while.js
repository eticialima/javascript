var resultado = '';
var i = 0;
do {
    i += 1;
    resultado += i + ' ';
} while (i < 5);
document.getElementById('exemplo').innerHTML = resultado;