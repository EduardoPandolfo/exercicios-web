const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: false},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.45, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
];

console.log(produtos.filter(function (p) {
    return false;
}));

const produtoCaro = prod => prod.preco >= 500;
const produtoFragil = prod => prod.fragil;
const produtoNaoFragil = prod => !prod.fragil;

console.log(produtos.filter(produtoCaro));
console.log(produtos.filter(produtoFragil));
console.log(produtos.filter(produtoCaro).filter(produtoNaoFragil));
