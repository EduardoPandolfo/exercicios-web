//operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

//usar spead com objeto
const funcionario = {nome: 'Maria', salario: 12348.00};
const clone = {ativo: true, ...funcionario};
console.log(clone);

//usar spread com array
const grupoA = ['Joao', 'Maria', 'Eduardo'];
const grupoB = ['Lais', 'Felipe', 'Bianca'];
console.log(['Felipe 2','Outro nome',  ...grupoA, 'divisão', ...grupoB]);



