//reescrever metodo map

Array.prototype.map2 = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        //newArray[i] = callback(this[i], i, this);
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};

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
    .map2(toJson) //transforma em json
    .map2(getPreco); //mapeia para o valor preco do obj

console.log(precos);