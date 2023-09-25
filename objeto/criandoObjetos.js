//usando notação literal
const obj1 = {};
console.log(obj1);

//Objeto em JS
console.log(typeof Object, typeof new Object);

const obj2 = new Object;
console.log(obj2);

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    };
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2999.9, 1.23);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Ana', 14000, 2);

console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = 'Ana Filha';
console.log(filha);

//uma função famosa que retorna Objeto
const fromJson = JSON.parse('{"info": "Sou um JSON!"}');
console.log(fromJson.info);