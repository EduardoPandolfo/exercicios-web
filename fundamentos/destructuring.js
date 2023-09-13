//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};


const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { sobrenome, bemHumorada: b = true } = pessoa;
console.log(sobrenome, b); //undefined true

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, numero, cep); //Rua ABC 1000 undefined

/*
/home/ekp/Documentos/exercicios-web/fundamentos/destructuring.js:25
const { conta: { ag, num } } = pessoa;
                 ^

TypeError: Cannot read properties of undefined (reading 'ag')

const { conta: { ag, num } } = pessoa;
console.log(ag, num);
*/
