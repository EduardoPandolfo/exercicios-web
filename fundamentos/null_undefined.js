let valor; //não inicializada

console.log(valor); //undefined

valor = null; //ausência de valor

console.log(valor); 

//console.log(valor.toString()); //não pode ler propriedade de variável nula
/*
TypeError: Cannot read properties of null
*/

const product = {};

console.log(product.preco); //undefined
console.log(product);

product.preco = 3.50;

console.log(product);

product.preco = undefined; //evitar atribuir undefined

console.log(product);

console.log(!!product.preco);

console.log(product);