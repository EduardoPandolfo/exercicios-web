const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
];

///Desafio 1: todos os alunos são bolsistas ?
///Desafio 2: algum aluno é bolsista?

const mapBolsista = e => e.bolsista;
const todosAlunosBolsistas = (acumulador, atual) => acumulador && atual;
const algumAlunoBolsista = (acumulador, atual) => acumulador || atual;

console.log('Todos alunos são bolsistas? ', alunos.map(mapBolsista).reduce(todosAlunosBolsistas));
console.log('Algum aluno é bolsista? ', alunos.map(mapBolsista).reduce(algumAlunoBolsista));