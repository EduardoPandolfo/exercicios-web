//coleção dinâmica de pares chave/valor

const produto = new Object;

produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generico';
produto.preco = 200;

console.log(produto);

delete produto.preco;

console.log(produto);
delete produto['marca do produto'];

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19

        },
        {
            nome: 'Ana',
            idade: 19
        }
    ],
    calculaValorSeguro: function() {
        // ...
    }
}

console.log(carro);

carro.calculaValorSeguro();

carro.proprietario.endereco.numero = 213;
carro['proprietario']['endereco']['logradouro'] = 'Avenida Alterada';

console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaValorSeguro;

console.log(carro);
console.log(carro.proprietario);
console.log(carro.condutores);
//console.log(carro.condutores.length); //TypeError: Cannot read properties of undefined (reading 'length')

