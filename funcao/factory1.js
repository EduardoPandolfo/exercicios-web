/*

Criação de objetos

const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 34
}
*/

//factory simples
function criarProduto() {
    return {
        nome: 'Produto factory simples',
        preco: 35
    };
}

console.log(criarProduto());