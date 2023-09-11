const prod1 = {};

//objeto é uma coleçao de pares de chave/valor

prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.87
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço 

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            novoCampo: 'teste'
        }
    }
};

console.log(prod2); 