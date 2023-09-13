function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
};

const obj = { max: 50, min: 40 };

console.log(rand(obj));

console.log(rand({min: 955}));

console.log(rand({}));

/*
function rand({ min = 0, max = 1000 }) {
                ^

TypeError: Cannot read properties of undefined (reading 'min')


console.log(rand());

*/