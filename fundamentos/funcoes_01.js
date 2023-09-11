//Função sem retorno

function imprimirSoma(a , b) {
    console.log(a + b);
}


imprimirSoma(2,3);
imprimirSoma(3); //NaN
imprimirSoma(3,2, 2,3,45); // utiliza apenas os primeiros parametros
imprimirSoma();

//Função com retorno
function soma (a, b = 1) {
    return a + b;
}


console.log(soma(1,2));
console.log(soma(1));
console.log(soma()); //NaN