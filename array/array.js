/*
console.log(
  typeof Array,
  typeof ['', ''],
  typeof new Array
);*/

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // se não pertence retorna undefined

aprovados[3] = 'Paulo'; //insere ou atualiza o valor
aprovados.push('Abia'); //insere
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); //reordena o array
console.log(aprovados); //vazios ficam no final

//exclusão
delete aprovados[1];
console.log(aprovados[1]); //undefined

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1,1);//inicio e quantidade de exclusão após o índice
console.log(aprovados); //removido carlos

