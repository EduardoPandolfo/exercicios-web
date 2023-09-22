//estrategia 1 para gerar valor padrão
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log(soma());
console.log(soma(2));
console.log(soma(2, 2));
console.log(soma(2, 2, 2));
console.log(soma(0, 0, 0)); // zero retorna falso -> retorno da função = 3


//estrategia 2, 3 e 4 para gerar valor padrão - utilização de ternárias
function soma2(a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // caso a i = 0, caso c i = 2
    c = isNaN(c) ? 1 : c; // mais segura

    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//valor padrão do es2015 - mais atual
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));

