let dobro = function (a) {
    return 2 * a;
}

//function arrow
dobro = (a) => {
    return 2 * a;
};

// retorno implicito
dobro = a => 2 * a;

console.log(dobro(Math.PI));

let ola = function () {
    return 'Olá';
};
console.log(ola());

ola = () => 'Olá';
console.log(ola());

ola = _ => 'Olá'; //possuí um param

console.log(ola());

