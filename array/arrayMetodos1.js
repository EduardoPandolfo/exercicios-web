const pilotos = ['Wettel', 'Alonso', 'Raikkonen', 'Massa'];

const teste = pilotos.pop(); //último elemento removido
console.log(teste);


pilotos.push('Verstappen');
console.log(pilotos);

const teste1 = pilotos.shift(); // remove o primeiro
console.log(teste1);

pilotos.unshift('Hamilton'); //adiciona pelo ínicio
console.log(pilotos);

//slice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); //partindo do indice 2, adiciona os itens
console.log(pilotos);

//remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //cria novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4); //indice 1 até 3, não inclui o 4
console.log(algunsPilotos2);