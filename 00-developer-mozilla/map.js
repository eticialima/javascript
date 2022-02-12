const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// expected output: 97

console.log(map1.size);
// expected output: 3

map1.delete('b');

console.log(map1.size);
// expected output: 2



// Iterando o Map com for..of
const myMap = new Map()
myMap.set(0, 'zero')
myMap.set(1, 'one')

for (const [key, value] of myMap) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = um

for (const key of myMap.keys()) {
    console.log(key)
}
// 0
// 1

for (const value of myMap.values()) {
    console.log(value)
}
// zero
// one

for (const [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value)
}
// 0 = zero
// 1 = one


// Iterando o Map com forEach()
myMap.forEach(function (value, key) {
    console.log(key + ' = ' + value)
})
// 0 = zero
// 1 = um



// Relação com Arrays
const kvArray = [['key1', 'value1'], ['key2', 'value2']]

// Use o construtor padrão do Map para transformar um array 2D chave-valor em um map
const myMap = new Map(kvArray)

myMap.get('key1') // retorna "value1"

// Use o Array.from() para transformar um map em um Array bidimensional de chaves e valores
console.log(Array.from(myMap)) // Irá exibir para você o mesmo Array como um Array chave-valor

// Uma forma sucinta de fazer o mesmo, utilizando a sintaxe spread
console.log([...myMap])

// Ou use os iteradores keys() ou values(), e os converta para um array
console.log(Array.from(myMap.keys())) // ["key1", "key2"]


// Clonando e mesclando Maps
const original = new Map([
    [1, 'um']
])
const clone = new Map(original)
console.log(clone.get(1))       // um
console.log(original === clone) // false (Útil para comparações superficiais)


