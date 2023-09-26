const nums = [1, 2, 3, 4, 5];

//for com propósito
let resultado = nums.map(function (value) {
    return value * 2;
});

console.log(resultado, nums);

const soma10 = v => v + 10;
const triplo = v => v * 3;
const paraDinheiro = v => `R$ ${parseFloat(v).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);