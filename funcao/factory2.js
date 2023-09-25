//factory com parametros - manipulando alguns valores para outros nomes se necessário
function criarProduto1(nome, preco, desconto = 0.10) {
    return {
        nome: nome,
        preco: preco,
        desconto: desconto,
        precoComDesconto: preco - (preco * desconto)
    };
}

console.log(criarProduto1('Teste nome1', 354));

//factory com parametros - refatorado se mantido mesmo nome dos parametros com os campos do objeto
function criarProduto2(nome, preco, desconto = 0.10) {
    return {
        nome,
        preco,
        desconto
    };
}

console.log(criarProduto2('Teste nome 2', 394, 0.25));