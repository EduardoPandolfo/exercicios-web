console.log(soma(3, 4));


//declaração de função
function soma(x, y) {
    return x + y;
}

//expressão de função
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3,4)); // não pode chamar no topo do arquivo, somente após ser declarada

//expressão de função nomeada
const mult = function multi(x, y) {
    return x * y;
}

console.log(mult(3,4)); // não pode chamar no topo do arquivo, somente após ser declarada