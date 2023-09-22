// Função em JS é First-Class Object (Citizens)
// Higher-order function


//criação de forma literal - se não houver return sempre retorna undefined

function fun1() {

};

// Armazenar função em uma variavel - função anônima

const fun2 = function () {
};

// Armazenar em um array

const array = [
    fun1(),
    function fun3() {
    },
    function fun4(a, b) {
        return a + b
    }
];

console.log(array[2](2, 5)); // 7

//Armazenar em um atributo de objeto
const obj = {};

obj.falar = function() { return 'Opa'};

console.log(obj.falar());

//Passar função como param
function run(fun) {
    fun();
}

run(function () {
    console.log('Executando...');
});

// uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(2, 3)(4);

const cincoMais = soma(2,3);
cincoMais(4);



