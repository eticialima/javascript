//new Date();
//new Date(valor);
//new Date(dataString);
//new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

// Várias formas de se criar um objeto Date
var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);

// Anos com dois dígitos mapeados para 1900 - 1999
var data = new Date(98, 1); // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)
// Métodos em desuso, 98 mapeia para 1998 aqui também
data.setYear(98);           // Dom Fev 01 1998 00:00:00 GMT+0000 (GMT)
data.setFullYear(98);       // Sab Fev 01 0098 00:00:00 GMT+0000 (BST)


// Calculando o tempo decorrido 
var inicio = Date.now();

// o evento para o tempo vai aqui:
facaAlgoPorUmLongoTempo();
var fim = Date.now();
var decorrido = fim - inicio; // tempo decorrido em milisegundos


// utilizando métodos embutidos
var inicio = new Date(); 
// o evento para o tempo vai aqui:
facaAlgoPorUmLongoTempo();
var fim = new Date();
var decorrido = fim.getTime() - inicio.getTime(); // tempo decorrido em milisegundos


// para testar uma função e obter o seu retorno
function imprimirTempoDecorrido(fTeste) {
    var nHoraInicial = Date.now(),
        vRetorno = fTeste(),
        nHoraFinal = Date.now();

    alert("Tempo decorrido: " + String(nHoraFinal - nHoraInicial) + " milisegundos");
    return vRetorno;
}

retornoDaSuaFuncao = imprimirTempoDecorrido(suaFuncao);