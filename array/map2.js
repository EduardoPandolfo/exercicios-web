const carrinho = [
    '{ "nome": "Borracha", "preco": 2.50}',
    '{ "nome": "Caderno", "preco": 15.54}',
    '{ "nome": "Lapis", "preco": 2.50}',
    '{ "nome": "Caneta", "preco": 5}'
];

//Retornar um array apenas com os precos

const toJson = text => JSON.parse(text);
const getPreco = obj => obj.preco;

const precos = carrinho
                .map(toJson) //transforma em json
                .map(getPreco); //mapeia para o valor preco do obj

console.log(precos);