const filhas = ['Filha 1', 'Filha 2'];
const filhos = ['Filho 1', 'Filho2'];

const todos = filhas.concat(filhos, 'Adicional 1');

console.log(todos, filhas, filhos);

console.log([].concat([1,2], [3,4], 5, [[6,7]]));