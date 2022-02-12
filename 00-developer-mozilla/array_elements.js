var arr = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]);              // exibe 'este é o primeiro elemento'
console.log(arr[1]);              // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe 'este é o segundo elemento'


var anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010]; 
console.log(anos[0]); // funciona corretamente
 

console.log(anos['2'] != anos['02']); // retorna True or False


// Relação entre length e propriedades numéricas
var frutas = [];
frutas.push('banana', 'maça', 'pêssego');
console.log(frutas.length); // 3



frutas[5] = 'manga'; // Adiciono "manda" na posição 5
console.log(frutas[5]); // 'manga' 
console.log(Object.keys(frutas)); // ['0', '1', '2', '5']
console.log(frutas.length); // 6

// Criando um array usando o resultado de uma comparação

// Encontra um d seguido por um ou mais b's seguido por um d
// Salva os b's encontrados e o d seguinte
// Ignora caixa (maiúscula/minúscula)

var minhaRegex = /d(b+)(d)/i;
var meuArray = minhaRegex.exec('cdbBdbsbz');
console.log(meuArray) // [ 'dbBd', 'bB', 'd', index: 1, input: 'cdbBdbsbz', groups: undefined ]


