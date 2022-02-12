var msgArray = new Array();
msgArray[0] = "Hello";
msgArray[99] = "world";

if (msgArray.length == 100)
    console.log("O length é 100.");


// Utilizando um array para tabular um conjunto de valores
values = []; 
for (var x = 0; x < 10; x++) {
    values.push([
        2 ** x,
        2 * x ** 2
    ])
};
console.table(values)


