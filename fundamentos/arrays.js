const valores = [7.7, 3.4, 5, 9.2];

console.log(valores[0], valores[3]);

console.log(valores[99]); //indice que não existe, valor undefined

valores[10] = 11;

console.log(valores);

console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // remoção

delete valores[0];

console.log(typeof valores);

console.log(valores);