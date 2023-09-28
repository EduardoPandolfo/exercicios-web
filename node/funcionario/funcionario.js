const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');


//Desafio - selecionar a mulher chinesa com o menor salário

//const toJson = (text) => JSON.parse(text);
const filterPaisChina = registro => registro.pais === 'China';
const filterGeneroFemenino = (registro) => registro.genero === 'F';
const menorSalario = (funcionario, funcionarioAtual) => funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;

axios.get(url).then(response => {
    const funcionarios = response.data;
    //console.log(funcionarios);
    console.log(funcionarios.filter(filterPaisChina).filter(filterGeneroFemenino).reduce(menorSalario));
});