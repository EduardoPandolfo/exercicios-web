//let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}

console.log(a); // var não tem escopo de bloco
// console.log(b); // erro

//template String
const produto = 'iPad';
console.log(`${produto} é caro!`);

//Destructuring
const [l,e, ...tras] = "Cod3r";
console.log(l, e, tras);

const [x, y] = [1, 2, 3];
console.log(x, y);

const{nome:i, idade} = {nome: 'Ana', idade: 9};
console.log(i, idade);