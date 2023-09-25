// pessoa -> 123 -> {...}
const pessoa = {
    nome: 'João'
}
pessoa.nome = 'Pedro';

console.log(pessoa);

// pessoa <- 456 -> {...}
//pessoa = { nome: 'Ana'};

Object.freeze(pessoa);

pessoa.nome = 'Maria'; // ignorado
pessoa.end = 'Nome'; // ignorado
delete pessoa.nome; // ignorado

console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'Joao'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);