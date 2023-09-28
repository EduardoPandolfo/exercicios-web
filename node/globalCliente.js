require('./global');

console.log(MinhaApp.saudacao(), MinhaApp.nome);

MinhaApp.nome = 'Eita'; //freeze

console.log(MinhaApp.nome);